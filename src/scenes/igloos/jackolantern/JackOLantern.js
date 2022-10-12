
// You can write more code here

import IglooScene from "../IglooScene";

/* START OF COMPILED CODE */

export default class JackOLantern extends IglooScene {

    constructor() {
        super("JackOLantern");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */
        this.floorSpawn = [770, 750]
        this.wallSpawn = [790, 400]
        this.wallBounds = [520, 1050]
        this.floorFrame = 11
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("jackolantern-pack", "assets/media/igloos/buildings/sprites/jackolantern/jackolantern-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(754, 456, "jackolantern", "pumkin");

        this.floor = floor;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
