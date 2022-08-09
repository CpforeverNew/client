
import RoomScene from "@scenes/rooms/RoomScene";

/* START OF COMPILED CODE */

export default class WinterPart7 extends RoomScene {

    constructor() {
        super("WinterPart7");

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'trigger_1': () => null,
            'trigger_2': () => null,
            'trigger_3': () => null,
            'trigger_4': () => null,
            'trigger_5': () => this.triggerRoom(850, 1301, 67),
            'trigger_6': () => this.triggerRoom(850, 1032, 31),
            'trigger_7': () => this.triggerRoom(850, 769, 56),
            'trigger_8': () => null,
            'trigger_9': () => null,
            'trigger_10': () => null,
        }
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("winterparty-part7-pack", "assets/media/rooms/old/winterparty/part7/winterparty-part7-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_png
        this.add.image(758, 483, "winter-part7", "bg.png");

        // fg_png
        this.add.image(758, 483, "winter-part7", "fg.png");

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
