import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton, Zone } from '@components/components'


/* START OF COMPILED CODE */

export default class Shop extends RoomScene {

    constructor() {
        super("Shop");

        /** @type {Phaser.GameObjects.Sprite} */
        this.register0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.phone0001;
        /** @type {Array<Phaser.GameObjects.Container|Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'town': () => this.triggerRoom(100, 932, 560),
            'catalog': () => this.interface.loadExternal('ClothingCatalog')
        }
        this.music = '345'
        this.roomAnims = true;

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("shop-pack", "assets/media/rooms/spooky_fair/shop/shop-pack.json");
        this.load.pack("pizza-pack", "assets/media/rooms/spooky_fair/pizza/pizza-pack.json");
    }

    /** @returns {void} */
    _create() {

        // container
        const container = this.add.container(1324.9695028627973, 660.5011002882876);

        // doorlightning0001
        const doorlightning0001 = this.add.sprite(1107, 258, "shop_halloween", "doorlightning0001");
        doorlightning0001.scaleX = 1.6030451677292308;
        doorlightning0001.scaleY = 1.6030451677292308;

        // bg
        const bg = this.add.image(763, 475, "shop_halloween", "bg");
        bg.scaleX = 1.0198154029971915;
        bg.scaleY = 1.0198154029971915;

        // desk
        const desk = this.add.image(1341.7446917430605, 671.3151208199762, "shop_halloween", "desk");
        desk.setOrigin(0.40808217709425987, 0.7909328631737692);

        // register0001
        const register0001 = this.add.sprite(1390.0888509283955, 735.919268151086, "shop_halloween", "register0001");
        register0001.setOrigin(1.159763750935526, 2.0227864761638776);

        // phone0001
        const phone0001 = this.add.sprite(1499.034368109497, 731.4025912728478, "shop_halloween", "phone0001");
        phone0001.setOrigin(1.191781699370326, 1.7492729293754767);

        // fg
        this.add.image(809, 367, "shop_halloween", "fg");

        // bottomleft
        this.add.image(130, 705, "shop_halloween", "bottomleft");

        // bottomleftidk
        const bottomleftidk = this.add.image(28, 870, "shop_halloween", "bottomleftidk");

        // chairs
        this.add.image(844, 356, "shop_halloween", "chairs");

        // leftchairhead
        const leftchairhead = this.add.image(771, 260, "shop_halloween", "leftchairhead");
        leftchairhead.scaleX = 0.9826311173362379;
        leftchairhead.scaleY = 0.9826311173362379;

        // speaker0001
        const speaker0001 = this.add.sprite(43, 321, "shop_halloween", "speaker0001");

        // decoration
        this.add.image(762, -63, "shop_halloween", "decoration");

        // door
        const door = this.add.image(1102, 318, "shop_halloween", "door");
        door.scaleX = 1.1036100643349118;
        door.scaleY = 1.1036100643349118;

        // pumpkin
        const pumpkin = this.add.image(228.0554649955557, 804.9718334431319, "pizza_halloween", "pumpkin");
        pumpkin.setOrigin(0.5857012794266797, 0.7920248885977599);
        pumpkin.flipX = true;

        // catalog
        const catalog = this.add.image(1340, 1052, "shop_halloween", "catalog0001");
        catalog.setOrigin(0, 2);

        // rectangle_1
        const rectangle_1 = this.add.rectangle(1305, 483, 128, 128);
        rectangle_1.scaleX = 0.715384304732612;
        rectangle_1.scaleY = 0.715384304732612;

        // rectangle
        const rectangle = this.add.rectangle(1440, 553, 128, 128);
        rectangle.scaleX = 0.3221768433658497;
        rectangle.scaleY = 0.3221768433658497;

        // lists
        const sort = [container, catalog, desk, register0001, phone0001, pumpkin, bottomleftidk];

        // doorlightning0001 (components)
        const doorlightning0001Animation = new Animation(doorlightning0001);
        doorlightning0001Animation.key = "doorlightning";
        doorlightning0001Animation.end = 86;

        // speaker0001 (components)
        const speaker0001Animation = new Animation(speaker0001);
        speaker0001Animation.key = "speaker";
        speaker0001Animation.end = 30;

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 1102;
        doorMoveTo.y = 450;

        // catalog (components)
        const catalogSimpleButton = new SimpleButton(catalog);
        catalogSimpleButton.callback = () => this.interface.loadExternal('ClothingCatalog');

        // rectangle_1 (components)
        const rectangle_1SimpleButton = new SimpleButton(rectangle_1);
        rectangle_1SimpleButton.hoverCallback = () => this.register0001.play("register");

        // rectangle (components)
        const rectangleSimpleButton = new SimpleButton(rectangle);
        rectangleSimpleButton.hoverCallback = () => this.phone0001.play("phone");

        this.register0001 = register0001;
        this.phone0001 = phone0001;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
