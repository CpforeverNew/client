import SimpleButton from '@scenes/components/SimpleButton';
import RoomScene from '@scenes/rooms/RoomScene'


/* START OF COMPILED CODE */

export default class Forest extends RoomScene {

    constructor() {
        super("Forest");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 1240, 660),
            'shack': () => this.triggerRoom(807, 500, 800),
            'cove': () => this.triggerRoom(810, 520, 416),
            'lake': null
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("forest-pack", "assets/media/rooms/spooky_fair/forest/forest-pack.json");
    }

    /** @returns {void} */
    _create() {

        // background_png
        const background_png = this.add.image(0, 0, "spooky_forest", "Background.png");
        background_png.setOrigin(-0.0029732442014335225, -0.0020814807079274937);

        // snowDriftLeft_png
        this.add.image(132, 455, "spooky_forest", "SnowDriftLeft.png");

        // rock_png
        const rock_png = this.add.image(1011.0332725490262, 546.8408119337382, "spooky_forest", "Rock.png");
        rock_png.setOrigin(-0.006035915436106374, 0.6060057995267016);

        // bigTreeRight_png
        const bigTreeRight_png = this.add.image(1055.8740844827644, 300.8046396213613, "spooky_forest", "BigTreeRight.png");
        bigTreeRight_png.setOrigin(0.32127947848390803, 0.6963070361605586);

        // foregroundLeft0001_png
        const foregroundLeft0001_png = this.add.image(4.574482082513043, 974.3864458417593, "spooky_forest", "ForegroundLeft0001.png");
        foregroundLeft0001_png.setOrigin(0.0022139616675699502, 0.9973111582734149);

        // foregroundRight_png_png
        const foregroundRight_png_png = this.add.image(1415, 479, "spooky_forest", "ForegroundRight.png.png");

        // bigTreeLeftR_png
        this.add.image(711, 160, "spooky_forest", "BigTreeLeftR.png");

        // bigTreeLeftL_png_png
        this.add.image(498, 179, "spooky_forest", "BigTreeLeftL.png.png");

        // pufflePaddleBooth_png
        const pufflePaddleBooth_png = this.add.image(478.1533789537243, 274.5643944837757, "spooky_forest", "PufflePaddleBooth.png");
        pufflePaddleBooth_png.setOrigin(-0.009901314179070959, 0.7787695766100111);

        // memoryGameBoothBackground_png0001_png
        this.add.image(954, 305, "spooky_forest", "MemoryGameBoothBackground.png0001.png");

        // memoryGameBooth_png
        const memoryGameBooth_png = this.add.image(823.432692596356, 399.3661474983037, "spooky_forest", "MemoryGameBooth.png");
        memoryGameBooth_png.setOrigin(0.01074246372291572, 0.81741849575792);

        // prizeBoothBG_png_png
        const prizeBoothBG_png_png = this.add.image(371.0723446247539, 592.723595706555, "spooky_forest", "PrizeBoothBG.png.png");
        prizeBoothBG_png_png.setOrigin(0.00025837365983534256, 0.8533526650890053);

        // prizeBooth_png
        const prizeBooth_png = this.add.image(357.2315326910157, 590.0057995267016, "spooky_forest", "PrizeBooth.png");
        prizeBooth_png.setOrigin(0.000746879648437654, 0.8063751431407561);

        // bigPumpkin_png
        const bigPumpkin_png = this.add.image(244.7148964165026, 672.8017398580105, "spooky_forest", "BigPumpkin.png");
        bigPumpkin_png.setOrigin(-0.01825057546387446, 0.6528929800865888);

        // smallPumpkin_png
        const smallPumpkin_png = this.add.image(1241, 724, "spooky_forest", "SmallPumpkin.png");
        smallPumpkin_png.setOrigin(-0.03420245430778756, 0.6314800614284671);

        // staircaseRail_png
        const staircaseRail_png = this.add.image(1347.0752443881047, 791.1591880662618, "spooky_forest", "StaircaseRail.png");
        staircaseRail_png.setOrigin(0.011658676337666814, 0.41519536037863874);

        // lists
        const sort = [pufflePaddleBooth_png, memoryGameBooth_png, rock_png, smallPumpkin_png, staircaseRail_png, bigPumpkin_png, foregroundLeft0001_png, bigTreeRight_png, foregroundRight_png_png, prizeBooth_png];

        this.sort = sort;

        this.events.emit("scene-awake");
    }
}

/* END OF COMPILED CODE */
