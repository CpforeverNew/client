import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo } from '@components/components'

/* START OF COMPILED CODE */

export default class Theatre extends RoomScene {

    constructor() {
        super("Theatre");

        /** @type {Phaser.GameObjects.Rectangle} */
        this.screen_placeholder;
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

        // bg_png
        this.add.image(760, 396, "theatre", "bg.png");

        // right_terrace_back_curtain
        this.add.image(1448, 261, "theatre", "right_terrace_back_curtain");

        // left_terrace_back_curtain
        this.add.image(76, 254, "theatre", "left_terrace_back_curtain");

        // screen_placeholder
        const screen_placeholder = this.add.rectangle(775, 305, 636, 382);
        screen_placeholder.isFilled = true;
        screen_placeholder.fillColor = 0;

        // chair1
        const chair1 = this.add.image(203, 730, "theatre", "chair1");

        // chair2
        const chair2 = this.add.image(294, 755, "theatre", "chair2");

        // chair3
        const chair3 = this.add.image(395, 771, "theatre", "chair3");

        // chair4
        const chair4 = this.add.image(500, 790, "theatre", "chair4");

        // chair5
        const chair5 = this.add.image(615, 813, "theatre", "chair5");

        // left_screen_column
        this.add.image(443, 258, "theatre", "left_screen_column");

        // right_screen_column
        this.add.image(1108, 258, "theatre", "right_screen_column");

        // top_arch
        this.add.image(768, 242, "theatre", "top_arch");

        // chair10
        const chair10 = this.add.image(1347, 735, "theatre", "chair10");

        // chair9
        const chair9 = this.add.image(1255, 763, "theatre", "chair9");

        // chair8
        const chair8 = this.add.image(1153, 780, "theatre", "chair8");

        // chair7
        const chair7 = this.add.image(1050, 798, "theatre", "chair7");

        // chair6
        const chair6 = this.add.image(937, 816, "theatre", "chair6");

        // chair11
        const chair11 = this.add.image(154, 838, "theatre", "chair11");

        // chair12
        const chair12 = this.add.image(249, 856, "theatre", "chair12");

        // chair13
        const chair13 = this.add.image(359, 876, "theatre", "chair13");

        // chair14
        const chair14 = this.add.image(471, 884, "theatre", "chair14");

        // chair15
        const chair15 = this.add.image(589, 901, "theatre", "chair15");

        // chair20
        const chair20 = this.add.image(1396, 843, "theatre", "chair20");

        // chair19
        const chair19 = this.add.image(1301, 859, "theatre", "chair19");

        // chair18
        const chair18 = this.add.image(1190, 874, "theatre", "chair18");

        // chair17
        const chair17 = this.add.image(1077, 887, "theatre", "chair17");

        // chair16
        const chair16 = this.add.image(958, 904, "theatre", "chair16");

        // left_wall
        this.add.image(191, 405, "theatre", "left_wall");

        // right_terrace_back
        this.add.image(1397, 217, "theatre", "right_terrace_back");

        // right_wall
        this.add.image(1348, 401, "theatre", "right_wall");

        // left_terrace_back
        this.add.image(137, 223, "theatre", "left_terrace_back");

        // left_terrace_chair_left
        this.add.image(94, 322, "theatre", "left_terrace_chair_left");

        // right_terrace_chair_left
        this.add.image(1437, 329, "theatre", "right_terrace_chair_left");

        // right_terrace_chair_right_leftarm
        this.add.image(1454, 350, "theatre", "right_terrace_chair_right_leftarm");

        // left_terrace
        this.add.image(113, 358, "theatre", "left_terrace");

        // right_terrace
        this.add.image(1421, 353, "theatre", "right_terrace");

        // right_column
        this.add.image(1393, 469, "theatre", "right_column");

        // left_terrace_chair_left_leftarm_png
        this.add.image(90, 357, "theatre", "left_terrace_chair_left_leftarm.png");

        // left_column
        this.add.image(141, 465, "theatre", "left_column");

        // stage_lights
        this.add.image(762, 95, "theatre", "stage_lights");

        // lists
        const sort = [chair16, chair17, chair18, chair19, chair20, chair15, chair14, chair13, chair12, chair11, chair6, chair7, chair8, chair9, chair10, chair5, chair4, chair3, chair2, chair1];

        this.screen_placeholder = screen_placeholder;
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
