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
        this.music = '251'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("plaza-spf-pack", "assets/media/rooms/spooky_fair/plaza/plaza-spf-pack.json");
        this.load.pack("sky-pack", "assets/media/rooms/spooky_fair/sky/sky-pack.json");
        this.load.audio('thunder', `assets/media/music/sf_thunder.mp3`)
    }

    /** @returns {void} */
    _create() {
        const thunder = this.sound.add('thunder');
        this.loopAudio(thunder, 5000);
        // sky0001
        const sky0001 = this.add.sprite(936, 95, "sky_spooky", "sky0001");

        // bg
        this.add.image(650, 387, "plaza-spf", "bg");

        // glow
        this.add.image(735, 413, "plaza-spf", "glow");

        // puffle
        this.add.image(209, 226, "plaza-spf", "puffle");

        // trees
        const trees = this.add.image(123.69653840291858, 847.8876415661466, "plaza-spf", "trees");
        trees.setOrigin(0.09118181257703477, 0.8881644442882995);

        // sewer
        const sewer = this.add.image(566, 472, "plaza-spf", "sewer");

        // tickets
        const tickets = this.add.image(844, 469.45245422832465, "plaza-spf", "tickets");
        tickets.setOrigin(0.5, 0.9970561809053845);

        // pumkin1
        const pumkin1 = this.add.image(122.11767821085095, 652.4707128434038, "plaza-spf", "pumkin1");
        pumkin1.setOrigin(0.5225284916047974, 0.5941190315933758);

        // pumkin2
        const pumkin2 = this.add.image(1415.882326648351, 735.470703125, "plaza-spf", "pumkin2");
        pumkin2.setOrigin(0.47058780262707006, 0.6210101834771974);

        // pumkin3
        const pumkin3 = this.add.image(1389, 876.8237474759567, "plaza-spf", "pumkin3");
        pumkin3.setOrigin(0.5, 0.6347613406905153);

        // pizza_trick
        const pizza_trick = this.add.image(346.70501009617317, 825.5878614697884, "plaza-spf", "pizza_trick");
        pizza_trick.scaleX = 0.76;
        pizza_trick.scaleY = 0.75;
        pizza_trick.angle = 1;
        pizza_trick.setOrigin(0.36212035379685764, 0.3605240228932637);

        // pet_door
        const pet_door = this.add.sprite(335, 494, "plaza-spf", "pet_door");

        // left_stage_door
        const left_stage_door = this.add.sprite(733, 389, "plaza-spf", "left_stage_door");

        // right_stage_door
        const right_stage_door = this.add.sprite(958, 390, "plaza-spf", "right_stage_door");

        // candy_candy60002
        const candy_candy60002 = this.add.image(488, 836, "candyhunt", "candy/6-got");
        candy_candy60002.scaleX = 0.5;
        candy_candy60002.scaleY = 0.5;

        // lists
        const sort = [tickets, pizza_trick, pumkin1, pumkin3, pumkin2, trees];

        // sky0001 (components)
        const sky0001Animation = new Animation(sky0001);
        sky0001Animation.key = "sky";
        sky0001Animation.end = 282;

        // sewer (components)
        const sewerButton = new Button(sewer);
        sewerButton.spriteName = "sewer";
        const sewerMoveTo = new MoveTo(sewer);
        sewerMoveTo.x = 566;
        sewerMoveTo.y = 510;

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

        // candy_candy60002 (components)
        const candy_candy60002SimpleButton = new SimpleButton(candy_candy60002);
        candy_candy60002SimpleButton.callback = () => this.network.send('collected_candy', { candy: "candy_apple" });

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
