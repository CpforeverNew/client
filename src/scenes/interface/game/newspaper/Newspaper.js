import BaseContainer from '@scenes/base/BaseContainer'
import { SimpleButton, Interactive, Button } from '@components/components'

/* START OF COMPILED CODE */

export default class Newspaper extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.page2;
        /** @type {Phaser.GameObjects.Image} */
        this.page1;
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

        // Page2
        const page2 = scene.add.image(750, 475, "newspaper", "Page2.png");
        page2.scaleX = 1.2;
        page2.scaleY = 1.2;
        this.add(page2);

        // Page1
        const page1 = scene.add.image(750, 475, "newspaper", "Page1.png");
        page1.scaleX = 1.2;
        page1.scaleY = 1.2;
        this.add(page1);

        // NextPage_btn
        const nextPage_btn = scene.add.rectangle(1090, 901, 128, 128);
        nextPage_btn.scaleX = 1.386797632697588;
        nextPage_btn.scaleY = 0.2707752265507227;
        nextPage_btn.isFilled = true;
        nextPage_btn.fillAlpha = 0;
        this.add(nextPage_btn);

        // FrontPage_btn
        const frontPage_btn = scene.add.rectangle(1086, 899, 128, 128);
        frontPage_btn.scaleX = 1.386797632697588;
        frontPage_btn.scaleY = 0.2707752265507227;
        frontPage_btn.isFilled = true;
        frontPage_btn.fillAlpha = 0;
        this.add(frontPage_btn);

        // closebtn
        const closebtn = scene.add.image(1208, 35, "newspaper-btns", "closebtn");
        this.add(closebtn);

        // block (components)
        new Interactive(block);

        // nextPage_btn (components)
        const nextPage_btnSimpleButton = new SimpleButton(nextPage_btn);
        nextPage_btnSimpleButton.callback = () => this.nextPage();

        // frontPage_btn (components)
        const frontPage_btnSimpleButton = new SimpleButton(frontPage_btn);
        frontPage_btnSimpleButton.callback = () => this.frontPage();

        // closebtn (components)
        const closebtnSimpleButton = new SimpleButton(closebtn);
        closebtnSimpleButton.callback = () => this.close();;

        this.page2 = page2;
        this.page1 = page1;
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
