
import RoomScene from "@scenes/rooms/RoomScene";

/* START OF COMPILED CODE */

export default class WinterPart10 extends RoomScene {

    constructor() {
        super("WinterPart10");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'trigger_1': () => this.triggerRoom(847, 758, 838),
            'trigger_2': () => this.triggerRoom(847, 1030, 839),
            'trigger_3': () => this.triggerRoom(847, 1315, 838),
            'trigger_4': () => this.triggerRoom(849, 1426, 720),
            'trigger_5': () => this.triggerRoom(849, 1416, 473),
            'trigger_6': () => this.triggerRoom(849, 1427, 223),
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

        this.load.pack("winterparty-part10-pack", "assets/media/rooms/old/winterparty/part10/winterparty-part10-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(760, 475, "winter-part10", "bg");

        // fg
        const fg = this.add.image(763, 492, "winter-part10", "fg");

        // lists
        const sort = [fg];

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
            case 2:
            case 6:
                this.block = this.addBody('block0001');
                break;
            case 1:
            case 3:
            case 4:
                this.block = this.addBody('block0002');
                break;
        }
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
