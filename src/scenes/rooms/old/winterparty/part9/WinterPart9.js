
import RoomScene from "@scenes/rooms/RoomScene";

/* START OF COMPILED CODE */

export default class WinterPart9 extends RoomScene {

    constructor() {
        super("WinterPart9");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'trigger_1': () => null,
            'trigger_2': () => this.triggerRoom(850, 30, 257),
            'trigger_3': () => this.triggerRoom(850, 41, 514),
            'trigger_4': () => this.triggerRoom(850, 39, 758),
            'trigger_5': () => this.triggerRoom(200, 740, 675),
            'trigger_6': () => this.triggerRoom(848, 1467, 724),
            'trigger_7': () => this.triggerRoom(848, 1457, 478),
            'trigger_8': () => this.triggerRoom(848, 1465, 224),
        }
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("winterparty-part9-pack", "assets/media/rooms/old/winterparty/part9/winterparty-part9-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(758, 480, "winterparty-part9", "bg");

        // fg
        const fg = this.add.image(759, 837, "winterparty-part9", "fg");

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
