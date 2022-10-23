import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, ShowHint, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Coffee extends RoomScene {

    constructor() {
        super("Coffee");

        /** @type {Phaser.GameObjects.Image} */
        this.happyhalloween;
        /** @type {Phaser.GameObjects.Image} */
        this.bookroomhover0002;
        /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Image>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'town': () => this.triggerRoom(100, 580, 520),
            'beans': () => this.triggerGame('BeanCounters', 908),
            'book': () => this.triggerRoom(111, 1200, 580)
        }
        this.roomAnims = false
        this.music = 'coffee'

        this.boardToggle = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("coffee-pack", "assets/media/rooms/spooky_fair/coffee/coffee-pack.json");
    }

    /** @returns {void} */
    _create() {

        // lightningdoor0001
        const lightningdoor0001 = this.add.sprite(775, 242, "coffee_halloween", "lightningdoor0001");
        lightningdoor0001.scaleX = 1.3518793284739814;
        lightningdoor0001.scaleY = 1.3518793284739814;

        // bg_1
        this.add.image(773, 460, "coffee_halloween", "bg");

        // happyhalloween_1
        this.add.image(1101, 363, "coffee_halloween", "happyhalloween2");

        // happyhalloween
        const happyhalloween = this.add.image(1101, 363, "coffee_halloween", "happyhalloween");

        // backbackpumpkin
        const backbackpumpkin = this.add.image(1023.0085563276511, 558.236892924727, "coffee_halloween", "backbackpumpkin");
        backbackpumpkin.setOrigin(0.48326517922395923, 0.7821976632475901);

        // deskback
        const deskback = this.add.image(913.4679137713082, 449.92299305113966, "coffee_halloween", "deskback");
        deskback.setOrigin(0.5597433101704655, 0.6271134258946075);

        // deskleft
        const deskleft = this.add.image(835.1988119952318, 625.5172050136637, "coffee_halloween", "deskleft");
        deskleft.setOrigin(0.3158667950425669, 0.8131712738102143);

        // sign
        const sign = this.add.image(871.1099906178471, 691.2998516403129, "coffee_halloween", "sign");
        sign.setOrigin(0.4132117397048296, 0.6537919739880087);

        // signpumpkin
        const signpumpkin = this.add.image(958.9187148873141, 710.429410296878, "coffee_halloween", "signpumpkin");
        signpumpkin.setOrigin(0.699144367234885, 0.6785805467051959);

        // backbean
        const backbean = this.add.image(1080, 656, "coffee_halloween", "backbean");

        // beans_1
        const beans_1 = this.add.image(1034.3205220860727, 629.2645203069275, "coffee_halloween", "beans");
        beans_1.setOrigin(0.39600316006229164, 0.3883295346847366);

        // rightpumpkin
        const rightpumpkin = this.add.image(1442, 818, "coffee_halloween", "rightpumpkin");

        // bookroomhover0002
        const bookroomhover0002 = this.add.image(1272, 548, "coffee_halloween", "bookroomhover0002");
        bookroomhover0002.visible = false;

        // shadow
        this.add.image(106, 684, "coffee_halloween", "shadow");

        // sofa
        const sofa = this.add.image(279.67269504394477, 455.2219518029624, "coffee_halloween", "sofa");
        sofa.setOrigin(0.7951702866872123, 0.24453825556821535);

        // redlight
        const redlight = this.add.image(242.22679192883695, 500.84324287265, "coffee_halloween", "redlight");
        redlight.setOrigin(0.5465732110170315, 0.7424033580583667);

        // candle
        const candle = this.add.image(105.39929482896086, 670.0954163882457, "coffee_halloween", "candle");
        candle.setOrigin(0.6141134989938875, 0.8952834369537481);

        // lefttable
        const lefttable = this.add.image(192.95534678527173, 644.7250290012391, "coffee_halloween", "lefttable");
        lefttable.setOrigin(0.3747462885526803, 0.7731195973506156);

        // pumpkintree
        const pumpkintree = this.add.image(344.23641651657636, 400.5139811024048, "coffee_halloween", "pumpkintree");
        pumpkintree.setOrigin(0.4843931658656789, 0.895595831661562);

        // leftlight
        this.add.image(188, 177, "coffee_halloween", "leftlight");

        // cake
        const cake = this.add.image(374.9457109712869, 776.194358631687, "coffee_halloween", "cake");
        cake.setOrigin(0.47795534678527163, 0.8288016072705233);

        // light
        this.add.image(1256, 345, "coffee_halloween", "light");

        // bluechairbehind
        const bluechairbehind = this.add.image(459.9486620340931, 394.45507927983147, "coffee_halloween", "bluechairbehind");
        bluechairbehind.setOrigin(0.6475143460999149, 0.7091015855966293);

        // bluechair
        const bluechair = this.add.image(454.4807482627849, 438.8930459043606, "coffee_halloween", "bluechair");
        bluechair.setOrigin(0.5311163073804508, 0.7145952233134533);

        // redchairbehind
        const redchairbehind = this.add.image(642.4721919351338, 393.4636356074826, "coffee_halloween", "redchairbehind");
        redchairbehind.setOrigin(0.6797831093092712, 0.728746908310341);

        // door_1
        const door_1 = this.add.image(780, 267, "coffee_halloween", "door");

        // redchair
        const redchair = this.add.image(664.5192517372151, 433.8844895767094, "coffee_halloween", "redchair");
        redchair.setOrigin(0.47109194669171023, 0.6745746076409703);

        // lightsign
        this.add.image(1070, 220, "coffee_halloween", "lightsign");

        // fire
        const fire = this.add.image(34.52714451435652, 702.0446532147282, "coffee_halloween", "fire");
        fire.setOrigin(0.5534415835508564, 0.6735799465726631);

        // tvborder
        this.add.image(531, 207, "coffee_halloween", "tvborder");

        // wiring
        this.add.image(798, 28, "coffee_halloween", "wiring");

        // fire0001
        const fire0001 = this.add.sprite(443, 579, "coffee_halloween", "fire0001");

        // fire_1
        const fire_1 = this.add.sprite(417, 583, "coffee_halloween", "fire0001");

        // fire_2
        const fire_2 = this.add.sprite(294, 661, "coffee_halloween", "fire0001");

        // fire_3
        const fire_3 = this.add.sprite(276, 668, "coffee_halloween", "fire0001");

        // fire_4
        const fire_4 = this.add.sprite(322, 681, "coffee_halloween", "fire0001");

        // fire_5
        const fire_5 = this.add.sprite(368, 518, "coffee_halloween", "fire0001");

        // fire_6
        const fire_6 = this.add.sprite(336, 518, "coffee_halloween", "fire0001");

        // fire_7
        const fire_7 = this.add.sprite(317, 520, "coffee_halloween", "fire0001");

        // fire_8
        const fire_8 = this.add.sprite(244, 534, "coffee_halloween", "fire0001");

        // fire_9
        const fire_9 = this.add.sprite(219, 522, "coffee_halloween", "fire0001");

        // fire_10
        const fire_10 = this.add.sprite(193, 533, "coffee_halloween", "fire0001");

        // fire_11
        const fire_11 = this.add.sprite(141, 447, "coffee_halloween", "fire0001");

        // fire_12
        const fire_12 = this.add.sprite(111, 440, "coffee_halloween", "fire0001");

        // fire_13
        const fire_13 = this.add.sprite(82, 432, "coffee_halloween", "fire0001");

        // fire_14
        const fire_14 = this.add.sprite(55, 453, "coffee_halloween", "fire0001");

        // fire_15
        const fire_15 = this.add.sprite(31, 472, "coffee_halloween", "fire0001");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(1082, 356, 128, 128);
        rectangle_1.scaleX = 1.4486462702705145;
        rectangle_1.scaleY = 2.554085800683581;

        // rectangle
        const rectangle = this.add.rectangle(1288, 615, 128, 128);
        rectangle.scaleX = 1.4486462702705145;
        rectangle.scaleY = 4.712770748989753;

        // lists
        const sort = [fire_15, fire_14, fire_13, fire_12, fire_11, fire_10, fire_9, fire_8, fire_7, fire_6, fire_5, fire_4, fire_3, fire_2, fire_1, fire0001, fire, redchair, redchairbehind, bluechair, bluechairbehind, cake, pumpkintree, lefttable, candle, sofa, beans_1, backbean, signpumpkin, rightpumpkin, sign, deskleft, deskback, backbackpumpkin];

        // lightningdoor0001 (components)
        const lightningdoor0001Animation = new Animation(lightningdoor0001);
        lightningdoor0001Animation.key = "lightningdoor";
        lightningdoor0001Animation.end = 90;

        // beans_1 (components)
        const beans_1ShowHint = new ShowHint(beans_1);
        beans_1ShowHint.text = "Bean Counters";
        const beans_1Button = new Button(beans_1);
        beans_1Button.spriteName = "beans";
        beans_1Button.activeFrame = false;
        const beans_1MoveTo = new MoveTo(beans_1);
        beans_1MoveTo.x = 1031;
        beans_1MoveTo.y = 656;

        // door_1 (components)
        const door_1Button = new Button(door_1);
        door_1Button.spriteName = "door";
        door_1Button.activeFrame = false;
        const door_1MoveTo = new MoveTo(door_1);
        door_1MoveTo.x = 769;
        door_1MoveTo.y = 325;

        // fire0001 (components)
        const fire0001Animation = new Animation(fire0001);
        fire0001Animation.key = "fire";
        fire0001Animation.end = 14;

        // fire_1 (components)
        const fire_1Animation = new Animation(fire_1);
        fire_1Animation.key = "fire";
        fire_1Animation.end = 14;

        // fire_2 (components)
        const fire_2Animation = new Animation(fire_2);
        fire_2Animation.key = "fire";
        fire_2Animation.end = 14;

        // fire_3 (components)
        const fire_3Animation = new Animation(fire_3);
        fire_3Animation.key = "fire";
        fire_3Animation.end = 14;

        // fire_4 (components)
        const fire_4Animation = new Animation(fire_4);
        fire_4Animation.key = "fire";
        fire_4Animation.end = 14;

        // fire_5 (components)
        const fire_5Animation = new Animation(fire_5);
        fire_5Animation.key = "fire";
        fire_5Animation.end = 14;

        // fire_6 (components)
        const fire_6Animation = new Animation(fire_6);
        fire_6Animation.key = "fire";
        fire_6Animation.end = 14;

        // fire_7 (components)
        const fire_7Animation = new Animation(fire_7);
        fire_7Animation.key = "fire";
        fire_7Animation.end = 14;

        // fire_8 (components)
        const fire_8Animation = new Animation(fire_8);
        fire_8Animation.key = "fire";
        fire_8Animation.end = 14;

        // fire_9 (components)
        const fire_9Animation = new Animation(fire_9);
        fire_9Animation.key = "fire";
        fire_9Animation.end = 14;

        // fire_10 (components)
        const fire_10Animation = new Animation(fire_10);
        fire_10Animation.key = "fire";
        fire_10Animation.end = 14;

        // fire_11 (components)
        const fire_11Animation = new Animation(fire_11);
        fire_11Animation.key = "fire";
        fire_11Animation.end = 14;

        // fire_12 (components)
        const fire_12Animation = new Animation(fire_12);
        fire_12Animation.key = "fire";
        fire_12Animation.end = 14;

        // fire_13 (components)
        const fire_13Animation = new Animation(fire_13);
        fire_13Animation.key = "fire";
        fire_13Animation.end = 14;

        // fire_14 (components)
        const fire_14Animation = new Animation(fire_14);
        fire_14Animation.key = "fire";
        fire_14Animation.end = 14;

        // fire_15 (components)
        const fire_15Animation = new Animation(fire_15);
        fire_15Animation.key = "fire";
        fire_15Animation.end = 14;

        // rectangle_1 (components)
        const rectangle_1SimpleButton = new SimpleButton(rectangle_1);
        rectangle_1SimpleButton.callback = () => {this.happyhalloween.visible = !this.happyhalloween.visible};

        // rectangle (components)
        const rectangleSimpleButton = new SimpleButton(rectangle);
        rectangleSimpleButton.hoverCallback = () => this.bookroomhover0002.visible = true;;
        rectangleSimpleButton.hoverOutCallback = () => this.bookroomhover0002.visible = false;;
        const rectangleMoveTo = new MoveTo(rectangle);
        rectangleMoveTo.x = 1285;
        rectangleMoveTo.y = 850;

        this.happyhalloween = happyhalloween;
        this.bookroomhover0002 = bookroomhover0002;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onBoardClick() {
        let animation = (this.boardToggle) ? 'board1' : 'board2'

        this.board.play(animation)
        this.boardToggle = !this.boardToggle
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
