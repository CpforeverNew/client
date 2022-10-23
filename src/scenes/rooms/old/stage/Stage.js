import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'

/* START OF COMPILED CODE */

export default class Stage extends RoomScene {

    constructor() {
        super("Stage");

        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Rectangle>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 974, 493),
            'costume': () => this.interface.loadExternal('CostumeCatalog')
        }
        this.roomAnims = true
        this.music = 'peprally'
        this.boardToggle = true
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("stage-pack", "assets/media/rooms/old/stage/stage-pack.json");
    }

    /** @returns {void} */
    _create() {

        // rectangle
        const rectangle = this.add.rectangle(829, 549, 128, 128);
        rectangle.scaleX = 16.601316318319007;
        rectangle.scaleY = 9.426799491648532;
        rectangle.isFilled = true;
        rectangle.fillColor = 3945004;
        rectangle.strokeColor = 3945004;

        // symbol_16_png
        this.add.image(759, 537, "stage-sled", "Symbol_16.png");

        // symbol_19_png
        const symbol_19_png = this.add.image(1192.6511084830008, 384.2784904853429, "stage-sled", "Symbol_19.png");
        symbol_19_png.setOrigin(0.5210405435158796, 0.6496216427795921);

        // stage_above
        this.add.image(760, 251, "stage", "stage_above");

        // left_side_back
        this.add.image(79, 242, "stage", "left_side_back");

        // behind_right_booth
        const behind_right_booth = this.add.image(1447, 252, "stage", "behind_right_booth");
        behind_right_booth.flipX = true;

        // left_right_chair
        this.add.image(134, 214, "stage", "left_right_chair");

        // right_left_chair
        this.add.image(1389, 217, "stage", "right_left_chair");

        // right_side
        this.add.image(1330, 400, "stage", "right_side");

        // left_side
        this.add.image(190, 400, "stage", "left_side");

        // door
        const door = this.add.image(121, 582, "stage", "door");

        // left_front_arm
        const left_front_arm = this.add.image(67, 342, "stage", "left_front_arm");

        // left_door_front
        this.add.image(75, 590, "stage", "left_door_front");

        // symbol_81_png
        this.add.image(50, 562, "stage-sled", "Symbol_81.png");

        // symbol_79_png
        this.add.image(156, 260, "stage-sled", "Symbol_79.png");

        // symbol_149_png
        this.add.image(115, 302, "stage-sled", "Symbol_149.png");

        // symbol_77_png
        this.add.image(96, 433, "stage-sled", "Symbol_77.png");

        // left_hold
        const left_hold = this.add.image(108.30923502947462, 385.65593861825465, "stage", "left_hold");
        left_hold.setOrigin(0.5203265803277105, 0.8279995166791705);

        // symbol_147_png
        this.add.image(46, 301, "stage-sled", "Symbol_147.png");

        // symbol_151_png
        const symbol_151_png = this.add.image(184.32438662601976, 345.79035372567233, "stage-sled", "Symbol_151.png");
        symbol_151_png.setOrigin(0.7160162467630361, 0.5763197896621469);

        // right_front_arm
        const right_front_arm = this.add.image(1459, 343, "stage", "right_front_arm");

        // right_hold
        const right_hold = this.add.image(1414, 383.1729969759188, "stage", "right_hold");
        right_hold.setOrigin(0.5, 0.7769527320938489);

        // left_side_fg
        this.add.image(134, 469, "stage", "left_side_fg");

        // right_side_fg
        const right_side_fg = this.add.image(1384, 469, "stage", "right_side_fg");
        right_side_fg.flipX = true;

        // symbol_141_png
        const symbol_141_png = this.add.image(500.02450489097936, 498.46518868933214, "stage-sled", "Symbol_141.png");
        symbol_141_png.setOrigin(0.28066368665819913, 0.48363513282098214);

        // symbol_143_png
        const symbol_143_png = this.add.image(728.1702866783344, 590.9009555944479, "stage-sled", "Symbol_143.png");
        symbol_143_png.setOrigin(0.538758306369375, 0.6582844741354162);

        // symbol_170_png
        this.add.image(197, 29, "stage-sled", "Symbol_170.png");

        // symbol_83_png
        this.add.image(225, 559, "stage-sled", "Symbol_83.png");

        // symbol_93_png
        const symbol_93_png = this.add.image(148.82406269501132, 801.5988511889756, "stage-sled", "Symbol_93.png");
        symbol_93_png.setOrigin(0.9318257214038607, 0.8057589530637358);

        // trunk0001
        const trunk0001 = this.add.image(416, 801, "stage", "trunk0001");

        // symbol_1310001_png
        const symbol_1310001_png = this.add.image(335.23259434466604, 882.2088678640072, "stage-sled", "Symbol_1310001.png");
        symbol_1310001_png.setOrigin(0.47991584482575045, 0.6860427005614664);

        // symbol_89_png
        const symbol_89_png = this.add.image(240, 776, "stage-sled", "Symbol_89.png");

        // symbol_89_png_1
        const symbol_89_png_1 = this.add.image(231, 815, "stage-sled", "Symbol_89.png");

        // symbol_89_png_1_1
        const symbol_89_png_1_1 = this.add.image(219.24738667812665, 846.463413493773, "stage-sled", "Symbol_89.png");
        symbol_89_png_1_1.setOrigin(0.48118466695316614, 0.19895467125065808);

        // symbol_97_png
        const symbol_97_png = this.add.image(810.767405655334, 764.9066508980054, "stage-sled", "Symbol_97.png");
        symbol_97_png.setOrigin(0.5138078566822966, 0.6195988789323715);

        // symbol_95_png
        const symbol_95_png = this.add.image(659, 791.0925706916742, "stage-sled", "Symbol_95.png");
        symbol_95_png.setOrigin(0.5, 0.6904531956178807);

        // symbol_153_png
        const symbol_153_png = this.add.image(588.883702827667, 800.9533254490027, "stage-sled", "Symbol_153.png");
        symbol_153_png.setOrigin(0.5232553375701837, 0.714954741864938);

        // symbol_155_png
        const symbol_155_png = this.add.image(609.116297172333, 822.9533254490027, "stage-sled", "Symbol_155.png");
        symbol_155_png.setOrigin(0.4794487714496051, 0.6395320254211001);

        // symbol_69_png
        this.add.image(1367, 259, "stage-sled", "Symbol_69.png");

        // symbol_71_png
        this.add.image(1426, 304, "stage-sled", "Symbol_71.png");

        // symbol_73_png
        this.add.image(1399, 356, "stage-sled", "Symbol_73.png");

        // symbol_147_png_1
        this.add.image(1478, 271, "stage-sled", "Symbol_147.png");

        // symbol_186_png
        this.add.image(747, 487, "stage-sled", "Symbol_186.png");

        // symbol_161_png
        const symbol_161_png = this.add.image(1329.6764705437874, 918.9117651059133, "stage-sled", "Symbol_161.png");
        symbol_161_png.setOrigin(0.5138055213017846, 0.36163102513439394);

        // symbol_135_png
        const symbol_135_png = this.add.image(1308.9705883686377, 865.8529418431889, "stage-sled", "Symbol_135.png");
        symbol_135_png.setOrigin(0.48682200239375106, 0.4175035922210479);

        // symbol_85_png
        const symbol_85_png = this.add.image(988.4920288112729, 623.2570992356455, "stage-sled", "Symbol_85.png");
        symbol_85_png.setOrigin(0.23671390680128748, 0.39069181051506174);

        // symbol_133_png
        const symbol_133_png = this.add.image(1251.76475739114, 667.6470848890582, "stage-sled", "Symbol_133.png");
        symbol_133_png.setOrigin(0.4306184057653931, 0.32093426782098033);

        // costume_cat
        const costume_cat = this.add.image(1426, 886, "stage", "costume_cat");

        // symbol_157_png
        const symbol_157_png = this.add.image(998.7130104720318, 680.5293455770474, "stage-sled", "Symbol_157.png");
        symbol_157_png.setOrigin(0.49300025541540937, 0.22145134050139312);

        // symbol_145_png
        const symbol_145_png = this.add.image(886.883702827667, 485.3251650363402, "stage-sled", "Symbol_145.png");
        symbol_145_png.setOrigin(0.5068504095167983, 0.6451797502595729);

        // symbol_137_png
        const symbol_137_png = this.add.image(980.232594344666, 374.25554241500447, "stage-sled", "Symbol_137.png");
        symbol_137_png.setOrigin(0.4787059559598318, 0.633894367828328);

        // rectangle_1
        const rectangle_1 = this.add.rectangle(409.903502566277, 838.1877056458094, 128, 128);
        rectangle_1.scaleX = 1.0331052031454988;
        rectangle_1.scaleY = 1.2308885744866833;
        rectangle_1.setOrigin(0.5900161076747761, 0.6662144320024037);
        rectangle_1.isFilled = true;
        rectangle_1.fillAlpha = 0;

        // lists
        const sort = [left_front_arm, left_hold, right_front_arm, right_hold, costume_cat, rectangle_1, symbol_89_png_1, symbol_89_png, symbol_93_png, symbol_1310001_png, symbol_95_png, symbol_155_png, symbol_153_png, symbol_97_png, symbol_85_png, symbol_145_png, symbol_137_png, symbol_19_png, symbol_141_png, symbol_157_png, symbol_133_png, symbol_135_png, symbol_161_png, trunk0001, symbol_143_png];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 152;
        doorMoveTo.y = 660;

        // costume_cat (components)
        const costume_catButton = new Button(costume_cat);
        costume_catButton.spriteName = "costume_cat";
        costume_catButton.callback = () => this.interface.loadExternal('CostumeCatalog');
        costume_catButton.activeFrame = false;

        // rectangle_1 (components)
        const rectangle_1MoveTo = new MoveTo(rectangle_1);
        rectangle_1MoveTo.x = 319;
        rectangle_1MoveTo.y = 837;
        new SimpleButton(rectangle_1);

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onTrunkOver() {
        this.trunk.play('trunkover')
    }

    onTrunkOut() {
        this.trunk.play('trunkout')
    }

    onVendingOver() {
        this.vending.play('vending')
    }

    onPulleyClick() {
        this.yellow_pully.play('yelpulley')
        this.net.play('yellowpuffle')
        this.world.client.stampEarned(9)
    }

    onRightSbButton2() {
        this.world.client.stampEarned(9)
        this.right_sb_button_2.play('rightsb2')
        let animation = (this.boardToggle) ? 'locker4_start' : 'locker4_end'

        this.locker_4.play(animation)
        this.boardToggle = !this.boardToggle
    }

    onRightSbButton() {
        this.world.client.stampEarned(9)
        this.right_sb_button.play('rightsb')
        let rbanimation = (this.boardToggle) ? 'locker3_start' : 'locker3_end'

        this.locker_3.play(rbanimation)
        this.boardToggle = !this.boardToggle
    }

    onLeftSbButton() {
        this.world.client.stampEarned(9)
        this.left_sb_button.play('leftsb')
        let lbanimation = (this.boardToggle) ? 'locker1_start' : 'locker1_end'

        this.locker_1.play(lbanimation)
        this.boardToggle = !this.boardToggle
    }

    onLeftSbButton2() {
        this.world.client.stampEarned(9)
        this.left_sb_button_2.play('leftsb2')
        let lbtanimation = (this.boardToggle) ? 'locker2_start' : 'locker2_end'

        this.locker_2.play(lbtanimation)
        this.boardToggle = !this.boardToggle
    }

    onYbClick() {
        this.world.client.stampEarned(9)
        this.sb_yellow_button.play('ybutton')
        this.yb.play('yb')
    }

    onBbClick() {
        this.world.client.stampEarned(9)
        this.sb_brown_button.play('bbutton')
        this.bb.play('bb')
    }

    onObClick() {
        this.world.client.stampEarned(9)
        this.sb_orange_button.play('obutton')
        this.ob.play('ob')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
