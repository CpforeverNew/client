export default class MtnSeat extends Phaser.GameObjects.Image {

    constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 760, y ?? 480, texture || "mtn-holiday", frame ?? "tube");

        /* START-USER-CTR-CODE */
        /** @type {number} */
        this.sitFrame = 17;
        /** @type {number} */
        this.offsetX = 0;
        /** @type {number} */
        this.offsetY = 0;


        this.setOrigin(0.49504950495049505, 0.5064935064935064);
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
