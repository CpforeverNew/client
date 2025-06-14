import BaseContainer from '@scenes/base/BaseContainer'

import ItemLoader from './loader/ItemLoader'
import PathEngine from './pathfinding/PathEngine'
import PenguinItems from './PenguinItems'


export default class Penguin extends BaseContainer {

    constructor(user, room, penguinLoader) {
        super(room, user.x, user.y)

        // Assign user attributes
        Object.assign(this, user)
        this.user = user
        this.room = room
        this.penguinLoader = penguinLoader

        this.items = new PenguinItems(this)
        this.itemLoader = new ItemLoader(this)
        this.bodySprite

        PathEngine.setStartPos(this)
        this.depth = this.y
        this.tween
        this.direction

        this.nameTag = penguinLoader.addName(this)

        // Active balloon
        this.balloon

        this.balloonTimer
        this.textBalloon
        this.emoteBalloon

        this.on('destroy', () => this.onDestroy())
        this.isButton = true

        // Function that is called after move completes, used to set a frame after move etc
        this.afterMove

        this.load()
    }

    get isTweening() {
        return (this.tween) ? true : false
    }

    get pos() {
        return { x: this.x, y: this.y }
    }

    get playerCard() {
        return this.interface.main.playerCard
    }

    get paperDollLoader() {
        return this.playerCard.paperDoll.paperDollLoader
    }

    /**
     * this.body is a Phaser property and will result in an error on destruction,
     * so it must be deleted manually first.
     */
    onDestroy() {
        delete this.body
    }

    load() {
        this.penguinLoader.loadPenguin(this)
        this.itemLoader.loadItems()

        this.room.add.existing(this)
    }

    update(item, slot) {
        this.items.setItem(item, slot)

        if (slot == 'color' && this.bodySprite) {
            this.bodySprite.tint = this.world.getColor(item)
        }

        // Load item sprite
        if (slot in this.items.equipped) {
            this.itemLoader.loadItem(item, slot)
            this.itemLoader.load.start()
        }

        // Load item paper, only if card is active
        if (this.playerCard.visible && this.playerCard.id == this.id) {
            this.paperDollLoader.loadItem(item, slot)
            this.paperDollLoader.start()
        }

        // Monster Mash stamp
        const equippedIds = Object.values(this.items.equippedFlat);
        const costumes = [[1013, 4016], [789], [120, 266], [4138], [14737]]
        costumes.forEach(costume => {
            if(costume.every(costumeItem => equippedIds.includes(costumeItem))) this.world.client.stampEarned(187)
        })
    }

    move(x, y) {
        let path = PathEngine.getPath(this, { x: x, y: y })
        if (path) this.addMoveTween(path)
    }

    setPos(x, y) {
        this.x = x
        this.y = y
    }

    /*========== Frames ==========*/

    playFrame(_frame, set = true) {
        // Moving penguin can only update when frames are movement frames (9-16)
        if (this.isTweening && (frame < 9 || frame > 16)) {
            return
        }

        // Filters out shadow and ring
        let sprites = this.list.filter(child => child.type == 'Sprite')
        // Get correct frame id
        let frame = ([25, 26].includes(_frame))
            ? this.getSecretFrame(_frame)
            : _frame
        
        for (let sprite of sprites) {
            if (sprite.animating) return

            if (sprite.texture.key.includes("puffle") && [63,32,39,36,44,45,42,43,37,51,71].includes(frame)) {
                frame = 26;
            } else if (sprite.texture.key.includes("puffle") && [52].includes(frame)) {
                frame = 13
            } else {
                frame = ([25, 26].includes(_frame))
                    ? this.getSecretFrame(_frame)
                    : _frame
            }
            let key = `${sprite.texture.key}_${frame}`
            if (!this.world.anims.exists(key)) {
                key = this.createAnim(sprite.texture.key, frame)
            }  


            if (this.checkAnim(key)) {
                sprite.visible = true
                sprite.anims.play(key)
            } else {
                sprite.visible = false
            }
        }

        // Frames that aren't set get set to 1
        this.frame = (set) ? _frame : 1
    }

    createAnim(key, frame) {
        let animation = this.crumbs.penguin[frame]
        let frames = this.generateFrames(key, frame, animation)
        if (frame == 36) {
            frames = frames.slice(-18);
        }

        this.world.anims.create({
            key: `${key}_${frame}`,
            frames: frames,
            frameRate: 24,
            repeat: animation.repeat || 0
        })
        return `${key}_${frame}`
    }

