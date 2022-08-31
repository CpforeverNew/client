import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton, Zone } from '@components/components'


/* START OF COMPILED CODE */

export default class Dance extends RoomScene {

    constructor() {
        super("Dance");

        /** @type {Array<any>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'town': () => this.triggerRoom(100, 680, 520),
            'boiler': () => this.triggerRoom(804, 1040, 580),
            'lounge': () => this.triggerRoom(121, 1200, 760),
            'mix': null
        }
        this.music = '5'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("dance-mj-pack", "assets/media/rooms/old/dance/mj/dance-mj-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(767, 479, "dance-mj", "bg");

        // glow
        this.add.image(680, 147, "dance-mj", "glow");

        // lists
        const sort = [];

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        if (!this.penguins) return

        if (Object.keys(this.penguins).length >= 10) {
            this.world.client.stampEarned(16)
        }
        if (Object.keys(this.penguins).length >= 25) {
            this.world.client.stampEarned(22)
        }
    }

    addPenguin(id, penguin) {
        super.addPenguin(id, penguin)
        if (Object.keys(this.penguins).length >= 16) {
            this.world.client.stampEarned(22)
        }
        if (Object.keys(this.penguins).length >= 25) {
            this.world.client.stampEarned(22)
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */