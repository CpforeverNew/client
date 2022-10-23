
import RoomScene from '@scenes/rooms/RoomScene'

/* START OF COMPILED CODE */

export default class CircusInt extends RoomScene {

    constructor() {
        super("CircusInt");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'circusext': () => this.triggerRoom(809, 1120, 800),
        }
        this.music = 252;
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("circusint-pack", "assets/media/rooms/spooky_fair/circusint/circusint-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(760, 480, "circusint", "bg");
        bg.tintTopLeft = 10526623;
        bg.tintTopRight = 10526623;
        bg.tintBottomLeft = 10526623;
        bg.tintBottomRight = 10526623;

        // seatright_7
        const seatright_7 = this.add.image(1301, 778, "circusint", "seatright");
        seatright_7.setOrigin(0.5, -0.789155481569729);

        // fchair_3
        const fchair_3 = this.add.image(1465.765031077915, 650.9454040128935, "circusint", "fchair1");
        fchair_3.setOrigin(0.4705925141830915, 0.20945404012893504);
        fchair_3.flipX = true;

        // seatleft_14
        const seatleft_14 = this.add.image(1376, 736, "circusint", "seatleft");
        seatleft_14.setOrigin(0.41546521432329786, -1.111444351962163);
        seatleft_14.flipX = true;

        // fchair_2
        const fchair_2 = this.add.image(1448, 707.0628884739361, "circusint", "fchair1");
        fchair_2.setOrigin(0.5, 0.2206288847393614);
        fchair_2.flipX = true;

        // chairleft_13
        const chairleft_13 = this.add.image(1383, 790, "circusint", "chairleft");
        chairleft_13.setOrigin(0.4470613120862077, 0.5639055201700804);
        chairleft_13.flipX = true;

        // chairleft_15
        const chairleft_15 = this.add.image(1306, 826, "circusint", "chairleft");
        chairleft_15.setOrigin(0.4504827268794341, 0.5810156472493014);
        chairleft_15.flipX = true;

        // seatleft_17
        const seatleft_17 = this.add.image(1472.7108330877475, 883.4698756734126, "circusint", "seatleft");
        seatleft_17.setOrigin(0.4999999999999963, -0.18486384958391966);
        seatleft_17.flipX = true;

        // seatleft_15
        const seatleft_15 = this.add.image(1352.1082940252475, 849.2169316975591, "circusint", "seatleft");
        seatleft_15.setOrigin(0.28866303580823904, -0.30572217598108153);
        seatleft_15.flipX = true;

        // seatright_8
        const seatright_8 = this.add.image(1222, 804, "circusint", "seatright");
        seatright_8.setOrigin(0.5, -0.9905860255650012);

        // seatright
        const seatright = this.add.image(1407.1085438812138, 820.5060048187138, "circusint", "seatright");
        seatright.setOrigin(0.28866303580823904, -0.2654360671820264);

        // chairleft_8
        const chairleft_8 = this.add.image(1235, 874, "circusint", "chairleft");
        chairleft_8.setOrigin(0.4810380822535056, 0.7678090370881471);
        chairleft_8.flipX = true;

        // chairleft_11
        const chairleft_11 = this.add.image(1437.5574660284447, 851.200303094459, "circusint", "chairleft");
        chairleft_11.setOrigin(0.5506377353561094, 0.5607872364497152);
        chairleft_11.flipX = true;

        // seatleft_16
        const seatleft_16 = this.add.image(1278.530029296875, 742.1687723161504, "circusint", "seatleft");
        seatleft_16.setOrigin(0.24639564296988983, -4.213474729489327);
        seatleft_16.flipX = true;

        // chairleft_12
        const chairleft_12 = this.add.image(1369, 894.1159994285968, "circusint", "chairleft");
        chairleft_12.setOrigin(0.5, 0.6579999943980074);
        chairleft_12.flipX = true;

        // seatleft_13
        const seatleft_13 = this.add.image(1394.867460217332, 902.0843446560528, "circusint", "seatleft");
        seatleft_13.setOrigin(0.5634010892575275, -0.18486384958391966);
        seatleft_13.flipX = true;

        // seatleft_6
        const seatleft_6 = this.add.image(77.57831096313946, 839.7228411890682, "circusint", "seatleft");
        seatleft_6.setOrigin(0.5056285580500712, 1.2249471049309832);

        // seatleft_8
        const seatleft_8 = this.add.image(319.71084737610096, 779.9640113096501, "circusint", "seatleft");
        seatleft_8.setOrigin(0.47886630358082355, -1.5948776575508106);

        // seatleft_9
        const seatleft_9 = this.add.image(243.0767712542795, 761.1149307353257, "circusint", "seatleft");
        seatleft_9.setOrigin(0.51765200905507, -1.1526590799054155);

        // seatleft_10
        const seatleft_10 = this.add.image(171.8283205065871, 738.225549811852, "circusint", "seatleft");
        seatleft_10.setOrigin(0.49718572097496416, -1.1492002411544746);

        // seatleft_2
        const seatleft_2 = this.add.image(39, 839, "circusint", "seatleft");
        seatleft_2.setOrigin(0.4549183281366127, -1.659558570426487);

        // seatleft_3
        const seatleft_3 = this.add.image(109.15669919065974, 883.2947374479675, "circusint", "seatleft");
        seatleft_3.setOrigin(0.4042080982231536, -0.9907888790169928);

        // seatleft_5
        const seatleft_5 = this.add.image(266.7650451660156, 846.60491811203, "circusint", "seatleft");
        seatleft_5.setOrigin(0.46336116521171966, -1.3560969312672135);

        // chairleft_1
        const chairleft_1 = this.add.image(67.57831096313947, 833.156621926279, "circusint", "chairleft");
        chairleft_1.setOrigin(0.5734145646698737, 0.7480551099218126);

        // seatleft_4
        const seatleft_4 = this.add.image(161.86746644470918, 799.9879456639122, "circusint", "seatleft");
        seatleft_4.setOrigin(0.5211336964191755, -1.2862541524520523);

        // chairleft_4
        const chairleft_4 = this.add.image(268.02343178465856, 948.438764592257, "circusint", "chairleft");
        chairleft_4.setOrigin(0.622482764511919, 0.9356741142964189);

        // chairleft_7
        const chairleft_7 = this.add.image(166.26014852356192, 839.966682865664, "circusint", "chairleft");
        chairleft_7.setOrigin(0.4695572847157839, 1.058497031536306);

        // chairleft
        const chairleft = this.add.image(233.26014852356192, 860.3303885040871, "circusint", "chairleft");
        chairleft.setOrigin(0.4695572847157839, 0.9542194758751512);

        // chairleft_5
        const chairleft_5 = this.add.image(158, 880, "circusint", "chairleft");
        chairleft_5.setOrigin(0.6145915983617537, 0.7570309378976501);

        // fchair1
        const fchair1 = this.add.image(75.73493337463614, 673.2168641375333, "circusint", "fchair1");
        fchair1.setOrigin(0.6017754327555052, 0.2421689036860539);

        // chairleft_2
        const chairleft_2 = this.add.image(305.9855041503906, 887.1882929449956, "circusint", "chairleft");
        chairleft_2.setOrigin(0.4776166674602823, 0.9234143582505993);

        // chairleft_3
        const chairleft_3 = this.add.image(38.31815481018301, 954.6485356848755, "circusint", "chairleft");
        chairleft_3.setOrigin(0.5590906148746546, 1.006358253705728);

        // chairleft_6
        const chairleft_6 = this.add.image(111.89646577332248, 967.0751280499667, "circusint", "chairleft");
        chairleft_6.setOrigin(0.587738514465093, 0.9321092392255481);

        // fchair
        const fchair = this.add.image(106.73493051696542, 736.3734712634231, "circusint", "fchair1");
        fchair.setOrigin(0.6017754327555052, 0.2937351229488433);

        // chairleft_9
        const chairleft_9 = this.add.image(1292.927500357127, 919.1594992143205, "circusint", "chairleft");
        chairleft_9.setOrigin(0.3880833373014108, 0.7172499922972596);
        chairleft_9.flipX = true;

        // chairleft_10
        const chairleft_10 = this.add.image(1394.971000142851, 939.1449992857459, "circusint", "chairleft");
        chairleft_10.setOrigin(0.45523333492056584, 0.6974999929975092);
        chairleft_10.flipX = true;

        // chairleft_14
        const chairleft_14 = this.add.image(1470.686767578125, 915.5301513671875, "circusint", "chairleft");
        chairleft_14.setOrigin(0.3854084016382457, 0.6050846401238524);
        chairleft_14.flipX = true;

        // lists
        const sort = [chairleft_2, chairleft_4, chairleft_5, chairleft_1, chairleft, chairleft_3, chairleft_6, chairleft_7, chairleft_11, chairleft_12, chairleft_15, chairleft_8, chairleft_9, chairleft_13, chairleft_14, chairleft_10, fchair_2, fchair_3, seatright_7, seatright_8, seatleft_5, seatleft_4, seatleft_10, seatleft_8, seatleft_9, fchair1, fchair, seatright, seatleft_15, seatleft_16, seatleft_13, seatleft_17, seatleft_14];

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    create() {

        super.create();
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
