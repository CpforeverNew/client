import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Town extends RoomScene {

    constructor() {
        super("Town");

        /** @type {Phaser.GameObjects.Sprite} */
        this.lights10001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.speaker10001;
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
        this.add.image(763, 379, "town1", "sky1");

        // mountain2
        this.add.image(792, 638, "mountain2");

        // stadium6
        this.add.image(1275, 442, "stadium6");

        // grid1
        this.add.image(771, 488, "town1", "grid1");

        // ld2
        this.add.image(463, 67, "town1", "ld2");

        // dance1
        this.add.image(757, 212, "town1", "dance1");

        // roof
        this.add.image(758, 129, "roof");

        // coffeemj_1
        this.add.image(386, 337, "coffeemj");

        // bd1
        this.add.image(771, 258, "town1", "bd1");

        // gift1
        this.add.image(1203, 373, "town1", "gift1");

        // right_sign_1
        const right_sign_1 = this.add.image(1390, 389, "town2", "right_sign");
        right_sign_1.setOrigin(0, 0);

        // left_sign_1
        const left_sign_1 = this.add.image(114, 497, "town2", "left_sign");
        left_sign_1.setOrigin(0, 0);

        // lights10001
        const lights10001 = this.add.sprite(807, 100, "town1", "lights10001");

        // speaker10001
        const speaker10001 = this.add.sprite(868, 397, "town1", "speaker10001");

        // objects1
        this.add.image(1039, 240, "town1", "objects1");

        // objects2
        this.add.image(1278, 302, "town1", "objects2");

        // cdoor
        const cdoor = this.add.image(343, 507, "town1", "cdoor");

        // bottom1
        const bottom1 = this.add.image(-52, 1039, "town1", "bottom1");
        bottom1.setOrigin(0, 1);

        // lists
        const sort = [];

        // cdoor (components)
        const cdoorButton = new Button(cdoor);
        cdoorButton.spriteName = "cdoor";

        this.lights10001 = lights10001;
        this.speaker10001 = speaker10001;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
    super.create()
       this.lights10001.play("mjtown_lights");
       this.speaker10001.play("mjtown_speaker");
    }

    onCoffeeDoorOver() {
        this.cdoor10001.setFrame('cdoor10001')
        // this.canopy_lights.__Animation.play()
        // this.disco_lights.__Animation.play()
    }

    onCoffeeDoorOut() {
        this.cdoor10001.setFrame('cdoor10002')
        // this.canopy_lights.__Animation.stop()
        // this.disco_lights.__Animation.stop()
    }

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
