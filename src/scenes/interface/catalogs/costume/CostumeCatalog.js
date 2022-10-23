import { Button, Interactive, SimpleButton } from '@components/components'

import Book from '@scenes/interface/books/Book'
import Tag1 from './buttons/Tag1'
import Tag2 from './buttons/Tag2'

/* START OF COMPILED CODE */

export default class CostumeCatalog extends Book {

    constructor() {
        super("CostumeCatalog");

        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("clothingcatalog-pack", "assets/media/interface/catalogs/clothing/clothingcatalog-pack.json");
        this.load.pack("costume-pack", "assets/media/interface/catalogs/costume/costume-pack.json");
    }

    /** @returns {void} */
    _create() {

        // block
        const block = this.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;

        // page3
        const page3 = this.add.container(14, 19);
        page3.visible = false;

        // p3
        const p3 = this.add.image(799, 481, "costume-sled", "3.png");
        page3.add(p3);

        // close_left_16
        const close_left_16 = this.add.image(486, 38, "clothingcatalog", "close_left");
        close_left_16.setOrigin(0, 0);
        page3.add(close_left_16);

        // page_left_16
        const page_left_16 = this.add.image(485, 588, "clothingcatalog", "page_left");
        page_left_16.setOrigin(0, 0);
        page3.add(page_left_16);

        // page2
        const page2 = this.add.container(14, 19);
        page2.visible = false;

        // p2
        const p2 = this.add.image(816, 476, "costume-sled", "2.png");
        page2.add(p2);

        // close_left
        const close_left = this.add.image(195, 38, "clothingcatalog", "close_left");
        close_left.setOrigin(0, 0);
        page2.add(close_left);

        // page_right_4
        const page_right_4 = this.add.image(1306, 587, "clothingcatalog", "page_right");
        page_right_4.setOrigin(0, 0);
        page2.add(page_right_4);

        // close_right_4
        const close_right_4 = this.add.image(1305, 38, "clothingcatalog", "close_right");
        close_right_4.setOrigin(0, 0);
        page2.add(close_right_4);

        // page_left_1
        const page_left_1 = this.add.image(193, 586, "clothingcatalog", "page_left");
        page_left_1.setOrigin(0, 0);
        page2.add(page_left_1);

        // tag1
        const tag1 = new Tag1(this, 251, 390);
        tag1.angle = -30;
        page2.add(tag1);

        // tag1_1
        const tag1_1 = new Tag1(this, 942, 550);
        tag1_1.angle = -30;
        page2.add(tag1_1);

        // tag2
        const tag2 = new Tag2(this, 1296, 263);
        tag2.angle = 33;
        page2.add(tag2);

        // page1
        const page1 = this.add.container(13, 19);
        page1.visible = false;

        // p1
        const p1 = this.add.image(749, 476, "costume-sled", "1.png");
        page1.add(p1);

        // close_right_4_1
        const close_right_4_1 = this.add.image(918, 39, "clothingcatalog", "close_right");
        close_right_4_1.setOrigin(0, 0);
        page1.add(close_right_4_1);

        // page_right_4_1
        const page_right_4_1 = this.add.image(916, 588, "clothingcatalog", "page_right");
        page_right_4_1.setOrigin(0, 0);
        page1.add(page_right_4_1);

        // buttons
        const buttons = this.add.container(204, 59);
        buttons.visible = false;

        // coins
        const coins = this.add.text(1134, 796, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // lists
        const pages = [page1, page2, page3];

        // block (components)
        new Interactive(block);

        // close_left_16 (components)
        const close_left_16Button = new Button(close_left_16);
        close_left_16Button.spriteName = "close_left";
        close_left_16Button.callback = () => this.close();
        close_left_16Button.activeFrame = false;

        // page_left_16 (components)
        const page_left_16Button = new Button(page_left_16);
        page_left_16Button.spriteName = "page_left";
        page_left_16Button.callback = () => this.prevPage();
        page_left_16Button.activeFrame = false;

        // close_left (components)
        const close_leftButton = new Button(close_left);
        close_leftButton.spriteName = "close_left";
        close_leftButton.callback = () => this.close();
        close_leftButton.activeFrame = false;

        // page_right_4 (components)
        const page_right_4Button = new Button(page_right_4);
        page_right_4Button.spriteName = "page_right";
        page_right_4Button.callback = () => this.nextPage();
        page_right_4Button.activeFrame = false;

        // close_right_4 (components)
        const close_right_4Button = new Button(close_right_4);
        close_right_4Button.spriteName = "close_right";
        close_right_4Button.callback = () => this.close();
        close_right_4Button.activeFrame = false;

        // page_left_1 (components)
        const page_left_1Button = new Button(page_left_1);
        page_left_1Button.spriteName = "page_left";
        page_left_1Button.callback = () => this.prevPage();
        page_left_1Button.activeFrame = false;

        // tag1 (prefab fields)
        tag1.item = 4426;

        // tag1_1 (prefab fields)
        tag1_1.item = 4018;

        // tag2 (prefab fields)
        tag2.item = 1015;

        // close_right_4_1 (components)
        const close_right_4_1Button = new Button(close_right_4_1);
        close_right_4_1Button.spriteName = "close_right";
        close_right_4_1Button.callback = () => this.close();
        close_right_4_1Button.activeFrame = false;

        // page_right_4_1 (components)
        const page_right_4_1Button = new Button(page_right_4_1);
        page_right_4_1Button.spriteName = "page_right";
        page_right_4_1Button.callback = () => this.nextPage();
        page_right_4_1Button.activeFrame = false;

        this.buttons = buttons;
        this.coins = coins;
        this.pages = pages;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    buy(item) {
        this.interface.prompt.showItem(item)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
