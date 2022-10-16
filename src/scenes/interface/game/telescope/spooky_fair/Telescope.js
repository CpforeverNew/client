
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

        this.load.pack("telescope-pack", "assets/media/interface/game/telescope/telescope-pack.json");
        this.load.pack("sky-pack", "assets/media/rooms/spooky_fair/sky/sky-pack.json");
    }

    /** @returns {void} */
    create() {

        // sky0001
        const sky0001 = this.add.sprite(612, 62, "sky_spooky", "sky0001");
        sky0001.scaleX = 2.030033267239942;
        sky0001.scaleY = 2.030033267239942;

        // bg
        this.add.image(760, 480, "telescope", "bg");

        // closebtn
        const closebtn = this.add.image(1227, 71, "telescope", "closebtn");

        // sky0001 (components)
        const sky0001Animation = new Animation(sky0001);
        sky0001Animation.key = "sky";
        sky0001Animation.end = 282;

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
