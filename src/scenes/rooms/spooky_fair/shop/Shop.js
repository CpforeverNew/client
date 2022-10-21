import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton, Zone } from '@components/components'


/* START OF COMPILED CODE */

export default class Shop extends RoomScene {

    constructor() {
        super("Shop");

        /** @type {Phaser.GameObjects.Sprite} */
        this.phone;
        /** @type {Phaser.GameObjects.Sprite} */
        this.register;
        /** @type {Array<Phaser.GameObjects.Container|Phaser.GameObjects.Image>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'town': () => this.triggerRoom(100, 932, 560),
            'catalog': () => this.interface.loadExternal('ClothingCatalog')
        }
        this.music = '345'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("shop-pack", "assets/media/rooms/spooky_fair/shop/shop-pack.json");
    }

    /** @returns {void} */
    _create() {

        // background_png
        const background_png = this.add.image(0, 0, "spooky-shop", "Background.png");
        background_png.setOrigin(0.002500607161042051, 0.061693174588784136);

        // door
        const door = this.add.image(1028, 132, "shop", "door");
        door.setOrigin(0, 0);

        // speaker
        const speaker = this.add.sprite(-2, 175, "shop", "speaker/speaker0003");
        speaker.setOrigin(0, 0);

        // container
        const container = this.add.container(1324.9695028627973, 663.5011002882876);

        // counter
        const counter = this.add.image(0.030536885885567244, 1.4989092534428892, "shop", "counter");
        counter.setOrigin(0.4, 0.8102766798418972);
        container.add(counter);

        // phone
        const phone = this.add.sprite(63.03053688588557, -177.5010907465571, "shop", "phone/phone0001");
        phone.setOrigin(0, 0);
        container.add(phone);

        // register
        const register = this.add.sprite(-102.96946311411443, -289.5010907465571, "shop", "register/register0001");
        register.setOrigin(0, 0);
        container.add(register);

        // registerZone
        const registerZone = this.add.rectangle(1292, 466, 110, 100);
        registerZone.alpha = 0.5;
        registerZone.isFilled = true;
        registerZone.fillColor = 65280;

        // phoneZone
        const phoneZone = this.add.rectangle(1428, 541, 75, 60);
        phoneZone.alpha = 0.5;
        phoneZone.isFilled = true;
        phoneZone.fillColor = 65280;

        // catalog
        const catalog = this.add.image(1340, 1055, "shop", "catalog");
        catalog.setOrigin(0, 2);

        // pumpkin_png
        this.add.image(218, 739, "spooky-shop", "Pumpkin.png");

        // shoebox_png
        this.add.image(34, 899, "spooky-shop", "Shoebox.png");

        // streamer4_png
        this.add.image(995, 10, "spooky-shop", "Streamer4.png");

        // streamer5_png
        this.add.image(1387, 61, "spooky-shop", "Streamer5.png");

        // streamer3_png
        this.add.image(475, 83, "spooky-shop", "Streamer3.png");

        // streamer2_png
        this.add.image(678, 31, "spooky-shop", "Streamer2.png");

        // streamer1_png
        this.add.image(203, 85, "spooky-shop", "Streamer1.png");

        // lists
        const sort = [container, catalog];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        doorButton.pixelPerfect = true;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 1080;
        doorMoveTo.y = 466;

        // speaker (components)
        const speakerSimpleButton = new SimpleButton(speaker);
        speakerSimpleButton.pixelPerfect = true;
        const speakerAnimation = new Animation(speaker);
        speakerAnimation.key = "speaker/speaker";
        speakerAnimation.end = 30;
        speakerAnimation.repeat = 0;
        speakerAnimation.autoPlay = false;
        speakerAnimation.onHover = true;
        speakerAnimation.stopOnOut = false;

        // phone (components)
        const phoneAnimation = new Animation(phone);
        phoneAnimation.key = "phone/phone";
        phoneAnimation.end = 55;
        phoneAnimation.repeat = 0;
        phoneAnimation.autoPlay = false;
        phoneAnimation.onHover = true;
        phoneAnimation.stopOnOut = false;

        // register (components)
        const registerAnimation = new Animation(register);
        registerAnimation.key = "register/register";
        registerAnimation.end = 35;
        registerAnimation.repeat = 0;
        registerAnimation.autoPlay = false;
        registerAnimation.onHover = true;
        registerAnimation.stopOnOut = false;

        // registerZone (components)
        const registerZoneZone = new Zone(registerZone);
        registerZoneZone.hoverCallback = () => this.register.__Animation.play();

        // phoneZone (components)
        const phoneZoneZone = new Zone(phoneZone);
        phoneZoneZone.hoverCallback = () => this.phone.__Animation.play();

        // catalog (components)
        const catalogButton = new Button(catalog);
        catalogButton.spriteName = "catalog";
        catalogButton.callback = () => this.interface.loadExternal('ClothingCatalog');
        catalogButton.activeFrame = false;
        catalogButton.pixelPerfect = true;

        this.phone = phone;
        this.register = register;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
