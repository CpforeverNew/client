import IglooScene from "../IglooScene";


/* START OF COMPILED CODE */

export default class Backyard extends IglooScene {

    constructor() {
        super("Backyard");

        /** @type {Phaser.GameObjects.Container} */
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

        // floor
        const floor = this.add.container(0, 0);

        // grass_floor
        const grass_floor = this.add.image(495, 645, "backyard", "grass_floor");
        floor.add(grass_floor);

        // floor_1
        const floor_1 = this.add.image(936, 622, "backyard", "main_floor");
        floor.add(floor_1);

        // stairs_top
        const stairs_top = this.add.image(785, 674, "backyard", "stairs_top");
        floor.add(stairs_top);

        // walls
        this.add.image(760, 480, "backyard", "walls");

        // door
        this.add.image(719, 245, "backyard", "door");

        // stairs
        this.add.image(806, 671, "backyard", "stairs");

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
