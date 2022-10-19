
// You can write more code here

import BaseScene from "@scenes/base/BaseScene";
import Button from "@scenes/components/Button";
import Animation from "@scenes/components/Animation";


/* START OF COMPILED CODE */

export default class Telescope extends BaseScene {

    constructor() {
        super("TelescopeSpooky");

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("spookyscope-pack", "assets/media/interface/game/telescope/spooky/spookyscope-pack.json");
        this.load.pack("telescope-pack", "assets/media/interface/game/telescope/telescope-pack.json");
    }

    /** @returns {void} */
    create() {

        // symbol_1_png
        const symbol_1_png = this.add.image(783, 444, "spookyscope", "Symbol 1.png");
        symbol_1_png.scaleX = 1.0635171602955034;
        symbol_1_png.scaleY = 1.0635171602955034;

        // bg
        this.add.image(760, 480, "telescope", "bg");

        // closebtn
        const closebtn = this.add.image(1227, 71, "telescope", "closebtn");

        // closebtn (components)
        const closebtnButton = new Button(closebtn);
        closebtnButton.spriteName = "closebtn";
        closebtnButton.callback = () => this.scene.stop();;

        this.events.emit("scene-awake");
    }

    /* START-USER-CODE */

    // Write your code here


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
