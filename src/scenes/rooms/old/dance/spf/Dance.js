import { Animation, Button, MoveTo, SimpleButton } from '@components/components'
import RoomScene from '@scenes/rooms/RoomScene'




/* START OF COMPILED CODE */

export default class Dance extends RoomScene {

    constructor() {
        super("Dance");

        /** @type {Array<any>} */
        this.sort;
        /** @type {Array<any>} */
        this.animate;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'town': () => this.triggerRoom(100, 680, 520),
            'boiler': () => this.triggerRoom(804, 1040, 580),
            'lounge': () => this.triggerRoom(121, 1200, 760),
            'mix': null
        }
        // this.roomAnims = true
        this.music = '5'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("spooky-dance-pack", "assets/media/rooms/old/dance/spf/spooky-dance-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(762, 482, "spooky-dance", "bg");

        // dance_floor0001
        const dance_floor0001 = this.add.sprite(660, 692, "spooky-dance", "dance_floor0001");

        // lights0001
        const lights0001 = this.add.sprite(665, 100, "spooky-dance", "lights0001");

        // stage
        this.add.image(681, 275, "spooky-dance", "stage");

        // door0002
        this.add.image(162, 445, "spooky-dance", "door0002");

        // light_strip
        this.add.image(765, 380, "spooky-dance", "light_strip");

        // right_speaker0001
        const right_speaker0001 = this.add.sprite(999, 387, "spooky-dance", "right_speaker0001");

        // candy_pumkin
        this.add.image(1039, 491, "spooky-dance", "candy_pumkin");

        // fg_speaker_right
        this.add.image(1174, 635, "spooky-dance", "fg_speaker_right");

        // fg_speaker_left
        this.add.image(122, 728, "spooky-dance", "fg_speaker_left");

        // pumkin_1
        this.add.image(106, 625, "spooky-dance", "pumkin_1");

        // pumkin_2
        this.add.image(1116, 747, "spooky-dance", "pumkin_2");

        // right_top_speaker0001
        const right_top_speaker0001 = this.add.sprite(1084, 153, "spooky-dance", "right_top_speaker0001");

        // right_top_speaker20001
        const right_top_speaker20001 = this.add.sprite(1187, 136, "spooky-dance", "right_top_speaker20001");

        // left_top_speaker_20001
        const left_top_speaker_20001 = this.add.sprite(283, 154, "spooky-dance", "left_top_speaker_20001");

        // left_top_speaker0001
        const left_top_speaker0001 = this.add.sprite(175, 140, "spooky-dance", "left_top_speaker0001");

        // free_candy_sign
        this.add.image(682, 188, "spooky-dance", "free_candy_sign");

        // left_speaker_bottom0001
        const left_speaker_bottom0001 = this.add.sprite(342, 374, "spooky-dance", "left_speaker_bottom0001");

        // left_speaker_bottom_cover
        this.add.image(352, 390, "spooky-dance", "left_speaker_bottom_cover");

        // music_discs
        this.add.image(285, 419, "spooky-dance", "music_discs");

        // fg
        this.add.image(737, 33, "spooky-dance", "fg");

        // lists
        const sort = [];
        const animate = [];

        // dance_floor0001 (components)
        const dance_floor0001Animation = new Animation(dance_floor0001);
        dance_floor0001Animation.key = "dance_floor";
        dance_floor0001Animation.end = 190;

        // lights0001 (components)
        const lights0001Animation = new Animation(lights0001);
        lights0001Animation.key = "lights";
        lights0001Animation.end = 80;

        // right_speaker0001 (components)
        const right_speaker0001Animation = new Animation(right_speaker0001);
        right_speaker0001Animation.key = "right_speaker";
        right_speaker0001Animation.end = 10;

        // right_top_speaker0001 (components)
        const right_top_speaker0001Animation = new Animation(right_top_speaker0001);
        right_top_speaker0001Animation.key = "right_top_speaker";
        right_top_speaker0001Animation.end = 10;

        // right_top_speaker20001 (components)
        const right_top_speaker20001Animation = new Animation(right_top_speaker20001);
        right_top_speaker20001Animation.key = "right_top_speaker2";
        right_top_speaker20001Animation.end = 10;

        // left_top_speaker_20001 (components)
        const left_top_speaker_20001Animation = new Animation(left_top_speaker_20001);
        left_top_speaker_20001Animation.key = "left_top_speaker_2";
        left_top_speaker_20001Animation.end = 10;

        // left_top_speaker0001 (components)
        const left_top_speaker0001Animation = new Animation(left_top_speaker0001);
        left_top_speaker0001Animation.key = "left_top_speaker";
        left_top_speaker0001Animation.end = 10;

        // left_speaker_bottom0001 (components)
        const left_speaker_bottom0001Animation = new Animation(left_speaker_bottom0001);
        left_speaker_bottom0001Animation.key = "left_speaker_bottom";
        left_speaker_bottom0001Animation.end = 10;

        this.sort = sort;
        this.animate = animate;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        // this.puffle.on('animationcomplete', () => this.onPuffleAnimComplete())
        // this.dj_box_sliders.on('animationcomplete', () => this.onSlidersAnimComplete())
        // this.dj_mixer_wave.on('animationcomplete', () => this.onWaveAnimComplete())

        // this.puffle.play('dj_puffle_idle')

        // if (!this.penguins) return

        // if (Object.keys(this.penguins).length >= 10) {
        //     this.world.client.stampEarned(16)
        // }
        // if (Object.keys(this.penguins).length >= 25) {
        //     this.world.client.stampEarned(22)
        // }
    }

    onPuffleAnimComplete() {
        this.puffle.play('dj_puffle_idle')
    }

    onSlidersAnimComplete() {
        this.dj_box_sliders.play('dj_sliders_move')
    }

    onWaveAnimComplete() {
        this.dj_mixer_wave.play('dj_wave_move')
    }

    onPuffleOver() {
        this.puffle.play('dj_puffle_jump')
    }

    onBoxOver() {
        for (let sprite of this.animate) {
            sprite.__Animation.play()
        }

        this.dj_box_sliders.play('dj_sliders_on')
        this.dj_mixer_wave.play('dj_wave_on')
    }

    onBoxOut() {
        for (let sprite of this.animate) {
            sprite.__Animation.stop()
        }

        this.dj_box_sliders.stop()
        this.dj_mixer_wave.stop()

        this.dj_box_sliders.setFrame('dj/box/sliders/sliders0001')
        this.dj_mixer_wave.setFrame('dj/mixer/wave/wave0001')
    }

    addPenguin(id, penguin) {
        super.addPenguin(id, penguin)
        if (Object.keys(this.penguins).length >= 16) {
            this.world.client.stampEarned(22)
        }
        if (Object.keys(this.penguins).length >= 25) {
            this.world.client.stampEarned(22)
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */