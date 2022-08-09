import RoomScene from "@scenes/rooms/RoomScene";

/* START OF COMPILED CODE */

export default class WinterPart5 extends RoomScene {

    constructor() {
        super("WinterPart5");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'entry_trigger_1': () => this.entryTrigger(1),
            'entry_trigger_2': () => this.entryTrigger(2),
            'entry_trigger_3': () => this.entryTrigger(3),
            'entry_trigger_4': () => this.entryTrigger(4),
            'entry_trigger_5': () => this.entryTrigger(5),
            'entry_trigger_6': () => this.entryTrigger(6),
            'entry_trigger_7': () => this.entryTrigger(7),
            'entry_trigger_8': () => this.entryTrigger(8),
        }
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("winterparty-part5-pack", "assets/media/rooms/old/winterparty/part5/winterparty-part5-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(743, 465, "winterpart5", "bg");

        // fg
        const fg = this.add.image(758, 484, "winterpart5", "fg");

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
            case 1:
            case 3:
            case 4:
                this.block = this.addBody('block0001');
                break;
            case 2:
            case 7:
                this.block = this.addBody('block0002');
                break;
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
