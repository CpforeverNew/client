import RoomScene from '@scenes/rooms/RoomScene'

import { Animation } from '@components/components'


/* START OF COMPILED CODE */

export default class Shack extends RoomScene {

    constructor() {
        super("Shack");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'mine': () => this.triggerRoom(808, 1200, 400)
        }

        this.music = 254;

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("shack-holiday-pack", "assets/media/rooms/holiday_party/shack/shack-holiday-pack.json");
        this.load.pack("sky-holiday", "assets/media/rooms/holiday_party/sky/sky-holiday.json");
    }

    /** @returns {void} */
    _create() {

        // sky
        const sky = this.add.image(773, 187, "sky", "sky");
        sky.scaleX = 1.0549906592236395;
        sky.scaleY = 1.0549906592236395;

        // aurora_4
        const aurora_4 = this.add.sprite(1272, 37, "sky", "aurora0001");
        aurora_4.flipX = true;

        // aurora_3
        const aurora_3 = this.add.sprite(1534, 235, "sky", "aurora0001");

        // aurora_1
        const aurora_1 = this.add.sprite(956, 104, "sky", "aurora0001");

        // aurora_2
        const aurora_2 = this.add.sprite(1404, 159, "sky", "aurora0001");

        // aurora
        const aurora = this.add.sprite(632, 112, "sky", "aurora0001");

        // aurora0001
        const aurora0001 = this.add.sprite(299, 127, "sky", "aurora0001");

        // bg_png
        const bg_png = this.add.image(750, 507, "shack-holiday", "bg.png");
        bg_png.scaleX = 1.0165268065931263;
        bg_png.scaleY = 1.0165268065931263;

        // tracks_png
        this.add.image(658, 566, "shack-holiday", "tracks.png");

        // mineshack_png
        const mineshack_png = this.add.image(741.33891793962, 467.16775303990903, "shack-holiday", "mineshack.png");
        mineshack_png.setOrigin(0.2437125388872312, 0.8140071290312023);

        // frontcart_png
        const frontcart_png = this.add.image(621, 536, "shack-holiday", "frontcart.png");

        // backcart_png
        const backcart_png = this.add.image(519, 578, "shack-holiday", "backcart.png");

        // pile_topl_png
        const pile_topl_png = this.add.image(695.2497305073299, 601.3523339756068, "shack-holiday", "pile topl.png");
        pile_topl_png.setOrigin(0.5953911908859197, 0.4746512919324127);

        // pile_topr_png
        const pile_topr_png = this.add.image(793, 609.6134648683009, "shack-holiday", "pile topr.png");
        pile_topr_png.setOrigin(0.5, 0.6098444016262111);

        // pile_barrel_png
        const pile_barrel_png = this.add.image(740, 613, "shack-holiday", "pile barrel.png");
        pile_barrel_png.setOrigin(0.5, 0.6044861381322489);

        // pile_bl_png
        const pile_bl_png = this.add.image(691.8517949902667, 634.6932675658495, "shack-holiday", "pile bl.png");
        pile_bl_png.setOrigin(0.6235749518294879, 0.4450777991868931);

        // pile_b_png
        const pile_b_png = this.add.image(742, 657, "shack-holiday", "pile b.png");

        // greenpresent_png
        const greenpresent_png = this.add.image(899.506711407587, 593.3461044995618, "shack-holiday", "greenpresent.png");
        greenpresent_png.setOrigin(0.5223811555907371, 0.5587484381338729);

        // top_pile_left_png
        const top_pile_left_png = this.add.image(815.636265639029, 632.7616698780341, "shack-holiday", "top pile left.png");
        top_pile_left_png.setOrigin(0.525594812029408, 0.34157057457757933);

        // right_png
        const right_png = this.add.image(1407.4192812216954, 840.8385624433911, "shack-holiday", "right.png");
        right_png.setOrigin(0.6397516345282936, 0.6953517471900883);

        // left_png
        const left_png = this.add.image(186.60442161373277, 765.3958772445714, "shack-holiday", "left.png");
        left_png.setOrigin(0.6574366831761531, 0.5128847783816475);

        // top_pile_right_png
        const top_pile_right_png = this.add.image(637.2014151977722, 422.07855142824104, "shack-holiday", "top pile right.png");
        top_pile_right_png.setOrigin(0.6281469259758357, 0.6913120394751802);

        // pile_barrel_png_1
        const pile_barrel_png_1 = this.add.image(599.8078493703915, 437.83333196631804, "shack-holiday", "pile barrel.png");
        pile_barrel_png_1.setOrigin(0.570703695991381, 0.7906503019865488);

        // top_pile_left_png_1
        const top_pile_left_png_1 = this.add.image(569, 449.3857109906406, "shack-holiday", "top pile left.png");
        top_pile_left_png_1.setOrigin(0.5, 0.3920329036661649);

        // lists
        const sort = [pile_barrel_png, pile_topr_png, top_pile_left_png, pile_b_png, pile_bl_png, pile_topl_png, greenpresent_png, pile_barrel_png_1, top_pile_left_png_1, top_pile_right_png, mineshack_png, frontcart_png, backcart_png, left_png, right_png];

        // aurora_4 (components)
        const aurora_4Animation = new Animation(aurora_4);
        aurora_4Animation.key = "aurora";
        aurora_4Animation.end = 100;

        // aurora_3 (components)
        const aurora_3Animation = new Animation(aurora_3);
        aurora_3Animation.key = "aurora";
        aurora_3Animation.end = 100;

        // aurora_1 (components)
        const aurora_1Animation = new Animation(aurora_1);
        aurora_1Animation.key = "aurora";
        aurora_1Animation.end = 100;

        // aurora_2 (components)
        const aurora_2Animation = new Animation(aurora_2);
        aurora_2Animation.key = "aurora";
        aurora_2Animation.end = 100;

        // aurora (components)
        const auroraAnimation = new Animation(aurora);
        auroraAnimation.key = "aurora";
        auroraAnimation.end = 100;

        // aurora0001 (components)
        const aurora0001Animation = new Animation(aurora0001);
        aurora0001Animation.key = "aurora";
        aurora0001Animation.end = 100;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
