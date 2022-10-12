
// You can write more code here

import IglooScene from "../IglooScene";

/* START OF COMPILED CODE */

export default class IceCastle extends IglooScene {

    constructor() {
        super("IceCastle");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */
        this.floorSpawn = [770, 750]
        this.wallSpawn = [790, 400]
        this.wallBounds = [520, 1050]
        this.floorFrame = 8
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("icecastle-pack", "assets/media/igloos/buildings/sprites/icecastle/icecastle-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 414, "icecastle", "floor");

        // door
        this.add.image(758, 516, "icecastle", "door");

        this.floor = floor;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
