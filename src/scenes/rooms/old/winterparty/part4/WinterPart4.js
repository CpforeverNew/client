
// You can write more code here

import RoomScene from "@scenes/rooms/RoomScene";

/* START OF COMPILED CODE */

export default class WinterPart4 extends RoomScene {

    constructor() {
        super("WinterPart4");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers =  {
            "trigger_1" : () => this.triggerRoom(843, 1453, 225),
            "trigger_2" : () => this.triggerRoom(843, 1446, 752),
            "trigger_3" : () => this.triggerRoom(847, 499, 51),
            "trigger_4" : () => this.triggerRoom(847, 768, 61),
            "trigger_5" : () => this.triggerRoom(847, 1025, 38),
            "trigger_6" : () => this.triggerRoom(847, 1309, 30),
        }

        this.roomWalkThroughTriggers = {
            'entry_trigger_1': () => this.entryTrigger(1),
            'entry_trigger_2': () => this.entryTrigger(2),
            'entry_trigger_3': () => this.entryTrigger(3),
            'entry_trigger_4': () => this.entryTrigger(4),
            'entry_trigger_5': () => this.entryTrigger(5),
            'entry_trigger_6': () => this.entryTrigger(6),
        }
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("winterparty-part4-pack", "assets/media/rooms/old/winterparty/part4/winterparty-part4-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_png
        this.add.image(765, 459, "winterparty-part4", "bg.png");

        // fg_png
        const fg_png = this.add.image(766, 623, "winterparty-part4", "fg.png");

        // lists
        const sort = [fg_png];

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    create() {

        super.create();
        this.block = this.addBody('block0003');
    }


    entryTrigger(id) {
        switch (id) {
            case 1:
            case 4:
                this.block = this.addBody('block0002');
                break;
            case 2:
            case 3:
            case 6:
                this.block = this.addBody('block0001');
                break;
        }
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
