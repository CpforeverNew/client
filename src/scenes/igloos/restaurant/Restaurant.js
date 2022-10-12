
import IglooScene from "../IglooScene";

/* START OF COMPILED CODE */

export default class Restaurant extends IglooScene {

    constructor() {
        super("Restaurant");

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

        this.load.pack("restaurant-pack", "assets/media/igloos/buildings/sprites/restaurant/restaurant-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(768, 691, "restaurant", "floor");

        // walls
        this.add.image(760, 445.5, "restaurant", "walls");

        // door0001
        this.add.image(279, 550, "restaurant", "door0001");

        this.floor = floor;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
