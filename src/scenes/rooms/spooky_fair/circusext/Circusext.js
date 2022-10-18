
// You can write more code here
import RoomScene from "@rooms/RoomScene";
import {Animation, Button, MoveTo} from "@components/components";


/* START OF COMPILED CODE */

export default class Circusext extends RoomScene {

    constructor() {
        super("Circusext");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("circusext-pack", "assets/media/rooms/spooky_fair/circusext/circusext-pack.json");
        this.load.pack("sky-pack", "assets/media/rooms/spooky_fair/sky/sky-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky0001
        const sky0001 = this.add.sprite(1049, 105, "sky_spooky", "sky0001");

        // bg
        this.add.image(824, 497, "circusext", "bg");

        // tent_back
        const tent_back = this.add.sprite(952, 373, "circusext", "tent_back");

        // tent
        this.add.image(1062, 277, "circusext", "tent");

        // ballon
        this.add.image(972, 381, "circusext", "ballon");

        // prize_back
        const prize_back = this.add.sprite(311, 276, "circusext", "prize_back");
        prize_back.scaleX = 0.9034546949414113;

        // prize
        this.add.image(321, 288, "circusext", "prize");

        // barrel
        this.add.image(729, 503, "circusext", "barrel");

        // fg
        const fg = this.add.image(761, 857.5292228448918, "circusext", "fg");
        fg.setOrigin(0.5, 0.7940023883689293);

        // scary
        this.add.image(968, 158, "circusext", "scary");

        // lists
        const sort = [fg];

        // sky0001 (components)
        const sky0001Animation = new Animation(sky0001);
        sky0001Animation.key = "sky";
        sky0001Animation.end = 282;

        // tent_back (components)
        const tent_backButton = new Button(tent_back);
        tent_backButton.spriteName = "tent_back";
        const tent_backMoveTo = new MoveTo(tent_back);
        tent_backMoveTo.x = 928;
        tent_backMoveTo.y = 486;

        // prize_back (components)
        const prize_backButton = new Button(prize_back);
        prize_backButton.spriteName = "prize_back";

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
