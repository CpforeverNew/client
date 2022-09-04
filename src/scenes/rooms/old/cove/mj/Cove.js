import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Cove extends RoomScene {

    constructor() {
        super("Cove");

        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers =  {
            'forest': () => this.triggerRoom(809, 1190, 750)
        }
        this.music = 'cove'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("cove-mj-pack", "assets/media/rooms/old/cove/mj/cove-mj-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_1
        this.add.image(772, 292, "cove-mj", "bg");

        // trees
        this.add.image(234, 276, "cove-mj", "trees");

        // water_water_15
        const water_water_15 = this.add.image(1109, 673, "cove-mj", "water_15");
        water_water_15.setOrigin(0.5011135857461024, 2.909090909090909);

        // water_water_14
        const water_water_14 = this.add.image(1034, 695, "cove-mj", "water_14");
        water_water_14.setOrigin(0.5, 1.9545454545454546);

        // water_water_13
        const water_water_13 = this.add.image(1002, 717, "cove-mj", "water_13");
        water_water_13.setOrigin(0.5006993006993007, 1.9545454545454546);

        // water_water_12
        const water_water_12 = this.add.image(995, 739, "cove-mj", "water_12");
        water_water_12.setOrigin(0.5, 1.9545454545454546);

        // water_water_11
        const water_water_11 = this.add.image(1011, 761, "cove-mj", "water_11");
        water_water_11.setOrigin(0.5005662514156285, 1.9545454545454546);

        // water_water_10
        const water_water_10 = this.add.image(1031, 783, "cove-mj", "water_10");
        water_water_10.setOrigin(0.5005045408678103, 1.9545454545454546);

        // water_water_9
        const water_water_9 = this.add.image(1024, 805, "cove-mj", "water_9");
        water_water_9.setOrigin(0.5, 1.9545454545454546);

        // water_water_8
        const water_water_8 = this.add.image(1014, 827, "cove-mj", "water_8");
        water_water_8.setOrigin(0.5, 1.65625);

        // water_water_7
        const water_water_7 = this.add.image(1008, 849, "cove-mj", "water_7");
        water_water_7.setOrigin(0.5004821600771456, 1.9545454545454546);

        // water_water_6
        const water_water_6 = this.add.image(1008, 871, "cove-mj", "water_6");
        water_water_6.setOrigin(0.5004812319538018, 1.9545454545454546);

        // water_water_5
        const water_water_5 = this.add.image(1018, 893, "cove-mj", "water_5");
        water_water_5.setOrigin(0.5, 1.9545454545454546);

        // water_water_4
        const water_water_4 = this.add.image(1026, 915, "cove-mj", "water_4");
        water_water_4.setOrigin(0.5005015045135406, 1.9545454545454546);

        // water_water_3
        const water_water_3 = this.add.image(1005, 937, "cove-mj", "water_3");
        water_water_3.setOrigin(0.5, 1.9545454545454546);

        // water_water_2
        const water_water_2 = this.add.image(1005, 959, "cove-mj", "water_2");
        water_water_2.setOrigin(0.5, 1.9545454545454546);

        // water_water_1
        const water_water_1 = this.add.image(1005, 981, "cove-mj", "water_1");
        water_water_1.setOrigin(0.5, 1.9545454545454546);

        // chair_arm
        const chair_arm = this.add.image(646, 275, "cove-mj", "chair_arm");

        // binoculars0001
        this.add.image(613, 259, "cove-mj", "binoculars0001");

        // hut
        const hut = this.add.image(1326, 423, "cove-mj", "hut");
        hut.setOrigin(0.5537459283387622, 0.43842364532019706);

        // boards
        const boards = this.add.image(1103, 386, "cove-mj", "boards");

        // fg
        const fg = this.add.image(792.0570678710938, 960.9702284357126, "cove-mj", "fg");
        fg.setOrigin(0.5141482162246213, 0.9946836076532171);

        // hut_stool
        const hut_stool = this.add.image(1310, 493, "cove-mj", "hut_stool");
        hut_stool.setOrigin(0.5, 0.5185185185185185);

        // chair_arm_1
        const chair_arm_1 = this.add.image(633, 283, "cove-mj", "chair_arm");
        chair_arm_1.setOrigin(0.40298507462686567, 0.7115384615384616);

        // hut_wall
        const hut_wall = this.add.image(1440, 545, "cove-mj", "hut_wall");
        hut_wall.setOrigin(0.5210526315789473, 0.8577777777777778);

        // silver_board
        const silver_board = this.add.image(1463, 557, "cove-mj", "silver_board");
        silver_board.setOrigin(0.5167785234899329, 0.8613445378151261);

        // firepit0001
        this.add.image(909, 539, "cove-mj", "firepit0001");

        // rock_1
        this.add.image(468, 873, "cove-mj", "rock_1");

        // rock_2
        this.add.image(1292, 689, "cove-mj", "rock_2");

        // rock_3
        this.add.image(1436, 675, "cove-mj", "rock_3");

        // rock_4
        this.add.image(1498, 579, "cove-mj", "rock_4");

        // overlay
        this.add.image(764, 383, "cove-mj", "overlay");

        // left_col
        const left_col = this.add.image(339, 682.676166522136, "cove-mj", "left_col");
        left_col.setOrigin(0.5, 0.9493929996101704);

        // right_col
        const right_col = this.add.image(677.7344360351562, 549.7494720351319, "cove-mj", "right_col");
        right_col.setOrigin(0.6102772594144312, 0.9154386383444097);

        // fire3
        const fire3 = this.add.sprite(908.1837839975032, 532.419816044111, "cove-mj", "fire30001");
        fire3.setOrigin(0.44978663154609416, 0.9957339415008164);

        // fire1
        const fire1 = this.add.sprite(337.81982048049593, 591.9194946289062, "cove-mj", "fire10001");
        fire1.setOrigin(0.4421785454167145, 1.7052903921409466);

        // fire
        const fire = this.add.sprite(679.4850121308865, 452.4977777896873, "cove-mj", "fire10001");
        fire.setOrigin(0.5270011206534677, 1.5992484496094643);

        // maracas
        const maracas = this.add.image(259, 340, "maracas");
        maracas.scaleX = 0.13976192905485785;
        maracas.scaleY = 0.13976192905485785;
        maracas.alpha = 0.5;
        maracas.alphaTopLeft = 0.5;
        maracas.alphaTopRight = 0.5;
        maracas.alphaBottomLeft = 0.5;
        maracas.alphaBottomRight = 0.5;
        
        // lists
        const sort = [water_water_15, water_water_1, water_water_2, water_water_3, water_water_4, water_water_5, water_water_6, water_water_7, water_water_8, water_water_9, water_water_10, water_water_11, water_water_12, water_water_13, water_water_14, fire3, fire, fire1, boards, chair_arm, left_col, right_col, fg];

        // hut (components)
        const hutButton = new Button(hut);
        hutButton.spriteName = "hut";
        hutButton.activeFrame = false;
        const hutMoveTo = new MoveTo(hut);
        hutMoveTo.x = 1250;
        hutMoveTo.y = 500;

        // fire3 (components)
        const fire3Animation = new Animation(fire3);
        fire3Animation.key = "fire3";
        fire3Animation.end = 11;

        // fire1 (components)
        const fire1Animation = new Animation(fire1);
        fire1Animation.key = "fire1";
        fire1Animation.end = 11;

        // fire (components)
        const fireAnimation = new Animation(fire);
        fireAnimation.key = "fire1";
        fireAnimation.end = 11;

        // maracas (components)
        const maracasSimpleButton = new SimpleButton(maracas);
        maracasSimpleButton.callback = () => this.interface.prompt.showItem(35420);

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
