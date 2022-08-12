import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'

//import { Animation, Button, MoveTo } from '@components/components'

/* START OF COMPILED CODE */

export default class Theatre extends RoomScene {

    constructor() {
        super("Theatre");

        /** @type {Phaser.GameObjects.Rectangle} */
        this.screen_back_1;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.screen_placeholder;
        /** @type {Phaser.GameObjects.Image} */
        this.popcorn;
        /** @type {Phaser.GameObjects.Image} */
        this.left_screen_column;
        /** @type {Phaser.GameObjects.Image} */
        this.right_screen_column;
        /** @type {Phaser.GameObjects.Image} */
        this.top_arch;
        /** @type {Phaser.GameObjects.Image} */
        this.right_wall;
        /** @type {Phaser.GameObjects.Image} */
        this.left_wall;
        /** @type {Phaser.GameObjects.Image} */
        this.left_terrace;
        /** @type {Phaser.GameObjects.Image} */
        this.right_terrace;
        /** @type {Phaser.GameObjects.Image} */
        this.right_column;
        /** @type {Phaser.GameObjects.Image} */
        this.left_column;
        /** @type {Phaser.GameObjects.Image} */
        this.stage_lights;
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

        // screen_back_1
        const screen_back_1 = this.add.rectangle(775, 310, 636, 382);
        screen_back_1.isFilled = true;
        screen_back_1.fillColor = 0;

        // screen_placeholder
        const screen_placeholder = this.add.rectangle(775, 307, 636, 382);
        screen_placeholder.isFilled = true;
        screen_placeholder.fillColor = 0;

        // shadow_popcorn_bottom
        this.add.image(1417, 760, "theatre", "shadow_popcorn_bottom");

        // shadow_popcorn_abovebottom
        this.add.image(1412, 766, "theatre", "shadow_popcorn_abovebottom");

        // popcorn
        const popcorn = this.add.image(1412, 759, "popcorn");

        // shadow_popcorn_top
        this.add.image(1412, 753, "theatre", "shadow_popcorn_top");

        // shadow_popcorn_undertop
        const shadow_popcorn_undertop = this.add.image(1414, 759, "theatre", "shadow_popcorn_undertop");

        // right_terrace_back_curtain
        this.add.image(1448, 254, "theatre", "right_terrace_back_curtain");

        // left_terrace_back_curtain
        this.add.image(76, 254, "theatre", "left_terrace_back_curtain");

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
        const left_screen_column = this.add.image(439, 258, "theatre", "left_screen_column");

        // right_screen_column
        const right_screen_column = this.add.image(1110, 258, "theatre", "right_screen_column");

        // right_screen_column_2
        const right_screen_column_2 = this.add.image(1022, 99, "theatre", "right_screen_column");
        right_screen_column_2.angle = -90;

        // right_screen_column_1
        const right_screen_column_1 = this.add.image(521, 99, "theatre", "right_screen_column");
        right_screen_column_1.scaleX = -1;
        right_screen_column_1.angle = 90;

        // top_arch
        const top_arch = this.add.image(768, 245, "theatre", "top_arch");

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

        // right_terrace_back
        this.add.image(1398, 213, "theatre", "right_terrace_back");

        // left_terrace_back
        this.add.image(137, 215, "theatre", "left_terrace_back");

        // left_terrace_chair_left
        this.add.image(94, 316, "theatre", "left_terrace_chair_left");

        // right_terrace_chair_left
        this.add.image(1438, 325, "theatre", "right_terrace_chair_left");

        // left_terrace_chair_left_leftarm_png
        this.add.image(81, 351, "theatre", "left_terrace_chair_left_leftarm.png");

        // right_terrace_chair_right_leftarm
        this.add.image(1455, 346, "theatre", "right_terrace_chair_right_leftarm");

        // chair16
        const chair16 = this.add.image(958, 904, "theatre", "chair16");

        // right_wall
        const right_wall = this.add.image(1348, 398, "theatre", "right_wall");

        // left_wall
        const left_wall = this.add.image(191, 397, "theatre", "left_wall");

        // left_terrace
        const left_terrace = this.add.image(113, 350, "theatre", "left_terrace");

        // right_terrace
        const right_terrace = this.add.image(1422, 348, "theatre", "right_terrace");

        // right_column
        const right_column = this.add.image(1393, 466, "theatre", "right_column");

        // left_column
        const left_column = this.add.image(141, 465, "theatre", "left_column");

        // stage_lights
        const stage_lights = this.add.image(762, 95, "theatre", "stage_lights");

        // lists
        const sort = [chair16, chair17, chair18, chair19, chair20, chair15, chair14, chair13, chair12, chair11, chair6, chair7, chair8, chair9, chair10, chair5, chair4, chair3, chair2, chair1];

        // shadow_popcorn_undertop (components)
        const shadow_popcorn_undertopSimpleButton = new SimpleButton(shadow_popcorn_undertop);
        shadow_popcorn_undertopSimpleButton.callback = () => this.interface.prompt.showItem(7032);

        this.screen_back_1 = screen_back_1;
        this.screen_placeholder = screen_placeholder;
        this.popcorn = popcorn;
        this.left_screen_column = left_screen_column;
        this.right_screen_column = right_screen_column;
        this.top_arch = top_arch;
        this.right_wall = right_wall;
        this.left_wall = left_wall;
        this.left_terrace = left_terrace;
        this.right_terrace = right_terrace;
        this.right_column = right_column;
        this.left_column = left_column;
        this.stage_lights = stage_lights;
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

        this.left_screen_column.depth = 1;
        this.right_screen_column.depth = 1;

        this.top_arch.depth = 2;

        this.left_wall.depth = 3;
        this.right_wall.depth = 3;

        this.left_terrace.depth = 4;
        this.right_terrace.depth = 4;

        this.left_column.depth = 5;
        this.right_column.depth = 5;

        this.stage_lights.depth = 6;

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
