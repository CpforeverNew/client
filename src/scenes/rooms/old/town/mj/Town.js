import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Town extends RoomScene {

    constructor() {
        super("Town");

        /** @type {Array<any>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'dock': () => this.triggerRoom(800, 1200, 400),
            'forts': () => this.triggerRoom(801, 360, 520),
            'coffee': () => this.triggerRoom(110, 700, 450),
            'dance': () => this.triggerRoom(120, 300, 560),
            'gift': () => this.triggerRoom(130, 1036, 520),
        }
        this.music = 'town'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("town-pack", "assets/media/rooms/old/town/mj/town-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky1
        this.add.image(760, 405, "town1", "sky1");

        // grid2
        this.add.image(768, 642, "town1", "grid2");

        // right
        this.add.image(1369, 424, "town3", "right");

        // grid1
        this.add.image(800, 481, "town1", "grid1");

        // bottom1
        this.add.image(831, 763, "town1", "bottom1");

        // lights10001
        this.add.image(887, 111, "town1", "lights10001");

        // left
        this.add.image(175, 395, "town3", "left");

        // nightclub
        this.add.image(829, 187, "town3", "nightclub");

        // coffe
        this.add.image(428, 310, "town3", "coffe");

        // cdoor
        const cdoor = this.add.image(386, 481, "town1", "cdoor");

        // objects1
        this.add.image(1110, 267, "town1", "objects1");

        // cloathing
        this.add.image(1275, 343, "town3", "cloathing");

        // snow_right
        this.add.image(1358, 273, "town3", "snow_right");

        // objects
        this.add.image(1099, 212, "town1", "objects1");

        // snow
        this.add.image(1094, 511, "town3", "snow");

        // speaker10001
        this.add.image(941, 395, "town1", "speaker10001");

        // bd1
        this.add.image(843, 216, "town1", "bd1");

        // lights
        const lights = this.add.sprite(886, 61, "town1", "lights10001");

        // lists
        const sort = [];

        // cdoor (components)
        const cdoorButton = new Button(cdoor);
        cdoorButton.spriteName = "cdoor";
        cdoorButton.activeFrame = false;
        cdoorButton.pixelPerfect = true;
        new MoveTo(cdoor);

        // lights (components)
        const lightsAnimation = new Animation(lights);
        lightsAnimation.key = "lights";
        lightsAnimation.end = 69;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
        create() {
            super.create();
        }



    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
