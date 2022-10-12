import Button from "@scenes/components/Button";
import IglooScene from "../IglooScene";
// You can write more code here


/* START OF COMPILED CODE */

export default class Backyard extends IglooScene {

    constructor() {
        super("Backyard");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */
        this.floorSpawn = [770, 750]
        this.wallSpawn = [790, 400]
        this.wallBounds = [520, 1050]
        this.floorFrame = 3
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("backyard-pack", "assets/media/igloos/buildings/sprites/backyard/backyard-pack.json");
    }

    /** @returns {void} */
    _create() {

        // grass_floor
        this.add.image(495, 647, "backyard", "grass_floor");

        // floor
        const floor = this.add.image(938, 622, "backyard", "main_floor");

        // walls
        this.add.image(760, 480, "backyard", "walls");

        // door
        this.add.image(719, 245, "backyard", "door");

        // stairs
        this.add.image(808, 673, "backyard", "stairs");

        // bottomwall
        this.add.image(957, 817, "backyard", "bottomwall");

        this.floor = floor;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