    generateFrames(key, frame, animation) {
        let config = {
            prefix: `${frame}_`,
            frames: animation.frames || Phaser.Utils.Array.NumberArray(animation.start || 1, animation.end)
        }

        let textureFrames = this.world.textures.get(key).getFrameNames(false)

        // Filter out null frames
        config.frames = config.frames.filter((i) => {
            return textureFrames.includes(`${frame}_${i}`)
        })

        return this.world.anims.generateFrameNames(key, config)
    }

    checkAnim(key) {
        let animation = this.world.anims.get(key)
        return animation && animation.frames.length > 0
    }

    getSecretFrame(frame) {
        let equipped = this.items.equippedFlat

        for (let secret of this.crumbs.secretFrames[frame]) {
            if (this.checkSecretFrames(equipped, secret)) {
                return secret.secret_frame
            }
        }

        return frame
    }

    checkSecretFrames(equipped, secret) {
        for (let item in equipped) {
            if (equipped[item] !== secret[item]) {
                return false
            }
        }

        // Only return true if frame is found in crumbs
        return secret.secret_frame in this.crumbs.penguin
    }

    /*========== Tweening ==========*/

    addMoveTween(path) {
        if (this.tween) {
            this.removeTween(false)
        }

        this.playFrame(this.direction + 8) // + 8 for walking frame id

        this.tween = this.room.tweens.add({
            targets: this,
            duration: path.duration,

            x: Math.round(path.target.x),
            y: Math.round(path.target.y),

            onUpdate: () => this.onMoveUpdate(),
            onComplete: () => this.onMoveComplete()
        })

        this.prevX = this.x
        this.prevY = this.y
    }

    onMoveUpdate() {
        this.depth = this.y

        if (this.nameTag) {
            this.updateNameTag()
        }

        if (this.balloon) {
            this.updateBalloon()
        }

        // check for triggers when penguin is moving
        if (this.room.walkThrough) {
            this.checkWalkTriggers();
        }

        let xoffset = this.x - this.prevX
        let yoffset = this.y - this.prevY

        if (this.pufflesprite && this.pufflesprite.animating) {
            this.pufflesprite.x -= xoffset
            this.pufflesprite.y -= yoffset
        }

        this.prevX = this.x
        this.prevY = this.y
    }

    /**
     * Check whether the penguin is over a trigger and execute the trigger if it is
     */
    checkWalkTriggers(){
        let x = this.x
        let y = this.y
        for (let trigger of this.room.walkThrough) {
            if (this.room.matter.containsPoint(trigger, x, y)) {
                if (trigger.callback) return trigger.callback()
            }
        }
    }

    onMoveComplete() {
        this.removeTween()

        if (this.afterMove) {
            this.afterMove()
            this.afterMove = null
        }
    }

    updateNameTag() {
        this.nameTag.x = this.x
        this.nameTag.y = this.y + 40
        this.nameTag.depth = this.depth + 2000
    }

    updateBalloon() {
        this.balloon.x = this.x
        this.balloon.y = this.y - 95
    }

    removeTween(playFrame = true) {
        if (!this.tween) {
            return
        }

        this.tween.remove()
        this.tween = null

        if (playFrame) {
            this.playFrame(this.direction)
        }
    }

    playPuffleAnim(anim) {
        if (!this.pufflesprite) return
        let x;
        let y;
        switch (anim) {
            case 'adopt':
                x = 0
                y = -60
                break
            case 'dive':
                x = 150
                y = 50
                break
            case 'eat':
                x = 60
                y = -80
                break
            case 'hydrant':
                x = 100
                y = 10
                break
            case 'maxed':
                x = 75
                y = -50
                break
            case 'jumpspin':
                x = 60
                y = -20
                break
            case 'jumpforward':
                x = 80
                y = -5
                break
            case 'roll':
                x = 110
                y = 0
                break
            case 'standonhead':
                x = 75
                y = -15
                break
            default:
                x = 60
                y = 0
        }
        this.pufflesprite.x = x
        this.pufflesprite.y = y
        this.pufflesprite.play(`puffle_${this.pufflesprite.color}_${anim}`)
        this.pufflesprite.animating = true
        this.pufflesprite.once('animationcomplete', () => {
            this.pufflesprite.animating = false
            this.pufflesprite.setTexture("puffle_" + this.pufflesprite.color, this.direction + "_1")
            this.pufflesprite.x = 60
            this.pufflesprite.y = 0
        })
    }
}
