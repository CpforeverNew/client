import RoomScene from "@scenes/rooms/RoomScene";

/* START OF COMPILED CODE */


export default class WinterPart1 extends RoomScene {

    constructor() {
        super("WinterPart1");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("winterparty-part1-pack", "assets/media/rooms/old/winterparty/part1/winterparty-part1-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(770, 482, "winterparty-part1", "bg");

        // cave
        const cave = this.add.image(771, 396, "winterparty-part1", "cave");

        // left_flag
        this.add.image(591, 624, "winterparty-part1", "left_flag");

        // right_flag
        this.add.image(959, 619, "winterparty-part1", "right_flag");

        // fg
        this.add.image(769, 570, "winterparty-part1", "fg");

        // lists
        const sort = [cave];

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    create() {

       super.create();
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
