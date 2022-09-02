import RoomScene from '@scenes/rooms/RoomScene'

import { Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Beach extends RoomScene {

    constructor() {
        super("Beach");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'village': () => this.triggerRoom(200, 450, 750),
            'dock': () => this.triggerRoom(800, 240, 420),
            'lighthouse': () => this.triggerRoom(410, 530, 530),
            'ship': null
        }
        this.music = '583'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("beach-mj-pack", "assets/media/rooms/old/beach/mj/beach-mj-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(789, 333, "beach-mj", "bg");

        // live_sign
        this.add.image(519, 212, "beach-mj", "live_sign");

        // note2
        this.add.image(611, 349, "beach-mj", "note2");

        // tree
        this.add.image(1380, 483, "beach-mj", "tree");

        // right_balloons
        const right_balloons = this.add.image(1324, 430, "beach-mj", "right_balloons");

        // right_sign
        this.add.image(1176, 369, "beach-mj", "right_sign");

        // left_balloons
        const left_balloons = this.add.image(192, 293, "beach-mj", "left_balloons");

        // cdplayer
        this.add.image(375, 417, "beach-mj", "cdplayer0001");

        // note1
        this.add.image(285, 414, "beach-mj", "note1");

        // fire_pit
        this.add.image(928, 751, "beach-mj", "fire_pit");

        // fire0001
        this.add.image(929, 674, "beach-mj", "fire0001");

        // bench
        const bench = this.add.image(753, 691, "beach-mj", "bench");

        // bench2
        this.add.image(1072, 634, "beach-mj", "bench2");

        // door
        const door = this.add.image(457, 311, "beach-mj", "door");

        // lists
        const sort = [bench, right_balloons, left_balloons];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        new MoveTo(door);

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create();
    }



    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
