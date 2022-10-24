import { Button, Interactive, SimpleButton, Animation } from '@components/components'

import RoomScene from '@scenes/rooms/RoomScene'


/* START OF COMPILED CODE */

export default class Rink extends RoomScene {

    constructor() {
        super("Rink");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'forts': () => this.triggerRoom(801, 560, 400)
        }
        this.music = '592'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("sport-pack", "assets/media/rooms/old/sport/sport-pack.json");
        this.load.pack("rink-spf-pack", "assets/media/rooms/old/rink/spf/rink-spf-pack.json");
        this.load.pack("sky-pack", "assets/media/rooms/spooky_fair/sky/sky-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky0001
        const sky0001 = this.add.sprite(945, 32, "sky_spooky", "sky0001");

        // bg
        const bg = this.add.image(-24, 53, "rink-spf", "bg");
        bg.setOrigin(0, 0);

        // rink_border
        const rink_border = this.add.image(773.4833215984154, 335.5113334642994, "rink-spf", "rink_border");
        rink_border.setOrigin(0.5049127991142505, 0.09456905165960387);

        // sports
        const sports = this.add.image(1390, 250, "rink-spf", "sports");
        sports.setOrigin(0.52966102, 0.80970149);

        // sports_door0001
        const sports_door0001 = this.add.image(1327, 280, "rink-spf", "sports_door");
        sports_door0001.setOrigin(0.5125, 0.62962963);

        // ball
        const ball = this.add.image(765, 537, "rink-spf", "ball");
        ball.setOrigin(0.5, 0.7037037);
        ball.visible = false;

        // fish_dogs
        const fish_dogs = this.add.image(166, 242, "rink-spf", "fish_dogs");
        fish_dogs.setOrigin(0.51492537, 0.79347826);

        // left_bleachers
        const left_bleachers = this.add.image(105, 258, "rink-spf", "left_bleachers");
        left_bleachers.setOrigin(0.44444444, 0.16260163);

        // bleachers_rail
        const bleachers_rail = this.add.image(38, 558, "rink-spf", "bleachers_rail");
        bleachers_rail.setOrigin(0.82231405, 0.78181818);

        // right_bleachers
        const right_bleachers = this.add.image(1415, 258, "rink-spf", "right_bleachers");
        right_bleachers.setOrigin(0.5473251, 0.16531165);

        // bleachers_rail_1
        const bleachers_rail_1 = this.add.image(1636, 558, "rink-spf", "bleachers_rail");
        bleachers_rail_1.setOrigin(0.82231405, 0.78181818);
        bleachers_rail_1.flipX = true;

        // candy_candy80002
        const candy_candy80002 = this.add.image(885, 215, "candyhunt", "candy/8-got");
        candy_candy80002.scaleX = 0.5;
        candy_candy80002.scaleY = 0.5;
        candy_candy80002.angle = 23;
        candy_candy80002.tintTopLeft = 7434609;
        candy_candy80002.tintTopRight = 7434609;
        candy_candy80002.tintBottomLeft = 7434609;
        candy_candy80002.tintBottomRight = 7434609;

        // drink
        const drink = this.add.image(70, 485, "rink-spf", "drink");
        drink.setOrigin(0.5, 0.75510204);

        // fg
        const fg = this.add.image(-64, 1046.9173886139422, "rink-spf", "fg");
        fg.setOrigin(0, 0.9998385876423137);

        // trash
        const trash = this.add.image(858, 214, "rink-spf", "trash");
        trash.setOrigin(0.44117647, 0.69642857);

        // snacks
        const snacks = this.add.image(1046, 230, "rink-spf", "snacks");
        snacks.setOrigin(0.44080605, 0.79461279);

        // stand_base
        const stand_base = this.add.image(731, 126, "rink-spf", "stand_base");
        stand_base.setOrigin(0.99404762, 0.36328125);

        // stand_middle
        const stand_middle = this.add.image(528, 167, "rink-spf", "stand_middle");
        stand_middle.setOrigin(0.51265823, 0.42537313);

        // stand_top
        const stand_top = this.add.image(522, 236, "rink-spf", "stand_top");
        stand_top.setOrigin(0.50117647, 2.57831325);

        // goal_back
        const goal_back = this.add.image(1258, 441, "rink-spf", "goal_back");
        goal_back.setOrigin(0.97183099, 0.48863636);

        // goal
        const goal = this.add.image(1273, 578, "rink-spf", "goal");
        goal.setOrigin(0.58571429, 0.91902834);

        // goal_back_1
        const goal_back_1 = this.add.image(345, 450, "rink-spf", "goal_back");
        goal_back_1.setOrigin(0.97183099, 0.48863636);
        goal_back_1.flipX = true;

        // goal_1
        const goal_1 = this.add.image(286, 578, "rink-spf", "goal");
        goal_1.setOrigin(0.58571429, 0.91902834);
        goal_1.flipX = true;

        // snacks_door0001
        const snacks_door0001 = this.add.image(1214, 185, "rink-spf", "snacks_door");

        // book_sports
        const book_sports = this.add.image(1414, 1111.244075129439, "sport", "book-sports");
        book_sports.setOrigin(0.5, 2.552033959411991);

        // light
        const light = this.add.image(1249.5584678400055, 307.3915826049796, "rink-spf", "light");
        light.setOrigin(0.5271335457948464, 1.793945084859437);

        // tombstone
        const tombstone = this.add.image(66, 576, "tombstone");
        tombstone.scaleX = 0.3;
        tombstone.scaleY = 0.3;

        // lists
        const sort = [fg, ball, goal_back, goal, goal_back_1, goal_1, snacks, sports_door0001, sports, right_bleachers, bleachers_rail_1, bleachers_rail, left_bleachers, fish_dogs, stand_middle, stand_base, stand_top, trash, rink_border, book_sports, light, snacks_door0001, tombstone];

        // sky0001 (components)
        const sky0001Animation = new Animation(sky0001);
        sky0001Animation.key = "sky";
        sky0001Animation.end = 282;

        // sports_door0001 (components)
        const sports_door0001Button = new Button(sports_door0001);
        sports_door0001Button.spriteName = "sports_door";

        // candy_candy80002 (components)
        const candy_candy80002SimpleButton = new SimpleButton(candy_candy80002);
        candy_candy80002SimpleButton.callback = () => this.network.send('collected_candy', { candy: "lollipop" });

        // snacks_door0001 (components)
        const snacks_door0001Button = new Button(snacks_door0001);
        snacks_door0001Button.spriteName = "snacks_door";

        // book_sports (components)
        const book_sportsButton = new Button(book_sports);
        book_sportsButton.spriteName = "book-sports";
        book_sportsButton.callback = () => this.interface.loadExternal('SportsCatalog');
        book_sportsButton.activeFrame = false;

        // tombstone (components)
        const tombstoneSimpleButton = new SimpleButton(tombstone);
        tombstoneSimpleButton.callback = () => this.interface.prompt.showItem(7165);;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
