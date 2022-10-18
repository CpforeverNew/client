import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Plaza extends RoomScene {

    constructor() {
        super("Plaza");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'forts': () => this.triggerRoom(801, 1284, 720),
            'pet': () => this.triggerRoom(310, 818, 520),
            'cave': () => { this.triggerRoom(806, 1180, 614); this.world.client.stampEarned(10); },
            'stage1': () => this.triggerRoom(341, 240, 660),
            'stage2': () => this.triggerRoom(340, 240, 660),
            'pizza': () => this.triggerRoom(330, 850, 540),
            'forest': () => this.triggerRoom(809, 270, 430)
        }
        this.music = '677'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("plaza-spf-pack", "assets/media/rooms/spooky_fair/plaza/plaza-spf-pack.json");
        this.load.pack("sky-pack", "assets/media/rooms/spooky_fair/sky/sky-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky0001
        const sky0001 = this.add.sprite(936, 95, "sky_spooky", "sky0001");

        // bg
        this.add.image(650, 387, "plaza-spf", "bg");

        // glow
        this.add.image(735, 413, "plaza-spf", "glow");

        // puffle
        this.add.image(209, 226, "plaza-spf", "puffle");

        // trees
        this.add.image(759, 490, "plaza-spf", "trees");

        // sewer
        const sewer = this.add.image(566, 472, "plaza-spf", "sewer");

        // tickets
        const tickets = this.add.image(844, 469.45245422832465, "plaza-spf", "tickets");
        tickets.setOrigin(0.5, 0.9970561809053845);

        // pumkin1
        this.add.image(120, 644, "plaza-spf", "pumkin1");

        // pumkin2
        this.add.image(1418, 727, "plaza-spf", "pumkin2");

        // pumkin3
        this.add.image(1389, 862, "plaza-spf", "pumkin3");

        // pizza_trick
        const pizza_trick = this.add.image(406, 851, "plaza-spf", "pizza_trick");
        pizza_trick.scaleX = 0.76;
        pizza_trick.scaleY = 0.75;
        pizza_trick.angle = 1;

        // overlay
        const overlay = this.add.image(755, 965.9504536945924, "plaza-spf", "overlay");
        overlay.setOrigin(0.5, 0.9690993906799709);

        // pet_door
        const pet_door = this.add.sprite(335, 494, "plaza-spf", "pet_door");

        // left_stage_door
        const left_stage_door = this.add.sprite(733, 389, "plaza-spf", "left_stage_door");

        // right_stage_door
        const right_stage_door = this.add.sprite(958, 390, "plaza-spf", "right_stage_door");

        // lists
        const sort = [tickets, overlay];

        // sky0001 (components)
        const sky0001Animation = new Animation(sky0001);
        sky0001Animation.key = "sky";
        sky0001Animation.end = 282;

        // sewer (components)
        const sewerButton = new Button(sewer);
        sewerButton.spriteName = "sewer";

        // pet_door (components)
        const pet_doorButton = new Button(pet_door);
        pet_doorButton.spriteName = "pet_door";
        new MoveTo(pet_door);

        // left_stage_door (components)
        const left_stage_doorButton = new Button(left_stage_door);
        left_stage_doorButton.spriteName = "left_stage_door";
        const left_stage_doorMoveTo = new MoveTo(left_stage_door);
        left_stage_doorMoveTo.x = 730;
        left_stage_doorMoveTo.y = 460;

        // right_stage_door (components)
        const right_stage_doorButton = new Button(right_stage_door);
        right_stage_doorButton.spriteName = "right_stage_door";
        const right_stage_doorMoveTo = new MoveTo(right_stage_door);
        right_stage_doorMoveTo.x = 960;
        right_stage_doorMoveTo.y = 460;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
