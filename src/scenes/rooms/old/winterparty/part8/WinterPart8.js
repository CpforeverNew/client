
import RoomScene from "@scenes/rooms/RoomScene";

/* START OF COMPILED CODE */

export default class WinterPart8 extends RoomScene {

    constructor() {
        super("WinterPart8");

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'trigger_1': () => this.triggerRoom(845, 216, 842),
            'trigger_2': () => this.triggerRoom(845, 479, 856),
            'trigger_3': () => this.triggerRoom(845, 748, 846),
            'trigger_4': () => this.triggerRoom(849, 56, 241), 
            'trigger_5': () => this.triggerRoom(849, 66, 478),
            'trigger_6': () => this.triggerRoom(849, 34, 743),
        }
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("winterparty-part8-pack", "assets/media/rooms/old/winterparty/part8/winterparty-part8-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(767, 474, "winter-part8", "bg");

        // fg
        this.add.image(767, 474, "winter-part8", "fg");

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
