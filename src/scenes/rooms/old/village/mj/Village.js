import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Village extends RoomScene {

    constructor() {
        super("Village");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'lodge': () => this.triggerRoom(220, 320, 640),
            'dock': () => this.triggerRoom(800, 436, 280),
            'beach': () => this.triggerRoom(400, 920, 360),
            'mtn': () => this.triggerRoom(230, 840, 320),
            'winter': null
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("village-pack", "assets/media/rooms/old/village/village-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(771, 409, "skimj", "bg");

        // door10001
        this.add.image(1173, 320, "skimj", "Door10001");

        // lodge1
        this.add.image(1206, 281, "skimj", "Lodge1");

        // sportsShop
        this.add.image(782, 366, "skimj", "SportsShop");

        // sign3
        this.add.image(113, 673, "skimj", "Sign3");

        // sign4
        const sign4 = this.add.image(385, 666, "skimj", "Sign4");

        // tourStand0001
        this.add.image(125, 319, "skimj", "TourStand0001");

        // lift
        this.add.image(274, 178, "village", "lift");

        // chair
        const chair = this.add.sprite(218, 128, "village", "chair0001");

        // sign2
        this.add.image(1475, 632, "skimj", "Sign2");

        // sledge1
        this.add.image(1440, 443, "skimj", "Sledge1");

        // tuba10001
        this.add.image(922, 356, "skimj", "Tuba10001");

        // stand50001
        const stand50001 = this.add.image(872, 443, "skimj", "Stand50001");

        // stand80001
        const stand80001 = this.add.image(757, 449, "skimj", "Stand80001");

        // stand10001
        const stand10001 = this.add.image(847, 475, "skimj", "Stand10001");

        // stand20001
        const stand20001 = this.add.image(774, 476, "skimj", "Stand20001");

        // stand30001
        const stand30001 = this.add.image(694, 478, "skimj", "Stand30001");

        // stand40001
        const stand40001 = this.add.image(955, 420, "skimj", "Stand40001");

        // stand60001
        const stand60001 = this.add.image(577, 423, "skimj", "Stand60001");

        // stand70001
        const stand70001 = this.add.image(660, 443, "skimj", "Stand70001");

        // sign1
        const sign1 = this.add.image(964, 483, "skimj", "Sign1");

        // lists
        const sort = [stand40001, sign1, stand50001, stand10001, stand20001, stand80001, stand30001, stand70001, stand60001, sign4];

        // chair (components)
        const chairAnimation = new Animation(chair);
        chairAnimation.key = "chair";
        chairAnimation.end = 179;
        chairAnimation.repeatDelay = 1500;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
