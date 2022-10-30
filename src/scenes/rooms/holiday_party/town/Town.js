import RoomScene from '@scenes/rooms/RoomScene'

import {
    MoveTo,
    Button,
    SimpleButton,
    ShowHint,
    Animation
} from '@components/components'
// You can write more code here

/* START OF COMPILED CODE */

export default class Town extends RoomScene {

    constructor() {
        super("Town");

        /** @type {Phaser.GameObjects.Sprite} */
        this.lantern0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.giftdoor0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.coffeedoor0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.lantern;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.rLanternToggle = false
        this.lLanternToggle = false
        this.roomTriggers = {
            'dock': () => this.triggerRoom(800, 1200, 400),
            'forts': () => this.triggerRoom(801, 360, 520),
            'coffee': () => this.triggerRoom(110, 700, 450),
            'dance': () => this.triggerRoom(120, 300, 560),
            'shop': () => this.triggerRoom(130, 1036, 520),
        }
        //this.roomAnims = true;
        this.music = 254;
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("sky-holiday", "assets/media/rooms/holiday_party/sky/sky-holiday.json");
        this.load.pack("town-holiday-pack", "assets/media/rooms/holiday_party/town/town-holiday-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky
        this.add.image(760, 222, "sky", "sky");

        // aurora0001
        const aurora0001 = this.add.sprite(302, 166, "sky", "aurora0001");

        // aurora
        const aurora = this.add.sprite(1299, 208, "sky", "aurora0001");

        // bg
        this.add.image(760, 480, "town-holiday", "bg");

        // bluelight0001
        const bluelight0001 = this.add.sprite(426, 401, "town-holiday", "bluelight0001");
        bluelight0001.scaleX = 0.8;
        bluelight0001.scaleY = 0.8;

        // greenlight0001
        const greenlight0001 = this.add.sprite(362, 431, "town-holiday", "greenlight0001");
        greenlight0001.scaleX = 0.8;
        greenlight0001.scaleY = 0.8;

        // orangelight0001
        const orangelight0001 = this.add.sprite(342, 439, "town-holiday", "orangelight0001");
        orangelight0001.scaleX = 0.8;
        orangelight0001.scaleY = 0.8;
        orangelight0001.angle = 44;

        // purplelight0001
        const purplelight0001 = this.add.sprite(383, 421, "town-holiday", "purplelight0001");
        purplelight0001.scaleX = 0.8;
        purplelight0001.scaleY = 0.8;

        // rcandycanecanopy
        const rcandycanecanopy = this.add.image(725.3695551618886, 455.4185008857507, "town-holiday", "rcandycanecanopy");
        rcandycanecanopy.setOrigin(0.2523442188605602, 0.7813712958985217);

        // lcandycanecanopy
        const lcandycanecanopy = this.add.image(654.6304448381114, 458.5761120952786, "town-holiday", "lcandycanecanopy");
        lcandycanecanopy.setOrigin(0.757764180369621, 0.8065641950997919);

        // redlight0001
        const redlight0001 = this.add.sprite(448, 393, "town-holiday", "redlight0001");
        redlight0001.scaleX = 0.8;
        redlight0001.scaleY = 0.8;

        // canopy
        const canopy = this.add.image(685.6847534179688, 431.3587773576427, "town-holiday", "canopy");
        canopy.setOrigin(0.451044787449181, 1.332238613363931);

        // yellowlight0001
        const yellowlight0001 = this.add.sprite(406, 409, "town-holiday", "yellowlight0001");
        yellowlight0001.scaleX = 0.8;
        yellowlight0001.scaleY = 0.8;
        yellowlight0001.angle = 33;

        // fg
        const fg = this.add.image(765.8722969435277, 971.6191830666276, "town-holiday", "fg");
        fg.setOrigin(0.4842646734011181, 0.9919206952952365);

        // lantern0001
        const lantern0001 = this.add.sprite(274, 1000, "town-holiday", "lantern0001");
        lantern0001.setOrigin(0.591351085937634, 3.513405456415751);

        // cfc0001
        const cfc0001 = this.add.sprite(964, 813.4002141401771, "town-holiday", "cfc0001");
        cfc0001.setOrigin(0.5, 0.9212132027281673);

        // cfcfrontleg
        const cfcfrontleg = this.add.image(952.721505434166, 823.3393543530055, "town-holiday", "cfcfrontleg");
        cfcfrontleg.setOrigin(0.34004561921715254, 0.8410719565615812);

        // giftdoor0001
        const giftdoor0001 = this.add.sprite(1085, 391, "town-holiday", "giftdoor0001");

        // joy
        this.add.image(1136, 349, "town-holiday", "joy");

        // santashirt
        this.add.image(1012, 374, "town-holiday", "santashirt");

        // redpresent
        const redpresent = this.add.image(1139, 590, "town-holiday", "redpresent");
        redpresent.setOrigin(0.5441768533553395, 0.5471219769123625);

        // coffeedoor0001
        const coffeedoor0001 = this.add.sprite(514, 378, "town-holiday", "coffeedoor0001");

        // trees0017
        const trees0017 = this.add.sprite(688.5787871686736, 463.20116167666447, "town-holiday", "trees0017");
        trees0017.setOrigin(0.5173495121402631, 2.8682084071458926);

        // pinkpresent
        const pinkpresent = this.add.image(909, 466, "town-holiday", "pinkpresent");
        pinkpresent.setOrigin(0.4538664293523831, 0.5349010490986322);

        // lantern
        const lantern = this.add.sprite(1326.720443926511, 1018.5806658897665, "town-holiday", "lantern0001");
        lantern.setOrigin(0.552446030724098, 3.4492121153134154);
        lantern.flipX = true;

        // orangelight
        const orangelight = this.add.sprite(467, 383, "town-holiday", "orangelight0001");
        orangelight.scaleX = 0.8;
        orangelight.scaleY = 0.8;
        orangelight.angle = 42;

        // greenlight
        const greenlight = this.add.sprite(483, 372, "town-holiday", "greenlight0001");
        greenlight.scaleX = 0.8;
        greenlight.scaleY = 0.8;

        // purplelight
        const purplelight = this.add.sprite(504, 363, "town-holiday", "purplelight0001");
        purplelight.scaleX = 0.8;
        purplelight.scaleY = 0.8;

        // yellowlight
        const yellowlight = this.add.sprite(524, 356, "town-holiday", "yellowlight0001");
        yellowlight.scaleX = 0.8;
        yellowlight.scaleY = 0.8;
        yellowlight.angle = 40;

        // bluelight
        const bluelight = this.add.sprite(545, 352, "town-holiday", "bluelight0001");
        bluelight.scaleX = 0.8;
        bluelight.scaleY = 0.8;

        // redlight
        const redlight = this.add.sprite(562, 348, "town-holiday", "redlight0001");
        redlight.scaleX = 0.8;
        redlight.scaleY = 0.8;

        // orangelight_1
        const orangelight_1 = this.add.sprite(579, 344, "town-holiday", "orangelight0001");
        orangelight_1.scaleX = 0.8;
        orangelight_1.scaleY = 0.8;

        // greenlight_1
        const greenlight_1 = this.add.sprite(599, 338, "town-holiday", "greenlight0001");
        greenlight_1.scaleX = 0.8;
        greenlight_1.scaleY = 0.8;

        // purplelight_1
        const purplelight_1 = this.add.sprite(618, 334, "town-holiday", "purplelight0001");
        purplelight_1.scaleX = 0.8;
        purplelight_1.scaleY = 0.8;

        // bluelight_1
        const bluelight_1 = this.add.sprite(256, 180, "town-holiday", "bluelight0001");
        bluelight_1.scaleX = 0.8;
        bluelight_1.scaleY = 0.8;

        // orangelight_2
        const orangelight_2 = this.add.sprite(299, 162, "town-holiday", "orangelight0001");
        orangelight_2.scaleX = 0.8;
        orangelight_2.scaleY = 0.8;
        orangelight_2.angle = 64;

        // greenlight_2
        const greenlight_2 = this.add.sprite(203, 201, "town-holiday", "greenlight0001");
        greenlight_2.scaleX = 0.8;
        greenlight_2.scaleY = 0.8;
        greenlight_2.angle = 21;

        // purplelight_2
        const purplelight_2 = this.add.sprite(221, 194, "town-holiday", "purplelight0001");
        purplelight_2.scaleX = 0.8;
        purplelight_2.scaleY = 0.8;

        // redlight_1
        const redlight_1 = this.add.sprite(277, 173, "town-holiday", "redlight0001");
        redlight_1.scaleX = 0.8;
        redlight_1.scaleY = 0.8;

        // yellowlight_1
        const yellowlight_1 = this.add.sprite(238, 186, "town-holiday", "yellowlight0001");
        yellowlight_1.scaleX = 0.8;
        yellowlight_1.scaleY = 0.8;
        yellowlight_1.angle = 25;

        // greenlight_3
        const greenlight_3 = this.add.sprite(319, 157, "town-holiday", "greenlight0001");
        greenlight_3.scaleX = 0.8;
        greenlight_3.scaleY = 0.8;
        greenlight_3.angle = 20;

        // purplelight_3
        const purplelight_3 = this.add.sprite(342, 152, "town-holiday", "purplelight0001");
        purplelight_3.scaleX = 0.8;
        purplelight_3.scaleY = 0.8;

        // yellowlight_2
        const yellowlight_2 = this.add.sprite(358, 139, "town-holiday", "yellowlight0001");
        yellowlight_2.scaleX = 0.8;
        yellowlight_2.scaleY = 0.8;
        yellowlight_2.angle = 30;

        // redlight_2
        const redlight_2 = this.add.sprite(386, 105, "town-holiday", "redlight0001");
        redlight_2.scaleX = 0.8;
        redlight_2.scaleY = 0.8;

        // bluelight_2
        const bluelight_2 = this.add.sprite(372, 123, "town-holiday", "bluelight0001");
        bluelight_2.scaleX = 0.8;
        bluelight_2.scaleY = 0.8;

        // orangelight_4
        const orangelight_4 = this.add.sprite(400, 87, "town-holiday", "orangelight0001");
        orangelight_4.scaleX = 0.8;
        orangelight_4.scaleY = 0.8;
        orangelight_4.angle = 26;

        // greenlight_4
        const greenlight_4 = this.add.sprite(414, 71, "town-holiday", "greenlight0001");
        greenlight_4.scaleX = 0.8;
        greenlight_4.scaleY = 0.8;
        greenlight_4.angle = 22;

        // purplelight_4
        const purplelight_4 = this.add.sprite(429, 56, "town-holiday", "purplelight0001");
        purplelight_4.scaleX = 0.8;
        purplelight_4.scaleY = 0.8;

        // redlight_3
        const redlight_3 = this.add.sprite(482, 35, "town-holiday", "redlight0001");
        redlight_3.scaleX = 0.8;
        redlight_3.scaleY = 0.8;
        redlight_3.angle = 19;

        // greenlight_5
        const greenlight_5 = this.add.sprite(513, 55, "town-holiday", "greenlight0001");
        greenlight_5.scaleX = 0.8;
        greenlight_5.scaleY = 0.8;
        greenlight_5.angle = 41;

        // purplelight_5
        const purplelight_5 = this.add.sprite(529, 67, "town-holiday", "purplelight0001");
        purplelight_5.scaleX = 0.8;
        purplelight_5.scaleY = 0.8;
        purplelight_5.angle = 48;

        // yellowlight_3
        const yellowlight_3 = this.add.sprite(446, 38, "town-holiday", "yellowlight0001");
        yellowlight_3.scaleX = 0.8;
        yellowlight_3.scaleY = 0.8;
        yellowlight_3.angle = 27;

        // bluelight_3
        const bluelight_3 = this.add.sprite(465, 27, "town-holiday", "bluelight0001");
        bluelight_3.scaleX = 0.8;
        bluelight_3.scaleY = 0.8;
        bluelight_3.angle = 6;

        // orangelight_6
        const orangelight_6 = this.add.sprite(496, 45, "town-holiday", "orangelight0001");
        orangelight_6.scaleX = 0.8;
        orangelight_6.scaleY = 0.8;
        orangelight_6.angle = 55;

        // yellowlight_4
        const yellowlight_4 = this.add.sprite(595, 165, "town-holiday", "yellowlight0001");
        yellowlight_4.scaleX = 0.6;
        yellowlight_4.scaleY = 0.6;
        yellowlight_4.angle = 23;

        // purplelight_8
        const purplelight_8 = this.add.sprite(588, 182, "town-holiday", "purplelight0001");
        purplelight_8.scaleX = 0.6;
        purplelight_8.scaleY = 0.6;
        purplelight_8.angle = -11;

        // greenlight_8
        const greenlight_8 = this.add.sprite(586, 201, "town-holiday", "greenlight0001");
        greenlight_8.scaleX = 0.6;
        greenlight_8.scaleY = 0.6;
        greenlight_8.angle = -9;

        // orangelight_8
        const orangelight_8 = this.add.sprite(582, 217, "town-holiday", "orangelight0001");
        orangelight_8.scaleX = 0.6;
        orangelight_8.scaleY = 0.6;
        orangelight_8.angle = -6;

        // redlight_4
        const redlight_4 = this.add.sprite(625, 196, "town-holiday", "redlight0001");
        redlight_4.scaleX = 0.6;
        redlight_4.scaleY = 0.6;
        redlight_4.angle = 17;

        // orangelight_9
        const orangelight_9 = this.add.sprite(639, 206, "town-holiday", "orangelight0001");
        orangelight_9.scaleX = 0.6;
        orangelight_9.scaleY = 0.6;
        orangelight_9.angle = 62;

        // bluelight_4
        const bluelight_4 = this.add.sprite(607, 181, "town-holiday", "bluelight0001");
        bluelight_4.scaleX = 0.6;
        bluelight_4.scaleY = 0.6;
        bluelight_4.angle = 11;

        // orangelight_7
        const orangelight_7 = this.add.sprite(976, 214, "town-holiday", "orangelight0001");
        orangelight_7.scaleX = 0.6;
        orangelight_7.scaleY = 0.6;
        orangelight_7.angle = 64;

        // redlight_5
        const redlight_5 = this.add.sprite(972, 199, "town-holiday", "redlight0001");
        redlight_5.scaleX = 0.6;
        redlight_5.scaleY = 0.6;
        redlight_5.angle = 30;

        // bluelight_5
        const bluelight_5 = this.add.sprite(956, 194, "town-holiday", "bluelight0001");
        bluelight_5.scaleX = 0.6;
        bluelight_5.scaleY = 0.6;
        bluelight_5.angle = 28;

        // yellowlight_5
        const yellowlight_5 = this.add.sprite(967, 187, "town-holiday", "yellowlight0001");
        yellowlight_5.scaleX = 0.6;
        yellowlight_5.scaleY = 0.6;
        yellowlight_5.angle = 39;

        // purplelight_7
        const purplelight_7 = this.add.sprite(946, 204, "town-holiday", "purplelight0001");
        purplelight_7.scaleX = 0.6;
        purplelight_7.scaleY = 0.6;
        purplelight_7.angle = 34;

        // greenlight_7
        const greenlight_7 = this.add.sprite(932, 210, "town-holiday", "greenlight0001");
        greenlight_7.scaleX = 0.6;
        greenlight_7.scaleY = 0.6;
        greenlight_7.angle = 36;

        // orangelight_10
        const orangelight_10 = this.add.sprite(921, 223, "town-holiday", "orangelight0001");
        orangelight_10.scaleX = 0.6;
        orangelight_10.scaleY = 0.6;
        orangelight_10.angle = 39;

        // redlight_6
        const redlight_6 = this.add.sprite(955, 87, "town-holiday", "redlight0001");
        redlight_6.scaleX = 0.3;
        redlight_6.scaleY = 0.3;
        redlight_6.angle = -5;
        redlight_6.setOrigin(1, 1);

        // yellowlight_6
        const yellowlight_6 = this.add.sprite(934, 87, "town-holiday", "yellowlight0001");
        yellowlight_6.scaleX = 0.3;
        yellowlight_6.scaleY = 0.3;
        yellowlight_6.angle = 39;
        yellowlight_6.setOrigin(1, 1);

        // bluelight_6
        const bluelight_6 = this.add.sprite(944, 88, "town-holiday", "bluelight0001");
        bluelight_6.scaleX = 0.3;
        bluelight_6.scaleY = 0.3;
        bluelight_6.angle = 28;
        bluelight_6.setOrigin(1, 1);

        // purplelight_9
        const purplelight_9 = this.add.sprite(925, 85, "town-holiday", "purplelight0001");
        purplelight_9.scaleX = 0.3;
        purplelight_9.scaleY = 0.3;
        purplelight_9.angle = 34;
        purplelight_9.setOrigin(1, 1);

        // greenlight_9
        const greenlight_9 = this.add.sprite(916, 82, "town-holiday", "greenlight0001");
        greenlight_9.scaleX = 0.3;
        greenlight_9.scaleY = 0.3;
        greenlight_9.angle = 36;
        greenlight_9.setOrigin(1, 1);

        // redstar0001
        const redstar0001 = this.add.sprite(955, 31, "town-holiday", "redstar0001");

        // orangelight_12
        const orangelight_12 = this.add.sprite(904, 78, "town-holiday", "orangelight0001");
        orangelight_12.scaleX = 0.3;
        orangelight_12.scaleY = 0.3;
        orangelight_12.angle = 66;
        orangelight_12.setOrigin(1, 1);

        // redlight_7
        const redlight_7 = this.add.sprite(958, 54, "town-holiday", "redlight0001");
        redlight_7.scaleX = 0.3;
        redlight_7.scaleY = 0.3;
        redlight_7.angle = -21;
        redlight_7.setOrigin(1, 1);

        // yellowlight_7
        const yellowlight_7 = this.add.sprite(937, 56, "town-holiday", "yellowlight0001");
        yellowlight_7.scaleX = 0.3;
        yellowlight_7.scaleY = 0.3;
        yellowlight_7.angle = 39;
        yellowlight_7.setOrigin(1, 1);

        // bluelight_7
        const bluelight_7 = this.add.sprite(946, 57, "town-holiday", "bluelight0001");
        bluelight_7.scaleX = 0.3;
        bluelight_7.scaleY = 0.3;
        bluelight_7.angle = 28;
        bluelight_7.setOrigin(1, 1);

        // orangelight_14
        const orangelight_14 = this.add.sprite(1077, 125, "town-holiday", "orangelight0001");
        orangelight_14.scaleX = 0.8;
        orangelight_14.scaleY = 0.8;
        orangelight_14.angle = 96;

        // greenlight_10
        const greenlight_10 = this.add.sprite(1095, 134, "town-holiday", "greenlight0001");
        greenlight_10.scaleX = 0.8;
        greenlight_10.scaleY = 0.8;
        greenlight_10.angle = 42;

        // purplelight_10
        const purplelight_10 = this.add.sprite(1114, 142, "town-holiday", "purplelight0001");
        purplelight_10.scaleX = 0.8;
        purplelight_10.scaleY = 0.8;
        purplelight_10.angle = 30;

        // yellowlight_8
        const yellowlight_8 = this.add.sprite(1132, 150, "town-holiday", "yellowlight0001");
        yellowlight_8.scaleX = 0.8;
        yellowlight_8.scaleY = 0.8;
        yellowlight_8.angle = 51;

        // bluelight_8
        const bluelight_8 = this.add.sprite(1149, 157, "town-holiday", "bluelight0001");
        bluelight_8.scaleX = 0.8;
        bluelight_8.scaleY = 0.8;
        bluelight_8.angle = 30;

        // redlight_8
        const redlight_8 = this.add.sprite(1166, 164, "town-holiday", "redlight0001");
        redlight_8.scaleX = 0.8;
        redlight_8.scaleY = 0.8;
        redlight_8.angle = 30;

        // orangelight_15
        const orangelight_15 = this.add.sprite(1182, 172, "town-holiday", "orangelight0001");
        orangelight_15.scaleX = 0.8;
        orangelight_15.scaleY = 0.8;
        orangelight_15.angle = 90;

        // greenlight_11
        const greenlight_11 = this.add.sprite(1197, 181, "town-holiday", "greenlight0001");
        greenlight_11.scaleX = 0.8;
        greenlight_11.scaleY = 0.8;
        greenlight_11.angle = 46;

        // purplelight_11
        const purplelight_11 = this.add.sprite(1213, 191, "town-holiday", "purplelight0001");
        purplelight_11.scaleX = 0.8;
        purplelight_11.scaleY = 0.8;
        purplelight_11.angle = 30;

        // yellowlight_9
        const yellowlight_9 = this.add.sprite(1227, 200, "town-holiday", "yellowlight0001");
        yellowlight_9.scaleX = 0.8;
        yellowlight_9.scaleY = 0.8;
        yellowlight_9.angle = 61;

        // bluelight_9
        const bluelight_9 = this.add.sprite(1241, 211, "town-holiday", "bluelight0001");
        bluelight_9.scaleX = 0.8;
        bluelight_9.scaleY = 0.8;
        bluelight_9.angle = 41;

        // redlight_9
        const redlight_9 = this.add.sprite(1255, 220, "town-holiday", "redlight0001");
        redlight_9.scaleX = 0.8;
        redlight_9.scaleY = 0.8;
        redlight_9.angle = 30;

        // orangelight_16
        const orangelight_16 = this.add.sprite(1271, 230, "town-holiday", "orangelight0001");
        orangelight_16.scaleX = 0.8;
        orangelight_16.scaleY = 0.8;
        orangelight_16.angle = 54;

        // greenlight_12
        const greenlight_12 = this.add.sprite(1286, 242, "town-holiday", "greenlight0001");
        greenlight_12.scaleX = 0.8;
        greenlight_12.scaleY = 0.8;
        greenlight_12.angle = 66;

        // purplelight_12
        const purplelight_12 = this.add.sprite(1300, 257, "town-holiday", "purplelight0001");
        purplelight_12.scaleX = 0.8;
        purplelight_12.scaleY = 0.8;
        purplelight_12.angle = 56;

        // yellowlight_10
        const yellowlight_10 = this.add.sprite(1426.2850913408506, 1032.3358396065662, "town-holiday", "yellowlight0001");
        yellowlight_10.angle = 59;
        yellowlight_10.setOrigin(9.395102316030012, 5.516704116285832);

        // orangelight_17
        const orangelight_17 = this.add.sprite(1508.34737626308, 1056.299742671986, "town-holiday", "orangelight0001");
        orangelight_17.angle = 91;
        orangelight_17.setOrigin(20.42982671453031, -1.848160978919168);

        // bluelight_10
        const bluelight_10 = this.add.sprite(1460, 1081.5067292682847, "town-holiday", "bluelight0001");
        bluelight_10.angle = 122;
        bluelight_10.setOrigin(24.35723232509657, -9.990570955121207);

        // orangelight_19
        const orangelight_19 = this.add.sprite(1452.1736711729377, 1072.7830993810453, "town-holiday", "orangelight0001");
        orangelight_19.angle = 168;
        orangelight_19.setOrigin(3.393180564146959, -17.38874489152903);

        // greenlight_15
        const greenlight_15 = this.add.sprite(1505.4877077092779, 1026.0103003309166, "town-holiday", "greenlight0001");
        greenlight_15.angle = 58;
        greenlight_15.setOrigin(17.169438085402568, 8.652760914483588);

        // purplelight_15
        const purplelight_15 = this.add.sprite(1406.2850913408506, 1044.233140666743, "town-holiday", "purplelight0001");
        purplelight_15.angle = 65;
        purplelight_15.setOrigin(17.39080659261298, 6.317000614682822);

        // yellowlight_12
        const yellowlight_12 = this.add.sprite(1454.458762513788, 1057.919104130403, "town-holiday", "yellowlight0001");
        yellowlight_12.angle = 56;
        yellowlight_12.setOrigin(14.506785583106835, 7.971609837539645);

        // purplelight_16
        const purplelight_16 = this.add.sprite(1516.3429817318302, 1053.5269532356842, "town-holiday", "purplelight0001");
        purplelight_16.angle = 16;
        purplelight_16.setOrigin(7.016799649679031, 16.312465139540045);

        // greenlight_18
        const greenlight_18 = this.add.sprite(1417.3719269273195, 1072.2953916717674, "town-holiday", "greenlight0001");
        greenlight_18.angle = 120;
        greenlight_18.setOrigin(16.607832850877994, -7.931997064557827);

        // orangelight_22
        const orangelight_22 = this.add.sprite(1533.0868355864689, 1090.522592621639, "town-holiday", "orangelight0001");
        orangelight_22.angle = 37;
        orangelight_22.setOrigin(11.321219870479284, 13.42506723210091);

        // greenlight_19
        const greenlight_19 = this.add.sprite(312, 745, "town-holiday", "greenlight0001");
        greenlight_19.angle = 37;

        // bluelight_13
        const bluelight_13 = this.add.sprite(137.95083083711114, 1036.8076839624896, "town-holiday", "bluelight0001");
        bluelight_13.setOrigin(5.023727938795323, 14.974358665277393);

        // orangelight_23
        const orangelight_23 = this.add.sprite(143.4052327368542, 1041.2287800526979, "town-holiday", "orangelight0001");
        orangelight_23.angle = 23;
        orangelight_23.setOrigin(8.027709894199143, 11.480325648488014);

        // yellowlight_15
        const yellowlight_15 = this.add.sprite(176.92188564162157, 1022.0725513359412, "town-holiday", "yellowlight0001");
        yellowlight_15.angle = 6;
        yellowlight_15.setOrigin(6.455780957874896, 19.01649416430407);

        // purplelight_18
        const purplelight_18 = this.add.sprite(126.7482144686841, 1039.81640519058, "town-holiday", "purplelight0001");
        purplelight_18.angle = 8;
        purplelight_18.setOrigin(7.061032659977741, 17.983748668612346);

        // greenlight_20
        const greenlight_20 = this.add.sprite(99.74821446868415, 1018.671679213132, "town-holiday", "greenlight0001");
        greenlight_20.angle = 48;
        greenlight_20.setOrigin(17.952702072317344, 11.220430578992607);

        // yellowlight_16
        const yellowlight_16 = this.add.sprite(77.03330580953462, 1043.8076839624896, "town-holiday", "yellowlight0001");
        yellowlight_16.angle = 30;
        yellowlight_16.setOrigin(11.390908495852416, 13.017309270048987);

        // purplelight_19
        const purplelight_19 = this.add.sprite(36.60348849123608, 1046.46470223066, "town-holiday", "purplelight0001");
        purplelight_19.angle = 25;
        purplelight_19.setOrigin(10.956590642805532, 12.984554159240306);

        // greenlight_21
        const greenlight_21 = this.add.sprite(171.43417793234377, 1045.373506030146, "town-holiday", "greenlight0001");
        greenlight_21.angle = 2;
        greenlight_21.setOrigin(3.769419574764913, 13.622524988958343);

        // purplelight_20
        const purplelight_20 = this.add.sprite(242.4674837418784, 1088.2462225088786, "town-holiday", "purplelight0001");
        purplelight_20.angle = -57;
        purplelight_20.setOrigin(-18.297625961935328, 14.012920349057538);

        // greenlight_22
        const greenlight_22 = this.add.sprite(199.9797760326007, 1042.8120445765348, "town-holiday", "greenlight0001");
        greenlight_22.angle = -1;
        greenlight_22.setOrigin(4.242054414084874, 18.072628826163168);

        // purplelight_21
        const purplelight_21 = this.add.sprite(230.06661161906945, 1079.4068118396806, "town-holiday", "purplelight0001");
        purplelight_21.angle = -52;
        purplelight_21.setOrigin(-12.011272537094333, 12.175816999248847);

        // yellowlight_18
        const yellowlight_18 = this.add.sprite(240.40959335089934, 1026.8322685439343, "town-holiday", "yellowlight0001");
        yellowlight_18.angle = -55.00000000000006;
        yellowlight_18.setOrigin(-9.75519102081836, 11.868662738828734);

        // bluelight_14
        const bluelight_14 = this.add.sprite(43.37192692731947, 1021.9393280978022, "town-holiday", "bluelight0001");
        bluelight_14.angle = -12;
        bluelight_14.setOrigin(-2.1773158223942826, 10.3206439579611);

        // redlight_14
        const redlight_14 = this.add.sprite(45.37628754136466, 1032.618149436198, "town-holiday", "redlight0001");
        redlight_14.angle = 57;
        redlight_14.setOrigin(25.54977151158813, 8.727273686763654);

        // orangelight_26
        const orangelight_26 = this.add.sprite(81.1201413960035, 1021.7585147996008, "town-holiday", "orangelight0001");
        orangelight_26.angle = 65;
        orangelight_26.setOrigin(20.446333296751664, 6.511690519330357);

        // yellowlight_19
        const yellowlight_19 = this.add.sprite(47.26050675940628, 1029.9682732932915, "town-holiday", "yellowlight0001");
        yellowlight_19.angle = 37;
        yellowlight_19.setOrigin(9.310779971820903, 8.379146765299861);

        // orangelight_27
        const orangelight_27 = this.add.sprite(163.17803178698267, 1062.1839715038543, "town-holiday", "orangelight0001");
        orangelight_27.setOrigin(3.594697034216638, 18.965998812660597);

        // santasled
        const santasled = this.add.image(367.54923030735074, 1003.2349684766884, "town-holiday", "santasled");
        santasled.setOrigin(0.5219088290577206, 1.5307870999008018);

        // redlight_10
        const redlight_10 = this.add.sprite(1460.057861328125, 1055.8164130176285, "town-holiday", "redlight0001");
        redlight_10.angle = 106;
        redlight_10.setOrigin(26.267465896461367, -4.549259145837027);

        // bluelight_11
        const bluelight_11 = this.add.sprite(1475.7438964843748, 1054.6757996860902, "town-holiday", "bluelight0001");
        bluelight_11.angle = 23;
        bluelight_11.setOrigin(8.29378560864545, 12.402309972366785);

        // redlight_11
        const redlight_11 = this.add.sprite(1509.4298173182988, 1042.4603416166146, "town-holiday", "redlight0001");
        redlight_11.angle = 23;
        redlight_11.setOrigin(8.62067352698634, 11.57103414957986);

        // bluelight_12
        const bluelight_12 = this.add.sprite(1473.4298173182985, 1054.7656569248647, "town-holiday", "bluelight0001");
        bluelight_12.angle = 23;
        bluelight_12.setOrigin(6.204763231249073, 8.684482608791145);

        // redlight_12
        const redlight_12 = this.add.sprite(1484.3140365363404, 1032.5630405564375, "town-holiday", "redlight0001");
        redlight_12.angle = 37;
        redlight_12.setOrigin(7.654867084916355, 6.763215007264337);

        // orangelight_18
        const orangelight_18 = this.add.sprite(1523.0289451954895, 1017.1332232381387, "town-holiday", "orangelight0001");
        orangelight_18.angle = 37;
        orangelight_18.setOrigin(5.981221986432353, 7.191806593867194);

        // redlight_15
        const redlight_15 = this.add.sprite(132.77715966417364, 1048.9813551354273, "town-holiday", "redlight0001");
        redlight_15.angle = 3;
        redlight_15.setOrigin(5.133941354873339, 15.184981460276251);

        // redlight_16
        const redlight_16 = this.add.sprite(82.14472597744792, 1058.2577252481876, "town-holiday", "redlight0001");
        redlight_16.angle = 3;
        redlight_16.setOrigin(2.5313387696144383, 11.670455716961966);

        // yellowlight_11
        const yellowlight_11 = this.add.sprite(547, 77, "town-holiday", "yellowlight0001");
        yellowlight_11.scaleX = 0.8;
        yellowlight_11.scaleY = 0.8;
        yellowlight_11.angle = 38;

        // bluelight_15
        const bluelight_15 = this.add.sprite(564, 92, "town-holiday", "bluelight0001");
        bluelight_15.scaleX = 0.8;
        bluelight_15.scaleY = 0.8;
        bluelight_15.angle = 22;

        // redlight_13
        const redlight_13 = this.add.sprite(580, 101, "town-holiday", "redlight0001");
        redlight_13.scaleX = 0.8;
        redlight_13.scaleY = 0.8;
        redlight_13.angle = 19;

        // purplelight_6
        const purplelight_6 = this.add.sprite(927, 53, "town-holiday", "purplelight0001");
        purplelight_6.scaleX = 0.3;
        purplelight_6.scaleY = 0.3;
        purplelight_6.angle = 55;
        purplelight_6.setOrigin(1, 1);

        // greenlight_6
        const greenlight_6 = this.add.sprite(1268, 347, "town-holiday", "greenlight0001");
        greenlight_6.scaleX = 0.6;
        greenlight_6.scaleY = 0.6;
        greenlight_6.angle = 36;

        // purplelight_13
        const purplelight_13 = this.add.sprite(1283, 350, "town-holiday", "purplelight0001");
        purplelight_13.scaleX = 0.6;
        purplelight_13.scaleY = 0.6;
        purplelight_13.angle = 34;

        // bluelight_16
        const bluelight_16 = this.add.sprite(1317, 361, "town-holiday", "bluelight0001");
        bluelight_16.scaleX = 0.6;
        bluelight_16.scaleY = 0.6;
        bluelight_16.angle = 28;

        // yellowlight_13
        const yellowlight_13 = this.add.sprite(1300, 352, "town-holiday", "yellowlight0001");
        yellowlight_13.scaleX = 0.6;
        yellowlight_13.scaleY = 0.6;
        yellowlight_13.angle = 77;

        // yellowlight_14
        const yellowlight_14 = this.add.sprite(1398, 427, "town-holiday", "yellowlight0001");
        yellowlight_14.scaleX = 0.4;
        yellowlight_14.scaleY = 0.4;
        yellowlight_14.angle = 39;
        yellowlight_14.setOrigin(1, 1);

        // purplelight_14
        const purplelight_14 = this.add.sprite(1413, 422, "town-holiday", "purplelight0001");
        purplelight_14.scaleX = 0.4;
        purplelight_14.scaleY = 0.4;
        purplelight_14.angle = -11;
        purplelight_14.setOrigin(1, 1);

        // bluelight_17
        const bluelight_17 = this.add.sprite(1387, 426, "town-holiday", "bluelight0001");
        bluelight_17.scaleX = 0.4;
        bluelight_17.scaleY = 0.4;
        bluelight_17.angle = 28;
        bluelight_17.setOrigin(1, 1);

        // redlight_17
        const redlight_17 = this.add.sprite(1373, 421, "town-holiday", "redlight0001");
        redlight_17.scaleX = 0.4;
        redlight_17.scaleY = 0.4;
        redlight_17.angle = 55;
        redlight_17.setOrigin(1, 1);

        // greenlight_14
        const greenlight_14 = this.add.sprite(1417, 411, "town-holiday", "greenlight0001");
        greenlight_14.scaleX = 0.4;
        greenlight_14.scaleY = 0.4;
        greenlight_14.angle = -19;

        // greenlight_16
        const greenlight_16 = this.add.sprite(1369, 459, "town-holiday", "greenlight0001");
        greenlight_16.scaleX = 0.4;
        greenlight_16.scaleY = 0.4;
        greenlight_16.angle = 38;

        // purplelight_17
        const purplelight_17 = this.add.sprite(1355, 462, "town-holiday", "purplelight0001");
        purplelight_17.scaleX = 0.4;
        purplelight_17.scaleY = 0.4;
        purplelight_17.angle = 45;
        purplelight_17.setOrigin(1, 1);

        // yellowlight_17
        const yellowlight_17 = this.add.sprite(1344, 457, "town-holiday", "yellowlight0001");
        yellowlight_17.scaleX = 0.4;
        yellowlight_17.scaleY = 0.4;
        yellowlight_17.angle = 68;
        yellowlight_17.setOrigin(1, 1);

        // bluelight_18
        const bluelight_18 = this.add.sprite(1409, 464, "town-holiday", "bluelight0001");
        bluelight_18.scaleX = 0.4;
        bluelight_18.scaleY = 0.4;
        bluelight_18.angle = 12;
        bluelight_18.setOrigin(1, 1);

        // redlight_18
        const redlight_18 = this.add.sprite(1395, 467, "town-holiday", "redlight0001");
        redlight_18.scaleX = 0.4;
        redlight_18.scaleY = 0.4;
        redlight_18.angle = 28;
        redlight_18.setOrigin(1, 1);

        // orangelight_3
        const orangelight_3 = this.add.sprite(1383, 460, "town-holiday", "orangelight0001");
        orangelight_3.scaleX = 0.4;
        orangelight_3.scaleY = 0.4;
        orangelight_3.angle = 54;

        // yellowlight_20
        const yellowlight_20 = this.add.sprite(1418, 461, "town-holiday", "yellowlight0001");
        yellowlight_20.scaleX = 0.4;
        yellowlight_20.scaleY = 0.4;
        yellowlight_20.angle = 39;
        yellowlight_20.setOrigin(1, 1);

        // purplelight_22
        const purplelight_22 = this.add.sprite(1433, 455, "town-holiday", "purplelight0001");
        purplelight_22.scaleX = 0.4;
        purplelight_22.scaleY = 0.4;
        purplelight_22.angle = -11;
        purplelight_22.setOrigin(1, 1);

        // lists
        const sort = [fg, cfc0001, cfcfrontleg, lantern0001, redpresent, pinkpresent, yellowlight_12, purplelight_15, greenlight_15, orangelight_19, orangelight_17, yellowlight_10, bluelight_10, orangelight_22, greenlight_18, purplelight_16, greenlight_19, orangelight_23, bluelight_13, yellowlight_15, purplelight_18, greenlight_20, yellowlight_16, purplelight_19, purplelight_20, greenlight_22, purplelight_21, yellowlight_18, bluelight_14, redlight_14, orangelight_26, greenlight_21, orangelight_27, yellowlight_19, santasled, lantern, bluelight_11, redlight_11, redlight_10, orangelight_18, redlight_12, bluelight_12, redlight_16, redlight_15, canopy, trees0017, rcandycanecanopy, lcandycanecanopy];

        // aurora0001 (components)
        const aurora0001Animation = new Animation(aurora0001);
        aurora0001Animation.key = "aurora";
        aurora0001Animation.end = 100;

        // aurora (components)
        const auroraAnimation = new Animation(aurora);
        auroraAnimation.key = "aurora";
        auroraAnimation.end = 100;

        // bluelight0001 (components)
        const bluelight0001Animation = new Animation(bluelight0001);
        bluelight0001Animation.key = "bluelight";
        bluelight0001Animation.end = 12;

        // greenlight0001 (components)
        const greenlight0001Animation = new Animation(greenlight0001);
        greenlight0001Animation.key = "greenlight";
        greenlight0001Animation.end = 12;

        // orangelight0001 (components)
        const orangelight0001Animation = new Animation(orangelight0001);
        orangelight0001Animation.key = "orangelight";
        orangelight0001Animation.end = 12;

        // purplelight0001 (components)
        const purplelight0001Animation = new Animation(purplelight0001);
        purplelight0001Animation.key = "purplelight";
        purplelight0001Animation.end = 12;

        // redlight0001 (components)
        const redlight0001Animation = new Animation(redlight0001);
        redlight0001Animation.key = "redlight";
        redlight0001Animation.end = 12;

        // canopy (components)
        const canopyMoveTo = new MoveTo(canopy);
        canopyMoveTo.x = 688;
        canopyMoveTo.y = 401;

        // yellowlight0001 (components)
        const yellowlight0001Animation = new Animation(yellowlight0001);
        yellowlight0001Animation.key = "yellowlight";
        yellowlight0001Animation.end = 12;

        // lantern0001 (components)
        const lantern0001SimpleButton = new SimpleButton(lantern0001);
        lantern0001SimpleButton.callback = () => this.onLanternLeftClick();
        lantern0001SimpleButton.pixelPerfect = true;

        // cfc0001 (components)
        const cfc0001Animation = new Animation(cfc0001);
        cfc0001Animation.key = "cfc";
        cfc0001Animation.end = 40;
        cfc0001Animation.autoPlay = false;
        cfc0001Animation.onHover = true;
        const cfc0001SimpleButton = new SimpleButton(cfc0001);
        cfc0001SimpleButton.hoverCallback;
        cfc0001SimpleButton.hoverOutCallback;
        cfc0001SimpleButton.pixelPerfect = true;

        // giftdoor0001 (components)
        const giftdoor0001SimpleButton = new SimpleButton(giftdoor0001);
        giftdoor0001SimpleButton.hoverCallback = () => this.giftdoor0001.setFrame('giftdoor0002');
        giftdoor0001SimpleButton.hoverOutCallback = () => this.giftdoor0001.setFrame('giftdoor0001');
        giftdoor0001SimpleButton.pixelPerfect = true;
        const giftdoor0001MoveTo = new MoveTo(giftdoor0001);
        giftdoor0001MoveTo.x = 1034;
        giftdoor0001MoveTo.y = 462;

        // coffeedoor0001 (components)
        const coffeedoor0001SimpleButton = new SimpleButton(coffeedoor0001);
        coffeedoor0001SimpleButton.hoverCallback = () => this.coffeedoor0001.setFrame('coffeedoor0002');
        coffeedoor0001SimpleButton.hoverOutCallback = () => this.coffeedoor0001.setFrame('coffeedoor0001');
        coffeedoor0001SimpleButton.pixelPerfect = true;
        const coffeedoor0001MoveTo = new MoveTo(coffeedoor0001);
        coffeedoor0001MoveTo.x = 542;
        coffeedoor0001MoveTo.y = 439;

        // trees0017 (components)
        new SimpleButton(trees0017);
        const trees0017Animation = new Animation(trees0017);
        trees0017Animation.key = "trees";
        trees0017Animation.end = 72;
        trees0017Animation.autoPlay = false;
        trees0017Animation.onHover = true;
        const trees0017MoveTo = new MoveTo(trees0017);
        trees0017MoveTo.x = 688;
        trees0017MoveTo.y = 401;

        // lantern (components)
        const lanternSimpleButton = new SimpleButton(lantern);
        lanternSimpleButton.callback = (e) => this.onLanternRightClick();
        lanternSimpleButton.pixelPerfect = true;

        // orangelight (components)
        const orangelightAnimation = new Animation(orangelight);
        orangelightAnimation.key = "orangelight";
        orangelightAnimation.end = 12;

        // greenlight (components)
        const greenlightAnimation = new Animation(greenlight);
        greenlightAnimation.key = "greenlight";
        greenlightAnimation.end = 12;

        // purplelight (components)
        const purplelightAnimation = new Animation(purplelight);
        purplelightAnimation.key = "purplelight";
        purplelightAnimation.end = 12;

        // yellowlight (components)
        const yellowlightAnimation = new Animation(yellowlight);
        yellowlightAnimation.key = "yellowlight";
        yellowlightAnimation.end = 12;

        // bluelight (components)
        const bluelightAnimation = new Animation(bluelight);
        bluelightAnimation.key = "bluelight";
        bluelightAnimation.end = 12;

        // redlight (components)
        const redlightAnimation = new Animation(redlight);
        redlightAnimation.key = "redlight";
        redlightAnimation.end = 12;

        // orangelight_1 (components)
        const orangelight_1Animation = new Animation(orangelight_1);
        orangelight_1Animation.key = "orangelight";
        orangelight_1Animation.end = 12;

        // greenlight_1 (components)
        const greenlight_1Animation = new Animation(greenlight_1);
        greenlight_1Animation.key = "greenlight";
        greenlight_1Animation.end = 12;

        // purplelight_1 (components)
        const purplelight_1Animation = new Animation(purplelight_1);
        purplelight_1Animation.key = "purplelight";
        purplelight_1Animation.end = 12;

        // bluelight_1 (components)
        const bluelight_1Animation = new Animation(bluelight_1);
        bluelight_1Animation.key = "bluelight";
        bluelight_1Animation.end = 12;

        // orangelight_2 (components)
        const orangelight_2Animation = new Animation(orangelight_2);
        orangelight_2Animation.key = "orangelight";
        orangelight_2Animation.end = 12;

        // greenlight_2 (components)
        const greenlight_2Animation = new Animation(greenlight_2);
        greenlight_2Animation.key = "greenlight";
        greenlight_2Animation.end = 12;

        // purplelight_2 (components)
        const purplelight_2Animation = new Animation(purplelight_2);
        purplelight_2Animation.key = "purplelight";
        purplelight_2Animation.end = 12;

        // redlight_1 (components)
        const redlight_1Animation = new Animation(redlight_1);
        redlight_1Animation.key = "redlight";
        redlight_1Animation.end = 12;

        // yellowlight_1 (components)
        const yellowlight_1Animation = new Animation(yellowlight_1);
        yellowlight_1Animation.key = "yellowlight";
        yellowlight_1Animation.end = 12;

        // greenlight_3 (components)
        const greenlight_3Animation = new Animation(greenlight_3);
        greenlight_3Animation.key = "greenlight";
        greenlight_3Animation.end = 12;

        // purplelight_3 (components)
        const purplelight_3Animation = new Animation(purplelight_3);
        purplelight_3Animation.key = "purplelight";
        purplelight_3Animation.end = 12;

        // yellowlight_2 (components)
        const yellowlight_2Animation = new Animation(yellowlight_2);
        yellowlight_2Animation.key = "yellowlight";
        yellowlight_2Animation.end = 12;

        // redlight_2 (components)
        const redlight_2Animation = new Animation(redlight_2);
        redlight_2Animation.key = "redlight";
        redlight_2Animation.end = 12;

        // bluelight_2 (components)
        const bluelight_2Animation = new Animation(bluelight_2);
        bluelight_2Animation.key = "bluelight";
        bluelight_2Animation.end = 12;

        // orangelight_4 (components)
        const orangelight_4Animation = new Animation(orangelight_4);
        orangelight_4Animation.key = "orangelight";
        orangelight_4Animation.end = 12;

        // greenlight_4 (components)
        const greenlight_4Animation = new Animation(greenlight_4);
        greenlight_4Animation.key = "greenlight";
        greenlight_4Animation.end = 12;

        // purplelight_4 (components)
        const purplelight_4Animation = new Animation(purplelight_4);
        purplelight_4Animation.key = "purplelight";
        purplelight_4Animation.end = 12;

        // redlight_3 (components)
        const redlight_3Animation = new Animation(redlight_3);
        redlight_3Animation.key = "redlight";
        redlight_3Animation.end = 12;

        // greenlight_5 (components)
        const greenlight_5Animation = new Animation(greenlight_5);
        greenlight_5Animation.key = "greenlight";
        greenlight_5Animation.end = 12;

        // purplelight_5 (components)
        const purplelight_5Animation = new Animation(purplelight_5);
        purplelight_5Animation.key = "purplelight";
        purplelight_5Animation.end = 12;

        // yellowlight_3 (components)
        const yellowlight_3Animation = new Animation(yellowlight_3);
        yellowlight_3Animation.key = "yellowlight";
        yellowlight_3Animation.end = 12;

        // bluelight_3 (components)
        const bluelight_3Animation = new Animation(bluelight_3);
        bluelight_3Animation.key = "bluelight";
        bluelight_3Animation.end = 12;

        // orangelight_6 (components)
        const orangelight_6Animation = new Animation(orangelight_6);
        orangelight_6Animation.key = "orangelight";
        orangelight_6Animation.end = 12;

        // yellowlight_4 (components)
        const yellowlight_4Animation = new Animation(yellowlight_4);
        yellowlight_4Animation.key = "yellowlight";
        yellowlight_4Animation.end = 12;

        // purplelight_8 (components)
        const purplelight_8Animation = new Animation(purplelight_8);
        purplelight_8Animation.key = "purplelight";
        purplelight_8Animation.end = 12;

        // greenlight_8 (components)
        const greenlight_8Animation = new Animation(greenlight_8);
        greenlight_8Animation.key = "greenlight";
        greenlight_8Animation.end = 12;

        // orangelight_8 (components)
        const orangelight_8Animation = new Animation(orangelight_8);
        orangelight_8Animation.key = "orangelight";
        orangelight_8Animation.end = 12;

        // redlight_4 (components)
        const redlight_4Animation = new Animation(redlight_4);
        redlight_4Animation.key = "redlight";
        redlight_4Animation.end = 12;

        // orangelight_9 (components)
        const orangelight_9Animation = new Animation(orangelight_9);
        orangelight_9Animation.key = "orangelight";
        orangelight_9Animation.end = 12;

        // bluelight_4 (components)
        const bluelight_4Animation = new Animation(bluelight_4);
        bluelight_4Animation.key = "bluelight";
        bluelight_4Animation.end = 12;

        // orangelight_7 (components)
        const orangelight_7Animation = new Animation(orangelight_7);
        orangelight_7Animation.key = "orangelight";
        orangelight_7Animation.end = 12;

        // redlight_5 (components)
        const redlight_5Animation = new Animation(redlight_5);
        redlight_5Animation.key = "redlight";
        redlight_5Animation.end = 12;

        // bluelight_5 (components)
        const bluelight_5Animation = new Animation(bluelight_5);
        bluelight_5Animation.key = "bluelight";
        bluelight_5Animation.end = 12;

        // yellowlight_5 (components)
        const yellowlight_5Animation = new Animation(yellowlight_5);
        yellowlight_5Animation.key = "yellowlight";
        yellowlight_5Animation.end = 12;

        // purplelight_7 (components)
        const purplelight_7Animation = new Animation(purplelight_7);
        purplelight_7Animation.key = "purplelight";
        purplelight_7Animation.end = 12;

        // greenlight_7 (components)
        const greenlight_7Animation = new Animation(greenlight_7);
        greenlight_7Animation.key = "greenlight";
        greenlight_7Animation.end = 12;

        // orangelight_10 (components)
        const orangelight_10Animation = new Animation(orangelight_10);
        orangelight_10Animation.key = "orangelight";
        orangelight_10Animation.end = 12;

        // redlight_6 (components)
        const redlight_6Animation = new Animation(redlight_6);
        redlight_6Animation.key = "redlight";
        redlight_6Animation.end = 12;

        // yellowlight_6 (components)
        const yellowlight_6Animation = new Animation(yellowlight_6);
        yellowlight_6Animation.key = "yellowlight";
        yellowlight_6Animation.end = 12;

        // bluelight_6 (components)
        const bluelight_6Animation = new Animation(bluelight_6);
        bluelight_6Animation.key = "bluelight";
        bluelight_6Animation.end = 12;

        // purplelight_9 (components)
        const purplelight_9Animation = new Animation(purplelight_9);
        purplelight_9Animation.key = "purplelight";
        purplelight_9Animation.end = 12;

        // greenlight_9 (components)
        const greenlight_9Animation = new Animation(greenlight_9);
        greenlight_9Animation.key = "greenlight";
        greenlight_9Animation.end = 12;

        // redstar0001 (components)
        const redstar0001Animation = new Animation(redstar0001);
        redstar0001Animation.key = "redstar";
        redstar0001Animation.end = 30;

        // orangelight_12 (components)
        const orangelight_12Animation = new Animation(orangelight_12);
        orangelight_12Animation.key = "orangelight";
        orangelight_12Animation.end = 12;

        // redlight_7 (components)
        const redlight_7Animation = new Animation(redlight_7);
        redlight_7Animation.key = "redlight";
        redlight_7Animation.end = 12;

        // yellowlight_7 (components)
        const yellowlight_7Animation = new Animation(yellowlight_7);
        yellowlight_7Animation.key = "yellowlight";
        yellowlight_7Animation.end = 12;

        // bluelight_7 (components)
        const bluelight_7Animation = new Animation(bluelight_7);
        bluelight_7Animation.key = "bluelight";
        bluelight_7Animation.end = 12;

        // orangelight_14 (components)
        const orangelight_14Animation = new Animation(orangelight_14);
        orangelight_14Animation.key = "orangelight";
        orangelight_14Animation.end = 12;

        // greenlight_10 (components)
        const greenlight_10Animation = new Animation(greenlight_10);
        greenlight_10Animation.key = "greenlight";
        greenlight_10Animation.end = 12;

        // purplelight_10 (components)
        const purplelight_10Animation = new Animation(purplelight_10);
        purplelight_10Animation.key = "purplelight";
        purplelight_10Animation.end = 12;

        // yellowlight_8 (components)
        const yellowlight_8Animation = new Animation(yellowlight_8);
        yellowlight_8Animation.key = "yellowlight";
        yellowlight_8Animation.end = 12;

        // bluelight_8 (components)
        const bluelight_8Animation = new Animation(bluelight_8);
        bluelight_8Animation.key = "bluelight";
        bluelight_8Animation.end = 12;

        // redlight_8 (components)
        const redlight_8Animation = new Animation(redlight_8);
        redlight_8Animation.key = "redlight";
        redlight_8Animation.end = 12;

        // orangelight_15 (components)
        const orangelight_15Animation = new Animation(orangelight_15);
        orangelight_15Animation.key = "orangelight";
        orangelight_15Animation.end = 12;

        // greenlight_11 (components)
        const greenlight_11Animation = new Animation(greenlight_11);
        greenlight_11Animation.key = "greenlight";
        greenlight_11Animation.end = 12;

        // purplelight_11 (components)
        const purplelight_11Animation = new Animation(purplelight_11);
        purplelight_11Animation.key = "purplelight";
        purplelight_11Animation.end = 12;

        // yellowlight_9 (components)
        const yellowlight_9Animation = new Animation(yellowlight_9);
        yellowlight_9Animation.key = "yellowlight";
        yellowlight_9Animation.end = 12;

        // bluelight_9 (components)
        const bluelight_9Animation = new Animation(bluelight_9);
        bluelight_9Animation.key = "bluelight";
        bluelight_9Animation.end = 12;

        // redlight_9 (components)
        const redlight_9Animation = new Animation(redlight_9);
        redlight_9Animation.key = "redlight";
        redlight_9Animation.end = 12;

        // orangelight_16 (components)
        const orangelight_16Animation = new Animation(orangelight_16);
        orangelight_16Animation.key = "orangelight";
        orangelight_16Animation.end = 12;

        // greenlight_12 (components)
        const greenlight_12Animation = new Animation(greenlight_12);
        greenlight_12Animation.key = "greenlight";
        greenlight_12Animation.end = 12;

        // purplelight_12 (components)
        const purplelight_12Animation = new Animation(purplelight_12);
        purplelight_12Animation.key = "purplelight";
        purplelight_12Animation.end = 12;

        // yellowlight_10 (components)
        const yellowlight_10Animation = new Animation(yellowlight_10);
        yellowlight_10Animation.key = "yellowlight";
        yellowlight_10Animation.end = 12;

        // orangelight_17 (components)
        const orangelight_17Animation = new Animation(orangelight_17);
        orangelight_17Animation.key = "orangelight";
        orangelight_17Animation.end = 12;

        // bluelight_10 (components)
        const bluelight_10Animation = new Animation(bluelight_10);
        bluelight_10Animation.key = "bluelight";
        bluelight_10Animation.end = 12;

        // orangelight_19 (components)
        const orangelight_19Animation = new Animation(orangelight_19);
        orangelight_19Animation.key = "orangelight";
        orangelight_19Animation.end = 12;

        // greenlight_15 (components)
        const greenlight_15Animation = new Animation(greenlight_15);
        greenlight_15Animation.key = "greenlight";
        greenlight_15Animation.end = 12;

        // purplelight_15 (components)
        const purplelight_15Animation = new Animation(purplelight_15);
        purplelight_15Animation.key = "purplelight";
        purplelight_15Animation.end = 12;

        // yellowlight_12 (components)
        const yellowlight_12Animation = new Animation(yellowlight_12);
        yellowlight_12Animation.key = "yellowlight";
        yellowlight_12Animation.end = 12;

        // purplelight_16 (components)
        const purplelight_16Animation = new Animation(purplelight_16);
        purplelight_16Animation.key = "purplelight";
        purplelight_16Animation.end = 12;

        // greenlight_18 (components)
        const greenlight_18Animation = new Animation(greenlight_18);
        greenlight_18Animation.key = "greenlight";
        greenlight_18Animation.end = 12;

        // orangelight_22 (components)
        const orangelight_22Animation = new Animation(orangelight_22);
        orangelight_22Animation.key = "orangelight";
        orangelight_22Animation.end = 12;

        // greenlight_19 (components)
        const greenlight_19Animation = new Animation(greenlight_19);
        greenlight_19Animation.key = "greenlight";
        greenlight_19Animation.end = 12;

        // bluelight_13 (components)
        const bluelight_13Animation = new Animation(bluelight_13);
        bluelight_13Animation.key = "bluelight";
        bluelight_13Animation.end = 12;

        // orangelight_23 (components)
        const orangelight_23Animation = new Animation(orangelight_23);
        orangelight_23Animation.key = "orangelight";
        orangelight_23Animation.end = 12;

        // yellowlight_15 (components)
        const yellowlight_15Animation = new Animation(yellowlight_15);
        yellowlight_15Animation.key = "yellowlight";
        yellowlight_15Animation.end = 12;

        // purplelight_18 (components)
        const purplelight_18Animation = new Animation(purplelight_18);
        purplelight_18Animation.key = "purplelight";
        purplelight_18Animation.end = 12;

        // greenlight_20 (components)
        const greenlight_20Animation = new Animation(greenlight_20);
        greenlight_20Animation.key = "greenlight";
        greenlight_20Animation.end = 12;

        // yellowlight_16 (components)
        const yellowlight_16Animation = new Animation(yellowlight_16);
        yellowlight_16Animation.key = "yellowlight";
        yellowlight_16Animation.end = 12;

        // purplelight_19 (components)
        const purplelight_19Animation = new Animation(purplelight_19);
        purplelight_19Animation.key = "purplelight";
        purplelight_19Animation.end = 12;

        // greenlight_21 (components)
        const greenlight_21Animation = new Animation(greenlight_21);
        greenlight_21Animation.key = "greenlight";
        greenlight_21Animation.end = 12;

        // purplelight_20 (components)
        const purplelight_20Animation = new Animation(purplelight_20);
        purplelight_20Animation.key = "purplelight";
        purplelight_20Animation.end = 12;

        // greenlight_22 (components)
        const greenlight_22Animation = new Animation(greenlight_22);
        greenlight_22Animation.key = "greenlight";
        greenlight_22Animation.end = 12;

        // purplelight_21 (components)
        const purplelight_21Animation = new Animation(purplelight_21);
        purplelight_21Animation.key = "purplelight";
        purplelight_21Animation.end = 12;

        // yellowlight_18 (components)
        const yellowlight_18Animation = new Animation(yellowlight_18);
        yellowlight_18Animation.key = "yellowlight";
        yellowlight_18Animation.end = 12;

        // bluelight_14 (components)
        const bluelight_14Animation = new Animation(bluelight_14);
        bluelight_14Animation.key = "bluelight";
        bluelight_14Animation.end = 12;

        // redlight_14 (components)
        const redlight_14Animation = new Animation(redlight_14);
        redlight_14Animation.key = "redlight";
        redlight_14Animation.end = 12;

        // orangelight_26 (components)
        const orangelight_26Animation = new Animation(orangelight_26);
        orangelight_26Animation.key = "orangelight";
        orangelight_26Animation.end = 12;

        // yellowlight_19 (components)
        const yellowlight_19Animation = new Animation(yellowlight_19);
        yellowlight_19Animation.key = "yellowlight";
        yellowlight_19Animation.end = 12;

        // orangelight_27 (components)
        const orangelight_27Animation = new Animation(orangelight_27);
        orangelight_27Animation.key = "orangelight";
        orangelight_27Animation.end = 12;

        // santasled (components)
        const santasledButton = new Button(santasled);
        santasledButton.spriteName = "santasled";
        santasledButton.pixelPerfect = true;

        // redlight_10 (components)
        const redlight_10Animation = new Animation(redlight_10);
        redlight_10Animation.key = "redlight";
        redlight_10Animation.end = 12;

        // bluelight_11 (components)
        const bluelight_11Animation = new Animation(bluelight_11);
        bluelight_11Animation.key = "bluelight";
        bluelight_11Animation.end = 12;

        // redlight_11 (components)
        const redlight_11Animation = new Animation(redlight_11);
        redlight_11Animation.key = "redlight";
        redlight_11Animation.end = 12;

        // bluelight_12 (components)
        const bluelight_12Animation = new Animation(bluelight_12);
        bluelight_12Animation.key = "bluelight";
        bluelight_12Animation.end = 12;

        // redlight_12 (components)
        const redlight_12Animation = new Animation(redlight_12);
        redlight_12Animation.key = "redlight";
        redlight_12Animation.end = 12;

        // orangelight_18 (components)
        const orangelight_18Animation = new Animation(orangelight_18);
        orangelight_18Animation.key = "orangelight";
        orangelight_18Animation.end = 12;

        // redlight_15 (components)
        const redlight_15Animation = new Animation(redlight_15);
        redlight_15Animation.key = "redlight";
        redlight_15Animation.end = 12;

        // redlight_16 (components)
        const redlight_16Animation = new Animation(redlight_16);
        redlight_16Animation.key = "redlight";
        redlight_16Animation.end = 12;

        // yellowlight_11 (components)
        const yellowlight_11Animation = new Animation(yellowlight_11);
        yellowlight_11Animation.key = "yellowlight";
        yellowlight_11Animation.end = 12;

        // bluelight_15 (components)
        const bluelight_15Animation = new Animation(bluelight_15);
        bluelight_15Animation.key = "bluelight";
        bluelight_15Animation.end = 12;

        // redlight_13 (components)
        const redlight_13Animation = new Animation(redlight_13);
        redlight_13Animation.key = "redlight";
        redlight_13Animation.end = 12;

        // purplelight_6 (components)
        const purplelight_6Animation = new Animation(purplelight_6);
        purplelight_6Animation.key = "purplelight";
        purplelight_6Animation.end = 12;

        // greenlight_6 (components)
        const greenlight_6Animation = new Animation(greenlight_6);
        greenlight_6Animation.key = "greenlight";
        greenlight_6Animation.end = 12;

        // purplelight_13 (components)
        const purplelight_13Animation = new Animation(purplelight_13);
        purplelight_13Animation.key = "purplelight";
        purplelight_13Animation.end = 12;

        // bluelight_16 (components)
        const bluelight_16Animation = new Animation(bluelight_16);
        bluelight_16Animation.key = "bluelight";
        bluelight_16Animation.end = 12;

        // yellowlight_13 (components)
        const yellowlight_13Animation = new Animation(yellowlight_13);
        yellowlight_13Animation.key = "yellowlight";
        yellowlight_13Animation.end = 12;

        // yellowlight_14 (components)
        const yellowlight_14Animation = new Animation(yellowlight_14);
        yellowlight_14Animation.key = "yellowlight";
        yellowlight_14Animation.end = 12;

        // purplelight_14 (components)
        const purplelight_14Animation = new Animation(purplelight_14);
        purplelight_14Animation.key = "purplelight";
        purplelight_14Animation.end = 12;

        // bluelight_17 (components)
        const bluelight_17Animation = new Animation(bluelight_17);
        bluelight_17Animation.key = "bluelight";
        bluelight_17Animation.end = 12;

        // redlight_17 (components)
        const redlight_17Animation = new Animation(redlight_17);
        redlight_17Animation.key = "redlight";
        redlight_17Animation.end = 12;

        // greenlight_14 (components)
        const greenlight_14Animation = new Animation(greenlight_14);
        greenlight_14Animation.key = "greenlight";
        greenlight_14Animation.end = 12;

        // greenlight_16 (components)
        const greenlight_16Animation = new Animation(greenlight_16);
        greenlight_16Animation.key = "greenlight";
        greenlight_16Animation.end = 12;

        // purplelight_17 (components)
        const purplelight_17Animation = new Animation(purplelight_17);
        purplelight_17Animation.key = "purplelight";
        purplelight_17Animation.end = 12;

        // yellowlight_17 (components)
        const yellowlight_17Animation = new Animation(yellowlight_17);
        yellowlight_17Animation.key = "yellowlight";
        yellowlight_17Animation.end = 12;

        // bluelight_18 (components)
        const bluelight_18Animation = new Animation(bluelight_18);
        bluelight_18Animation.key = "bluelight";
        bluelight_18Animation.end = 12;

        // redlight_18 (components)
        const redlight_18Animation = new Animation(redlight_18);
        redlight_18Animation.key = "redlight";
        redlight_18Animation.end = 12;

        // orangelight_3 (components)
        const orangelight_3Animation = new Animation(orangelight_3);
        orangelight_3Animation.key = "orangelight";
        orangelight_3Animation.end = 12;

        // yellowlight_20 (components)
        const yellowlight_20Animation = new Animation(yellowlight_20);
        yellowlight_20Animation.key = "yellowlight";
        yellowlight_20Animation.end = 12;

        // purplelight_22 (components)
        const purplelight_22Animation = new Animation(purplelight_22);
        purplelight_22Animation.key = "purplelight";
        purplelight_22Animation.end = 12;

        this.lantern0001 = lantern0001;
        this.giftdoor0001 = giftdoor0001;
        this.coffeedoor0001 = coffeedoor0001;
        this.lantern = lantern;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here
    create() {
        super.create();
    }

    onLanternLeftClick() {
        let frame = this.lLanternToggle ? 'lantern0001' : 'lantern0002'
        this.lantern0001.setFrame(frame)
        this.lLanternToggle = !this.lLanternToggle
    }

    onLanternRightClick() {
        let frame = this.rLanternToggle ? 'lantern0001' : 'lantern0002'
        this.lantern.setFrame(frame)
        this.rLanternToggle = !this.rLanternToggle
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
