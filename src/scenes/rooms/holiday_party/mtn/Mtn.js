import { Animation, SimpleButton } from '@components/components'
import RoomScene from '@scenes/rooms/RoomScene'
import MtnSeat from './MtnSeat'
// You can write more code here

/* START OF COMPILED CODE */

export default class Mtn extends RoomScene {

    constructor() {
        super("Mtn");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;
        /** @type {MtnSeat[]} */
        this.seats100;
        /** @type {MtnSeat[]} */
        this.seats101;
        /** @type {MtnSeat[]} */
        this.seats103;
        /** @type {MtnSeat[]} */
        this.seats102;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'village': () => this.triggerRoom(200, 480, 560),
            'waddle100': () => this.triggerWaddle(103),
            'waddle101': () => this.triggerWaddle(102),
            'waddle102': () => this.triggerWaddle(101),
            'waddle103': () => this.triggerWaddle(100),
        }
        this.music = 254

        this.waddles = {}
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("sky-holiday", "assets/media/rooms/holiday_party/sky/sky-holiday.json");
        this.load.pack("mtn-holiday-pack", "assets/media/rooms/holiday_party/mtn/mtn-holiday-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky
        this.add.image(763, 225, "sky", "sky");

        // aurora0001
        const aurora0001 = this.add.sprite(342, 187, "sky", "aurora0001");

        // aurora_1
        const aurora_1 = this.add.sprite(1245, 195, "sky", "aurora0001");

        // aurora
        const aurora = this.add.sprite(761, 177, "sky", "aurora0001");

        // horizon
        const horizon = this.add.image(761, 625, "mtn-holiday", "horizon");
        horizon.scaleX = 1.01;

        // lift0001
        const lift0001 = this.add.sprite(1134, 305, "mtn-holiday", "lift0001");

        // bg
        const bg = this.add.image(760, 592, "mtn-holiday", "bg");
        bg.scaleX = 1.01;

        // stick2
        this.add.image(672, 718, "mtn-holiday", "stick2");

        // stick_4
        const stick_4 = this.add.image(1140, 685, "mtn-holiday", "stick1");
        stick_4.angle = -10;
        stick_4.flipX = true;

        // stick_1
        const stick_1 = this.add.image(274, 529, "mtn-holiday", "stick1");
        stick_1.angle = 8;

        // stick
        const stick = this.add.image(341, 565, "mtn-holiday", "stick1");
        stick.angle = 8;

        // stick1
        const stick1 = this.add.image(415, 604, "mtn-holiday", "stick1");
        stick1.angle = 8;

        // stick_2
        this.add.image(591, 708, "mtn-holiday", "stick1");

        // tube_11
        const tube_11 = new MtnSeat(this, 1182, 669);
        this.add.existing(tube_11);
        tube_11.visible = false;

        // stick_3
        this.add.image(903, 764, "mtn-holiday", "stick2");

        // tube_10
        const tube_10 = new MtnSeat(this, 1108, 684);
        this.add.existing(tube_10);
        tube_10.visible = false;

        // caticon
        const caticon = this.add.image(1442, 891, "mtn-holiday", "caticon");

        // express
        const express = this.add.image(1070, 791, "mtn-holiday", "express");
        express.setOrigin(0.45445262573550865, 0.6796590873766045);

        // tube_2
        const tube_2 = new MtnSeat(this, 449, 611);
        this.add.existing(tube_2);
        tube_2.visible = false;

        // pole
        const pole = this.add.image(732.7149995337118, 334.1986338626359, "mtn-holiday", "pole");
        pole.setOrigin(0.5967959164641297, 0.857299533322011);

        // pengrun
        const pengrun = this.add.image(515, 588, "mtn-holiday", "pengrun");
        pengrun.setOrigin(0.5648393698802782, 0.7629157376242989);

        // toboggan
        this.add.image(497, 258, "mtn-holiday", "toboggan");

        // tube_4
        const tube_4 = new MtnSeat(this, 239, 507);
        this.add.existing(tube_4);
        tube_4.visible = false;

        // mtncat0001
        const mtncat0001 = this.add.sprite(513, 242, "mtn-holiday", "mtncat0001");
        mtncat0001.tintTopLeft = 14211288;
        mtncat0001.tintTopRight = 14211288;
        mtncat0001.tintBottomLeft = 14211288;
        mtncat0001.tintBottomRight = 14211288;

        // tube
        const tube = new MtnSeat(this, 304, 537);
        this.add.existing(tube);
        tube.visible = false;

        // tube_3
        const tube_3 = new MtnSeat(this, 375, 572);
        this.add.existing(tube_3);
        tube_3.visible = false;

        // tube_5
        const tube_5 = new MtnSeat(this, 565, 677);
        this.add.existing(tube_5);
        tube_5.visible = false;

        // tube_6
        const tube_6 = new MtnSeat(this, 643, 714);
        this.add.existing(tube_6);
        tube_6.visible = false;

        // tube_7
        const tube_7 = new MtnSeat(this, 729, 718);
        this.add.existing(tube_7);
        tube_7.visible = false;

        // tube_8
        const tube_8 = new MtnSeat(this, 867, 762);
        this.add.existing(tube_8);
        tube_8.visible = false;

        // tube_9
        const tube_9 = new MtnSeat(this, 955, 764);
        this.add.existing(tube_9);
        tube_9.visible = false;

        // tape
        this.add.image(508, 219, "mtn-holiday", "tape");

        // lists
        const sort = [express, pole, pengrun];
        const seats100 = [tube_4, tube, tube_3, tube_2];
        const seats101 = [tube_7, tube_6, tube_5];
        const seats103 = [tube_11, tube_10];
        const seats102 = [tube_9, tube_8];

        // aurora0001 (components)
        const aurora0001Animation = new Animation(aurora0001);
        aurora0001Animation.key = "aurora";
        aurora0001Animation.end = 100;

        // aurora_1 (components)
        const aurora_1Animation = new Animation(aurora_1);
        aurora_1Animation.key = "aurora";
        aurora_1Animation.end = 100;

        // aurora (components)
        const auroraAnimation = new Animation(aurora);
        auroraAnimation.key = "aurora";
        auroraAnimation.end = 100;

        // lift0001 (components)
        const lift0001Animation = new Animation(lift0001);
        lift0001Animation.key = "lift";
        lift0001Animation.end = 87;

        // tube_11 (prefab fields)
        tube_11.sitFrame = 24;
        tube_11.offsetX = -100;
        tube_11.offsetY = -70;

        // tube_10 (prefab fields)
        tube_10.sitFrame = 24;
        tube_10.offsetX = -100;
        tube_10.offsetY = -70;

        // caticon (components)
        const caticonSimpleButton = new SimpleButton(caticon);
        caticonSimpleButton.callback = () => this.interface.loadExternal('Sled');

        // tube_2 (prefab fields)
        tube_2.sitFrame = 18;
        tube_2.offsetX = 90;
        tube_2.offsetY = -70;

        // tube_4 (prefab fields)
        tube_4.sitFrame = 18;
        tube_4.offsetX = 90;
        tube_4.offsetY = -70;

        // mtncat0001 (components)
        const mtncat0001SimpleButton = new SimpleButton(mtncat0001);
        mtncat0001SimpleButton.callback = () => this.interface.loadExternal('Sled');
        const mtncat0001Animation = new Animation(mtncat0001);
        mtncat0001Animation.key = "mtncat";
        mtncat0001Animation.end = 7;
        mtncat0001Animation.repeat = 0;
        mtncat0001Animation.autoPlay = false;
        mtncat0001Animation.onHover = true;

        // tube (prefab fields)
        tube.sitFrame = 18;
        tube.offsetX = 90;
        tube.offsetY = -70;

        // tube_3 (prefab fields)
        tube_3.sitFrame = 18;
        tube_3.offsetX = 90;
        tube_3.offsetY = -70;

        // tube_5 (prefab fields)
        tube_5.sitFrame = 18;
        tube_5.offsetX = 18;
        tube_5.offsetY = -70;

        // tube_6 (prefab fields)
        tube_6.sitFrame = 17;
        tube_6.offsetX = 18;
        tube_6.offsetY = -110;

        // tube_7 (prefab fields)
        tube_7.sitFrame = 17;
        tube_7.offsetX = 18;
        tube_7.offsetY = -110;

        // tube_8 (prefab fields)
        tube_8.offsetX = -10;
        tube_8.offsetY = -90;

        // tube_9 (prefab fields)
        tube_9.offsetX = -40;
        tube_9.offsetY = -90;

        this.sort = sort;
        this.seats100 = seats100;
        this.seats101 = seats101;
        this.seats103 = seats103;
        this.seats102 = seats102;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    triggerWaddle(id) {
        if (this.world.client.activeSeat) {
            return
        }

        let text = 'Would you like to join this\nSled Race?'

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.network.send('join_waddle', { id: id })

            this.interface.prompt.window.visible = false
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
