import RoomScene from "@scenes/rooms/RoomScene";
import { Animation, Button, MoveTo } from "@components/components"

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
        this.music = '254'
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("sky-holiday", "assets/media/rooms/holiday_party/sky/sky-holiday.json");
        this.load.pack("rink-holiday-pack", "assets/media/rooms/holiday_party/rink/rink-holiday-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky
        const sky = this.add.image(772, 139, "sky", "sky");
        sky.scaleX = 1.0969122250284444;
        sky.scaleY = 1.0969122250284444;

        // aurora
        const aurora = this.add.sprite(647, 132, "sky", "aurora0001");

        // aurora_1
        const aurora_1 = this.add.sprite(950, 141, "sky", "aurora0001");

        // aurora_2
        const aurora_2 = this.add.sprite(1331, 101, "sky", "aurora0001");

        // aurora0001
        const aurora0001 = this.add.sprite(342, 155, "sky", "aurora0001");

        // bg_1
        const bg_1 = this.add.image(756, 396, "rink-holiday", "bg");
        bg_1.scaleX = 1.0147623158449213;
        bg_1.scaleY = 1.0147623158449213;

        // window
        const window = this.add.image(517, 288.3937422585697, "rink-holiday", "window");
        window.scaleX = 1.0147623158449213;
        window.scaleY = 1.0147623158449213;
        window.setOrigin(0.5, 0.6121025564079174);

        // door
        const door = this.add.image(781.8787484517139, 286.75749690342786, "rink-holiday", "door");
        door.setOrigin(0.5430972050190437, 0.5680482184511216);

        // fg_1
        const fg_1 = this.add.image(811, 903, "rink-holiday", "fg");
        fg_1.scaleX = 1.0147623158449213;
        fg_1.scaleY = 1.0147623158449213;
        fg_1.setOrigin(0.5287397705793603, 0.9096834562162947);

        // puck
        const puck = this.add.image(793, 483, "rink-holiday", "puck");
        puck.visible = false;

        // netfront
        const netfront = this.add.image(290, 451, "rink-holiday", "netfront");
        netfront.setOrigin(0.353922681511951, 0.6022541229416348);

        // netback
        const netback = this.add.image(271.27049475299617, 575.6301461798447, "rink-holiday", "netback");
        netback.setOrigin(0.6348406016812767, 1.1115832036699032);

        // netfront_1
        const netfront_1 = this.add.image(1244, 451, "rink-holiday", "netfront");
        netfront_1.setOrigin(0.353922681511951, 0.6022541229416348);
        netfront_1.flipX = true;

        // netback_1
        const netback_1 = this.add.image(1300, 575.6301461798447, "rink-holiday", "netback");
        netback_1.setOrigin(0.6348406016812767, 1.1115832036699032);
        netback_1.flipX = true;

        // lists
        const sort = [netfront, netback, window, door, fg_1, netback_1, netfront_1];

        // aurora (components)
        const auroraAnimation = new Animation(aurora);
        auroraAnimation.key = "aurora";
        auroraAnimation.end = 100;

        // aurora_1 (components)
        const aurora_1Animation = new Animation(aurora_1);
        aurora_1Animation.key = "aurora";
        aurora_1Animation.end = 100;

        // aurora_2 (components)
        const aurora_2Animation = new Animation(aurora_2);
        aurora_2Animation.key = "aurora";
        aurora_2Animation.end = 100;

        // aurora0001 (components)
        const aurora0001Animation = new Animation(aurora0001);
        aurora0001Animation.key = "aurora";
        aurora0001Animation.end = 100;

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        new MoveTo(door);

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create()
    }

    shouldSlide() {
        return true;
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
