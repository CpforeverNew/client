import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo } from '@components/components'

/* START OF COMPILED CODE */

export default class Theatre extends RoomScene {

    constructor() {
        super("Theatre");

        /** @type {Phaser.GameObjects.Rectangle} */
        this.screen_placeholder;
        /** @type {Phaser.GameObjects.Image} */
        this.screen_frame;
        /** @type {Phaser.GameObjects.Image} */
        this.ambient_lights;
        /** @type {Phaser.GameObjects.Image} */
        this.light_left;
        /** @type {Phaser.GameObjects.Image} */
        this.light_right;
        /** @type {Phaser.GameObjects.Image} */
        this.light_front_left;
        /** @type {Phaser.GameObjects.Image} */
        this.light_front_right;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.#streamActive = false;

        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 710, 530)
        }
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("theatre-pack", "assets/media/rooms/old/theatre/theatre-pack.json");
    }

    /** @returns {void} */
    _create() {

        // background
        this.add.image(765, 441, "theatre", "background");

        // chair_shadows
        this.add.image(787, 843, "theatre", "chair_shadows");

        // screen_placeholder
        const screen_placeholder = this.add.rectangle(753, 232, 128, 128);
        screen_placeholder.scaleX = 4.605540675461212;
        screen_placeholder.scaleY = 2.7409999227701296;
        screen_placeholder.isFilled = true;
        screen_placeholder.fillColor = 0;

        // screen_frame
        const screen_frame = this.add.image(749, 231, "theatre", "screen_frame");
        screen_frame.scaleX = 0.76603819542713;
        screen_frame.scaleY = 0.76603819542713;

        // door
        const door = this.add.image(261, 439, "theatre", "door");

        // chair_left_back_1
        const chair_left_back_1 = this.add.image(234, 716, "theatre", "chair_left_back_1");

        // chair_left_back_2
        const chair_left_back_2 = this.add.image(270, 763, "theatre", "chair_left_back_2");

        // chair_left_back_3
        const chair_left_back_3 = this.add.image(323, 811, "theatre", "chair_left_back_3");

        // chair_left_back_4
        const chair_left_back_4 = this.add.image(391, 861, "theatre", "chair_left_back_4");

        // chair_left_back_5
        const chair_left_back_5 = this.add.image(464, 893, "theatre", "chair_left_back_5");

        // chair_left_back_6
        const chair_left_back_6 = this.add.image(550, 912, "theatre", "chair_left_back_6");

        // chair_left_front_1
        const chair_left_front_1 = this.add.image(286, 614, "theatre", "chair_left_front_1");

        // chair_left_front_2
        const chair_left_front_2 = this.add.image(336, 658, "theatre", "chair_left_front_2");

        // chair_left_front_3
        const chair_left_front_3 = this.add.image(393, 696, "theatre", "chair_left_front_3");

        // chair_left_front_4
        const chair_left_front_4 = this.add.image(459, 727, "theatre", "chair_left_front_4");

        // chair_left_front_5
        const chair_left_front_5 = this.add.image(535, 754, "theatre", "chair_left_front_5");

        // chair_left_front_6
        const chair_left_front_6 = this.add.image(617, 769, "theatre", "chair_left_front_6");

        // chair_right_back_6
        const chair_right_back_6 = this.add.image(1336, 719, "theatre", "chair_right_back_6");

        // chair_right_back_5
        const chair_right_back_5 = this.add.image(1299, 767, "theatre", "chair_right_back_5");

        // chair_right_back_4
        const chair_right_back_4 = this.add.image(1248, 815, "theatre", "chair_right_back_4");

        // chair_right_back_3
        const chair_right_back_3 = this.add.image(1185, 855, "theatre", "chair_right_back_3");

        // chair_right_back_2
        const chair_right_back_2 = this.add.image(1113, 884, "theatre", "chair_right_back_2");

        // chair_right_back_1
        const chair_right_back_1 = this.add.image(1032, 905, "theatre", "chair_right_back_1");

        // chair_right_front_6
        const chair_right_front_6 = this.add.image(1277, 614, "theatre", "chair_right_front_6");

        // chair_right_front_5
        const chair_right_front_5 = this.add.image(1229, 658, "theatre", "chair_right_front_5");

        // chair_right_front_4
        const chair_right_front_4 = this.add.image(1167, 696, "theatre", "chair_right_front_4");

        // chair_right_front_3
        const chair_right_front_3 = this.add.image(1090, 728, "theatre", "chair_right_front_3");

        // chair_right_front_2
        const chair_right_front_2 = this.add.image(1015, 754, "theatre", "chair_right_front_2");

        // chair_right_front_1
        const chair_right_front_1 = this.add.image(936, 769, "theatre", "chair_right_front_1");

        // ambient_lights
        const ambient_lights = this.add.image(765, 490, "theatre", "ambient_lights");

        // speaker_base_right
        this.add.image(1296, 176, "theatre", "speaker_base_right");

        // speaker_right
        const speaker_right = this.add.sprite(1277, 181, "theatre", "speaker0001");

        // exit
        this.add.image(235, 340, "theatre", "exit");

        // light_left
        const light_left = this.add.image(-14, 984, "theatre", "light_left");
        light_left.setOrigin(-0.017035864693783813, 1.0344050382733405);

        // light_right
        const light_right = this.add.image(1548, 976, "theatre", "light_right");
        light_right.setOrigin(1.025763985114897, 1.0090085115793666);

        // light_front_left
        const light_front_left = this.add.image(393, 101, "theatre", "light_front_left");

        // light_front_right
        const light_front_right = this.add.image(1120, 101, "theatre", "light_front_right");

        // speaker_base_left
        const speaker_base_left = this.add.image(197, 176, "theatre", "speaker_base_left");
        speaker_base_left.flipX = true;

        // speaker_left
        const speaker_left = this.add.sprite(216, 180, "theatre", "speaker0001");
        speaker_left.flipX = true;

        // lists
        const sort = [chair_left_back_1, chair_left_back_2, chair_left_back_3, chair_left_back_4, chair_left_back_5, chair_left_back_6, chair_left_front_1, chair_left_front_2, chair_left_front_3, chair_left_front_4, chair_left_front_5, chair_left_front_6, chair_right_back_6, chair_right_back_5, chair_right_back_4, chair_right_back_3, chair_right_back_2, chair_right_back_1, chair_right_front_6, chair_right_front_5, chair_right_front_4, chair_right_front_3, chair_right_front_2, chair_right_front_1, light_left, light_right];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 300;
        doorMoveTo.y = 520;

        // speaker_right (components)
        const speaker_rightAnimation = new Animation(speaker_right);
        speaker_rightAnimation.key = "speaker";
        speaker_rightAnimation.end = 18;

        // speaker_left (components)
        const speaker_leftAnimation = new Animation(speaker_left);
        speaker_leftAnimation.key = "speaker";
        speaker_leftAnimation.end = 18;

        this.screen_placeholder = screen_placeholder;
        this.screen_frame = screen_frame;
        this.ambient_lights = ambient_lights;
        this.light_left = light_left;
        this.light_right = light_right;
        this.light_front_left = light_front_left;
        this.light_front_right = light_front_right;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    #clean() {
        this.#streamActive = false;
        this.#video && this.#video.removeEventListener('pause', this.onPause.bind(this));

        this.hls && this.hls.destroy();
        this.#video && this.#video.remove();
        this.videoContainer && this.videoContainer.destroy();

        this.#video = null;
        this.videoContainer = null;
        this.hls = null;
    }

    create() {
        super.create();

        this.screen_frame.depth = 1;

        this.ambient_lights.depth = 1000;

        this.light_left.depth = 1001;
        this.light_right.depth = 1001;

        this.light_front_left.depth = 1001;
        this.light_front_right.depth = 1001;

        this.network.send('get_stream');
    }

    stream(source) {
        if(!Hls.isSupported()) throw Error('Hls is not supported on this device.');

        this.#video = document.createElement('video');

        if(this.#streamActive) throw Error('Stream is already active.');
        this.#streamActive = true;

        this.hls = new Hls();

        this.events.once('shutdown', () => {
            this.#clean();
        });

        this.hls.loadSource(source);
        this.hls.attachMedia(this.#video);

        this.videoContainer = new Phaser.GameObjects.Video(this, 100, 100);

        this.#video.addEventListener('pause', this.onPause.bind(this));

        this.videoContainer.on('created', () => {
            const { width, height } = this.screen_placeholder.getBounds();
            this.videoContainer.setDisplaySize(width, height);
        })

        this.videoContainer.copyPosition(this.screen_placeholder.getCenter());

        this.videoContainer.video = this.#video;

        this.add.existing(this.videoContainer);

        this.videoContainer.play();
    }

    onPause() {
        this.videoContainer.play();
    }

    onStreamAvaliable({ avaliable, source }) {
        if(!this.#streamActive && avaliable) return this.stream(source);
        if(this.#streamActive && !avaliable) return this.#clean();
    }

    /** Private */
    #streamActive
    #video
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
