import { Button, Interactive } from '@components/components'

import Book from '@scenes/interface/books/Book'
import BuyButton from './buttons/BuyButton'


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

        // page8
        const page8 = this.add.container(0, 0);
        page8.visible = false;

        // p8
        const p8 = this.add.image(0, 0, "furniturecatalog", "page/page0008");
        p8.setOrigin(0, 0);
        page8.add(p8);

        // pageLeft_1
        const pageLeft_1 = this.add.image(492, 590, "furniturecatalog", "page_left");
        pageLeft_1.setOrigin(0, 0);
        page8.add(pageLeft_1);

        // closeLeft
        const closeLeft = this.add.image(491, 39, "furniturecatalog", "close_left");
        closeLeft.setOrigin(0, 0);
        page8.add(closeLeft);

        // page7
        const page7 = this.add.container(0, 1);
        page7.visible = false;

        // p7
        const p7 = this.add.image(0, 0, "furniturecatalog", "page/page0007");
        p7.setOrigin(0, 0);
        page7.add(p7);

        // buyButton_29
        const buyButton_29 = new BuyButton(this, 528, 411);
        buyButton_29.scaleX = 1.4758750120315571;
        buyButton_29.scaleY = 1.4713553959658106;
        page7.add(buyButton_29);

        // buyButton_30
        const buyButton_30 = new BuyButton(this, 263, 411);
        buyButton_30.scaleX = 1.4697552634654198;
        buyButton_30.scaleY = 1.4586136167412473;
        page7.add(buyButton_30);

        // buyButton_31
        const buyButton_31 = new BuyButton(this, 307, 669);
        buyButton_31.scaleX = 1.188674421005237;
        buyButton_31.scaleY = 1.2143845893751684;
        page7.add(buyButton_31);

        // buyButton_32
        const buyButton_32 = new BuyButton(this, 890, 194);
        buyButton_32.scaleX = 1.184090455445752;
        buyButton_32.scaleY = 1.177005435735627;
        page7.add(buyButton_32);

        // buyButton_33
        const buyButton_33 = new BuyButton(this, 1103, 391);
        buyButton_33.scaleX = 1.4662840429943502;
        buyButton_33.scaleY = 1.4712328382340465;
        page7.add(buyButton_33);

        // buyButton_34
        const buyButton_34 = new BuyButton(this, 855, 667);
        buyButton_34.scaleX = 1.1756313934443043;
        buyButton_34.scaleY = 1.17779168871004;
        page7.add(buyButton_34);

        // page6
        const page6 = this.add.container(0, 0);
        page6.visible = false;

        // p6
        const p6 = this.add.image(0, 0, "furniturecatalog", "page/page0006");
        p6.setOrigin(0, 0);
        page6.add(p6);

        // buyButton_23
        const buyButton_23 = new BuyButton(this, 542, 208);
        buyButton_23.scaleX = 1.4723480363459016;
        buyButton_23.scaleY = 1.4821078031948471;
        page6.add(buyButton_23);

        // buyButton_24
        const buyButton_24 = new BuyButton(this, 272, 459);
        buyButton_24.scaleX = 1.4658401958601655;
        buyButton_24.scaleY = 1.4640062429710938;
        page6.add(buyButton_24);

        // buyButton_25
        const buyButton_25 = new BuyButton(this, 326, 679);
        buyButton_25.scaleX = 1.1842645147471431;
        buyButton_25.scaleY = 1.160409260984596;
        page6.add(buyButton_25);

        // buyButton_26
        const buyButton_26 = new BuyButton(this, 817, 125);
        buyButton_26.scaleX = 1.4635822437908317;
        buyButton_26.scaleY = 1.4679985230401047;
        page6.add(buyButton_26);

        // buyButton_27
        const buyButton_27 = new BuyButton(this, 1098, 655);
        buyButton_27.scaleX = 1.4646019778638095;
        buyButton_27.scaleY = 1.4566586657869471;
        page6.add(buyButton_27);

        // buyButton_28
        const buyButton_28 = new BuyButton(this, 845, 565);
        buyButton_28.scaleX = 1.1782286731969396;
        buyButton_28.scaleY = 1.1743725225083523;
        page6.add(buyButton_28);

        // page5
        const page5 = this.add.container(0, 0);
        page5.visible = false;

        // p5
        const p5 = this.add.image(0, 0, "furniturecatalog", "page/page0005");
        p5.setOrigin(0, 0);
        page5.add(p5);

        // buyButton_15
        const buyButton_15 = new BuyButton(this, 277, 457);
        buyButton_15.scaleX = 1.4504435415323282;
        buyButton_15.scaleY = 1.4489971202666925;
        page5.add(buyButton_15);

        // buyButton_18
        const buyButton_18 = new BuyButton(this, 554, 674);
        buyButton_18.scaleX = 1.310296914188783;
        buyButton_18.scaleY = 1.3198314285556174;
        page5.add(buyButton_18);

        // buyButton_19
        const buyButton_19 = new BuyButton(this, 859, 195);
        buyButton_19.scaleX = 1.4666610122689503;
        buyButton_19.scaleY = 1.4743494322996809;
        page5.add(buyButton_19);

        // buyButton_20
        const buyButton_20 = new BuyButton(this, 1120, 441);
        buyButton_20.scaleX = 1.0253532877051053;
        buyButton_20.scaleY = 1.0250579457683824;
        page5.add(buyButton_20);

        // buyButton_21
        const buyButton_21 = new BuyButton(this, 868, 671);
        buyButton_21.scaleX = 1.3042755140334588;
        buyButton_21.scaleY = 1.2884652534300265;
        page5.add(buyButton_21);

        // page4
        const page4 = this.add.container(0, 0);
        page4.visible = false;

        // p4
        const p4 = this.add.image(0, 0, "furniturecatalog", "page/page0004");
        p4.setOrigin(0, 0);
        page4.add(p4);

        // buyButton_10
        const buyButton_10 = new BuyButton(this, 540, 209);
        buyButton_10.scaleX = 1.1617643098778987;
        buyButton_10.scaleY = 1.1758496898313668;
        page4.add(buyButton_10);

        // buyButton_11
        const buyButton_11 = new BuyButton(this, 502, 663);
        buyButton_11.scaleX = 1.3100572566734396;
        buyButton_11.scaleY = 1.2958988196325907;
        page4.add(buyButton_11);

        // buyButton_12
        const buyButton_12 = new BuyButton(this, 294, 404);
        buyButton_12.scaleX = 1.4605153096768455;
        buyButton_12.scaleY = 1.4593950760775742;
        page4.add(buyButton_12);

        // buyButton_13
        const buyButton_13 = new BuyButton(this, 836, 389);
        buyButton_13.scaleX = 1.461123485948703;
        buyButton_13.scaleY = 1.4650894361883497;
        page4.add(buyButton_13);

        // buyButton_14
        const buyButton_14 = new BuyButton(this, 1118, 406);
        buyButton_14.scaleX = 1.1661594411504885;
        buyButton_14.scaleY = 1.1780505910221952;
        page4.add(buyButton_14);

        // buyButton_37
        const buyButton_37 = new BuyButton(this, 1109, 634);
        buyButton_37.scaleX = 1.461097518916191;
        buyButton_37.scaleY = 1.4476632203835844;
        page4.add(buyButton_37);

        // page3
        const page3 = this.add.container(0, 0);
        page3.visible = false;

        // p3
        const p3 = this.add.image(0, 0, "furniturecatalog", "page/page0003");
        p3.setOrigin(0, 0);
        page3.add(p3);

        // buyButton_5
        const buyButton_5 = new BuyButton(this, 540, 209);
        buyButton_5.scaleX = 1.3357104678902239;
        buyButton_5.scaleY = 1.2925801129612315;
        page3.add(buyButton_5);

        // buyButton_6
        const buyButton_6 = new BuyButton(this, 292, 423);
        buyButton_6.scaleX = 1.3294739784517127;
        buyButton_6.scaleY = 1.295642747878667;
        page3.add(buyButton_6);

        // buyButton_7
        const buyButton_7 = new BuyButton(this, 862, 204);
        buyButton_7.scaleX = 1.3407087229726566;
        buyButton_7.scaleY = 1.3329132184672645;
        page3.add(buyButton_7);

        // buyButton_8
        const buyButton_8 = new BuyButton(this, 836, 633);
        buyButton_8.scaleX = 1.466720390612794;
        buyButton_8.scaleY = 1.4413822670109087;
        page3.add(buyButton_8);

        // buyButton_9
        const buyButton_9 = new BuyButton(this, 1111, 665);
        buyButton_9.scaleX = 1.3480801721589573;
        buyButton_9.scaleY = 1.3720454313415087;
        page3.add(buyButton_9);

        // page2
        const page2 = this.add.container(0, 0);
        page2.visible = false;

        // p2
        const p2 = this.add.image(0, 0, "furniturecatalog", "page/page0002");
        p2.setOrigin(0, 0);
        page2.add(p2);

        // buyButton
        const buyButton = new BuyButton(this, 330, 283);
        buyButton.scaleX = 1.4471215768217007;
        buyButton.scaleY = 1.4609740902299082;
        page2.add(buyButton);

        // buyButton_1
        const buyButton_1 = new BuyButton(this, 472, 498);
        buyButton_1.scaleX = 1.4659463765135643;
        buyButton_1.scaleY = 1.427630454641604;
        page2.add(buyButton_1);

        // buyButton_2
        const buyButton_2 = new BuyButton(this, 1100, 356);
        buyButton_2.scaleX = 1.3145453701301368;
        buyButton_2.scaleY = 1.3128423104881217;
        page2.add(buyButton_2);

        // buyButton_3
        const buyButton_3 = new BuyButton(this, 858, 356);
        buyButton_3.scaleX = 1.3175881196098422;
        buyButton_3.scaleY = 1.3194131343539202;
        page2.add(buyButton_3);

        // buyButton_4
        const buyButton_4 = new BuyButton(this, 557, 694);
        page2.add(buyButton_4);

        // buyButton_35
        const buyButton_35 = new BuyButton(this, 858, 638);
        buyButton_35.scaleX = 1.309334496810952;
        buyButton_35.scaleY = 1.309023677613799;
        page2.add(buyButton_35);

        // buyButton_36
        const buyButton_36 = new BuyButton(this, 1100, 638);
        buyButton_36.scaleX = 1.3127828744093826;
        buyButton_36.scaleY = 1.3130746105734579;
        page2.add(buyButton_36);

        // page1
        const page1 = this.add.container(0, 0);

        // p1
        const p1 = this.add.image(0, 0, "furniturecatalog", "page/page0001");
        p1.setOrigin(0, 0);
        page1.add(p1);

        // pageFront
        const pageFront = this.add.image(468, 44, "furniturecatalog", "page_front");
        pageFront.setOrigin(0, 0);
        page1.add(pageFront);

        // closeRight_1
        const closeRight_1 = this.add.image(924, 39, "furniturecatalog", "close_right");
        closeRight_1.setOrigin(0, 0);
        page1.add(closeRight_1);

        // buttons
        const buttons = this.add.container(190, 41);
        buttons.visible = false;

        // closeRight
        const closeRight = this.add.image(1012, 0, "furniturecatalog", "close_right");
        closeRight.setOrigin(0, 0);
        buttons.add(closeRight);

        // pageRight
        const pageRight = this.add.image(1012, 549, "furniturecatalog", "page_right");
        pageRight.setOrigin(0, 0);
        buttons.add(pageRight);

        // pageLeft
        const pageLeft = this.add.image(0, 549, "furniturecatalog", "page_left");
        pageLeft.setOrigin(0, 0);
        buttons.add(pageLeft);

        // coins
        const coins = this.add.text(1130, 790, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8];

        // block (components)
        new Interactive(block);

        // pageLeft_1 (components)
        const pageLeft_1Button = new Button(pageLeft_1);
        pageLeft_1Button.spriteName = "page_left";
        pageLeft_1Button.callback = () => this.prevPage();
        pageLeft_1Button.activeFrame = false;
        pageLeft_1Button.pixelPerfect = true;

        // closeLeft (components)
        const closeLeftButton = new Button(closeLeft);
        closeLeftButton.spriteName = "close_left";
        closeLeftButton.callback = () => this.close();
        closeLeftButton.pixelPerfect = true;

        // buyButton_29 (prefab fields)
        buyButton_29.item = 411;

        // buyButton_30 (prefab fields)
        buyButton_30.item = 418;

        // buyButton_31 (prefab fields)
        buyButton_31.item = 164;

        // buyButton_32 (prefab fields)
        buyButton_32.item = 364;

        // buyButton_33 (prefab fields)
        buyButton_33.item = 159;

        // buyButton_34 (prefab fields)
        buyButton_34.item = 146;

        // buyButton_23 (prefab fields)
        buyButton_23.item = 430;

        // buyButton_24 (prefab fields)
        buyButton_24.item = 435;

        // buyButton_25 (prefab fields)
        buyButton_25.item = 72;

        // buyButton_26 (prefab fields)
        buyButton_26.item = 432;

        // buyButton_27 (prefab fields)
        buyButton_27.item = 32;

        // buyButton_28 (prefab fields)
        buyButton_28.item = 433;

        // buyButton_15 (prefab fields)
        buyButton_15.item = 441;

        // buyButton_18 (prefab fields)
        buyButton_18.item = 442;

        // buyButton_19 (prefab fields)
        buyButton_19.item = 440;

        // buyButton_20 (prefab fields)
        buyButton_20.item = 443;

        // buyButton_21 (prefab fields)
        buyButton_21.item = 444;

        // buyButton_10 (prefab fields)
        buyButton_10.item = 117;

        // buyButton_11 (prefab fields)
        buyButton_11.item = 455;

        // buyButton_12 (prefab fields)
        buyButton_12.item = 114;

        // buyButton_13 (prefab fields)
        buyButton_13.item = 107;

        // buyButton_14 (prefab fields)
        buyButton_14.item = 181;

        // buyButton_37 (prefab fields)
        buyButton_37.item = 184;

        // buyButton_5 (prefab fields)
        buyButton_5.item = 450;

        // buyButton_6 (prefab fields)
        buyButton_6.item = 454;

        // buyButton_7 (prefab fields)
        buyButton_7.item = 453;

        // buyButton_8 (prefab fields)
        buyButton_8.item = 451;

        // buyButton_9 (prefab fields)
        buyButton_9.item = 452;

        // buyButton (prefab fields)
        buyButton.item = 119;

        // buyButton_1 (prefab fields)
        buyButton_1.item = 118;

        // buyButton_2 (prefab fields)
        buyButton_2.item = 112;

        // buyButton_3 (prefab fields)
        buyButton_3.item = 111;

        // buyButton_4 (prefab fields)
        buyButton_4.item = 120;

        // buyButton_35 (prefab fields)
        buyButton_35.item = 115;

        // buyButton_36 (prefab fields)
        buyButton_36.item = 116;

        // pageFront (components)
        const pageFrontButton = new Button(pageFront);
        pageFrontButton.spriteName = "page_front";
        pageFrontButton.callback = () => this.nextPage();
        pageFrontButton.activeFrame = false;

        // closeRight_1 (components)
        const closeRight_1Button = new Button(closeRight_1);
        closeRight_1Button.spriteName = "close_right";
        closeRight_1Button.callback = () => this.close();
        closeRight_1Button.pixelPerfect = true;

        // closeRight (components)
        const closeRightButton = new Button(closeRight);
        closeRightButton.spriteName = "close_right";
        closeRightButton.callback = () => this.close();
        closeRightButton.pixelPerfect = true;

        // pageRight (components)
        const pageRightButton = new Button(pageRight);
        pageRightButton.spriteName = "page_right";
        pageRightButton.callback = () => this.nextPage();
        pageRightButton.activeFrame = false;
        pageRightButton.pixelPerfect = true;

        // pageLeft (components)
        const pageLeftButton = new Button(pageLeft);
        pageLeftButton.spriteName = "page_left";
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
