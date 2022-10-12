
// You can write more code here

import IglooScene from "../IglooScene";

/* START OF COMPILED CODE */

export default class TheatreIgloo extends IglooScene {

    constructor() {
        super("TheatreIgloo");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */
        this.floorSpawn = [770, 750]
        this.wallSpawn = [790, 400]
        this.wallBounds = [520, 1050]
        this.floorFrame = 12
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("theatre-iggy-pack", "assets/media/igloos/buildings/sprites/theatre/theatre-iggy-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(765, 655, "theatre_iggy", "floor");

        // stage
        this.add.image(758, 587, "theatre_iggy", "stage");

        // curtan
        this.add.image(767, 410, "theatre_iggy", "curtan");

        // walls
        this.add.image(760, 438, "theatre_iggy", "walls");

        // puffles
        this.add.image(811, 301, "theatre_iggy", "puffles");

        // door
        this.add.image(211, 618, "theatre_iggy", "door");

        this.floor = floor;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
