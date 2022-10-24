import RoomScene from '@scenes/rooms/RoomScene'

import { Button, MoveTo, SimpleButton, Animation } from '@components/components'


/* START OF COMPILED CODE */

export default class Lighthouse extends RoomScene {

    constructor() {
        super("Lighthouse");

        /** @type {Phaser.GameObjects.Sprite} */
        this.tv;
        /** @type {Phaser.GameObjects.Sprite} */
        this.screen_text;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'beach': () => this.triggerRoom(400, 840, 680),
            'beacon': () => this.triggerRoom(411, 272, 680)
        }
        this.roomAnims = true
        this.music = '252'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("lighthouse-spf-pack", "assets/media/rooms/spooky_fair/lighthouse/lighthouse-spf-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(759, 469, "lighthouse-spf", "bg");

        // concessions
        const concessions = this.add.image(985, 498, "lighthouse-spf", "concessions");

        // smalltv
        this.add.image(1203, 534, "lighthouse-spf", "smalltv");

        // rail
        const rail = this.add.image(655, 663.7526243930017, "lighthouse-spf", "rail");
        rail.setOrigin(0.5, 1.0307240457528273);

        // popcorn
        const popcorn = this.add.image(741, 381, "lighthouse-spf", "popcorn");

        // speaker
        this.add.image(632, 378, "lighthouse-spf", "speaker");

        // pumkin1
        this.add.image(579, 453, "lighthouse-spf", "pumkin1");

        // door
        this.add.image(468, 395, "lighthouse-spf", "door");

        // screen
        const screen = this.add.image(613, 458.535377928559, "lighthouse-spf", "screen");
        screen.setOrigin(0.5, 0.6892952712480875);

        // tv
        const tv = this.add.sprite(156, 675, "tv", "tv10000");
        tv.setOrigin(0.5091060582705557, 1.0684434815387627);

        // spider
        this.add.image(78, 133, "lighthouse-spf", "spider");

        // tv_stand
        this.add.image(190, 615, "lighthouse-spf", "tv_stand");

        // speaker_onbox
        this.add.image(11, 870, "lighthouse-spf", "speaker_onbox");

        // pumkin2
        this.add.image(1489, 623, "lighthouse-spf", "pumkin2");

        // chair1
        const chair1 = this.add.image(748, 635, "lighthouse-spf", "chair1");

        // char_arm1
        const char_arm1 = this.add.image(738, 673, "lighthouse-spf", "char_arm1");

        // chair_arm2
        const chair_arm2 = this.add.image(695, 720, "lighthouse-spf", "chair_arm2");

        // char2
        const char2 = this.add.image(715, 713, "lighthouse-spf", "char2");

        // chair_arm3
        const chair_arm3 = this.add.image(632, 786, "lighthouse-spf", "chair_arm3");

        // chair3
        const chair3 = this.add.image(655, 793, "lighthouse-spf", "chair3");

        // chair_arm4
        const chair_arm4 = this.add.image(544, 839, "lighthouse-spf", "chair_arm4");

        // chair4
        const chair4 = this.add.image(572, 849, "lighthouse-spf", "chair4");

        // chair5
        const chair5 = this.add.image(857, 621, "lighthouse-spf", "chair5");

        // chair_arm5
        const chair_arm5 = this.add.image(847, 658, "lighthouse-spf", "chair_arm5");

        // chair_arm6
        const chair_arm6 = this.add.image(821, 697, "lighthouse-spf", "chair_arm6");

        // chair6
        const chair6 = this.add.image(842, 690, "lighthouse-spf", "chair6");

        // chair_arm7
        const chair_arm7 = this.add.image(772, 771, "lighthouse-spf", "chair_arm7");

        // chair7
        const chair7 = this.add.image(798, 774, "lighthouse-spf", "chair7");

        // chair_arm8
        const chair_arm8 = this.add.image(705, 848, "lighthouse-spf", "chair_arm8");

        // chair8
        const chair8 = this.add.image(733, 859, "lighthouse-spf", "chair8");

        // chair9
        const chair9 = this.add.image(970, 632, "lighthouse-spf", "chair9");

        // chair_arm9
        const chair_arm9 = this.add.image(960, 669, "lighthouse-spf", "chair_arm9");

        // chair10
        const chair10 = this.add.image(963, 689, "lighthouse-spf", "chair10");

        // chair_arm10
        const chair_arm10 = this.add.image(955, 726, "lighthouse-spf", "chair_arm10");

        // chair_arm11
        const chair_arm11 = this.add.image(912, 777, "lighthouse-spf", "chair_arm11");

        // chair11
        const chair11 = this.add.image(933, 771, "lighthouse-spf", "chair11");

        // chair_arm12
        const chair_arm12 = this.add.image(864, 835, "lighthouse-spf", "chair_arm12");

        // chair12
        const chair12 = this.add.image(889, 838, "lighthouse-spf", "chair12");

        // chair13
        const chair13 = this.add.image(1083, 680, "lighthouse-spf", "chair13");

        // chairarm13
        const chairarm13 = this.add.image(1075, 718, "lighthouse-spf", "chairarm13");

        // chair14
        const chair14 = this.add.image(1076, 744, "lighthouse-spf", "chair14");

        // chair_arm14
        const chair_arm14 = this.add.image(1067, 783, "lighthouse-spf", "chair_arm14");

        // chair_arm15
        const chair_arm15 = this.add.image(1029, 841, "lighthouse-spf", "chair_arm15");

        // chair15
        const chair15 = this.add.image(1051, 834, "lighthouse-spf", "chair15");

        // paper0001
        const paper0001 = this.add.image(1439, 898, "lighthouse-spf", "paper");

        // to_top0001
        const to_top0001 = this.add.sprite(317, 61, "lighthouse-spf", "to_top0001");

        // screen_text
        const screen_text = this.add.sprite(1188, 482, "tv", "text0638");

        // lists
        const sort = [chair15, chair_arm15, chair_arm14, chair14, chairarm13, chair13, chair12, chair_arm12, chair11, chair_arm11, chair_arm10, chair10, chair_arm9, chair9, chair8, chair_arm8, chair7, chair_arm7, chair6, chair_arm6, chair_arm5, chair5, chair4, chair_arm4, chair3, chair_arm3, char2, chair_arm2, char_arm1, chair1, rail, concessions, screen, tv];

        // popcorn (components)
        const popcornButton = new Button(popcorn);
        popcornButton.spriteName = "popcorn";

        // paper0001 (components)
        const paper0001Button = new Button(paper0001);
        paper0001Button.spriteName = "paper";
        paper0001Button.callback = () => this.interface.loadExternal('Music');

        // to_top0001 (components)
        const to_top0001Animation = new Animation(to_top0001);
        to_top0001Animation.key = "to_top";
        to_top0001Animation.end = 26;
        to_top0001Animation.onHover = true;

        this.tv = tv;
        this.screen_text = screen_text;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        // this.speaker_bottom_stage.play('bottom_speaker')
        // this.top_left_speaker0001.play('top_left_speaker')
        // this.top_right_speaker0001.play('top_right_speaker')
        this.tv.play('tv')
        this.screen_text.play('text')
    }

    onTopOver() {
        // this.to_top0001.play('to_top')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
