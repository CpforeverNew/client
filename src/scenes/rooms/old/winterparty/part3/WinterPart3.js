
import RoomScene from "@scenes/rooms/RoomScene";

/* START OF COMPILED CODE */

export default class WinterPart3 extends RoomScene {

    constructor() {
        super("WinterPart3");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'trigger_1': () => this.triggerRoom(841, 518, 827),
            'trigger_2': () => this.triggerRoom(841, 794, 833),
            'trigger_3': () => this.triggerRoom(841, 1028, 852),
            'trigger_4': () => this.triggerRoom(844, 78, 246),
            'trigger_5': () => this.triggerRoom(844, 59, 746),
            'trigger_6': () => this.triggerRoom(846, 242, 98),
            'trigger_7': () => this.triggerRoom(842, 1431,504),
        }

        this.roomWalkThroughTriggers = {
            'entry_trigger_1': () => this.entryTrigger(1),
            'entry_trigger_2': () => this.entryTrigger(2),
            'entry_trigger_3': () => this.entryTrigger(3),
            'entry_trigger_4': () => this.entryTrigger(4),
            'entry_trigger_5': () => this.entryTrigger(5),
            'entry_trigger_6': () => this.entryTrigger(6),
            'entry_trigger_7': () => this.entryTrigger(7),
        }
 
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("winterparty-part3-pack", "assets/media/rooms/old/winterparty/part3/winterparty-part3-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(757, 467, "winterparty-part3", "bg");

        // fg
        const fg = this.add.image(757, 582, "winterparty-part3", "fg");

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
            case 7:
            case 1:
                break;
            case 2:
                this.block = this.addBody('block0002');
                break;
            case 3:
                this.block = this.addBody('block0001');
                break;
            case 4:
                this.block = this.addBody('block0001');
                break
            case 5:
                this.block = this.addBody('block0002');
                break;
            case 6:
                this.block = this.addBody('block0001');
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
