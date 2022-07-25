import RoomScene from '@scenes/rooms/RoomScene'
import { setInterval } from 'core-js';

/* START OF COMPILED CODE */

export default class Cavemine extends RoomScene {
    errorTypeToCode = {
        'tooFewCoinsForPayout': 1,
        'coinsRewardedTooSoon': 2,
        'coinsExceedMaxAMount': 3,
    }

    constructor() {
        super("Cavemine");

        /** @type {Phaser.GameObjects.Sprite} */
        this.coin0001;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.timer = 2500
        this.roomTriggers = {
            'minehat': () => this.interface.prompt.showItem(429),
            'lake': () => this.unimplementedPrompt(),
            'mine': () => this.triggerRoom(808, 1200, 400),
            'minearea' : () => {
                if (!this.coinsInterval) {
                    this.coinsInterval = setInterval(() => this.checkMining(), this.timer)
                }
            }
        }

        this.coinsEarned = 0;
        this.checkCoins = true;
        // this.prevX = 0;
        // this.prevY = 0;
        this.x = 0;
        this.y = 0;
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("cavemine-pack", "assets/media/rooms/old/cavemine/cavemine-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(754, 494, "cavemine", "bg");

        // waterfall0001
        this.add.image(1220, 325, "cavemine", "waterfall0001");

        // snowball_sign
        this.add.image(782, 201, "cavemine", "snowball_sign");

        // slime
        this.add.image(1305, 325, "cavemine", "slime");

        // wirebehindmachine
        this.add.image(1000, 197, "cavemine", "wirebehindmachine");

        // snowball_tube0001
        this.add.image(922, 208, "cavemine", "snowball_tube0001");

        // microwave
        this.add.image(1075, 279, "cavemine", "microwave");

        // rocks
        this.add.image(724, 439, "cavemine", "rocks");

        // platform
        this.add.image(435, 211, "cavemine", "platform");

        // bottom_stair
        this.add.image(586, 382, "cavemine", "bottom_stair");

        // cavedoor
        this.add.image(105, 266, "cavemine", "cavedoor");

        // mine_notice
        this.add.image(361, 552, "cavemine", "mine_notice");

        // computer_front_right
        this.add.image(1330, 812, "cavemine", "computer_front_right");

        // shovel
        this.add.image(1010, 552, "cavemine", "shovel");

        // birdhousething
        this.add.image(198, 37, "cavemine", "birdhousething");

        // chairs
        this.add.image(472, 100, "cavemine", "chairs");

        // bulbs0003
        this.add.image(784, 41, "cavemine", "bulbs0003");

        // coffee_table
        this.add.image(275, 150, "cavemine", "coffee_table");

        // coffee_mugs_behind_table
        this.add.image(238, 141, "cavemine", "coffee_mugs_behind_table");

        // minehat
        this.add.image(386, 325, "cavemine", "minehat");

        // coffee0001
        this.add.image(261, 124, "cavemine", "coffee0001");

        // coin0001
        const coin0001 = this.add.sprite(-89, 525, "cavemine", "coin0001");
        coin0001.visible = false;

        // lists
        const sort = [coin0001];

        this.coin0001 = coin0001;
        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /* START-USER-CODE */
    get miningError() {
        return this.world.client.miningError
    }
    get client() {
        return this.world.client
    }

    create() {
        super.create()
        this.coin0001.depth = 1000;
        if (!this.world.client.miningError) {
            this.world.client.miningError = 0;
        }
    }

    onZoneClick() {
        this.world.client.penguin.move(1266, 572)
    }

    getPenguinFrame() {
        return this.world.client.penguin.frame
    }

    probability(n) {
        return !!n && Math.random() <= n
    }

    addMiningCoins(penguin, coins) {
        const errorCodes = Object.values(this.errorTypeToCode)

        if (errorCodes.includes(this.miningError)) {
            return
        }

        this.network.send('add_mine_coins', {
            id: penguin.id,
            coins: coins,
            timer: this.timer,
            miningId: this.randomId
        })
    }

    resetMining(penguin) {
        if (this.randomId !== undefined) {
            this.network.send("delete_mine", { miningId: this.randomId })
        }

        this.randomId = (Math.random() + 1).toString(36).substring(7);

        this.x = penguin.x;
        this.y = penguin.y;
    }

    miningShouldBeReset(penguin) {
        return this.randomId === undefined
            || this.miningError === 2
            || this.playerCoordinatesHaveChanged(penguin)
    }

    coinsAmount() {
        let prob = Math.random();
        if (prob >= .975) return 100
        else if (prob >= .95) return 90
        else if (prob >= .90) return 75
        else if (prob >= .75) return 50
        else if (prob >= .50) return 25
        else if (prob >= .35) return 10
        return 5
    }

    playerOnlyHasHelmetEquipped(allItems) {
        const itemsAsArray = Object.entries(allItems)

        return itemsAsArray.every(pair => {
            const [itemType, value] = pair

            switch (itemType) {
                case 'head':
                    return value.id === 429
                case 'flag':
                case 'color':
                case 'photo':
                    return true
                default:
                    return value.id === 0
            }
        })
    }

    playerIsDrillingInMiningArea(penguin) {
        return this.matter.containsPoint(this.triggers[3], penguin.x, penguin.y)
            && this.x === penguin.x
            && this.y === penguin.y
            && penguin.frame === 26
    }

    playerCoordinatesHaveChanged(penguin) {
        return penguin.x !== this.x
            || penguin.y !== this.y
    }

    showCoinRewardToPlayer(penguin) {
        this.coin0001.setPosition(penguin.x + 5, penguin.y - 120)

        this.coin0001.visible = true

        const animation = this.coin0001.playReverse({
            key:'coin',
            repeat: 0,
        })

        animation.once('animationcomplete', () => {
            this.coin0001.visible = false
            this.client.checkMining = true
        }, this);
    }

    checkMining() {
        const penguin = this.world.client.penguin

        this.client.checkMining = true

        if (penguin.room.key !== this.key) {
            return clearInterval(this.coinsInterval)
        }

        if (this.miningShouldBeReset(penguin)) {
            return this.resetMining(penguin)
        }

        if (!this.playerOnlyHasHelmetEquipped(penguin.items.all) || !this.playerIsDrillingInMiningArea(penguin)) {
            return
        }

        if (this.probability(.04)) {
            this.client.checkMining = false

            this.addMiningCoins(penguin, this.coinsAmount())

            if (!this.miningError && !this.miningShouldBeReset(penguin)) {
                return this.showCoinRewardToPlayer(penguin)
            }
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
