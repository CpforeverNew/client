
import RoomScene from "@scenes/rooms/RoomScene";

/* START OF COMPILED CODE */

export default class WinterPart2 extends RoomScene {

    constructor() {
        super("WinterPart2");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers =  {
            "trigger_1" : () => this.triggerRoom(843,73,496),
            "trigger_2" : () => this.triggerRoom(845,224,36),
            "trigger_3" : () => this.triggerRoom(845,501,47),
            "trigger_4" : () => this.triggerRoom(845,751,83),
        }
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("winterparty-part2-pack", "assets/media/rooms/old/winterparty/part2/winterparty-part2-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(759, 489, "winterparty-part2", "bg");

        // fg
        const fg = this.add.image(758, 574, "winterparty-part2", "fg");

        // lists
        const sort = [fg];

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
