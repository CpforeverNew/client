import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, ShowHint, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Cove extends RoomScene {

    constructor() {
        super("Cove");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers =  {
            'forest': () => this.triggerRoom(809, 1190, 750),
            'fap': () => this.triggerGame('Paddle', 1000),
        }
        //this.roomAnims = true
        this.music = 341;

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("cove-pack", "assets/media/rooms/spooky_fair/cove/cove-pack.json");
		this.load.image('barrierstape', 'assets/media/rooms/spooky_fair/cove/barrierstape.png')
    }

    /** @returns {void} */
    _create() {

        // bg_png
        this.add.image(734, 367, "cove-spooky", "bg.png");

        // beegcage_png
        const beegcage_png = this.add.image(1033, 424, "cove-spooky", "beegcage.png");
        beegcage_png.setOrigin(0.38727394169535945, 0.8855872759513305);

        // fg_png
        this.add.image(768, 692, "cove-spooky", "fg.png");

        // hutinterior_png
        const hutinterior_png = this.add.image(1293.6133016720987, 484.43555027868314, "cove-spooky", "hutinterior.png");
        hutinterior_png.setOrigin(0.4638973141234566, 0.4921777513934157);

        // hutrightwall_png
        const hutrightwall_png = this.add.image(1433, 514, "cove-spooky", "hutrightwall.png");

        // feedapuffle_png
        const feedapuffle_png = this.add.image(305, 484, "cove-spooky", "feedapuffle.png");
        feedapuffle_png.setOrigin(0.722990531690042, 0.7115036193704153);

        // jol_png
        this.add.image(141, 519, "cove-spooky", "jol.png");

        // jol_png_1
        this.add.image(160, 564, "cove-spooky", "jol.png");

        // roofnbeams_png
        const roofnbeams_png = this.add.image(746.6248565521324, 373.37170069904477, "cove-spooky", "roofnbeams.png");
        roofnbeams_png.setOrigin(0.507675019158282, 0.7782106022997455);

        // cage_png
        const cage_png = this.add.image(635.1777513934156, 445.8045921968727, "cove-spooky", "cage.png");
        cage_png.setOrigin(0.5144545544219203, 0.8823125750460599);

        // chairnear_png
        this.add.image(687, 319, "cove-spooky", "chairnear.png");

        // chairfar_png
        const chairfar_png = this.add.image(721.6830739878059, 375, "cove-spooky", "chairfar.png");
        chairfar_png.setOrigin(0.4448350949477588, 0.5);

        // pcdesk_png
        const pcdesk_png = this.add.image(776.6830739878059, 330.6338520243882, "cove-spooky", "pcdesk.png");
        pcdesk_png.setOrigin(0.4827095073716856, 0.5364870238140803);

        // surfboards_png
        const surfboards_png = this.add.image(1138, 492, "cove-spooky", "surfboards.png");
        surfboards_png.setOrigin(0.5237543579378501, 0.7853104947969979);

        // jolhut_png
        const jolhut_png = this.add.image(1098, 519, "cove-spooky", "jolhut.png");
        jolhut_png.setOrigin(0.4490785491825478, 0.4236178237738211);

        // hutroof_png
        const hutroof_png = this.add.image(1323, 236, "cove-spooky", "hutroof.png");
        hutroof_png.setOrigin(0.49116130100950894, -0.17792821257064903);

        // orangethingy_png
        const orangethingy_png = this.add.image(913, 381, "cove-spooky", "orangethingy.png");
        orangethingy_png.setOrigin(0.5437155851357384, 0.47481602160658615);

        // binoculars0001_png
        const binoculars0001_png = this.add.image(611, 288, "cove-spooky", "binoculars0001.png");
        binoculars0001_png.angle = -30;

        // barrierstape
        const barrierstape = this.add.image(1096.7910530655142, 632.0176564097117, "barrierstape");
        barrierstape.setOrigin(0.4791659238081286, 0.3318582075220171);

        // lists
        const sort = [orangethingy_png, beegcage_png, jolhut_png, hutrightwall_png, roofnbeams_png, surfboards_png, cage_png, hutroof_png, barrierstape];

        // hutinterior_png (components)
        const hutinterior_pngButton = new Button(hutinterior_png);
        hutinterior_pngButton.spriteName = "hutinterior.png";
        hutinterior_pngButton.activeFrame = false;
        const hutinterior_pngMoveTo = new MoveTo(hutinterior_png);
        hutinterior_pngMoveTo.x = 1250;
        hutinterior_pngMoveTo.y = 500;

        // feedapuffle_png (components)
        const feedapuffle_pngShowHint = new ShowHint(feedapuffle_png);
        feedapuffle_pngShowHint.text = "Feed a Puffle";
        const feedapuffle_pngButton = new Button(feedapuffle_png);
        feedapuffle_pngButton.spriteName = "feedapuffle.png";
        feedapuffle_pngButton.hoverCallback = () => {};
        feedapuffle_pngButton.hoverOutCallback = () => {};
        feedapuffle_pngButton.activeFrame = false;
        const feedapuffle_pngMoveTo = new MoveTo(feedapuffle_png);
        feedapuffle_pngMoveTo.x = 305;
        feedapuffle_pngMoveTo.y = 540;

        // binoculars0001_png (components)
        const binoculars0001_pngButton = new Button(binoculars0001_png);
        binoculars0001_pngButton.spriteName = "binoculars0002.png";

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
