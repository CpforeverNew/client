
// You can write more code here

import BaseContainer from "@scenes/base/BaseContainer";
import SimpleButton from "@scenes/components/SimpleButton";
import Interactive from "@scenes/components/Interactive";
import Button from "@scenes/components/Button";

/* START OF COMPILED CODE */

export default class MusicJam extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 763, y ?? 446);

        /** @type {Phaser.GameObjects.Image} */
        this.eight;
        /** @type {Phaser.GameObjects.Image} */
        this.seven;
        /** @type {Phaser.GameObjects.Image} */
        this.six;
        /** @type {Phaser.GameObjects.Image} */
        this.five;
        /** @type {Phaser.GameObjects.Image} */
        this.four;
        /** @type {Phaser.GameObjects.Image} */
        this.three;
        /** @type {Phaser.GameObjects.Image} */
        this.two;
        /** @type {Phaser.GameObjects.Image} */
        this.one;
        /** @type {Phaser.GameObjects.Image} */
        this.button_1;
        /** @type {Phaser.GameObjects.Image} */
        this.button_2;
        /** @type {Phaser.GameObjects.Image} */
        this.button_3;
        /** @type {Phaser.GameObjects.Image} */
        this.button_4;
        /** @type {Phaser.GameObjects.Image} */
        this.button_5;
        /** @type {Phaser.GameObjects.Image} */
        this.button_6;
        /** @type {Phaser.GameObjects.Image} */
        this.button_7;
        /** @type {Phaser.GameObjects.Image} */
        this.button_8;


        // block
        const block = scene.add.rectangle(1, 44, 1520, 960);
        block.scaleX = 1.0509339247215146;
        block.scaleY = 1.067829708864968;
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg_png
        const bg_png = scene.add.image(53, 46, "mj-ui", "bg");
        this.add(bg_png);

        // border_png
        const border_png = scene.add.image(0, 39, "mj-ui", "border");
        this.add(border_png);

        // eight
        const eight = scene.add.image(489, 280, "mj-ui", "80001");
        this.add(eight);

        // seven
        const seven = scene.add.image(189, 277, "mj-ui", "70001");
        this.add(seven);

        // six
        const six = scene.add.image(-140, 280, "mj-ui", "60001");
        this.add(six);

        // five
        const five = scene.add.image(-461, 279, "mj-ui", "50001");
        this.add(five);

        // four
        const four = scene.add.image(488, -161, "mj-ui", "40001");
        this.add(four);

        // three
        const three = scene.add.image(183, -159, "mj-ui", "30001");
        this.add(three);

        // two
        const two = scene.add.image(-144, -163, "mj-ui", "20001");
        this.add(two);

        // one
        const one = scene.add.image(-457, -159, "mj-ui", "10001");
        this.add(one);

        // close0001_png
        const close0001_png = scene.add.image(727, -411, "mj-ui", "close0001");
        this.add(close0001_png);

        // button_1
        const button_1 = scene.add.image(-459, -55, "mj-ui", "button");
        button_1.visible = false;
        this.add(button_1);

        // button_2
        const button_2 = scene.add.image(-141, -55, "mj-ui", "button");
        button_2.visible = false;
        this.add(button_2);

        // button_3
        const button_3 = scene.add.image(187, -55, "mj-ui", "button");
        button_3.visible = false;
        this.add(button_3);

        // button_4
        const button_4 = scene.add.image(493, -55, "mj-ui", "button");
        button_4.visible = false;
        this.add(button_4);

        // button_5
        const button_5 = scene.add.image(-464, 390, "mj-ui", "button");
        button_5.visible = false;
        this.add(button_5);

        // button_6
        const button_6 = scene.add.image(-136, 390, "mj-ui", "button");
        button_6.visible = false;
        this.add(button_6);

        // button_7
        const button_7 = scene.add.image(191, 390, "mj-ui", "button");
        button_7.visible = false;
        this.add(button_7);

        // button_8
        const button_8 = scene.add.image(490, 390, "mj-ui", "button");
        button_8.visible = false;
        this.add(button_8);

        // block (components)
        new Interactive(block);

        // close0001_png (components)
        const close0001_pngSimpleButton = new SimpleButton(close0001_png);
        close0001_pngSimpleButton.callback = () => this.visible = false;

        // button_1 (components)
        const button_1Button = new Button(button_1);
        button_1Button.spriteName = "button";
        button_1Button.callback = () => this.interface.prompt.showItem(123);

        // button_2 (components)
        const button_2Button = new Button(button_2);
        button_2Button.spriteName = "button";
        button_2Button.callback = () => this.interface.prompt.showItem(123);

        // button_3 (components)
        const button_3Button = new Button(button_3);
        button_3Button.spriteName = "button";
        button_3Button.callback = () => this.interface.prompt.showItem(123);

        // button_4 (components)
        const button_4Button = new Button(button_4);
        button_4Button.spriteName = "button";
        button_4Button.callback = () => this.interface.prompt.showItem(123);

        // button_5 (components)
        const button_5Button = new Button(button_5);
        button_5Button.spriteName = "button";
        button_5Button.callback = () => this.interface.prompt.showItem(123);

        // button_6 (components)
        const button_6Button = new Button(button_6);
        button_6Button.spriteName = "button";
        button_6Button.callback = () => this.interface.prompt.showItem(123);

        // button_7 (components)
        const button_7Button = new Button(button_7);
        button_7Button.spriteName = "button";
        button_7Button.callback = () => this.interface.prompt.showItem(123);

        // button_8 (components)
        const button_8Button = new Button(button_8);
        button_8Button.spriteName = "button";
        button_8Button.callback = () => this.interface.prompt.showItem(123);

        this.eight = eight;
        this.seven = seven;
        this.six = six;
        this.five = five;
        this.four = four;
        this.three = three;
        this.two = two;
        this.one = one;
        this.button_1 = button_1;
        this.button_2 = button_2;
        this.button_3 = button_3;
        this.button_4 = button_4;
        this.button_5 = button_5;
        this.button_6 = button_6;
        this.button_7 = button_7;
        this.button_8 = button_8;

        /* START-USER-CTR-CODE */
        this.checkDate()
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    checkDate() {


        const date = new Date();
        const day = date.getDate();

        switch (12) {

            case 5:
                this.one.setFrame("10002")
                this.button_1.visible = true
                break;
            case 6: 
                this.one.setFrame("10002")
                this.two.setFrame("20002")
                this.button_1.visible = true
                this.button_2.visible = true
                break;
            case 7:
                this.one.setFrame("10002")
                this.two.setFrame("20002")
                this.three.setFrame("30002")
                this.button_1.visible = true
                this.button_2.visible = true
                this.button_3.visible = true
                break;
            case 8:
                this.one.setFrame("10002")
                this.two.setFrame("20002")
                this.three.setFrame("30002")
                this.four.setFrame("40002")
                this.button_1.visible = true
                this.button_2.visible = true
                this.button_3.visible = true
                this.button_4.visible = true
                break;
            case 9:
                this.one.setFrame("10002")
                this.two.setFrame("20002")
                this.three.setFrame("30002")
                this.four.setFrame("40002")
                this.five.setFrame("50002")
                this.button_1.visible = true
                this.button_2.visible = true
                this.button_3.visible = true
                this.button_4.visible = true
                this.button_5.visible = true
                break;
            case 10:
                this.one.setFrame("10002")
                this.two.setFrame("20002")
                this.three.setFrame("30002")
                this.four.setFrame("40002")
                this.five.setFrame("50002")
                this.six.setFrame("60002")
                this.button_1.visible = true
                this.button_2.visible = true
                this.button_3.visible = true
                this.button_4.visible = true
                this.button_5.visible = true
                this.button_6.visible = true
                break;
            case 11:
                this.one.setFrame("10002")
                this.two.setFrame("20002")
                this.three.setFrame("30002")
                this.four.setFrame("40002")
                this.five.setFrame("50002")
                this.six.setFrame("60002")
                this.seven.setFrame("70002")
                this.button_1.visible = true
                this.button_2.visible = true
                this.button_3.visible = true
                this.button_4.visible = true
                this.button_5.visible = true
                this.button_6.visible = true
                this.button_7.visible = true
                break;
            case 12:
                this.one.setFrame("10002")
                this.two.setFrame("20002")
                this.three.setFrame("30002")
                this.four.setFrame("40002")
                this.five.setFrame("50002")
                this.six.setFrame("60002")
                this.seven.setFrame("70002")
                this.eight.setFrame("80002")
                this.button_1.visible = true
                this.button_2.visible = true
                this.button_3.visible = true
                this.button_4.visible = true
                this.button_5.visible = true
                this.button_6.visible = true
                this.button_7.visible = true
                this.button_8.visible = true
                break;
        }  


    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
