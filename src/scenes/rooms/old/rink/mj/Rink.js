import { Button, Interactive, SimpleButton } from '@components/components'

import RoomScene from '@scenes/rooms/RoomScene'


/* START OF COMPILED CODE */

export default class Rink extends RoomScene {

    constructor() {
        super("Rink");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'forts': () => this.triggerRoom(801, 560, 400)
        }
        this.music = '592'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("rink-mj-pack", "assets/media/rooms/old/rink/mj/rink-mj-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(718, 218, "rink-mj", "bg");

        // snacks
        this.add.image(1095, 125, "rink-mj", "snacks");

        // fg
        this.add.image(757, 473, "rink-mj", "fg");

        // fence0001
        const fence0001 = this.add.image(732, 322, "rink-mj", "fence0001");

        // red_lights
        this.add.image(1220, 377, "rink-mj", "red_lights");

        // blue_lights
        this.add.image(344, 649, "rink-mj", "blue_lights");

        // light
        this.add.image(496, 64, "rink-mj", "light");

        // sprinkles
        this.add.image(874, 699, "rink-mj", "sprinkles");

        // lists
        const sort = [fence0001];

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
