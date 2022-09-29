import RoomScene from "@scenes/rooms/RoomScene";

/* START OF COMPILED CODE */

export default class Forest extends RoomScene {

    constructor() {
        super("Forest");

        /** @type {Phaser.GameObjects.Ellipse} */
        this.flashzone;
        /** @type {Array<any>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 1240, 660),
            'shack': null,
            'cove': () => this.triggerRoom(810, 520, 416),
            'lake': null
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("forest-pack", "assets/media/rooms/old/forest/camp/forest-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_png
        this.add.image(760, 480, "forest", "bg.png");

        // bushtopmid_png
        const bushtopmid_png = this.add.image(991.7164517126369, 341.0758099422918, "forest", "bushtopmid.png");
        bushtopmid_png.setOrigin(0.5073667455477977, 0.7768470504253079);

        // treeleft_png
        this.add.image(83, 403, "forest", "treeleft.png");

        // middleforest_png
        this.add.image(768, 520, "forest", "middleforest.png");

        // plantfront_png
        const plantfront_png = this.add.image(795.9848380115417, 742.4935513791073, "forest", "plantfront.png");
        plantfront_png.setOrigin(0.4526962126438649, 0.7258489095574883);

        // fg_png
        this.add.image(527, 717, "forest", "fg.png");

        // rightfg_png
        this.add.image(1393, 639, "forest", "rightfg.png");

        // stairs_png
        this.add.image(1308, 884, "forest", "stairs.png");

        // railing_png
        this.add.image(1436, 822, "forest", "railing.png");

        // signright_png
        const signright_png = this.add.image(1307.835482873631, 713.4935513791073, "forest", "signright.png");
        signright_png.setOrigin(0.33807059314746235, 0.7627222009138128);

        // signleft_png
        const signleft_png = this.add.image(112.85064486208927, 264.3290342527382, "forest", "signleft.png");
        signleft_png.setOrigin(0.42747387129703196, 0.7434683280336043);

        // plantleft_png
        this.add.image(432, 418, "forest", "plantleft.png");

        // plantright_png
        const plantright_png = this.add.image(1321.4480654137321, 399.7922616549287, "forest", "plantright.png");
        plantright_png.setOrigin(0.6152840702517324, 0.7710186914689856);

        // fence_png
        const fence_png = this.add.image(734.1341931494524, 310.5670965747262, "forest", "fence.png");
        fence_png.setOrigin(0.46667084053132213, 0.45232078576008583);

        // bushleft_png
        const bushleft_png = this.add.image(217, 426.5519345862678, "forest", "bushleft.png");
        bushleft_png.setOrigin(0.5, 0.3244538021166796);

        // flashzone
        const flashzone = this.add.ellipse(1329, 366, 128, 128);
        flashzone.scaleX = 1.513603229179594;
        flashzone.angle = -90;
        flashzone.isFilled = true;
        flashzone.fillAlpha = 0;

        // lists
        const sort = [];

        this.flashzone = flashzone;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create()

        this.roomZones = {
            'flashzone': { 
                key: this.flashzone,
                callback: () => this.interface.prompt.showItem(347)
            }
        }

        super.addZones()
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
