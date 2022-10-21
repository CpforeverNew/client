import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, ShowHint } from '@components/components'


/* START OF COMPILED CODE */

export default class Coffee extends RoomScene {

    constructor() {
        super("Coffee");

        /** @type {Phaser.GameObjects.Sprite} */
        this.candle1_png;
        /** @type {Phaser.GameObjects.Sprite} */
        this.candle1_png_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.candle1_png_2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.candle1_png_3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.candle1_png_4;
        /** @type {Phaser.GameObjects.Sprite} */
        this.candle1_png_5;
        /** @type {Phaser.GameObjects.Sprite} */
        this.candle1_png_6;
        /** @type {Phaser.GameObjects.Sprite} */
        this.candle1_png_7;
        /** @type {Phaser.GameObjects.Sprite} */
        this.candle1_png_8;
        /** @type {Phaser.GameObjects.Sprite} */
        this.candle1_png_9;
        /** @type {Phaser.GameObjects.Sprite} */
        this.candle1_png_10;
        /** @type {Phaser.GameObjects.Sprite} */
        this.candle1_png_11;
        /** @type {Phaser.GameObjects.Sprite} */
        this.candle1_png_12;
        /** @type {Phaser.GameObjects.Sprite} */
        this.candle1_png_13;
        /** @type {Phaser.GameObjects.Sprite} */
        this.candle1_png_14;
        /** @type {Phaser.GameObjects.Sprite} */
        this.candle1_png_15;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'town': () => this.triggerRoom(100, 580, 520),
            'beans': () => this.triggerGame('BeanCounters', 908),
            'book': () => this.triggerRoom(111, 1200, 580)
        };
        this.roomAnims = true;
        this.music = 'coffee';
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("coffee-pack", "assets/media/rooms/spooky_fair/coffee/coffee-pack.json");
    }

    /** @returns {void} */
    _create() {

        // background_png
        this.add.image(762, 520, "coffee", "Background.png");

        // bigPumpkin_png
        this.add.image(1443, 826, "coffee", "BigPumpkin.png");

        // blueChairBottom_png_png
        this.add.image(477, 418, "coffee", "BlueChairBottom.png.png");

        // redChairBottom_png
        this.add.image(628, 414, "coffee", "RedChairBottom.png");

        // fireExtinguisher_png
        this.add.image(48, 738, "coffee", "FireExtinguisher.png");

        // tallCandles_png
        this.add.image(89, 572, "coffee", "TallCandles.png");

        // counterBack_png
        this.add.image(886, 450, "coffee", "CounterBack.png");

        // counterTop_png
        const counterTop_png = this.add.image(790.6030456812503, 614.5996274420296, "coffee", "CounterTop.png");
        counterTop_png.setOrigin(0.18806003087636006, 0.6657355674981259);

        // counterGoodies_png
        const counterGoodies_png = this.add.image(764.3657464143884, 720.7359032812915, "coffee", "CounterGoodies.png");
        counterGoodies_png.setOrigin(0.02574467293120879, 1.5479279748038832);

        // signBottom_png
        this.add.image(894, 680, "coffee", "SignBottom.png");

        // signTop0001_png
        const signTop0001_png = this.add.image(805.1778046803329, 727.8604293790136, "coffee", "SignTop0001.png");
        signTop0001_png.setOrigin(-0.00245950625700089, 0.7542098577863005);

        // arrowSign_png
        this.add.image(1380, 274, "coffee", "ArrowSign.png");

        // streamers_png
        this.add.image(741, 109, "coffee", "Streamers.png");

        // smallPumpkin_png
        this.add.image(946, 728, "coffee", "SmallPumpkin.png");

        // smallTable_png
        const smallTable_png = this.add.image(127.95972216215951, 673.9234816254373, "coffee", "SmallTable.png");
        smallTable_png.setOrigin(0.005452975253745975, 0.7872720567363996);

        // cakeTable_png
        const cakeTable_png = this.add.image(227.73193533365964, 808.3317809505317, "coffee", "CakeTable.png");
        cakeTable_png.setOrigin(0.017264875902018376, 0.820431356792405);

        // blueChair_png
        const blueChair_png = this.add.image(399.91202905475944, 467.8504820018348, "coffee", "BlueChair.png");
        blueChair_png.setOrigin(0.006333535102496136, 0.6452627758778862);

        // overheadLight_png
        this.add.image(227, 197, "coffee", "OverheadLight.png");

        // door
        const door = this.add.image(785, 295, "coffee", "door");

        // redChair_png
        const redChair_png = this.add.image(585.5930983040714, 467.4883435032109, "coffee", "RedChair.png");
        redChair_png.setOrigin(0.0006006342198156011, 0.69148275002085);

        // beans
        const beans = this.add.image(1016, 685, "coffee", "beans");

        // candle1_png
        const candle1_png = this.add.sprite(193, 559, "coffee", "Candle1.png");

        // candle1_png_1
        const candle1_png_1 = this.add.sprite(219, 547, "coffee", "Candle1.png");

        // candle1_png_2
        const candle1_png_2 = this.add.sprite(245, 559, "coffee", "Candle1.png");

        // candle1_png_3
        const candle1_png_3 = this.add.sprite(34, 499, "coffee", "Candle1.png");

        // candle1_png_4
        const candle1_png_4 = this.add.sprite(58, 481, "coffee", "Candle1.png");

        // candle1_png_5
        const candle1_png_5 = this.add.sprite(83, 457, "coffee", "Candle1.png");

        // candle1_png_6
        const candle1_png_6 = this.add.sprite(114, 468, "coffee", "Candle1.png");

        // candle1_png_7
        const candle1_png_7 = this.add.sprite(144, 477, "coffee", "Candle1.png");

        // candle1_png_8
        const candle1_png_8 = this.add.sprite(325, 550, "coffee", "Candle1.png");

        // candle1_png_9
        const candle1_png_9 = this.add.sprite(343, 549, "coffee", "Candle1.png");

        // candle1_png_10
        const candle1_png_10 = this.add.sprite(376, 555, "coffee", "Candle1.png");

        // candle1_png_11
        const candle1_png_11 = this.add.sprite(450, 610, "coffee", "Candle1.png");

        // candle1_png_12
        const candle1_png_12 = this.add.sprite(424, 614, "coffee", "Candle1.png");

        // candle1_png_13
        const candle1_png_13 = this.add.sprite(283, 701, "coffee", "Candle1.png");

        // candle1_png_14
        const candle1_png_14 = this.add.sprite(301, 692, "coffee", "Candle1.png");

        // candle1_png_15
        const candle1_png_15 = this.add.sprite(330, 716, "coffee", "Candle1.png");

        // lists
        const sort = [blueChair_png, redChair_png, signTop0001_png, cakeTable_png, smallTable_png, counterGoodies_png, counterTop_png];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";

        // beans (components)
        const beansButton = new Button(beans);
        beansButton.spriteName = "beans";

        this.candle1_png = candle1_png;
        this.candle1_png_1 = candle1_png_1;
        this.candle1_png_2 = candle1_png_2;
        this.candle1_png_3 = candle1_png_3;
        this.candle1_png_4 = candle1_png_4;
        this.candle1_png_5 = candle1_png_5;
        this.candle1_png_6 = candle1_png_6;
        this.candle1_png_7 = candle1_png_7;
        this.candle1_png_8 = candle1_png_8;
        this.candle1_png_9 = candle1_png_9;
        this.candle1_png_10 = candle1_png_10;
        this.candle1_png_11 = candle1_png_11;
        this.candle1_png_12 = candle1_png_12;
        this.candle1_png_13 = candle1_png_13;
        this.candle1_png_14 = candle1_png_14;
        this.candle1_png_15 = candle1_png_15;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create();
        this.candle1_png.play('candle_flame');
        this.candle1_png_1.play('candle_flame');
        this.candle1_png_2.play('candle_flame');
        this.candle1_png_3.play('candle_flame');
        this.candle1_png_4.play('candle_flame');
        this.candle1_png_5.play('candle_flame');
        this.candle1_png_6.play('candle_flame');
        this.candle1_png_7.play('candle_flame');
        this.candle1_png_8.play('candle_flame');
        this.candle1_png_9.play('candle_flame');
        this.candle1_png_10.play('candle_flame');
        this.candle1_png_11.play('candle_flame');
        this.candle1_png_12.play('candle_flame');
        this.candle1_png_13.play('candle_flame');
        this.candle1_png_14.play('candle_flame');
        this.candle1_png_15.play('candle_flame');
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
