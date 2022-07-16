import BaseLoader from '@engine/loaders/BaseLoader'


export default class PuffleLoader extends BaseLoader {

    constructor(penguin) {
        super(penguin.room)
        this.penguin = penguin
        this.baseURL = '/assets/media/puffles/'
        this.keyPrefix = 'puffle_'
    }

    loadPuffle(puffle) {
        let mainKey = this.getKey(puffle)
        let types = ["_adopt", "_dig", "_dive", "_eat", "_hydrant", "_maxed", "_scratchpost", "_splash","_tireswing","_weightlifting"]
        let tricks = ["_jumpforward","_jumpspin","_nuzzle","_roll","_sandonhead","_speak"]
        let allArrays1 = types.concat(tricks);
        let allArrays = [""].concat(allArrays1);
        let interval = setInterval(() => {
            if (this.checkIfExist(mainKey, allArrays)) {
                console.log(this.checkIfExist(mainKey, allArrays))
                this.onFileComplete(mainKey, puffle)
                clearInterval(interval)
            }
        }, 100)
        if(!this.textureExists(mainKey)) this.multiatlas(mainKey, `sprites/${puffle}.json`)
        for (const element of types) {
            if(!this.textureExists(mainKey + element)) this.multiatlas(mainKey + element, `${element.substring(1)}/${puffle}.json`)
        }
        for (const element of tricks) {
            if(!this.textureExists(mainKey + element)) this.multiatlas(mainKey + element, `tricks/${puffle}/${element.substring(1)}.json`)
        }
        this.start()
    }

    checkIfExist(key,arr) {
        for (const element of arr) {
            if (!this.textureExists(key + element)) return false
        }
        return true;
    }

    onFileComplete(key, puffle) {
        if (!this.textureExists(key)) {
            return
        }
        
        this.createAnim(`puffle_${puffle}_adopt`, 'Sprite')
        this.createAnim(`puffle_${puffle}_dig`, 'Sprite')
        this.createAnim(`puffle_${puffle}_dive`, 'Sprite')
        this.createAnim(`puffle_${puffle}_eat`, 'Sprite')
        this.createAnim(`puffle_${puffle}_hydrant`, 'Sprite')
        this.createAnim(`puffle_${puffle}_maxed`, 'Sprite')
        this.createAnim(`puffle_${puffle}_scratchpost`, 'Sprite')
        this.createAnim(`puffle_${puffle}_splash`, 'Sprite')
        this.createAnim(`puffle_${puffle}_tireswing`, 'Sprite')
        this.createAnim(`puffle_${puffle}_weightlifting`, 'Sprite')
        this.createAnim(`puffle_${puffle}_jumpforward`, 'Sprite')
        this.createAnim(`puffle_${puffle}_jumpspin`, 'Sprite')
        this.createAnim(`puffle_${puffle}_nuzzle`, 'Sprite')
        this.createAnim(`puffle_${puffle}_roll`, 'Sprite')
        this.createAnim(`puffle_${puffle}_standonhead`, 'Sprite')
        this.createAnim(`puffle_${puffle}_speak`, 'Sprite')

        this.penguin.penguinLoader.loadPuffle(this.penguin, puffle)
    }

    createAnim(key, frame) {
        let frames = this.generateFrames(key, frame)

        this.world.anims.create({
            key: `${key}`,
            frames: frames,
            frameRate: 24,
            repeat: 0
        })
    }

    generateFrames(key, frame) {
        let textureFrames = this.world.textures.get(key).getFrameNames(false)
        textureFrames.sort(function(a, b) {
            return parseInt(a.substring(6)) - parseInt(b.substring(6))
        });
        textureFrames = textureFrames.filter(frame => frame[0] !== '.')
        let config = {
            frames: textureFrames
        }

        return this.world.anims.generateFrameNames(key, config)
    }

}