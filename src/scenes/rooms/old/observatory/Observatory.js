import RoomScene from '@scenes/rooms/RoomScene'

/* START OF COMPILED CODE */

export default class Observatory extends RoomScene {

    constructor() {
        super("Observatory");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        this.roomTriggers = {
            'bloon': () => this.triggerRoom(300, 1240, 660), // todo change
            'trigger_2': () => this.triggerRoom(807, 500, 800), // todo change
            'trigger_3': () => this.triggerRoom(810, 520, 416), // todo change
        }
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("observatory-pack", "assets/media/rooms/old/observatory/observatory-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(0, 0, "observatory", "bg");
        bg.setOrigin(0, 0);

        // blueboard
        const blueboard = this.add.image(1453, 604, "observatory", "blueboard");

        // table
        const table = this.add.image(1241, 764, "observatory", "table");

        // jetpack
        const jetpack = this.add.image(668, 500, "observatory", "jetpack");

        // lists
        const sort = [blueboard, jetpack, table];

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
