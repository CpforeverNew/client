import RoomScene from '@scenes/rooms/RoomScene'

import { MoveTo, SimpleButton, ShowHint, Animation } from '@components/components'


/* START OF COMPILED CODE */

export default class Berg extends RoomScene {

    constructor() {
        super("Berg");

        /** @type {Phaser.GameObjects.Sprite} */
        this.aqua;
        /** @type {Array<any>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomAnims = true;


        this.roomTriggers = {
            'aqua': () => this.triggerGame("AquaGrabber", 916),
			'lefteye': null ,
			'mouth1': null,
			'mouth2': null,
			'mouth3': null,
			'mouth4': null,
			'nose': null,
			'righteye': null
        }
        this.music = '251'
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("sky-pack", "assets/media/rooms/spooky_fair/sky/sky-pack.json");
        this.load.pack("berg-pack", "assets/media/rooms/spooky_fair/berg/berg-pack.json");
        this.load.audio('thunder', `assets/media/music/sf_thunder.mp3`)
    }

    /** @returns {void} */
    _create() {
        const thunder = this.sound.add('thunder');
        this.loopAudio(thunder, 5000);
        // sky0001
        const sky0001 = this.add.sprite(947, -89, "sky_spooky", "sky0001");

        // clouds
        this.add.image(1353, 183, "berg_halloween", "clouds");

        // cloudleft
        this.add.image(194, 212, "berg_halloween", "cloudleft");

        // cpi
        this.add.image(963, 141, "berg_halloween", "cpi");

        // water
        this.add.image(763, 580, "berg_halloween", "water");

        // waterbublle0001
        const waterbublle0001 = this.add.sprite(700, 777, "berg_halloween", "waterbublle0001");

        // pumpkin
        this.add.image(688, 513, "berg_halloween", "pumpkin");

        // aqua
        const aqua = this.add.sprite(1258.7042236328125, 335.0486800543836, "berg_halloween", "aqua grabber0001");
        aqua.setOrigin(0.5116484184297339, 0.43207409897260873);

        // lefteye0006
        this.add.image(511, 417, "berg_halloween", "lefteye0006");

        // lefteye0002
        this.add.image(511, 417, "berg_halloween", "lefteye0002");

        // lefteye0003
        this.add.image(511, 417, "berg_halloween", "lefteye0003");

        // lefteye0004
        this.add.image(511, 417, "berg_halloween", "lefteye0004");

        // lefteye0005
        this.add.image(511, 417, "berg_halloween", "lefteye0005");

        // righteye0006
        this.add.image(846, 351, "berg_halloween", "righteye0006");

        // righteye
        this.add.image(846, 351, "berg_halloween", "righteye");

        // righteye0002
        this.add.image(846, 351, "berg_halloween", "righteye0002");

        // righteye0003
        this.add.image(846, 351, "berg_halloween", "righteye0003");

        // righteye0004
        this.add.image(846, 351, "berg_halloween", "righteye0004");

        // righteye0005
        this.add.image(846, 351, "berg_halloween", "righteye0005");

        // nose0006
        this.add.image(813, 478, "berg_halloween", "nose0006");

        // nose0002
        this.add.image(813, 478, "berg_halloween", "nose0002");

        // nose0003
        this.add.image(813, 478, "berg_halloween", "nose0003");

        // nose0004
        this.add.image(813, 478, "berg_halloween", "nose0004");

        // nose0005
        this.add.image(813, 478, "berg_halloween", "nose0005");

        // smile10002
        this.add.image(614, 618, "berg_halloween", "smile10002");

        // smile10003
        this.add.image(614, 618, "berg_halloween", "smile10003");

        // smile10004
        this.add.image(614, 618, "berg_halloween", "smile10004");

        // smile10005
        this.add.image(614, 618, "berg_halloween", "smile10005");

        // 2smile0006
        this.add.image(802, 624, "berg_halloween", "2smile0006");

        // 2smile0002
        this.add.image(802, 624, "berg_halloween", "2smile0002");

        // 2smile0003
        this.add.image(802, 624, "berg_halloween", "2smile0003");

        // 2smile0004
        this.add.image(802, 624, "berg_halloween", "2smile0004");

        // 3smile0006
        this.add.image(799, 605, "berg_halloween", "3smile0006");

        // 3smile0002
        this.add.image(799, 605, "berg_halloween", "3smile0002");

        // 3smile0003
        this.add.image(799, 605, "berg_halloween", "3smile0003");

        // 3smile0004
        this.add.image(799, 605, "berg_halloween", "3smile0004");

        // 3smile0005
        this.add.image(799, 605, "berg_halloween", "3smile0005");

        // 2smile0005
        this.add.image(802, 624, "berg_halloween", "2smile0005");

        // smile10006
        this.add.image(614, 618, "berg_halloween", "smile10006");

        // 4smile0006
        this.add.image(1066, 496, "berg_halloween", "4smile0006");

        // 4smile0002
        this.add.image(1066, 496, "berg_halloween", "4smile0002");

        // 4smile0003
        this.add.image(1066, 496, "berg_halloween", "4smile0003");

        // 4smile0004
        this.add.image(1066, 496, "berg_halloween", "4smile0004");

        // 4smile0005
        this.add.image(1066, 496, "berg_halloween", "4smile0005");

        // lists
        const sort = [];

        // sky0001 (components)
        const sky0001Animation = new Animation(sky0001);
        sky0001Animation.key = "sky";
        sky0001Animation.end = 282;

        // waterbublle0001 (components)
        const waterbublle0001Animation = new Animation(waterbublle0001);
        waterbublle0001Animation.key = "waterbublle";
        waterbublle0001Animation.end = 12;

        // aqua (components)
        const aquaSimpleButton = new SimpleButton(aqua);
        aquaSimpleButton.hoverCallback = () => this.onAquaOver();
        aquaSimpleButton.callback = () => this.onAquaClick();
        aquaSimpleButton.pixelPerfect = true;
        const aquaShowHint = new ShowHint(aqua);
        aquaShowHint.text = "Aqua Grabber";
        new MoveTo(aqua);

        this.aqua = aqua;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    get aquaFrame() {
        let frame = this.aqua.frame.name
        return parseInt(frame.substr(frame.length - 4))
    }

    create() {
        super.create()

        this.aqua.on('animationcomplete', (animation) => this.onAquaAnimComplete(animation))
        this.aqua.play('aqua_float')
    }

    onAquaAnimComplete(animation) {
        switch (animation.key) {
            case 'aqua_lights_on':
                this.aqua.play('aqua_lights_float')
                break
            case 'aqua_open':
                this.aqua.play('aqua_float')
                break
            default:
                break
        }
    }

    onAquaOver() {
        let frame = this.aquaFrame
        if (frame <= 81 || frame >= 400) {
            this.aqua.play('aqua_lights_on')
        }
    }

    onAquaClick() {
        let frame = this.aquaFrame
        if (frame <= 180 || frame >= 348) {
            this.aqua.play('aqua_open')
        }
    }


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
