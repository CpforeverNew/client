import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Zone, MoveTo } from '@components/components'

import MtnSeat from './MtnSeat'


/* START OF COMPILED CODE */

export default class Mtn extends RoomScene {

    constructor() {
        super("Mtn");

        /** @type {Phaser.GameObjects.Image} */
        this.bgcampnight;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.night;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.hikingzone;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Rectangle>} */
        this.sort;
        /** @type {Array<any>} */
        this.seats100;
        /** @type {Array<any>} */
        this.seats101;
        /** @type {Array<any>} */
        this.seats102;
        /** @type {Array<any>} */
        this.seats103;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'village': () => this.triggerRoom(200, 480, 560),
            'waddle100': () => this.triggerWaddle(100),
            'waddle101': () => this.triggerWaddle(101),
            'waddle102': () => this.triggerWaddle(102),
            'waddle103': () => this.triggerWaddle(103),
        }
        var now = new Date();
        var timeInHours = now.getUTCHours();
        if (timeInHours > 1 && timeInHours < 13 ) {
            this.music = 'crickets'
        } else {
            this.music='campy'
        }

        this.waddles = {}
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("mtn-pack", "assets/media/rooms/old/mtn/mtn-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-21, -19, "mtn", "bg");
        bg.setOrigin(0, 0);

        // bgcampnight
        const bgcampnight = this.add.image(772, 494, "camp-mtn", "bgcampnight");
        bgcampnight.scaleX = 1.01;
        bgcampnight.scaleY = 1.01;
        bgcampnight.visible = false;

        // chair
        const chair = this.add.sprite(846, 75, "mtn", "chair/chair0001");
        chair.setOrigin(0, 0);

        // mountain
        const mountain = this.add.image(-21, 214, "mtn", "mountain");
        mountain.setOrigin(0, 0);

        // ridge_run0001
        this.add.image(350, 285, "camp-mtn", "ridge_run0001");

        // fence_stuff
        this.add.image(694, 381, "camp-mtn", "fence_stuff");

        // pole
        const pole = this.add.image(727, 359, "mtn", "pole");
        pole.setOrigin(0.6204081632653061, 0.9194630872483222);

        // barrier_1
        const barrier_1 = this.add.image(282, 533, "mtn", "barrier_1");
        barrier_1.setOrigin(0.5, 0.45901639344262296);

        // barrier_1_1
        const barrier_1_1 = this.add.image(341, 572, "mtn", "barrier_1");
        barrier_1_1.setOrigin(0.5, 0.45901639344262296);

        // barrier_1_2
        const barrier_1_2 = this.add.image(404, 612, "mtn", "barrier_1");
        barrier_1_2.setOrigin(0.5, 0.45901639344262296);

        // barrier_1_3
        const barrier_1_3 = this.add.image(584, 697, "mtn", "barrier_1");
        barrier_1_3.angle = -15;
        barrier_1_3.setOrigin(0.5, 0.45901639344262296);

        // barrier_2
        const barrier_2 = this.add.image(654, 707, "mtn", "barrier_2");
        barrier_2.setOrigin(0.48, 0.47761194029850745);

        // barrier_2_1
        const barrier_2_1 = this.add.image(902, 747, "mtn", "barrier_2");
        barrier_2_1.setOrigin(0.48, 0.47761194029850745);

        // barrier_1_4
        const barrier_1_4 = this.add.image(1120, 651, "mtn", "barrier_1");
        barrier_1_4.setOrigin(0.5, 0.45901639344262296);
        barrier_1_4.flipX = true;

        // express
        const express = this.add.image(1065, 809, "mtn", "express");
        express.setOrigin(0.4647887323943662, 0.875);

        // penguin_run
        const penguin_run = this.add.image(524, 606, "mtn", "penguin_run");
        penguin_run.setOrigin(0.6390977443609023, 0.943089430894309);

        // zone4
        const zone4 = this.add.rectangle(1127, 657, 180, 90);
        zone4.angle = -33;
        zone4.visible = false;
        zone4.alpha = 0.5;
        zone4.isFilled = true;
        zone4.fillColor = 65280;

        // zone3
        const zone3 = this.add.rectangle(899, 753, 180, 90);
        zone3.visible = false;
        zone3.alpha = 0.5;
        zone3.isFilled = true;
        zone3.fillColor = 65280;

        // zone2
        const zone2 = this.add.rectangle(633, 709, 200, 90);
        zone2.angle = 11;
        zone2.visible = false;
        zone2.alpha = 0.5;
        zone2.isFilled = true;
        zone2.fillColor = 65280;

        // zone1
        const zone1 = this.add.rectangle(334, 568, 230, 90);
        zone1.angle = 33;
        zone1.visible = false;
        zone1.alpha = 0.5;
        zone1.isFilled = true;
        zone1.fillColor = 65280;

        // backsign
        this.add.image(966, 214, "camp-mtn", "backsign");

        // night
        const night = this.add.rectangle(747, 1136, 128, 128);
        night.scaleX = 12.397097039253481;
        night.scaleY = 7.74841237866371;
        night.setOrigin(0.4910783059634098, 1.1518593287200432);
        night.visible = false;
        night.isFilled = true;
        night.fillColor = 0;
        night.fillAlpha = 0.3;

        // hikingzone
        const hikingzone = this.add.ellipse(719, 298, 128, 128);
        hikingzone.scaleX = 1.513603229179594;
        hikingzone.angle = -90;
        hikingzone.isFilled = true;
        hikingzone.fillAlpha = 0;

        // lists
        const sort = [penguin_run, express, pole, night];
        const seats100 = [];
        const seats101 = [];
        const seats102 = [];
        const seats103 = [];

        // chair (components)
        const chairAnimation = new Animation(chair);
        chairAnimation.key = "chair/chair";
        chairAnimation.end = 87;

        // zone4 (components)
        new MoveTo(zone4);

        // zone3 (components)
        new MoveTo(zone3);

        // zone2 (components)
        new MoveTo(zone2);

        // zone1 (components)
        new MoveTo(zone1);

        this.bgcampnight = bgcampnight;
        this.night = night;
        this.hikingzone = hikingzone;
        this.sort = sort;
        this.seats100 = seats100;
        this.seats101 = seats101;
        this.seats102 = seats102;
        this.seats103 = seats103;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.roomZones = {
            'hikingzone': { 
                key: this.hikingzone,
                callback: () => this.interface.prompt.showItem(313)
            }
        }

        super.addZones()

        var now = new Date();
        var timeInHours = now.getUTCHours();
        console.log(timeInHours)
        if (timeInHours > 1 && timeInHours < 13 ) {
            this.bgcampnight.visible = true
            this.night.visible = true
        }
    }

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
