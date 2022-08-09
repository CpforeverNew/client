
// You can write more code here

import RoomScene from "@scenes/rooms/RoomScene";

/* START OF COMPILED CODE */

export default class YetiCave extends RoomScene {

    constructor() {
        super("YetiCave");

        /** @type {Phaser.GameObjects.Sprite} */
        this.tv;
        /** @type {Phaser.GameObjects.Sprite} */
        this.back_fire_right;
        /** @type {Phaser.GameObjects.Sprite} */
        this.back_fire_left;
        /** @type {Phaser.GameObjects.Sprite} */
        this.small_fire;
        /** @type {Array<any>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'item': () => this.interface.prompt.showItem(4141), 
            'exit': () => this.triggerRoom(200, 500, 800), 
            'maze': () => this.triggerRoom(200, 500, 800),
        }
        this.music = '247';
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("yeti-cave-pack", "assets/media/rooms/old/winterparty/yeticave/yeti-cave-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_png
        const bg_png = this.add.image(0, -19, "yeticave", "bg");
        bg_png.setOrigin(0, 0);

        // cave_spike_png
        this.add.image(1086, 282, "yeticave", "cave_spike");

        // cave_ballon_png
        this.add.image(1283, 245, "yeticave", "cave_ballon");

        // back_cave_png
        this.add.image(695, 235, "yeticave", "back_cave");

        // diggerr_back_png
        this.add.image(1229, 627, "yeticave", "diggerr_back");

        // digger_chair_png
        this.add.image(1152, 620, "yeticave", "digger_chair");

        // digger_cab_png
        this.add.image(1161, 681, "yeticave", "digger_cab");

        // digger_front_png
        this.add.image(988, 784, "yeticave", "digger_front");

        // tv
        const tv = this.add.sprite(170, 743, "yeticave", "tv0001");

        // fg_png
        const fg_png = this.add.image(-33, -27, "yeticave", "fg");
        fg_png.setOrigin(0, 0);

        // prize_sign0001_png
        this.add.image(717, 328, "yeticave", "prize_sign0001");

        // crate_of_yeti_png
        this.add.image(711, 407, "yeticave", "crate_of_yeti");

        // fire_stick0001_png
        this.add.image(961, 379, "yeticave", "fire_stick0001");

        // fire_stick0001_png_1
        this.add.image(371, 371, "yeticave", "fire_stick0001");

        // back_fire_right
        const back_fire_right = this.add.sprite(958, 370, "yeticave", "back_fire0001");

        // back_fire_left
        const back_fire_left = this.add.sprite(368, 364, "yeticave", "back_fire0001");

        // left_ballons_png
        this.add.image(48, 481, "yeticave", "left_ballons");

        // right_ballons_png
        this.add.image(1505, 488, "yeticave", "right_ballons");

        // fish_box_png
        this.add.image(326, 685, "yeticave", "fish_box");

        // chair_back_png
        this.add.image(428, 705, "yeticave", "chair_back");

        // table_png
        this.add.image(549, 775, "yeticave", "table");

        // chair_front_png
        this.add.image(443, 763, "yeticave", "chair_front");

        // small_stick_png
        this.add.image(547, 709, "yeticave", "small_stick");

        // small_fire
        const small_fire = this.add.sprite(545, 651, "yeticave", "small_fire0001");

        // lists
        const sort = [];

        this.tv = tv;
        this.back_fire_right = back_fire_right;
        this.back_fire_left = back_fire_left;
        this.small_fire = small_fire;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    create() {

       super.create();
       this.back_fire_left.play("back_fire");
       this.back_fire_right.play("back_fire");
       this.small_fire.play("small_fire");
       this.tv.play("tv");
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
