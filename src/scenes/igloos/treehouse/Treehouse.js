
import IglooScene from "../IglooScene";

/* START OF COMPILED CODE */

export default class Treehouse extends IglooScene {

    constructor() {
        super("Treehouse");

        /** @type {Phaser.GameObjects.Image} */
        this.shadow;
        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.floorSpawn = [770, 750]
        this.wallSpawn = [790, 400]
        this.wallBounds = [520, 1050]
        this.floorFrame = 7
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("treehouse-pack", "assets/media/igloos/buildings/sprites/treehouse/treehouse-pack.json");
    }

    /** @returns {void} */
    _create() {

        // shadow
        const shadow = this.add.image(741, 800, "treehouse", "shadow");

        // floor
        const floor = this.add.image(768, 658.7161529987027, "treehouse", "floor");
        floor.setOrigin(0.5, 0.6678858929108076);

        // walls
        this.add.image(766, 418, "treehouse", "walls");

        // outline
        this.add.image(758, 524, "treehouse", "outline");

        // fg
        const fg = this.add.image(760, 782.5713063283397, "treehouse", "fg");
        fg.setOrigin(0.5, 0.829128651261129);

        // lists
        const sort = [fg, floor];

        this.shadow = shadow;
        this.floor = floor;
        this.sort = sort;
        this.shadow.depth = -3;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
