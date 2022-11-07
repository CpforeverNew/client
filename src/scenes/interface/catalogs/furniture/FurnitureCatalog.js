import { Button, Interactive } from '@components/components'

import Book from '@scenes/interface/books/Book'
import BuyButton from './buttons/BuyButton'
import { SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class FurnitureCatalog extends Book {

    constructor() {
        super("FurnitureCatalog");

        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("furniturecatalog-pack", "assets/media/interface/catalogs/furniture/furniturecatalog-pack.json");
    }

    /** @returns {void} */
    _create() {

        // block
        const block = this.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;

        // page9
        const page9 = this.add.container(0, 0);
        page9.visible = false;

        // p9
        const p9 = this.add.image(0, 0, "furniturecatalog", "page0009");
        p9.setOrigin(0, 0);
        page9.add(p9);

        // pageLeft_1
        const pageLeft_1 = this.add.image(492, 590, "newspaper-btns", "prevpagebtn");
        pageLeft_1.setOrigin(0, 0);
        page9.add(pageLeft_1);

        // closeLeft
        const closeLeft = this.add.image(495, 41, "newspaper-btns", "catclosebtn");
        closeLeft.setOrigin(0, 0);
        closeLeft.flipX = true;
        page9.add(closeLeft);

        // page8
        const page8 = this.add.container(0, 0);
        page8.visible = false;

        // p8
        const p8 = this.add.image(0, 0, "furniturecatalog", "page0008");
        p8.setOrigin(0, 0);
        page8.add(p8);

        // buyButton_30
        const buyButton_30 = new BuyButton(this, 537, 376, "furniturecatalog", "buy");
        buyButton_30.scaleX = 1;
        buyButton_30.scaleY = 1;
        page8.add(buyButton_30);

        // buyButton_38
        const buyButton_38 = new BuyButton(this, 307, 612, "furniturecatalog", "buy");
        buyButton_38.scaleX = 1.2;
        buyButton_38.scaleY = 1.2;
        page8.add(buyButton_38);

        // buyButton_37
        const buyButton_37 = new BuyButton(this, 828, 183, "furniturecatalog", "buy");
        buyButton_37.scaleX = 1.184090455445752;
        buyButton_37.scaleY = 1.177005435735627;
        page8.add(buyButton_37);

        // buyButton_36
        const buyButton_36 = new BuyButton(this, 836, 414, "furniturecatalog", "buy");
        buyButton_36.scaleX = 1.2;
        buyButton_36.scaleY = 1.2;
        page8.add(buyButton_36);

        // buyButton_39
        const buyButton_39 = new BuyButton(this, 1112, 388, "furniturecatalog", "buy");
        buyButton_39.scaleX = 1;
        buyButton_39.scaleY = 1;
        page8.add(buyButton_39);

        // secret_16
        const secret_16 = this.add.rectangle(443, 439, 58, 54);
        secret_16.alpha = 0.0005;
        secret_16.isFilled = true;
        page8.add(secret_16);

        // page7
        const page7 = this.add.container(0, 0);
        page7.visible = false;

        // p7
        const p7 = this.add.image(0, 0, "furniturecatalog", "page0007");
        p7.setOrigin(0, 0);
        page7.add(p7);

        // buyButton_29
        const buyButton_29 = new BuyButton(this, 543, 302, "furniturecatalog", "buy");
        buyButton_29.scaleX = 1;
        buyButton_29.scaleY = 1;
        page7.add(buyButton_29);

        // buyButton_31
        const buyButton_31 = new BuyButton(this, 290, 612, "furniturecatalog", "buy");
        buyButton_31.scaleX = 1.2;
        buyButton_31.scaleY = 1.2;
        page7.add(buyButton_31);

        // buyButton_32
        const buyButton_32 = new BuyButton(this, 1080, 188, "furniturecatalog", "buy");
        buyButton_32.scaleX = 1.184090455445752;
        buyButton_32.scaleY = 1.177005435735627;
        page7.add(buyButton_32);

        // buyButton_33
        const buyButton_33 = new BuyButton(this, 884, 409, "furniturecatalog", "buy");
        buyButton_33.scaleX = 1.2;
        buyButton_33.scaleY = 1.2;
        page7.add(buyButton_33);

        // buyButton_34
        const buyButton_34 = new BuyButton(this, 1082, 624, "furniturecatalog", "buy");
        buyButton_34.scaleX = 1.1756313934443043;
        buyButton_34.scaleY = 1.17779168871004;
        page7.add(buyButton_34);

        // secret_15
        const secret_15 = this.add.rectangle(358, 348, 55, 39);
        secret_15.alpha = 0.0005;
        secret_15.isFilled = true;
        page7.add(secret_15);

        // page6
        const page6 = this.add.container(0, 0);
        page6.visible = false;

        // p6
        const p6 = this.add.image(0, 0, "furniturecatalog", "page0006");
        p6.setOrigin(0, 0);
        page6.add(p6);

        // buyButton_23
        const buyButton_23 = new BuyButton(this, 561, 258, "furniturecatalog", "buy");
        buyButton_23.scaleX = 1;
        buyButton_23.scaleY = 1;
        page6.add(buyButton_23);

        // buyButton_25
        const buyButton_25 = new BuyButton(this, 277, 576, "furniturecatalog", "buy");
        buyButton_25.scaleX = 1.1842645147471431;
        buyButton_25.scaleY = 1.160409260984596;
        page6.add(buyButton_25);

        // buyButton_26
        const buyButton_26 = new BuyButton(this, 1073, 205, "furniturecatalog", "buy");
        buyButton_26.scaleX = 1;
        buyButton_26.scaleY = 1;
        page6.add(buyButton_26);

        // buyButton_27
        const buyButton_27 = new BuyButton(this, 1102, 686, "furniturecatalog", "buy");
        buyButton_27.scaleX = 1;
        buyButton_27.scaleY = 1;
        page6.add(buyButton_27);

        // buyButton_28
        const buyButton_28 = new BuyButton(this, 1117, 327, "furniturecatalog", "buy");
        buyButton_28.scaleX = 1;
        buyButton_28.scaleY = 1;
        page6.add(buyButton_28);

        // secret_12
        const secret_12 = this.add.rectangle(968, 126, 42, 46);
        secret_12.alpha = 0.0005;
        secret_12.isFilled = true;
        page6.add(secret_12);

        // secret_13
        const secret_13 = this.add.rectangle(622, 631, 27, 26);
        secret_13.alpha = 0.0005;
        secret_13.isFilled = true;
        page6.add(secret_13);

        // secret_14
        const secret_14 = this.add.rectangle(1035, 346, 59, 37);
        secret_14.alpha = 0.0005;
        secret_14.isFilled = true;
        page6.add(secret_14);

        // page5
        const page5 = this.add.container(0, 1);
        page5.visible = false;

        // p5
        const p5 = this.add.image(0, 0, "furniturecatalog", "page0005");
        p5.setOrigin(0, 0);
        page5.add(p5);

        // buyButton_15
        const buyButton_15 = new BuyButton(this, 499, 508, "furniturecatalog", "buy");
        buyButton_15.scaleX = 1.4504435415323282;
        buyButton_15.scaleY = 1.4489971202666925;
        page5.add(buyButton_15);

        // buyButton_18
        const buyButton_18 = new BuyButton(this, 621, 127, "furniturecatalog", "buy");
        buyButton_18.scaleX = 0.9;
        buyButton_18.scaleY = 1;
        page5.add(buyButton_18);

        // buyButton_19
        const buyButton_19 = new BuyButton(this, 1075, 242, "furniturecatalog", "buy");
        buyButton_19.scaleX = 1;
        buyButton_19.scaleY = 1;
        page5.add(buyButton_19);

        // buyButton_20
        const buyButton_20 = new BuyButton(this, 872, 571, "furniturecatalog", "buy");
        buyButton_20.scaleX = 1.0253532877051053;
        buyButton_20.scaleY = 1.0250579457683824;
        page5.add(buyButton_20);

        // secret_9
        const secret_9 = this.add.rectangle(386, 450, 54, 84);
        secret_9.alpha = 0.0005;
        secret_9.isFilled = true;
        page5.add(secret_9);

        // secret_10
        const secret_10 = this.add.rectangle(1127, 598, 65, 34);
        secret_10.alpha = 0.0005;
        secret_10.isFilled = true;
        page5.add(secret_10);

        // secret_11
        const secret_11 = this.add.rectangle(938, 151, 39, 43);
        secret_11.alpha = 0.0005;
        secret_11.isFilled = true;
        page5.add(secret_11);

        // page4
        const page4 = this.add.container(0, 0);
        page4.visible = false;

        // p4
        const p4 = this.add.image(-5, 3, "furniturecatalog", "page0004");
        p4.setOrigin(0, 0);
        page4.add(p4);

        // buyButton_10
        const buyButton_10 = new BuyButton(this, 561, 220, "furniturecatalog", "buy");
        buyButton_10.scaleX = 1;
        buyButton_10.scaleY = 1;
        page4.add(buyButton_10);

        // buyButton_11
        const buyButton_11 = new BuyButton(this, 550, 648, "furniturecatalog", "buy");
        buyButton_11.scaleX = 1;
        buyButton_11.scaleY = 1;
        page4.add(buyButton_11);

        // buyButton_12
        const buyButton_12 = new BuyButton(this, 350, 629, "furniturecatalog", "buy");
        buyButton_12.scaleX = 1;
        buyButton_12.scaleY = 1;
        page4.add(buyButton_12);

        // buyButton_13
        const buyButton_13 = new BuyButton(this, 843, 258, "furniturecatalog", "buy");
        buyButton_13.scaleX = 1;
        buyButton_13.scaleY = 1;
        page4.add(buyButton_13);

        // buyButton_14
        const buyButton_14 = new BuyButton(this, 1111, 244, "furniturecatalog", "buy");
        buyButton_14.scaleX = 1.1661594411504885;
        buyButton_14.scaleY = 1.1780505910221952;
        page4.add(buyButton_14);

        // secret_8
        const secret_8 = this.add.rectangle(1174, 393, 54, 84);
        secret_8.alpha = 0.0005;
        secret_8.isFilled = true;
        page4.add(secret_8);

        // secret_7
        const secret_7 = this.add.rectangle(314, 142, 78, 34);
        secret_7.alpha = 0.0005;
        secret_7.isFilled = true;
        page4.add(secret_7);

        // page3
        const page3 = this.add.container(0, 0);
        page3.visible = false;

        // p3
        const p3 = this.add.image(0, 0, "furniturecatalog", "page0003");
        p3.setOrigin(0, 0);
        page3.add(p3);

        // buyButton_5
        const buyButton_5 = new BuyButton(this, 557, 530, "furniturecatalog", "buy");
        buyButton_5.scaleX = 1;
        buyButton_5.scaleY = 1;
        page3.add(buyButton_5);

        // buyButton_6
        const buyButton_6 = new BuyButton(this, 291, 530, "furniturecatalog", "buy");
        buyButton_6.scaleX = 1;
        buyButton_6.scaleY = 1;
        page3.add(buyButton_6);

        // buyButton_7
        const buyButton_7 = new BuyButton(this, 852, 427, "furniturecatalog", "buy");
        buyButton_7.scaleX = 1.2;
        buyButton_7.scaleY = 1.2;
        page3.add(buyButton_7);

        // buyButton_9
        const buyButton_9 = new BuyButton(this, 1040, 640, "furniturecatalog", "buy");
        buyButton_9.scaleX = 1.2;
        buyButton_9.scaleY = 1.2;
        page3.add(buyButton_9);

        // buyButton_2
        const buyButton_2 = new BuyButton(this, 1128, 427, "furniturecatalog", "buy");
        buyButton_2.scaleX = 1.2;
        buyButton_2.scaleY = 1.2;
        page3.add(buyButton_2);

        // buyButton_8
        const buyButton_8 = new BuyButton(this, 594, 674, "furniturecatalog", "buy");
        buyButton_8.scaleX = 1;
        buyButton_8.scaleY = 1;
        page3.add(buyButton_8);

        // secret_4
        const secret_4 = this.add.rectangle(590, 196, 33, 43);
        secret_4.alpha = 0.0005;
        secret_4.isFilled = true;
        page3.add(secret_4);

        // secret_5
        const secret_5 = this.add.rectangle(684, 493, 48, 44);
        secret_5.alpha = 0.0005;
        secret_5.isFilled = true;
        page3.add(secret_5);

        // secret_6
        const secret_6 = this.add.rectangle(1191, 219, 97, 34);
        secret_6.alpha = 0.0005;
        secret_6.isFilled = true;
        page3.add(secret_6);

        // page2
        const page2 = this.add.container(0, 0);
        page2.visible = false;

        // p2
        const p2 = this.add.image(0, 0, "furniturecatalog", "page0002");
        p2.setOrigin(0, 0);
        page2.add(p2);

        // buyButton
        const buyButton = new BuyButton(this, 518, 232, "furniturecatalog", "buy");
        buyButton.scaleX = 1;
        buyButton.scaleY = 1;
        page2.add(buyButton);

        // buyButton_1
        const buyButton_1 = new BuyButton(this, 248, 463, "furniturecatalog", "buy");
        buyButton_1.scaleX = 1;
        buyButton_1.scaleY = 1;
        page2.add(buyButton_1);

        // buyButton_3
        const buyButton_3 = new BuyButton(this, 859, 432, "furniturecatalog", "buy");
        buyButton_3.scaleX = 1;
        buyButton_3.scaleY = 1;
        page2.add(buyButton_3);

        // buyButton_4
        const buyButton_4 = new BuyButton(this, 500, 676, "furniturecatalog", "buy");
        page2.add(buyButton_4);

        // buyButton_35
        const buyButton_35 = new BuyButton(this, 869, 675, "furniturecatalog", "buy");
        buyButton_35.scaleX = 1;
        buyButton_35.scaleY = 1;
        page2.add(buyButton_35);

        // secret_2
        const secret_2 = this.add.rectangle(1127, 477, 29, 48);
        secret_2.alpha = 0.0005;
        secret_2.isFilled = true;
        page2.add(secret_2);

        // secret_1
        const secret_1 = this.add.rectangle(425, 292, 22, 35);
        secret_1.alpha = 0.0005;
        secret_1.isFilled = true;
        page2.add(secret_1);

        // secret_3
        const secret_3 = this.add.rectangle(950, 252, 36, 34);
        secret_3.alpha = 0.0005;
        secret_3.isFilled = true;
        page2.add(secret_3);

        // page1
        const page1 = this.add.container(0, 0);
        page1.visible = false;

        // p1
        const p1 = this.add.image(0, 0, "furniturecatalog", "page0001");
        p1.setOrigin(0, 0);
        page1.add(p1);

        // pageRight_1
        const pageRight_1 = this.add.image(943, 588, "newspaper-btns", "nextpagebtn");
        pageRight_1.setOrigin(0, 0);
        page1.add(pageRight_1);

        // closeRight_1
        const closeRight_1 = this.add.image(942, 43, "newspaper-btns", "catclosebtn");
        closeRight_1.setOrigin(0, 0);
        page1.add(closeRight_1);

        // buttons
        const buttons = this.add.container(190, 42);
        buttons.visible = false;

        // closeRight
        const closeRight = this.add.image(1030, 2, "newspaper-btns", "catclosebtn");
        closeRight.setOrigin(0, 0);
        buttons.add(closeRight);

        // pageRight
        const pageRight = this.add.image(1033, 547, "newspaper-btns", "nextpagebtn");
        pageRight.setOrigin(0, 0);
        buttons.add(pageRight);

        // pageLeft
        const pageLeft = this.add.image(0, 549, "newspaper-btns", "prevpagebtn");
        pageLeft.setOrigin(0, 0);
        buttons.add(pageLeft);

        // coins
        const coins = this.add.text(1130, 790, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9];

        // block (components)
        new Interactive(block);

        // pageLeft_1 (components)
        const pageLeft_1Button = new Button(pageLeft_1);
        pageLeft_1Button.spriteName = "prevpagebtn";
        pageLeft_1Button.callback = () => this.prevPage();
        pageLeft_1Button.activeFrame = false;
        pageLeft_1Button.pixelPerfect = true;

        // closeLeft (components)
        const closeLeftButton = new Button(closeLeft);
        closeLeftButton.spriteName = "catclosebtn";
        closeLeftButton.callback = () => this.close();

        // buyButton_30 (prefab fields)
        buyButton_30.item = 560;

        // buyButton_38 (prefab fields)
        buyButton_38.item = 561;

        // buyButton_37 (prefab fields)
        buyButton_37.item = 75;

        // buyButton_36 (prefab fields)
        buyButton_36.item = 73;

        // buyButton_39 (prefab fields)
        buyButton_39.item = 74;

        // secret_16 (components)
        const secret_16SimpleButton = new SimpleButton(secret_16);
        secret_16SimpleButton.callback = () => this.buy(627);

        // buyButton_29 (prefab fields)
        buyButton_29.item = 441;

        // buyButton_31 (prefab fields)
        buyButton_31.item = 440;

        // buyButton_32 (prefab fields)
        buyButton_32.item = 443;

        // buyButton_33 (prefab fields)
        buyButton_33.item = 367;

        // buyButton_34 (prefab fields)
        buyButton_34.item = 366;

        // secret_15 (components)
        const secret_15SimpleButton = new SimpleButton(secret_15);
        secret_15SimpleButton.callback = () => this.buy(161);

        // buyButton_23 (prefab fields)
        buyButton_23.item = 570;

        // buyButton_25 (prefab fields)
        buyButton_25.item = 575;

        // buyButton_26 (prefab fields)
        buyButton_26.item = 572;

        // buyButton_27 (prefab fields)
        buyButton_27.item = 186;

        // buyButton_28 (prefab fields)
        buyButton_28.item = 571;

        // secret_12 (components)
        const secret_12SimpleButton = new SimpleButton(secret_12);
        secret_12SimpleButton.callback = () => this.buy(536);

        // secret_13 (components)
        const secret_13SimpleButton = new SimpleButton(secret_13);
        secret_13SimpleButton.callback = () => this.buy(600);

        // secret_14 (components)
        const secret_14SimpleButton = new SimpleButton(secret_14);
        secret_14SimpleButton.callback = () => this.buy(136);

        // buyButton_15 (prefab fields)
        buyButton_15.item = 155;

        // buyButton_18 (prefab fields)
        buyButton_18.item = 351;

        // buyButton_19 (prefab fields)
        buyButton_19.item = 281;

        // buyButton_20 (prefab fields)
        buyButton_20.item = 101;

        // secret_9 (components)
        const secret_9SimpleButton = new SimpleButton(secret_9);
        secret_9SimpleButton.callback = () => this.buy(635);

        // secret_10 (components)
        const secret_10SimpleButton = new SimpleButton(secret_10);
        secret_10SimpleButton.callback = () => this.buy(550);

        // secret_11 (components)
        const secret_11SimpleButton = new SimpleButton(secret_11);
        secret_11SimpleButton.callback = () => this.buy(103);

        // buyButton_10 (prefab fields)
        buyButton_10.item = 275;

        // buyButton_11 (prefab fields)
        buyButton_11.item = 273;

        // buyButton_12 (prefab fields)
        buyButton_12.item = 272;

        // buyButton_13 (prefab fields)
        buyButton_13.item = 154;

        // buyButton_14 (prefab fields)
        buyButton_14.item = 654;

        // secret_8 (components)
        const secret_8SimpleButton = new SimpleButton(secret_8);
        secret_8SimpleButton.callback = () => this.buy(485);

        // secret_7 (components)
        const secret_7SimpleButton = new SimpleButton(secret_7);
        secret_7SimpleButton.callback = () => this.buy(153);

        // buyButton_5 (prefab fields)
        buyButton_5.item = 481;

        // buyButton_6 (prefab fields)
        buyButton_6.item = 480;

        // buyButton_7 (prefab fields)
        buyButton_7.item = 483;

        // buyButton_9 (prefab fields)
        buyButton_9.item = 484;

        // buyButton_2 (prefab fields)
        buyButton_2.item = 482;

        // buyButton_8 (prefab fields)
        buyButton_8.item = 53;

        // secret_4 (components)
        const secret_4SimpleButton = new SimpleButton(secret_4);
        secret_4SimpleButton.callback = () => this.buy(52);

        // secret_5 (components)
        const secret_5SimpleButton = new SimpleButton(secret_5);
        secret_5SimpleButton.callback = () => this.buy(54);

        // secret_6 (components)
        const secret_6SimpleButton = new SimpleButton(secret_6);
        secret_6SimpleButton.callback = () => this.buy(59);

        // buyButton (prefab fields)
        buyButton.item = 581;

        // buyButton_1 (prefab fields)
        buyButton_1.item = 580;

        // buyButton_3 (prefab fields)
        buyButton_3.item = 583;

        // buyButton_4 (prefab fields)
        buyButton_4.item = 582;

        // buyButton_35 (prefab fields)
        buyButton_35.item = 584;

        // secret_2 (components)
        const secret_2SimpleButton = new SimpleButton(secret_2);
        secret_2SimpleButton.callback = () => this.buy(346);

        // secret_1 (components)
        const secret_1SimpleButton = new SimpleButton(secret_1);
        secret_1SimpleButton.callback = () => this.buy(317);

        // secret_3 (components)
        const secret_3SimpleButton = new SimpleButton(secret_3);
        secret_3SimpleButton.callback = () => this.buy(51);

        // pageRight_1 (components)
        const pageRight_1Button = new Button(pageRight_1);
        pageRight_1Button.spriteName = "nextpagebtn";
        pageRight_1Button.callback = () => this.nextPage();
        pageRight_1Button.activeFrame = false;
        pageRight_1Button.pixelPerfect = true;

        // closeRight_1 (components)
        const closeRight_1Button = new Button(closeRight_1);
        closeRight_1Button.spriteName = "catclosebtn";
        closeRight_1Button.callback = () => this.close();
        closeRight_1Button.pixelPerfect = true;

        // closeRight (components)
        const closeRightButton = new Button(closeRight);
        closeRightButton.spriteName = "catclosebtn";
        closeRightButton.callback = () => this.close();
        closeRightButton.pixelPerfect = true;

        // pageRight (components)
        const pageRightButton = new Button(pageRight);
        pageRightButton.spriteName = "nextpagebtn";
        pageRightButton.callback = () => this.nextPage();
        pageRightButton.activeFrame = false;
        pageRightButton.pixelPerfect = true;

        // pageLeft (components)
        const pageLeftButton = new Button(pageLeft);
        pageLeftButton.spriteName = "prevpagebtn";
        pageLeftButton.callback = () => this.prevPage();
        pageLeftButton.activeFrame = false;
        pageLeftButton.pixelPerfect = true;

        this.buttons = buttons;
        this.coins = coins;
        this.pages = pages;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.setCoins(this.world.client.coins)
    }

    setCoins(coins) {
        this.coins.text = `YOUR COINS: ${coins}`
    }

    buy(item) {
        this.interface.prompt.showFurniture(item)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
