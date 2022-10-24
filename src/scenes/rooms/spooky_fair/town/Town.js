import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Town extends RoomScene {

    constructor() {
        super("Town");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'dock': () => this.triggerRoom(800, 1200, 400),
            'forts': () => this.triggerRoom(801, 360, 520),
            'coffee': () => this.triggerRoom(110, 700, 450),
            'dance': () => this.triggerRoom(120, 300, 560),
            'gift': () => this.triggerRoom(130, 1036, 520),
        }
        this.music = '251'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("town-spooky-pack", "assets/media/rooms/spooky_fair/town/town-spooky-pack.json");
        this.load.pack("town-pack", "assets/media/rooms/old/town/town-pack.json");
        this.load.pack("sky-pack", "assets/media/rooms/spooky_fair/sky/sky-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky0001
        const sky0001 = this.add.sprite(1036, 140, "sky_spooky", "sky0001");
        sky0001.scaleX = 1.09984007296373;
        sky0001.scaleY = 1.09984007296373;

        // rectangle
        const rectangle = this.add.rectangle(989, 126, 128, 128);
        rectangle.scaleX = 0.17686731678351253;
        rectangle.scaleY = 0.17686731678351253;
        rectangle.isFilled = true;
        rectangle.fillColor = 0;

        // snow
        this.add.image(784, 687, "town_halloween", "snow");

        // bg_png
        this.add.image(762, 444, "town_halloween", "bg.png");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(977, 163, 128, 128);
        rectangle_1.scaleX = 0.17686731678351253;
        rectangle_1.scaleY = 0.17686731678351253;
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 0;

        // dance
        this.add.image(790, 201, "town_halloween", "dance");

        // coffee_door
        const coffee_door = this.add.image(419, 276, "town", "coffee_door");
        coffee_door.scaleX = 1.25;
        coffee_door.scaleY = 1.25;
        coffee_door.setOrigin(0, 0);

        // coffee
        this.add.image(352, 283, "town_halloween", "coffee");

        // untitled_1
        this.add.image(1040, 454, "town_halloween", "Untitled-1");

        // rectangle_2
        const rectangle_2 = this.add.rectangle(1110, 361, 128, 128);
        rectangle_2.scaleX = 0.14766713410232768;
        rectangle_2.scaleY = 0.14766713410232768;
        rectangle_2.isFilled = true;
        rectangle_2.fillColor = 11048642;

        // gift
        this.add.image(1185, 284, "town_halloween", "gift");

        // gift_door
        const gift_door = this.add.image(981, 281, "town", "gift_door");
        gift_door.scaleX = 1.150024020179054;
        gift_door.scaleY = 1.150024020179054;
        gift_door.setOrigin(0, 0);

        // leftpumpkin
        const leftpumpkin = this.add.image(967, 430.05723756623746, "town_halloween", "leftpumpkin");
        leftpumpkin.scaleX = 1.1;
        leftpumpkin.scaleY = 1.1;
        leftpumpkin.setOrigin(0.5, 0.668992561614822);

        // rightpumpkin
        const rightpumpkin = this.add.image(1172.7833885803052, 587.5476979718645, "town_halloween", "rightpumpkin");
        rightpumpkin.scaleX = 1.1;
        rightpumpkin.scaleY = 1.1;
        rightpumpkin.setOrigin(0.5985789942753125, 0.6520933054533392);

        // fg
        const fg = this.add.image(781.2606069557016, 936.526270284827, "town_halloween", "fg");
        fg.setOrigin(0.5098370714976879, 0.9159829637866318);

        // container_1
        const container_1 = this.add.container(396, 536);

        // chair
        const chair = this.add.image(11.321659445455737, -3.996493746051442, "town_halloween", "chair");
        chair.setOrigin(0.6451494803823852, 0.44597753714175997);
        container_1.add(chair);

        // tables
        const tables = this.add.image(475.1988576162644, 558.3582663215171, "town_halloween", "tables");
        tables.scaleX = 1.1;
        tables.setOrigin(0.527071874527435, 0.6686568552804526);

        // stand
        const stand = this.add.image(949.8231626876196, 711.7315104468684, "town_halloween", "stand");
        stand.setOrigin(0.5169915113691664, 0.5400429869610222);

        // rectangle_4
        const rectangle_4 = this.add.rectangle(784, 327, 128, 128);
        rectangle_4.scaleX = 2.017966937422621;
        rectangle_4.scaleY = 1.5101020117818045;

        // rectangle_3
        const rectangle_3 = this.add.rectangle(1238, 794, 128, 128);
        rectangle_3.scaleX = 0.9284943559594598;
        rectangle_3.scaleY = 0.9284943559594598;
        rectangle_3.angle = 15;

        // rightsign
        const rightsign = this.add.image(1298.8516701780225, 991.5937366875696, "town_halloween", "rightsign");
        rightsign.scaleX = 1.1;
        rightsign.scaleY = 1.1;
        rightsign.setOrigin(0.8846616694202258, 1.3279838824801864);

        // candy_candy10002
        const candy_candy10002 = this.add.image(-50.358819141161234, 1232.9029433341475, "candyhunt", "candy/1-got");
        candy_candy10002.scaleX = 0.5;
        candy_candy10002.scaleY = 0.5;
        candy_candy10002.angle = 36;
        candy_candy10002.setOrigin(0.4999998360620012, 11.958993896989263);
        candy_candy10002.tintTopLeft = 2383380;
        candy_candy10002.tintTopRight = 2383380;
        candy_candy10002.tintBottomLeft = 2383380;

        // lists
        const sort = [stand, tables, chair, rightpumpkin, leftpumpkin, rightsign, fg, candy_candy10002];

        // sky0001 (components)
        const sky0001Animation = new Animation(sky0001);
        sky0001Animation.key = "sky";
        sky0001Animation.end = 282;

        // coffee_door (components)
        const coffee_doorButton = new Button(coffee_door);
        coffee_doorButton.spriteName = "coffee_door";
        coffee_doorButton.activeFrame = false;
        const coffee_doorMoveTo = new MoveTo(coffee_door);
        coffee_doorMoveTo.x = 532;
        coffee_doorMoveTo.y = 426;

        // gift_door (components)
        const gift_doorButton = new Button(gift_door);
        gift_doorButton.spriteName = "gift_door";
        gift_doorButton.activeFrame = false;
        const gift_doorMoveTo = new MoveTo(gift_door);
        gift_doorMoveTo.x = 1053;
        gift_doorMoveTo.y = 442;

        // rectangle_4 (components)
        const rectangle_4MoveTo = new MoveTo(rectangle_4);
        rectangle_4MoveTo.x = 783;
        rectangle_4MoveTo.y = 400;
        new SimpleButton(rectangle_4);

        // rectangle_3 (components)
        const rectangle_3MoveTo = new MoveTo(rectangle_3);
        rectangle_3MoveTo.x = 783;
        rectangle_3MoveTo.y = 374;
        const rectangle_3SimpleButton = new SimpleButton(rectangle_3);
        rectangle_3SimpleButton.callback = () => {this.triggerRoom(899,  716, 666)};

        // candy_candy10002 (components)
        const candy_candy10002SimpleButton = new SimpleButton(candy_candy10002);
        candy_candy10002SimpleButton.callback = () => this.network.send('collected_candy', { candy: "candy_stick" });

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */


    onCanopyOver() {
        this.disco.setFrame('disco-hover')
        this.canopy_lights.__Animation.play()
        this.disco_lights.__Animation.play()
    }

    onCanopyOut() {
        this.disco.setFrame('disco')
        this.canopy_lights.__Animation.stop()
        this.disco_lights.__Animation.stop()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
