
// You can write more code here

/* START OF COMPILED CODE */

export default class HotelRoof extends Phaser.Scene {

    constructor() {
        super("HotelRoof");

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("hotelroom-pack", "assets/media/rooms/new/hotelroof/hotelroom-pack.json");
    }

    /** @returns {void} */
    editorCreate() {

        // bg_png
        const bg_png = this.add.image(0, 0, "hotelroof", "bg.png");
        bg_png.setOrigin(0, 0);

        this.events.emit("scene-awake");
    }

    /* START-USER-CODE */

    // Write your code here

    create() {

        this.editorCreate();
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
