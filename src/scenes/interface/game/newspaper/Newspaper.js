import BaseContainer from '@scenes/base/BaseContainer'
import { SimpleButton, Interactive, Button, ShowHint } from '@components/components'

/* START OF COMPILED CODE */

export default class Newspaper extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Container} */
        this.page2;
        /** @type {Phaser.GameObjects.Image} */
        this.bg_page2;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.nextPage_btn_6;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.nextPage_btn_7;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.nextPage_btn_8;
        /** @type {Phaser.GameObjects.Container} */
        this.page1;
        /** @type {Phaser.GameObjects.Image} */
        this.bg_page1;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.nextPage_btn_5;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.nextPage_btn_4;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.nextPage_btn_3;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.nextPage_btn_2;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.nextPage_btn_1;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.nextPage_btn_9;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.nextPage_btn;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.frontPage_btn;


        // block
        const block = scene.add.rectangle(770, 475, 1520, 960);
        block.scaleX = 1.0639518692146546;
        block.scaleY = 1.0647215971698112;
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // page2
        const page2 = scene.add.container(0, 0);
        page2.visible = false;
        this.add(page2);

        // bg_page2
        const bg_page2 = scene.add.image(750, 475, "newspaper", "Page2.png");
        bg_page2.scaleX = 1.2;
        bg_page2.scaleY = 1.2;
        page2.add(bg_page2);

        // NextPage_btn_6
        const nextPage_btn_6 = scene.add.rectangle(1092, 335, 128, 128);
        nextPage_btn_6.scaleX = 1.4189097981335705;
        nextPage_btn_6.scaleY = 1.4264247424584033;
        nextPage_btn_6.isFilled = true;
        nextPage_btn_6.fillAlpha = 0;
        page2.add(nextPage_btn_6);

        // NextPage_btn_7
        const nextPage_btn_7 = scene.add.rectangle(1092, 554, 128, 128);
        nextPage_btn_7.scaleX = 1.4189097981335705;
        nextPage_btn_7.scaleY = 1.797442502835761;
        nextPage_btn_7.isFilled = true;
        nextPage_btn_7.fillAlpha = 0;
        page2.add(nextPage_btn_7);

        // NextPage_btn_8
        const nextPage_btn_8 = scene.add.rectangle(1093, 777, 128, 128);
        nextPage_btn_8.scaleX = 1.4189097981335705;
        nextPage_btn_8.scaleY = 1.422619782494551;
        nextPage_btn_8.isFilled = true;
        nextPage_btn_8.fillAlpha = 0;
        page2.add(nextPage_btn_8);

        // page1
        const page1 = scene.add.container(0, 0);
        this.add(page1);

        // bg_page1
        const bg_page1 = scene.add.image(750, 475, "newspaper", "Page1.png");
        bg_page1.scaleX = 1.2;
        bg_page1.scaleY = 1.2;
        page1.add(bg_page1);

        // NextPage_btn_5
        const nextPage_btn_5 = scene.add.rectangle(1087, 446, 128, 128);
        nextPage_btn_5.scaleX = 1.7536893167968115;
        nextPage_btn_5.scaleY = 0.18562385073157775;
        nextPage_btn_5.isFilled = true;
        nextPage_btn_5.fillAlpha = 0;
        page1.add(nextPage_btn_5);

        // NextPage_btn_4
        const nextPage_btn_4 = scene.add.rectangle(1088, 420, 128, 128);
        nextPage_btn_4.scaleX = 1.7536893167968115;
        nextPage_btn_4.scaleY = 0.18562385073157775;
        nextPage_btn_4.isFilled = true;
        nextPage_btn_4.fillAlpha = 0;
        page1.add(nextPage_btn_4);

        // NextPage_btn_3
        const nextPage_btn_3 = scene.add.rectangle(1089, 393, 128, 128);
        nextPage_btn_3.scaleX = 1.7536893167968115;
        nextPage_btn_3.scaleY = 0.18562385073157775;
        nextPage_btn_3.isFilled = true;
        nextPage_btn_3.fillAlpha = 0;
        page1.add(nextPage_btn_3);

        // NextPage_btn_2
        const nextPage_btn_2 = scene.add.rectangle(1090, 365, 128, 128);
        nextPage_btn_2.scaleX = 1.7536893167968115;
        nextPage_btn_2.scaleY = 0.18562385073157775;
        nextPage_btn_2.isFilled = true;
        nextPage_btn_2.fillAlpha = 0;
        page1.add(nextPage_btn_2);

        // NextPage_btn_1
        const nextPage_btn_1 = scene.add.rectangle(809, 597, 128, 128);
        nextPage_btn_1.scaleX = 1.7536893167968115;
        nextPage_btn_1.scaleY = 0.2707752265507227;
        nextPage_btn_1.isFilled = true;
        nextPage_btn_1.fillAlpha = 0;
        page1.add(nextPage_btn_1);

        // NextPage_btn_9
        const nextPage_btn_9 = scene.add.rectangle(641, 772, 128, 128);
        nextPage_btn_9.scaleX = 5.2408452403848536;
        nextPage_btn_9.scaleY = 2.2798387206313713;
        nextPage_btn_9.isFilled = true;
        nextPage_btn_9.fillAlpha = 0;
        page1.add(nextPage_btn_9);

        // closebtn
        const closebtn = scene.add.image(1208, 35, "newspaper-btns", "closebtn");
        this.add(closebtn);

        // NextPage_btn
        const nextPage_btn = scene.add.rectangle(1090, 901, 128, 128);
        nextPage_btn.scaleX = 1.386797632697588;
        nextPage_btn.scaleY = 0.2707752265507227;
        nextPage_btn.isFilled = true;
        nextPage_btn.fillAlpha = 0;
        this.add(nextPage_btn);

        // FrontPage_btn
        const frontPage_btn = scene.add.rectangle(1091, 904, 128, 128);
        frontPage_btn.scaleX = 1.386797632697588;
        frontPage_btn.scaleY = 0.2707752265507227;
        frontPage_btn.visible = false;
        frontPage_btn.isFilled = true;
        frontPage_btn.fillAlpha = 0;
        this.add(frontPage_btn);

        // block (components)
        new Interactive(block);

        // nextPage_btn_6 (components)
        new SimpleButton(nextPage_btn_6);
        const nextPage_btn_6ShowHint = new ShowHint(nextPage_btn_6);
        nextPage_btn_6ShowHint.text = "rachelrue#0116";

        // nextPage_btn_7 (components)
        new SimpleButton(nextPage_btn_7);
        const nextPage_btn_7ShowHint = new ShowHint(nextPage_btn_7);
        nextPage_btn_7ShowHint.text = "Big Slime#4529";

        // nextPage_btn_8 (components)
        new SimpleButton(nextPage_btn_8);
        const nextPage_btn_8ShowHint = new ShowHint(nextPage_btn_8);
        nextPage_btn_8ShowHint.text = "AndreGamer00 CPPS#3892";

        // nextPage_btn_5 (components)
        new SimpleButton(nextPage_btn_5);
        const nextPage_btn_5ShowHint = new ShowHint(nextPage_btn_5);
        nextPage_btn_5ShowHint.text = "Soon!";

        // nextPage_btn_4 (components)
        new SimpleButton(nextPage_btn_4);
        const nextPage_btn_4ShowHint = new ShowHint(nextPage_btn_4);
        nextPage_btn_4ShowHint.text = "Soon!";

        // nextPage_btn_3 (components)
        new SimpleButton(nextPage_btn_3);
        const nextPage_btn_3ShowHint = new ShowHint(nextPage_btn_3);
        nextPage_btn_3ShowHint.text = "Soon!";

        // nextPage_btn_2 (components)
        new SimpleButton(nextPage_btn_2);
        const nextPage_btn_2ShowHint = new ShowHint(nextPage_btn_2);
        nextPage_btn_2ShowHint.text = "Soon!";

        // nextPage_btn_1 (components)
        new SimpleButton(nextPage_btn_1);
        const nextPage_btn_1ShowHint = new ShowHint(nextPage_btn_1);
        nextPage_btn_1ShowHint.text = "Soon!";

        // nextPage_btn_9 (components)
        const nextPage_btn_9SimpleButton = new SimpleButton(nextPage_btn_9);
        nextPage_btn_9SimpleButton.callback = () =>  window.open('https://cpforever.org/news/2022/10/penguin-of-the-week-harmonystar-23', '_blank').focus();;;

        // closebtn (components)
        const closebtnSimpleButton = new SimpleButton(closebtn);
        closebtnSimpleButton.callback = () => this.close();;

        // nextPage_btn (components)
        const nextPage_btnSimpleButton = new SimpleButton(nextPage_btn);
        nextPage_btnSimpleButton.callback = () => this.nextPage();

        // frontPage_btn (components)
        const frontPage_btnSimpleButton = new SimpleButton(frontPage_btn);
        frontPage_btnSimpleButton.callback = () => this.frontPage();

        this.page2 = page2;
        this.bg_page2 = bg_page2;
        this.nextPage_btn_6 = nextPage_btn_6;
        this.nextPage_btn_7 = nextPage_btn_7;
        this.nextPage_btn_8 = nextPage_btn_8;
        this.page1 = page1;
        this.bg_page1 = bg_page1;
        this.nextPage_btn_5 = nextPage_btn_5;
        this.nextPage_btn_4 = nextPage_btn_4;
        this.nextPage_btn_3 = nextPage_btn_3;
        this.nextPage_btn_2 = nextPage_btn_2;
        this.nextPage_btn_1 = nextPage_btn_1;
        this.nextPage_btn_9 = nextPage_btn_9;
        this.nextPage_btn = nextPage_btn;
        this.frontPage_btn = frontPage_btn;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    // Write your code here

    create() {

        this.editorCreate();
    }

    nextPage() {
        this.page1.visible = false;
        this.page2.visible = true;
        this.nextPage_btn.visible = false;
        this.frontPage_btn.visible = true;
    }

    frontPage() {
        this.page1.visible = true;
        this.page2.visible = false;
        this.nextPage_btn.visible = true;
        this.frontPage_btn.visible = false;
    }

    close() {
        this.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
