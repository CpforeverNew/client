import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Town extends RoomScene {

    constructor() {
        super("Town");

        /** @type {Phaser.GameObjects.Ellipse} */
        this.free_item;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'dock': () => this.triggerRoom(800, 1200, 400),
            'forts': () => this.triggerRoom(801, 360, 520),
            'coffee': () => this.triggerRoom(110, 700, 450),
            'dance': () => this.triggerRoom(120, 300, 560),
            'gift': () => this.triggerRoom(130, 1036, 520),
        }
        this.music = 'town'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("town-mj-2022-pack", "assets/media/rooms/old/town/mj/town-mj-2022-pack.json");
    }

    /** @returns {void} */
    _create() {

        // its_a_sky_lol_png
        this.add.image(761, 394, "town-mj-2022", "its_a_sky_lol.png");

        // bg_png
        this.add.image(773, 503, "town-mj-2022", "bg.png");

        // right_png
        this.add.image(1327, 515, "town-mj-2022", "right.png");

        // box2_png
        this.add.image(1289, 581, "town-mj-2022", "box2.png");

        // box1_png
        this.add.image(1235, 610, "town-mj-2022", "box1.png");

        // boombox_png
        this.add.image(1122, 615, "town-mj-2022", "boombox.png");

        // left_png
        this.add.image(134, 444, "town-mj-2022", "left.png");

        // fg_png
        this.add.image(796, 690, "town-mj-2022", "fg.png");

        // chair_png
        const chair_png = this.add.image(311, 567, "town-mj-2022", "chair.png");

        // table1_png
        const table1_png = this.add.image(373, 580, "town-mj-2022", "table1.png");

        // chair_png_1
        const chair_png_1 = this.add.image(328, 681, "town-mj-2022", "chair.png");

        // table2_png
        const table2_png = this.add.image(395, 710, "town-mj-2022", "table2.png");

        // free_item
        const free_item = this.add.ellipse(1121, 612, 128, 128);
        free_item.scaleX = 0.5598797556135802;
        free_item.scaleY = 0.7623470865408281;
        free_item.angle = 125;
        free_item.alpha = 0.0001;
        free_item.isFilled = true;
        free_item.fillAlpha = 0;

        // lists
        const sort = [table2_png, chair_png_1, chair_png, table1_png];

        this.free_item = free_item;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
        create() {
            super.create();
            this.roomZones = {
                'free_item': { 
                    key: this.free_item,
                    callback: () => this.interface.prompt.showItem(5016)
                }
            }

            super.addZones()
        }



    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
