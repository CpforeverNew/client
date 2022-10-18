import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton, Zone, ShowHint } from '@components/components'

/* START OF COMPILED CODE */

export default class Pizza extends RoomScene {

    constructor() {
        super("Pizza");

        /** @type {Phaser.GameObjects.Sprite} */
        this.book0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.register0001;
        /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Image>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 870, 330),
            'pizzatron': () => this.triggerGame("Pizzatron", 910)
        }
        this.music = 'pizzaparlor'
        this.roomAnims = true;

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("pizza-pack", "assets/media/rooms/spooky_fair/pizza/pizza-pack.json");
    }

    /** @returns {void} */
    _create() {

        // fg
        this.add.image(760, 509, "pizza_halloween", "fg");

        // back
        this.add.image(761, 325, "pizza_halloween", "back");

        // stick_thing
        const stick_thing = this.add.image(247.1122989536621, 678.673294095665, "pizza_halloween", "stick_thing");
        stick_thing.setOrigin(0.8903396035952085, 0.8866181455100848);

        // chairs
        const chairs = this.add.image(498.36463017036283, 609.1769929133328, "pizza_halloween", "chairs");
        chairs.setOrigin(0.5192971906408291, 0.4787608450802256);

        // chairs_1
        const chairs_1 = this.add.image(761.462403573135, 717.4760410253533, "pizza_halloween", "chairs");
        chairs_1.setOrigin(0.5196490049760437, 0.4693112487908536);

        // chairs_2
        const chairs_2 = this.add.image(1070.951302551008, 678.2732138248242, "pizza_halloween", "chairs");
        chairs_2.setOrigin(0.5178103617096991, 0.434851120262002);

        // table_left
        const table_left = this.add.image(493.5290787937087, 666.3840510361026, "pizza_halloween", "table_left");
        table_left.setOrigin(0.49719690235883446, 0.4834434637917866);

        // table_mid
        const table_mid = this.add.image(760.3877536727096, 780.2342204272954, "pizza_halloween", "table_mid");
        table_mid.setOrigin(0.47849841160302053, 0.49515325659330345);

        // table_right
        const table_right = this.add.image(1069.2154523182646, 736.9174011975838, "pizza_halloween", "table_right");
        table_right.setOrigin(0.4893775403211145, 0.48049003079682745);

        // curtain
        const curtain = this.add.image(581, 225, "pizza_halloween", "curtain");

        // kitchen
        const kitchen = this.add.image(394.2410244745684, 311.88984437199446, "pizza_halloween", "kitchen");
        kitchen.setOrigin(0.5096954327120424, 0.7031227484765886);

        // door
        const door = this.add.sprite(840, 271, "pizza_halloween", "door");

        // desk
        const desk = this.add.image(541.315293853818, 489.22679814443796, "pizza_halloween", "desk");
        desk.setOrigin(0.49030340299233777, 0.943648457370368);

        // book0001
        const book0001 = this.add.sprite(596.2813124114932, 508.1639848961451, "pizza_halloween", "book0001");
        book0001.setOrigin(0.5319500619691578, 3.0025623355899276);

        // cooker
        const cooker = this.add.image(190.45015323751974, 767.6048685810243, "pizza_halloween", "cooker");
        cooker.setOrigin(0.8163312457142796, 0.8566801563579624);

        // register0001
        const register0001 = this.add.sprite(471.49621719664947, 515.8652896666431, "pizza_halloween", "register0001");
        register0001.setOrigin(0.5614445282332197, 1.976606627219758);

        // leftbags
        const leftbags = this.add.image(100.72894394618835, 915.5701868460388, "pizza_halloween", "leftbags");
        leftbags.setOrigin(0.4550953942079217, 0.7009100900857692);

        // kitchensymbol0001
        this.add.image(390, 37, "pizza_halloween", "kitchensymbol0001");

        // menu
        this.add.image(229, 172, "pizza_halloween", "menu");

        // pianoshadow
        this.add.image(1278, 437, "pizza_halloween", "pianoshadow");

        // pianochair
        const pianochair = this.add.image(1286.3819637088964, 453.7983992021412, "pizza_halloween", "pianochair");
        pianochair.setOrigin(0.5090324425418064, 0.33109332446823536);

        // candle
        const candle = this.add.image(1044.6180362911036, 411.6989858437421, "pizza_halloween", "candle");
        candle.setOrigin(0.4856045446989962, 0.9145891126688762);

        // fish0001
        this.add.image(1045, 132, "pizza_halloween", "fish0001");

        // pumpkinshadow
        this.add.image(1433, 899, "pizza_halloween", "pumpkinshadow");

        // pumpkin
        const pumpkin = this.add.image(1426.1612430757186, 860.5813538642221, "pizza_halloween", "pumpkin");
        pumpkin.setOrigin(0.485746070354408, 0.6790997004170268);

        // flame0001
        const flame0001 = this.add.sprite(499, 583, "pizza_halloween", "flame0001");
        flame0001.scaleX = 0.5;
        flame0001.scaleY = 0.5;

        // flame
        const flame = this.add.sprite(761, 695, "pizza_halloween", "flame0001");
        flame.scaleX = 0.5;
        flame.scaleY = 0.5;

        // flame_1
        const flame_1 = this.add.sprite(1068, 654, "pizza_halloween", "flame0001");
        flame_1.scaleX = 0.5;
        flame_1.scaleY = 0.5;

        // flame_2
        const flame_2 = this.add.sprite(1007, 266, "pizza_halloween", "flame0001");
        flame_2.scaleX = 0.3;
        flame_2.scaleY = 0.3;

        // flame_3
        const flame_3 = this.add.sprite(1022, 255, "pizza_halloween", "flame0001");
        flame_3.scaleX = 0.3;
        flame_3.scaleY = 0.3;

        // flame_4
        const flame_4 = this.add.sprite(1045, 239, "pizza_halloween", "flame0001");
        flame_4.scaleX = 0.3;
        flame_4.scaleY = 0.3;

        // flame_5
        const flame_5 = this.add.sprite(1071, 254, "pizza_halloween", "flame0001");
        flame_5.scaleX = 0.3;
        flame_5.scaleY = 0.3;

        // flame_6
        const flame_6 = this.add.sprite(1088, 268, "pizza_halloween", "flame0001");
        flame_6.scaleX = 0.3;
        flame_6.scaleY = 0.3;

        // piano
        const piano = this.add.image(1317, 242, "pizza_halloween", "piano");

        // fire0001
        const fire0001 = this.add.sprite(111, 772, "pizza_halloween", "fire0001");

        // smoke0001
        const smoke0001 = this.add.sprite(43, 190, "pizza_halloween", "smoke0001");

        // lists
        const sort = [smoke0001, fire0001, piano, flame_6, flame_5, flame_4, flame_3, flame_2, flame_1, flame, flame0001, pumpkin, candle, pianochair, leftbags, cooker, book0001, desk, door, kitchen, curtain, table_right, table_mid, table_left, chairs_2, chairs_1, chairs, stick_thing, register0001];

        // kitchen (components)
        const kitchenButton = new Button(kitchen);
        kitchenButton.spriteName = "kitchen";
        kitchenButton.activeFrame = false;
        const kitchenShowHint = new ShowHint(kitchen);
        kitchenShowHint.text = "Pizzatron 3000";
        const kitchenMoveTo = new MoveTo(kitchen);
        kitchenMoveTo.x = 401;
        kitchenMoveTo.y = 395;

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 832;
        doorMoveTo.y = 404;

        // book0001 (components)
        const book0001SimpleButton = new SimpleButton(book0001);
        book0001SimpleButton.hoverCallback = () => this.onBookOver();

        // register0001 (components)
        const register0001SimpleButton = new SimpleButton(register0001);
        register0001SimpleButton.hoverCallback = () => this.onRegOver();
        register0001SimpleButton.pixelPerfect = true;

        // flame0001 (components)
        const flame0001Animation = new Animation(flame0001);
        flame0001Animation.key = "flame";
        flame0001Animation.end = 14;

        // flame (components)
        const flameAnimation = new Animation(flame);
        flameAnimation.key = "flame";
        flameAnimation.end = 14;

        // flame_1 (components)
        const flame_1Animation = new Animation(flame_1);
        flame_1Animation.key = "flame";
        flame_1Animation.end = 14;

        // flame_2 (components)
        const flame_2Animation = new Animation(flame_2);
        flame_2Animation.key = "flame";
        flame_2Animation.end = 14;

        // flame_3 (components)
        const flame_3Animation = new Animation(flame_3);
        flame_3Animation.key = "flame";
        flame_3Animation.end = 14;

        // flame_4 (components)
        const flame_4Animation = new Animation(flame_4);
        flame_4Animation.key = "flame";
        flame_4Animation.end = 14;

        // flame_5 (components)
        const flame_5Animation = new Animation(flame_5);
        flame_5Animation.key = "flame";
        flame_5Animation.end = 14;

        // flame_6 (components)
        const flame_6Animation = new Animation(flame_6);
        flame_6Animation.key = "flame";
        flame_6Animation.end = 14;

        // fire0001 (components)
        const fire0001Animation = new Animation(fire0001);
        fire0001Animation.key = "fire";
        fire0001Animation.end = 8;

        // smoke0001 (components)
        const smoke0001Animation = new Animation(smoke0001);
        smoke0001Animation.key = "smoke";
        smoke0001Animation.end = 5;

        this.book0001 = book0001;
        this.register0001 = register0001;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    onBookOver() {
        this.book0001.play('book')
    }

    onRegOver() {
        let animation = (this.boardToggle) ? 'cashregover' : 'cashregout'

        this.register0001.play(animation)
        this.boardToggle = !this.boardToggle
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here