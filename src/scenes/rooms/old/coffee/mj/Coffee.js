import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, ShowHint, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Coffee extends RoomScene {

    constructor() {
        super("Coffee");

        /** @type {Phaser.GameObjects.Sprite} */
        this.stage0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.button0001;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'town': () => this.triggerRoom(100, 580, 520),
            'beans': () => this.triggerGame('BeanCounters', 908),
            'book': () => this.triggerRoom(111, 1200, 580)
        }
        this.roomAnims = true
        this.music = 'coffee'

        this.boardToggle = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("coffee-pack", "assets/media/rooms/old/coffee/coffee-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-340, -53, "coffemj1", "bg");
        bg.setOrigin(0, 0);

        // stage0001
        const stage0001 = this.add.sprite(379, 352, "coffemj1", "stage0001");

        // backstuff
        this.add.image(1000, 446, "coffemj1", "backstuff");

        // table_back
        const table_back = this.add.image(893.3795255164875, 411.3795255164876, "coffemj1", "table-back");
        table_back.setOrigin(0.6502288799727717, 0.6174516697968946);

        // table
        const table = this.add.image(872.1313357230827, 536.8831459296777, "coffemj1", "table");
        table.setOrigin(0.6413090402243888, 0.6211220344780474);

        // signback
        const signback = this.add.image(897, 627, "coffemj1", "signback");

        // sign
        const sign = this.add.image(908.8831161666601, 673.7590316940039, "coffemj1", "sign");
        sign.setOrigin(0.7662835567150966, 0.7673038002274152);

        // smoke
        const smoke = this.add.sprite(903, 166, "coffee", "smoke0001");
        smoke.setOrigin(0, 0);

        // door_1
        const door_1 = this.add.image(722, 136, "coffemj1", "door");
        door_1.setOrigin(0, 0);

        // stage10001
        this.add.image(-105, 304, "coffeenew", "stage10001");

        // pillar10001
        this.add.image(48, 448, "coffeenew", "pillar10001");

        // bell
        const bell = this.add.image(1427.255430619785, 824.2554306197851, "coffemj1", "bell");
        bell.setOrigin(0.6697476687575555, 0.6560767155690276);

        // stool10001
        this.add.image(466, 551, "coffeenew", "stool10001");

        // drums40001
        const drums40001 = this.add.image(484.50362041319005, 435.7590510329752, "coffeenew", "drums40001");
        drums40001.setOrigin(0.7627732273422042, 0.872683183009377);

        // drums50001
        const drums50001 = this.add.image(283.62771530989255, 417.2554306197851, "coffeenew", "drums50001");
        drums50001.setOrigin(0.6970799205066535, 0.7039950054367115);

        // drums30001
        const drums30001 = this.add.image(439.75181020659505, 417.75181020659505, "coffeenew", "drums30001");
        drums30001.setOrigin(0.6582002082978582, 0.6230446064538897);

        // drums20001
        const drums20001 = this.add.image(316.75181020659505, 426.75181020659505, "coffeenew", "drums20001");
        drums20001.setOrigin(0.649073273203751, 0.6033574694212673);

        // drums10001
        const drums10001 = this.add.image(392.3795255164876, 414.2554306197851, "coffeenew", "drums10001");
        drums10001.setOrigin(0.6715002258096248, 0.6875437953208476);

        // piano10001
        const piano10001 = this.add.image(322.007240379199, 456.6277041312858, "coffeenew", "piano10001");
        piano10001.setOrigin(0.5473392989715727, 0.5660665642607534);

        // mic10001
        const mic10001 = this.add.image(344.62771530989255, 599.8831459296777, "coffeenew", "mic10001");
        mic10001.setOrigin(0.732554306197851, 0.8750875906416952);

        // coffee
        const coffee = this.add.image(1011.5036204131901, 656.6277153098926, "coffemj1", "coffee");
        coffee.setOrigin(0.6550362041319011, 0.604754191981014);

        // tablemid
        const tablemid = this.add.image(561.169355601932, 657.2635710711716, "coffemj1", "tablemid");
        tablemid.setOrigin(0.637647129623403, 0.6527759132396691);

        // tableleft
        const tableleft = this.add.image(304.24471305810914, 781.3011878389945, "coffemj1", "tableleft");
        tableleft.setOrigin(0.6848219674755549, 0.6623175531907463);

        // tableright
        const tableright = this.add.image(790.2635490319243, 773.3200094791299, "coffemj1", "tableright");
        tableright.setOrigin(0.7018824567809905, 0.6751021308814718);

        // chairright_back_2
        this.add.image(672, 661, "coffemj1", "chairright_back");

        // chairright_back
        this.add.image(898, 776, "coffemj1", "chairright_back");

        // chairleft_main_2
        const chairleft_main_2 = this.add.image(478.3139470138998, 752.1333945976661, "coffemj1", "chairleft_main");
        chairleft_main_2.setOrigin(0.6914321121254947, 0.6945575083683299);

        // chairleft_back_2
        this.add.image(409, 655, "coffemj1", "chairleft_back");

        // chairright_main_2
        const chairright_main_2 = this.add.image(653.0957359062598, 752.9339823181512, "coffemj1", "chairright_main");
        chairright_main_2.setOrigin(0.7051882642402192, 0.7055124749261737);

        // chairright_main
        const chairright_main = this.add.image(900.8471055514458, 882.7906318480161, "coffemj1", "chairright_main");
        chairright_main.setOrigin(0.8589021453884285, 0.8163829546567775);

        // chairleft_main
        const chairleft_main = this.add.image(227.8471055514458, 863.8094564158259, "coffemj1", "chairleft_main");
        chairleft_main.setOrigin(0.7990851211570236, 0.7905883847605158);

        // chairleft_back
        this.add.image(145, 754, "coffemj1", "chairleft_back");

        // chairleft_back_1
        const chairleft_back_1 = this.add.image(609.5528981414974, 760.5528371063411, "coffemj1", "chairleft_back");
        chairleft_back_1.setOrigin(0.30720108755591186, 0.28029891372650156);

        // chairright_back_1
        const chairright_back_1 = this.add.image(411.4476013183594, 764.4475708007812, "coffemj1", "chairright_back");
        chairright_back_1.setOrigin(0.4227735426379806, 0.4173856502638849);

        // chairright_main_1
        const chairright_main_1 = this.add.image(415.1813146011263, 875.6772148216113, "coffemj1", "chairright_main");
        chairright_main_1.setOrigin(0.8391554735580652, 0.8229994945191192);

        // chairleft_main_1
        const chairleft_main_1 = this.add.image(696.7907008934324, 871.7341404151614, "coffemj1", "chairleft_main");
        chairleft_main_1.setOrigin(0.7542223529834696, 0.7294118827056704);

        // buttonhandle
        const buttonhandle = this.add.image(63, 692, "coffemj1", "buttonhandle");
        buttonhandle.flipX = true;

        // buttonback
        const buttonback = this.add.image(127, 639, "coffemj1", "buttonback");
        buttonback.flipX = true;

        // button0001
        const button0001 = this.add.sprite(112, 650, "coffemj1", "button0001");
        button0001.flipX = true;

        // lists
        const sort = [bell, drums10001, drums20001, drums30001, drums50001, drums40001, mic10001, sign, table, table_back, signback, coffee, chairleft_main_2, chairright_main, chairright_main_1, chairleft_main_1, chairleft_main, chairright_main_2, tableright, tableleft, tablemid, piano10001, chairleft_back_1, chairright_back_1];

        // smoke (components)
        const smokeAnimation = new Animation(smoke);
        smokeAnimation.key = "smoke";
        smokeAnimation.end = 5;

        // door_1 (components)
        const door_1Button = new Button(door_1);
        door_1Button.spriteName = "door";
        door_1Button.activeFrame = false;
        door_1Button.pixelPerfect = true;
        const door_1MoveTo = new MoveTo(door_1);
        door_1MoveTo.x = 750;
        door_1MoveTo.y = 392;

        // coffee (components)
        const coffeeButton = new Button(coffee);
        coffeeButton.spriteName = "coffee";
        coffeeButton.activeFrame = false;
        coffeeButton.pixelPerfect = true;
        new MoveTo(coffee);
        const coffeeShowHint = new ShowHint(coffee);
        coffeeShowHint.text = "Bean Counters";

        // button0001 (components)
        const button0001SimpleButton = new SimpleButton(button0001);
        button0001SimpleButton.callback = () => this.onButtonClick();

        this.stage0001 = stage0001;
        this.button0001 = button0001;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create();
        this.light = false;
    }

    onButtonClick() {
        this.button0001.play('coffeemj_button').on(Phaser.Animations.Events.ANIMATION_START, function (anim, frame, gameObject) {
            this.light = !this.light;
            if (this.light) {
                this.stage0001.setTexture('coffeemj1',"stage0002")
            } else {
                this.stage0001.setTexture('coffeemj1',"stage0001")
            }
        }, this);
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
