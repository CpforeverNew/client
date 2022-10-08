import { Button, Interactive, SimpleButton } from '@components/components'

import Book from '@scenes/interface/books/Book'
import ColorButton from './buttons/ColorButton'
import FlagButton from './buttons/FlagButton'
import PhotoButton from './buttons/PhotoButton'
import Tag1 from './buttons/Tag1'
import Tag2 from './buttons/Tag2'
import BuyButton from './buttons/BuyButton'


/* START OF COMPILED CODE */

export default class ClothingCatalog extends Book {

    constructor() {
        super("ClothingCatalog");

        /** @type {Phaser.GameObjects.Image} */
        this.photo12;
        /** @type {Phaser.GameObjects.Image} */
        this.photo11;
        /** @type {Phaser.GameObjects.Image} */
        this.photo10;
        /** @type {Phaser.GameObjects.Image} */
        this.photo9;
        /** @type {Phaser.GameObjects.Image} */
        this.photo8;
        /** @type {Phaser.GameObjects.Image} */
        this.photo7;
        /** @type {Phaser.GameObjects.Image} */
        this.photo6;
        /** @type {Phaser.GameObjects.Image} */
        this.photo5;
        /** @type {Phaser.GameObjects.Image} */
        this.photo4;
        /** @type {Phaser.GameObjects.Image} */
        this.photo3;
        /** @type {Phaser.GameObjects.Image} */
        this.photo2;
        /** @type {Phaser.GameObjects.Image} */
        this.photo1;
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

        this.load.pack("clothingcatalog-pack", "assets/media/interface/catalogs/clothing/clothingcatalog-pack.json");
    }

    /** @returns {void} */
    _create() {

        // block
        const block = this.add.rectangle(765, 491, 1520, 960);
        block.scaleX = 1.0700168287761083;
        block.scaleY = 1.0740121272885363;
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;

        // page16
        const page16 = this.add.container(0, 0);
        page16.visible = false;

        // p16
        const p16 = this.add.image(0, 0, "clothingcatalog", "page/page0016");
        p16.setOrigin(0, 0);
        page16.add(p16);

        // pageLeft_1
        const pageLeft_1 = this.add.image(492, 590, "clothingcatalog", "page_left");
        pageLeft_1.setOrigin(0, 0);
        page16.add(pageLeft_1);

        // closeLeft
        const closeLeft = this.add.image(491, 39, "clothingcatalog", "close_left");
        closeLeft.setOrigin(0, 0);
        page16.add(closeLeft);

        // page15
        const page15 = this.add.container(0, 0);
        page15.visible = false;

        // p15
        const p15 = this.add.image(0, 0, "clothingcatalog", "page/page0015");
        p15.setOrigin(0, 0);
        page15.add(p15);

        // us
        const us = new FlagButton(this, 1231, 685);
        page15.add(us);

        // turkey
        const turkey = new FlagButton(this, 1112, 685);
        page15.add(turkey);

        // switzerland
        const switzerland = new FlagButton(this, 987, 685);
        page15.add(switzerland);

        // sweden
        const sweden = new FlagButton(this, 872, 685);
        page15.add(sweden);

        // spain
        const spain = new FlagButton(this, 1231, 547);
        page15.add(spain);

        // sa
        const sa = new FlagButton(this, 1112, 547);
        page15.add(sa);

        // russia
        const russia = new FlagButton(this, 987, 547);
        page15.add(russia);

        // portugal
        const portugal = new FlagButton(this, 872, 547);
        page15.add(portugal);

        // poland
        const poland = new FlagButton(this, 1231, 408);
        page15.add(poland);

        // norway
        const norway = new FlagButton(this, 1112, 408);
        page15.add(norway);

        // nz
        const nz = new FlagButton(this, 991, 408);
        page15.add(nz);

        // netherlands
        const netherlands = new FlagButton(this, 872, 408);
        page15.add(netherlands);

        // mexico
        const mexico = new FlagButton(this, 1230, 270);
        page15.add(mexico);

        // korea
        const korea = new FlagButton(this, 1113, 271);
        page15.add(korea);

        // japan
        const japan = new FlagButton(this, 988, 271);
        page15.add(japan);

        // jamaica
        const jamaica = new FlagButton(this, 871, 270);
        page15.add(jamaica);

        // italy
        const italy = new FlagButton(this, 1230, 129);
        page15.add(italy);

        // israel
        const israel = new FlagButton(this, 1113, 129);
        page15.add(israel);

        // ireland
        const ireland = new FlagButton(this, 986, 129);
        page15.add(ireland);

        // india
        const india = new FlagButton(this, 871, 129);
        page15.add(india);

        // hungary
        const hungary = new FlagButton(this, 657, 676);
        page15.add(hungary);

        // uk
        const uk = new FlagButton(this, 536, 677);
        page15.add(uk);

        // germany
        const germany = new FlagButton(this, 417, 677);
        page15.add(germany);

        // france
        const france = new FlagButton(this, 295, 676);
        page15.add(france);

        // finland
        const finland = new FlagButton(this, 652, 517);
        page15.add(finland);

        // egypt
        const egypt = new FlagButton(this, 532, 517);
        page15.add(egypt);

        // denmark
        const denmark = new FlagButton(this, 413, 517);
        page15.add(denmark);

        // colombia
        const colombia = new FlagButton(this, 294, 518);
        page15.add(colombia);

        // china
        const china = new FlagButton(this, 656, 366);
        page15.add(china);

        // chile
        const chile = new FlagButton(this, 537, 364);
        page15.add(chile);

        // canada
        const canada = new FlagButton(this, 416, 364);
        page15.add(canada);

        // brazil
        const brazil = new FlagButton(this, 295, 365);
        page15.add(brazil);

        // belize
        const belize = new FlagButton(this, 656, 210);
        page15.add(belize);

        // belgium
        const belgium = new FlagButton(this, 535, 210);
        page15.add(belgium);

        // australia
        const australia = new FlagButton(this, 418, 211);
        page15.add(australia);

        // argentina
        const argentina = new FlagButton(this, 295, 210);
        page15.add(argentina);

        // page14
        const page14 = this.add.container(0, 0);
        page14.visible = false;

        // p14
        const p14 = this.add.image(0, 0, "clothingcatalog", "page/page0014");
        p14.setOrigin(0, 0);
        page14.add(p14);

        // photoButton12
        const photoButton12 = new PhotoButton(this, 1180, 620);
        page14.add(photoButton12);

        // photoButton11
        const photoButton11 = new PhotoButton(this, 914, 620);
        page14.add(photoButton11);

        // photoButton10
        const photoButton10 = new PhotoButton(this, 1178, 377);
        page14.add(photoButton10);

        // photoButton9
        const photoButton9 = new PhotoButton(this, 916, 373);
        page14.add(photoButton9);

        // photo12
        const photo12 = this.add.image(1180, 621, "clothingcatalog", "photo/12");
        page14.add(photo12);

        // photo11
        const photo11 = this.add.image(915, 620, "clothingcatalog", "photo/11");
        page14.add(photo11);

        // photo10
        const photo10 = this.add.image(1177, 376, "clothingcatalog", "photo/10");
        page14.add(photo10);

        // photo9
        const photo9 = this.add.image(914, 372, "clothingcatalog", "photo/9");
        page14.add(photo9);

        // penguin12
        const penguin12 = this.add.image(1180, 630, "clothingcatalog", "photo/penguin");
        page14.add(penguin12);

        // penguin11
        const penguin11 = this.add.image(911, 629, "clothingcatalog", "photo/penguin");
        page14.add(penguin11);

        // penguin10
        const penguin10 = this.add.image(1180, 370, "clothingcatalog", "photo/penguin");
        page14.add(penguin10);

        // penguin9
        const penguin9 = this.add.image(914, 378, "clothingcatalog", "photo/penguin");
        page14.add(penguin9);

        // photoButton8
        const photoButton8 = new PhotoButton(this, 594, 620);
        page14.add(photoButton8);

        // photoButton7
        const photoButton7 = new PhotoButton(this, 346, 620);
        page14.add(photoButton7);

        // photoButton6
        const photoButton6 = new PhotoButton(this, 594, 369);
        page14.add(photoButton6);

        // photoButton5
        const photoButton5 = new PhotoButton(this, 348, 376);
        page14.add(photoButton5);

        // photo8
        const photo8 = this.add.image(595, 620, "clothingcatalog", "photo/8");
        page14.add(photo8);

        // photo7
        const photo7 = this.add.image(348, 620, "clothingcatalog", "photo/7");
        page14.add(photo7);

        // photo6
        const photo6 = this.add.image(594, 369, "clothingcatalog", "photo/6");
        page14.add(photo6);

        // photo5
        const photo5 = this.add.image(349, 375, "clothingcatalog", "photo/5");
        page14.add(photo5);

        // penguin8
        const penguin8 = this.add.image(595, 624, "clothingcatalog", "photo/penguin");
        page14.add(penguin8);

        // penguin7
        const penguin7 = this.add.image(345, 638, "clothingcatalog", "photo/penguin");
        page14.add(penguin7);

        // penguin6
        const penguin6 = this.add.image(596, 374, "clothingcatalog", "photo/penguin");
        page14.add(penguin6);

        // penguin5
        const penguin5 = this.add.image(351, 389, "clothingcatalog", "photo/penguin");
        page14.add(penguin5);

        // page13
        const page13 = this.add.container(0, 0);
        page13.visible = false;

        // p13
        const p13 = this.add.image(0, 0, "clothingcatalog", "page/page0013");
        p13.setOrigin(0, 0);
        page13.add(p13);

        // tag1_44
        const tag1_44 = new Tag1(this, 204, 233);
        tag1_44.scaleX = 0.6601474058443426;
        tag1_44.scaleY = 0.6980096096010822;
        tag1_44.angle = 12;
        page13.add(tag1_44);

        // tag1_45
        const tag1_45 = new Tag1(this, 237, 122);
        tag1_45.scaleX = 0.7510952840820833;
        tag1_45.scaleY = 0.7403462079169577;
        tag1_45.angle = -21;
        page13.add(tag1_45);

        // tag2_36
        const tag2_36 = new Tag2(this, 640, 389);
        tag2_36.scaleX = 0.6853771544150022;
        tag2_36.scaleY = 0.7293201662638567;
        tag2_36.angle = -30;
        page13.add(tag2_36);

        // tag2_37
        const tag2_37 = new Tag2(this, 650, 696);
        tag2_37.scaleX = 0.6920382358115363;
        tag2_37.scaleY = 0.6923093271951064;
        tag2_37.angle = 0;
        page13.add(tag2_37);

        // photoButton4
        const photoButton4 = new PhotoButton(this, 1162, 620);
        page13.add(photoButton4);

        // photoButton3
        const photoButton3 = new PhotoButton(this, 924, 620);
        page13.add(photoButton3);

        // photoButton2
        const photoButton2 = new PhotoButton(this, 1164, 377);
        page13.add(photoButton2);

        // photoButton1
        const photoButton1 = new PhotoButton(this, 925, 376);
        page13.add(photoButton1);

        // photo4
        const photo4 = this.add.image(1162, 621, "clothingcatalog", "photo/4");
        page13.add(photo4);

        // photo3
        const photo3 = this.add.image(922, 620, "clothingcatalog", "photo/3");
        page13.add(photo3);

        // photo2
        const photo2 = this.add.image(1164, 373, "clothingcatalog", "photo/2");
        page13.add(photo2);

        // photo1
        const photo1 = this.add.image(924, 374, "clothingcatalog", "photo/1");
        page13.add(photo1);

        // penguin4
        const penguin4 = this.add.image(1161, 630, "clothingcatalog", "photo/penguin");
        page13.add(penguin4);

        // penguin3
        const penguin3 = this.add.image(927, 630, "clothingcatalog", "photo/penguin");
        page13.add(penguin3);

        // penguin2
        const penguin2 = this.add.image(1168, 370, "clothingcatalog", "photo/penguin");
        page13.add(penguin2);

        // penguin1
        const penguin1 = this.add.image(927, 382, "clothingcatalog", "photo/penguin");
        penguin1.scaleX = 1.4072155133154731;
        penguin1.scaleY = 0.8207581293249325;
        page13.add(penguin1);

        // tag_16
        const tag_16 = new Tag2(this, 509, 192);
        tag_16.scaleX = 0.7043112786254754;
        tag_16.scaleY = 0.7522840397888276;
        tag_16.angle = 46;
        page13.add(tag_16);

        // tag_17
        const tag_17 = new Tag1(this, 475, 315);
        tag_17.scaleX = 0.6605756295229872;
        tag_17.scaleY = 0.7126849099318844;
        tag_17.angle = 35;
        page13.add(tag_17);

        // tag_18
        const tag_18 = new Tag1(this, 430, 701);
        tag_18.scaleX = 0.7062370221590177;
        tag_18.scaleY = 0.6784632596514637;
        tag_18.angle = -45.00000000000006;
        page13.add(tag_18);

        // secret_22
        const secret_22 = this.add.rectangle(418, 271, 128, 128);
        secret_22.scaleX = 1.4514809655146519;
        secret_22.scaleY = 0.1783340871981226;
        secret_22.angle = -39;
        secret_22.alpha = 0.00005;
        secret_22.isFilled = true;
        page13.add(secret_22);

        // secret_23
        const secret_23 = this.add.rectangle(716, 500, 128, 128);
        secret_23.scaleX = 0.32190815970575243;
        secret_23.scaleY = 0.2167982922929365;
        secret_23.alpha = 0.00005;
        secret_23.isFilled = true;
        page13.add(secret_23);

        // secret_24
        const secret_24 = this.add.rectangle(1184, 193, 128, 128);
        secret_24.scaleX = 0.18506458601749806;
        secret_24.scaleY = 0.28231908681141676;
        secret_24.alpha = 0.00005;
        secret_24.isFilled = true;
        page13.add(secret_24);

        // page12
        const page12 = this.add.container(0, 0);
        page12.visible = false;

        // p12
        const p12 = this.add.image(0, 0, "clothingcatalog", "page/page0012");
        p12.setOrigin(0, 0);
        page12.add(p12);

        // tag1_40
        const tag1_40 = new Tag1(this, 264, 599);
        tag1_40.scaleX = 1.4689701786824192;
        tag1_40.scaleY = 1.4123789245562746;
        tag1_40.angle = -29;
        page12.add(tag1_40);

        // tag2_33
        const tag2_33 = new Tag2(this, 556, 246);
        tag2_33.scaleX = 1.415704936767648;
        tag2_33.scaleY = 1.3613960850864215;
        tag2_33.angle = -33;
        page12.add(tag2_33);

        // buyButton
        const buyButton = new BuyButton(this, 1129, 286, "clothingcatalog", "buy3");
        buyButton.scaleX = 1.6884034192509627;
        buyButton.scaleY = 1.6519235174124192;
        page12.add(buyButton);

        // secret_20
        const secret_20 = this.add.rectangle(260, 515, 128, 128);
        secret_20.scaleX = 0.6336291329296352;
        secret_20.scaleY = 0.6461058130436642;
        secret_20.alpha = 0.00005;
        secret_20.isFilled = true;
        page12.add(secret_20);

        // secret_21
        const secret_21 = this.add.rectangle(982, 545, 128, 128);
        secret_21.scaleX = 0.5626627487132254;
        secret_21.scaleY = 0.4685545821088743;
        secret_21.alpha = 0.00005;
        secret_21.isFilled = true;
        page12.add(secret_21);

        // page11
        const page11 = this.add.container(0, 0);
        page11.visible = false;

        // p11
        const p11 = this.add.image(0, 0, "clothingcatalog", "page/page0011");
        p11.setOrigin(0, 0);
        page11.add(p11);

        // buyButton_1
        const buyButton_1 = new BuyButton(this, 578, 120, "clothingcatalog", "buy3");
        buyButton_1.scaleX = 1.4602614741882523;
        buyButton_1.scaleY = 1.4732251157587515;
        page11.add(buyButton_1);

        // buyButton_2
        const buyButton_2 = new BuyButton(this, 851, 173, "clothingcatalog", "buy3");
        buyButton_2.scaleX = 1.198222671454465;
        buyButton_2.scaleY = 1.1520868363618852;
        page11.add(buyButton_2);

        // buyButton_3
        const buyButton_3 = new BuyButton(this, 1183, 216, "clothingcatalog", "buy3");
        buyButton_3.scaleX = 1.198222671454465;
        buyButton_3.scaleY = 1.1520868363618852;
        page11.add(buyButton_3);

        // buyButton_4
        const buyButton_4 = new BuyButton(this, 1115, 704, "clothingcatalog", "buy3");
        buyButton_4.scaleX = 1.2900832969632319;
        buyButton_4.scaleY = 1.3171585120268288;
        page11.add(buyButton_4);

        // buyButton_9
        const buyButton_9 = new BuyButton(this, 590, 651, "clothingcatalog", "buy3");
        buyButton_9.scaleX = 1.4602614741882523;
        buyButton_9.scaleY = 1.4732251157587515;
        page11.add(buyButton_9);

        // secret_18
        const secret_18 = this.add.rectangle(361, 684, 128, 128);
        secret_18.scaleX = 1.4193432933178844;
        secret_18.scaleY = 0.46895502112103093;
        secret_18.alpha = 0.00005;
        secret_18.isFilled = true;
        page11.add(secret_18);

        // secret_19
        const secret_19 = this.add.rectangle(1093, 317, 128, 128);
        secret_19.scaleX = 0.33335575794221606;
        secret_19.scaleY = 0.2914468096910525;
        secret_19.alpha = 0.00005;
        secret_19.isFilled = true;
        page11.add(secret_19);

        // page10
        const page10 = this.add.container(0, 0);
        page10.visible = false;

        // p10
        const p10 = this.add.image(0, 0, "clothingcatalog", "page/page0010");
        p10.setOrigin(0, 0);
        page10.add(p10);

        // tag1_33
        const tag1_33 = new Tag1(this, 787, 426);
        tag1_33.scaleX = 1.616171619412765;
        tag1_33.scaleY = 1.5889237055839276;
        tag1_33.angle = -28;
        page10.add(tag1_33);

        // tag2_26
        const tag2_26 = new Tag2(this, 542, 183);
        tag2_26.scaleX = 1.5916439430981058;
        tag2_26.scaleY = 1.574537558980063;
        tag2_26.angle = 15;
        page10.add(tag2_26);

        // tag2_27
        const tag2_27 = new Tag2(this, 1157, 143);
        tag2_27.scaleX = 1.383761557883287;
        tag2_27.scaleY = 1.3680791945023851;
        tag2_27.angle = 26;
        page10.add(tag2_27);

        // tag_15
        const tag_15 = new Tag2(this, 605, 505);
        tag_15.scaleX = 1.421224505018436;
        tag_15.scaleY = 1.404247444606981;
        tag_15.angle = 25;
        page10.add(tag_15);

        // secret_16
        const secret_16 = this.add.rectangle(445, 440, 128, 128);
        secret_16.scaleX = 0.8114162810470368;
        secret_16.scaleY = 0.27804131745476296;
        secret_16.alpha = 0.00005;
        secret_16.isFilled = true;
        page10.add(secret_16);

        // secret_17
        const secret_17 = this.add.rectangle(1072, 604, 128, 128);
        secret_17.scaleX = 0.8114162810470368;
        secret_17.scaleY = 0.27804131745476296;
        secret_17.alpha = 0.00005;
        secret_17.isFilled = true;
        page10.add(secret_17);

        // page9
        const page9 = this.add.container(0, 0);
        page9.visible = false;

        // p9
        const p9 = this.add.image(0, 0, "clothingcatalog", "page/page0009");
        p9.setOrigin(0, 0);
        page9.add(p9);

        // tag1_24
        const tag1_24 = new Tag1(this, 863, 77);
        tag1_24.angle = 26;
        page9.add(tag1_24);

        // tag1_26
        const tag1_26 = new Tag1(this, 259, 372);
        tag1_26.scaleX = 1.0581621019247145;
        tag1_26.scaleY = 1;
        tag1_26.angle = -22;
        page9.add(tag1_26);

        // tag2_22
        const tag2_22 = new Tag2(this, 623, 494);
        tag2_22.scaleX = 1.0373736787370835;
        tag2_22.scaleY = 1.0410807846961452;
        tag2_22.angle = 15;
        page9.add(tag2_22);

        // tag2_24
        const tag2_24 = new Tag2(this, 1032, 344);
        tag2_24.scaleX = 1;
        tag2_24.scaleY = 1;
        tag2_24.angle = -22;
        page9.add(tag2_24);

        // tag2_25
        const tag2_25 = new Tag2(this, 596, 383);
        tag2_25.scaleX = 1.0340903244283128;
        tag2_25.scaleY = 1.0289693955057602;
        tag2_25.angle = -20;
        page9.add(tag2_25);

        // tag_14
        const tag_14 = new Tag2(this, 491, 225);
        tag_14.scaleX = 1.051226419348243;
        tag_14.scaleY = 1.0614001112454587;
        tag_14.angle = -31;
        page9.add(tag_14);

        // secret_14
        const secret_14 = this.add.rectangle(587, 374, 128, 128);
        secret_14.scaleX = 0.31811780075906304;
        secret_14.scaleY = 0.8751895038255004;
        secret_14.angle = -42;
        secret_14.alpha = 0.00005;
        secret_14.isFilled = true;
        page9.add(secret_14);

        // secret_15
        const secret_15 = this.add.rectangle(921, 691, 128, 128);
        secret_15.scaleX = 0.5592934060819552;
        secret_15.scaleY = 0.6613220064662146;
        secret_15.alpha = 0.00005;
        secret_15.isFilled = true;
        page9.add(secret_15);

        // page8
        const page8 = this.add.container(0, 0);
        page8.visible = false;

        // p8
        const p8 = this.add.image(0, 0, "clothingcatalog", "page/page0008");
        p8.setOrigin(0, 0);
        page8.add(p8);

        // tag1_21
        const tag1_21 = new Tag1(this, 188, 633);
        tag1_21.scaleX = 1.2;
        tag1_21.scaleY = 1.2;
        tag1_21.angle = -32.00000000000006;
        page8.add(tag1_21);

        // tag1_22
        const tag1_22 = new Tag1(this, 517, 384);
        tag1_22.angle = 7;
        page8.add(tag1_22);

        // tag1_23
        const tag1_23 = new Tag1(this, 308, 158);
        tag1_23.scaleX = 1.3;
        tag1_23.scaleY = 1.3;
        tag1_23.angle = 33;
        page8.add(tag1_23);

        // tag2_21
        const tag2_21 = new Tag2(this, 1103, 204);
        tag2_21.scaleX = 1.3;
        tag2_21.scaleY = 1.3;
        tag2_21.angle = -26;
        page8.add(tag2_21);

        // tag_9
        const tag_9 = new Tag1(this, 545, 46);
        tag_9.scaleX = 1.3;
        tag_9.scaleY = 1.3;
        tag_9.angle = 22;
        page8.add(tag_9);

        // tag_10
        const tag_10 = new Tag1(this, 504, 130);
        tag_10.scaleX = 1.3;
        tag_10.scaleY = 1.3;
        tag_10.angle = 33;
        page8.add(tag_10);

        // tag_11
        const tag_11 = new Tag2(this, 1115, 360);
        tag_11.scaleX = 1.3;
        tag_11.scaleY = 1.3;
        tag_11.angle = -31;
        page8.add(tag_11);

        // tag_12
        const tag_12 = new Tag2(this, 792, 506);
        tag_12.scaleX = 1.3;
        tag_12.scaleY = 1.3;
        tag_12.angle = -26;
        page8.add(tag_12);

        // tag_13
        const tag_13 = new Tag1(this, 896, 189);
        tag_13.scaleX = 1.3;
        tag_13.scaleY = 1.3;
        tag_13.angle = 23;
        page8.add(tag_13);

        // secret_12
        const secret_12 = this.add.rectangle(706, 389, 128, 128);
        secret_12.scaleX = 0.31811780075906304;
        secret_12.scaleY = 0.27902971970372337;
        secret_12.alpha = 0.00005;
        secret_12.isFilled = true;
        page8.add(secret_12);

        // secret_13
        const secret_13 = this.add.rectangle(1037, 114, 128, 128);
        secret_13.scaleX = 0.31811780075906304;
        secret_13.scaleY = 0.6613220064662146;
        secret_13.alpha = 0.00005;
        secret_13.isFilled = true;
        page8.add(secret_13);

        // page7
        const page7 = this.add.container(0, 0);
        page7.visible = false;

        // p7
        const p7 = this.add.image(0, 0, "clothingcatalog", "page/page0007");
        p7.setOrigin(0, 0);
        page7.add(p7);

        // tag1_19
        const tag1_19 = new Tag1(this, 770, 365);
        tag1_19.scaleX = 1.3968585352254455;
        tag1_19.scaleY = 1.404984655833577;
        tag1_19.angle = -28;
        page7.add(tag1_19);

        // tag1_20
        const tag1_20 = new Tag1(this, 776, 66);
        tag1_20.scaleX = 1.2793882393862006;
        tag1_20.scaleY = 1.2811568732624208;
        tag1_20.angle = -5;
        page7.add(tag1_20);

        // tag2_17
        const tag2_17 = new Tag2(this, 597, 626);
        tag2_17.scaleX = 1.612546869163226;
        tag2_17.scaleY = 1.575070977556584;
        tag2_17.angle = 38;
        page7.add(tag2_17);

        // tag2_18
        const tag2_18 = new Tag2(this, 1162, 497);
        tag2_18.scaleX = 1.3917981927896421;
        tag2_18.scaleY = 1.4403418535277919;
        tag2_18.angle = -26;
        page7.add(tag2_18);

        // tag2_19
        const tag2_19 = new Tag2(this, 1072, 183);
        tag2_19.scaleX = 1.4088256421510401;
        tag2_19.scaleY = 1.3229141831662692;
        tag2_19.angle = -39.99999999999994;
        page7.add(tag2_19);

        // tag2_20
        const tag2_20 = new Tag2(this, 494, 360);
        tag2_20.scaleX = 1.6111056142548597;
        tag2_20.scaleY = 1.708466801202447;
        tag2_20.angle = -18;
        page7.add(tag2_20);

        // tag_8
        const tag_8 = new Tag2(this, 1150, 625);
        tag_8.scaleX = 1.4204720852676371;
        tag_8.scaleY = 1.365490361183582;
        tag_8.angle = 25;
        page7.add(tag_8);

        // secret_10
        const secret_10 = this.add.rectangle(619, 197, 128, 128);
        secret_10.scaleX = 0.31811780075906304;
        secret_10.scaleY = 0.27902971970372337;
        secret_10.alpha = 0.00005;
        secret_10.isFilled = true;
        page7.add(secret_10);

        // secret_11
        const secret_11 = this.add.rectangle(1032, 587, 128, 128);
        secret_11.scaleX = 0.6862877098419036;
        secret_11.scaleY = 0.3277461843463309;
        secret_11.angle = 24;
        secret_11.alpha = 0.00005;
        secret_11.isFilled = true;
        page7.add(secret_11);

        // page6
        const page6 = this.add.container(0, 0);
        page6.visible = false;

        // p6
        const p6 = this.add.image(0, 0, "clothingcatalog", "page/page0006");
        p6.setOrigin(0, 0);
        page6.add(p6);

        // tag1_14
        const tag1_14 = new Tag1(this, 1072, 763);
        tag1_14.angle = -32.00000000000006;
        page6.add(tag1_14);

        // tag1_15
        const tag1_15 = new Tag1(this, 764, 610);
        tag1_15.scaleX = 0.9681084190018507;
        tag1_15.scaleY = 1;
        tag1_15.angle = -44;
        page6.add(tag1_15);

        // tag1_16
        const tag1_16 = new Tag1(this, 267, 281);
        tag1_16.angle = 30;
        page6.add(tag1_16);

        // tag1_17
        const tag1_17 = new Tag1(this, 216, 687);
        tag1_17.scaleX = 0.9806898716349489;
        tag1_17.scaleY = 1;
        tag1_17.angle = -46;
        page6.add(tag1_17);

        // tag1_18
        const tag1_18 = new Tag1(this, 566, 145);
        tag1_18.angle = 46;
        page6.add(tag1_18);

        // tag2_14
        const tag2_14 = new Tag2(this, 1018, 236);
        tag2_14.angle = 19;
        page6.add(tag2_14);

        // tag2_15
        const tag2_15 = new Tag2(this, 1166, 327);
        tag2_15.angle = -24;
        page6.add(tag2_15);

        // tag2_16
        const tag2_16 = new Tag2(this, 1229, 593);
        tag2_16.angle = 24;
        page6.add(tag2_16);

        // tag_4
        const tag_4 = new Tag2(this, 849, 348);
        tag_4.angle = -48.00000000000006;
        page6.add(tag_4);

        // tag_5
        const tag_5 = new Tag2(this, 935, 451);
        tag_5.angle = -23;
        page6.add(tag_5);

        // tag_6
        const tag_6 = new Tag2(this, 670, 434);
        tag_6.scaleX = 0.6631109070622832;
        tag_6.scaleY = 0.6763134548195116;
        tag_6.angle = -12;
        page6.add(tag_6);

        // tag_7
        const tag_7 = new Tag2(this, 432, 405);
        tag_7.angle = -22;
        page6.add(tag_7);

        // secret_8
        const secret_8 = this.add.rectangle(672, 519, 128, 128);
        secret_8.scaleX = 0.5190251366607541;
        secret_8.scaleY = 0.7219767014917988;
        secret_8.alpha = 0.00005;
        secret_8.isFilled = true;
        page6.add(secret_8);

        // secret_9
        const secret_9 = this.add.rectangle(1144, 532, 128, 128);
        secret_9.scaleX = 0.14290105187690516;
        secret_9.scaleY = 0.1469913646237836;
        secret_9.alpha = 0.00005;
        secret_9.isFilled = true;
        page6.add(secret_9);

        // page5
        const page5 = this.add.container(0, 0);
        page5.visible = false;

        // p5
        const p5 = this.add.image(0, 0, "clothingcatalog", "page/page0005");
        p5.setOrigin(0, 0);
        page5.add(p5);

        // tag1_9
        const tag1_9 = new Tag1(this, 793, 504);
        tag1_9.scaleX = 1.1473904532738124;
        tag1_9.scaleY = 1.1016934792508777;
        tag1_9.angle = -19;
        page5.add(tag1_9);

        // tag1_10
        const tag1_10 = new Tag1(this, 232, 520);
        tag1_10.scaleX = 1.2456902480732135;
        tag1_10.scaleY = 1.2495169689493284;
        tag1_10.angle = -14;
        page5.add(tag1_10);

        // tag2_11
        const tag2_11 = new Tag2(this, 606, 303);
        tag2_11.scaleX = 1.2161889004819575;
        tag2_11.scaleY = 1.2399137856446505;
        tag2_11.angle = 19;
        page5.add(tag2_11);

        // tag2_12
        const tag2_12 = new Tag2(this, 374, 623);
        tag2_12.scaleX = 1.2564075394985674;
        tag2_12.scaleY = 1.1731425231751675;
        tag2_12.angle = 36;
        page5.add(tag2_12);

        // tag2_13
        const tag2_13 = new Tag2(this, 425, 171);
        tag2_13.scaleX = 1.218412795223754;
        tag2_13.scaleY = 1.2179229286358495;
        tag2_13.angle = -17;
        page5.add(tag2_13);

        // tag_2
        const tag_2 = new Tag2(this, 1125, 509);
        tag_2.scaleX = 1.145179797883296;
        tag_2.scaleY = 1.1466929805936759;
        tag_2.angle = -28;
        page5.add(tag_2);

        // tag_3
        const tag_3 = new Tag2(this, 1121, 202);
        tag_3.scaleX = 1.1228643579257023;
        tag_3.scaleY = 1.0968835991695547;
        tag_3.angle = -29;
        page5.add(tag_3);

        // secret_6
        const secret_6 = this.add.rectangle(545, 264, 128, 128);
        secret_6.scaleX = 0.6309823413296082;
        secret_6.scaleY = 0.4090155001664153;
        secret_6.alpha = 0.00005;
        secret_6.isFilled = true;
        page5.add(secret_6);

        // secret_7
        const secret_7 = this.add.rectangle(890, 332, 128, 128);
        secret_7.scaleX = 0.5190251366607541;
        secret_7.scaleY = 0.3610281018683282;
        secret_7.alpha = 0.00005;
        secret_7.isFilled = true;
        page5.add(secret_7);

        // page4
        const page4 = this.add.container(0, 0);
        page4.visible = false;

        // p4
        const p4 = this.add.image(0, 0, "clothingcatalog", "page/page0004");
        p4.setOrigin(0, 0);
        page4.add(p4);

        // tag1_4
        const tag1_4 = new Tag1(this, 793, 222);
        tag1_4.scaleX = 1.1122323773555465;
        tag1_4.scaleY = 1.0778742315501413;
        tag1_4.angle = -32.00000000000006;
        page4.add(tag1_4);

        // tag1_5
        const tag1_5 = new Tag1(this, 250, 261);
        tag1_5.scaleX = 1.1370376776675126;
        tag1_5.scaleY = 1.156373124157633;
        tag1_5.angle = 24;
        page4.add(tag1_5);

        // tag1_7
        const tag1_7 = new Tag1(this, 787, 475);
        tag1_7.scaleX = 1.1150074481565793;
        tag1_7.scaleY = 1.0814976423768643;
        tag1_7.angle = -64;
        page4.add(tag1_7);

        // tag1_8
        const tag1_8 = new Tag1(this, 884, 616);
        tag1_8.scaleX = 1.1314702873688072;
        tag1_8.scaleY = 1.0953380988804136;
        tag1_8.angle = -34;
        page4.add(tag1_8);

        // tag2_4
        const tag2_4 = new Tag2(this, 470, 159);
        tag2_4.scaleX = 1.2167193072403657;
        tag2_4.scaleY = 1.1454625000971534;
        tag2_4.angle = -39.99999999999994;
        page4.add(tag2_4);

        // tag2_5
        const tag2_5 = new Tag2(this, 631, 517);
        tag2_5.scaleX = 1.1094475952977525;
        tag2_5.scaleY = 1.0669142034003085;
        tag2_5.angle = 29;
        page4.add(tag2_5);

        // tag2_10
        const tag2_10 = new Tag2(this, 1108, 98);
        tag2_10.scaleX = 1.1048905543809113;
        tag2_10.scaleY = 1.1178298610204211;
        tag2_10.angle = -19;
        page4.add(tag2_10);

        // secret_4
        const secret_4 = this.add.rectangle(332, 447, 128, 128);
        secret_4.scaleX = 0.30809035219648867;
        secret_4.scaleY = 0.31778533019498445;
        secret_4.alpha = 0.00005;
        secret_4.isFilled = true;
        page4.add(secret_4);

        // secret_5
        const secret_5 = this.add.rectangle(1063, 295, 128, 128);
        secret_5.scaleX = 0.6309823413296082;
        secret_5.scaleY = 0.4090155001664153;
        secret_5.alpha = 0.00005;
        secret_5.isFilled = true;
        page4.add(secret_5);

        // page3
        const page3 = this.add.container(0, 0);
        page3.visible = false;

        // p3
        const p3 = this.add.image(0, 0, "clothingcatalog", "page/page0003");
        p3.setOrigin(0, 0);
        page3.add(p3);

        // tag1
        const tag1 = new Tag1(this, 916, 693);
        tag1.scaleX = 1.1403075379499963;
        tag1.scaleY = 1.0799748147966817;
        tag1.angle = -17;
        page3.add(tag1);

        // tag1_1
        const tag1_1 = new Tag1(this, 226, 513);
        tag1_1.scaleX = 1.4670894822785763;
        tag1_1.scaleY = 1.4427413238864668;
        tag1_1.angle = -27;
        page3.add(tag1_1);

        // tag2
        const tag2 = new Tag2(this, 1019, 287);
        tag2.scaleX = 1.1159378123829824;
        tag2.scaleY = 1.066862406476669;
        tag2.angle = -18;
        page3.add(tag2);

        // tag2_1
        const tag2_1 = new Tag2(this, 1195, 336);
        tag2_1.scaleX = 1.136838125108886;
        tag2_1.scaleY = 1.102642185148471;
        tag2_1.angle = -20;
        page3.add(tag2_1);

        // tag2_2
        const tag2_2 = new Tag2(this, 565, 218);
        tag2_2.scaleX = 1.4131178043489308;
        tag2_2.scaleY = 1.3884022413820563;
        tag2_2.angle = -31;
        page3.add(tag2_2);

        // tag
        const tag = new Tag2(this, 966, 76);
        tag.scaleX = 1.0989900136595838;
        tag.scaleY = 1.0848842566695915;
        tag.angle = 18;
        page3.add(tag);

        // tag_1
        const tag_1 = new Tag2(this, 1141, 146);
        tag_1.scaleX = 1.1233620589640732;
        tag_1.scaleY = 1.0842593922649817;
        tag_1.angle = 23;
        page3.add(tag_1);

        // secret_2
        const secret_2 = this.add.rectangle(512, 246, 128, 128);
        secret_2.scaleX = 0.30809035219648867;
        secret_2.scaleY = 0.18743203834257488;
        secret_2.alpha = 0.00005;
        secret_2.isFilled = true;
        page3.add(secret_2);

        // secret_3
        const secret_3 = this.add.rectangle(1178, 649, 128, 128);
        secret_3.scaleX = 0.30809035219648867;
        secret_3.scaleY = 0.31778533019498445;
        secret_3.alpha = 0.00005;
        secret_3.isFilled = true;
        page3.add(secret_3);

        // page2
        const page2 = this.add.container(0, 0);
        page2.visible = false;

        // p2
        const p2 = this.add.image(0, 0, "clothingcatalog", "page/page0002");
        p2.setOrigin(0, 0);
        page2.add(p2);

        // aqua
        const aqua = new ColorButton(this, 1200, 525);
        aqua.tintTopLeft = 4718591;
        aqua.tintTopRight = 4718591;
        aqua.tintBottomLeft = 4718591;
        aqua.tintBottomRight = 4718591;
        page2.add(aqua);

        // lime
        const lime = new ColorButton(this, 1100, 525);
        lime.tintFill = false;
        lime.tintTopLeft = 7536384;
        lime.tintTopRight = 7536384;
        lime.tintBottomLeft = 7536384;
        lime.tintBottomRight = 7536384;
        page2.add(lime);

        // purple
        const purple = new ColorButton(this, 1000, 525);
        purple.tintFill = false;
        purple.tintTopLeft = 6619289;
        purple.tintTopRight = 6619289;
        purple.tintBottomLeft = 6619289;
        purple.tintBottomRight = 6619289;
        page2.add(purple);

        // darkGreen
        const darkGreen = new ColorButton(this, 900, 525);
        darkGreen.tintFill = false;
        darkGreen.tintTopLeft = 25856;
        darkGreen.tintTopRight = 25856;
        darkGreen.tintBottomLeft = 25856;
        darkGreen.tintBottomRight = 25856;
        page2.add(darkGreen);

        // pink
        const pink = new ColorButton(this, 800, 525);
        pink.tintFill = false;
        pink.tintTopLeft = 16724633;
        pink.tintTopRight = 16724633;
        pink.tintBottomLeft = 16724633;
        pink.tintBottomRight = 16724633;
        page2.add(pink);

        // lightblue
        const lightblue = new ColorButton(this, 1146, 425);
        lightblue.tintFill = false;
        lightblue.tintTopLeft = 39372;
        lightblue.tintTopRight = 39372;
        lightblue.tintBottomLeft = 39372;
        lightblue.tintBottomRight = 39372;
        page2.add(lightblue);

        // yellow
        const yellow = new ColorButton(this, 1046, 425);
        yellow.tintFill = false;
        yellow.tintTopLeft = 16763904;
        yellow.tintTopRight = 16763904;
        yellow.tintBottomLeft = 16763904;
        yellow.tintBottomRight = 16763904;
        page2.add(yellow);

        // peach
        const peach = new ColorButton(this, 946, 425);
        peach.tintFill = false;
        peach.tintTopLeft = 16737637;
        peach.tintTopRight = 16737637;
        peach.tintBottomLeft = 16737637;
        peach.tintBottomRight = 16737637;
        page2.add(peach);

        // brown
        const brown = new ColorButton(this, 846, 425);
        brown.tintFill = false;
        brown.tintTopLeft = 10052864;
        brown.tintTopRight = 10052864;
        brown.tintBottomLeft = 10052864;
        brown.tintBottomRight = 10052864;
        page2.add(brown);

        // orange
        const orange = new ColorButton(this, 1200, 325);
        orange.tintFill = false;
        orange.tintTopLeft = 16737536;
        orange.tintTopRight = 16737536;
        orange.tintBottomLeft = 16737536;
        orange.tintBottomRight = 16737536;
        page2.add(orange);

        // green
        const green = new ColorButton(this, 1100, 325);
        green.tintFill = false;
        green.tintTopLeft = 39168;
        green.tintTopRight = 39168;
        green.tintBottomLeft = 39168;
        green.tintBottomRight = 39168;
        page2.add(green);

        // red
        const red = new ColorButton(this, 1000, 325);
        red.tintFill = false;
        red.tintTopLeft = 13369344;
        red.tintTopRight = 13369344;
        red.tintBottomLeft = 13369344;
        red.tintBottomRight = 13369344;
        page2.add(red);

        // blue
        const blue = new ColorButton(this, 900, 325);
        blue.tintFill = false;
        blue.tintTopLeft = 12901;
        blue.tintTopRight = 12901;
        blue.tintBottomLeft = 12901;
        blue.tintBottomRight = 12901;
        page2.add(blue);

        // black
        const black = new ColorButton(this, 800, 325);
        black.tintFill = false;
        black.tintTopLeft = 3289650;
        black.tintTopRight = 3289650;
        black.tintBottomLeft = 3289650;
        black.tintBottomRight = 3289650;
        page2.add(black);

        // secret_1
        const secret_1 = this.add.rectangle(422, 185, 128, 128);
        secret_1.alpha = 0.00005;
        secret_1.isFilled = true;
        page2.add(secret_1);

        // secret
        const secret = this.add.rectangle(1032, 260, 128, 128);
        secret.scaleX = 2.264810769088951;
        secret.scaleY = 0.2322618823603888;
        secret.alpha = 0.00005;
        secret.isFilled = true;
        page2.add(secret);

        // page1
        const page1 = this.add.container(0, 0);

        // p1
        const p1 = this.add.image(0, 0, "clothingcatalog", "page/page0001");
        p1.setOrigin(0, 0);
        page1.add(p1);

        // pageFront
        const pageFront = this.add.image(469, 42, "clothingcatalog", "page_front");
        pageFront.setOrigin(0, 0);
        page1.add(pageFront);

        // closeRight_1
        const closeRight_1 = this.add.image(925, 37, "clothingcatalog", "close_right");
        closeRight_1.setOrigin(0, 0);
        page1.add(closeRight_1);

        // buttons
        const buttons = this.add.container(190, 41);
        buttons.visible = false;

        // closeRight
        const closeRight = this.add.image(1012, 0, "clothingcatalog", "close_right");
        closeRight.setOrigin(0, 0);
        buttons.add(closeRight);

        // pageRight
        const pageRight = this.add.image(1012, 549, "clothingcatalog", "page_right");
        pageRight.setOrigin(0, 0);
        buttons.add(pageRight);

        // pageLeft
        const pageLeft = this.add.image(0, 549, "clothingcatalog", "page_left");
        pageLeft.setOrigin(0, 0);
        buttons.add(pageLeft);

        // coins
        const coins = this.add.text(1130, 790, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16];

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

        // us (prefab fields)
        us.item = 501;

        // turkey (prefab fields)
        turkey.item = 521;

        // switzerland (prefab fields)
        switzerland.item = 520;

        // sweden (prefab fields)
        sweden.item = 519;

        // spain (prefab fields)
        spain.item = 518;

        // sa (prefab fields)
        sa.item = 526;

        // russia (prefab fields)
        russia.item = 517;

        // portugal (prefab fields)
        portugal.item = 525;

        // poland (prefab fields)
        poland.item = 516;

        // norway (prefab fields)
        norway.item = 515;

        // nz (prefab fields)
        nz.item = 523;

        // netherlands (prefab fields)
        netherlands.item = 514;

        // mexico (prefab fields)
        mexico.item = 522;

        // korea (prefab fields)
        korea.item = 513;

        // japan (prefab fields)
        japan.item = 512;

        // jamaica (prefab fields)
        jamaica.item = 534;

        // italy (prefab fields)
        italy.item = 528;

        // israel (prefab fields)
        israel.item = 511;

        // ireland (prefab fields)
        ireland.item = 524;

        // india (prefab fields)
        india.item = 527;

        // hungary (prefab fields)
        hungary.item = 531;

        // uk (prefab fields)
        uk.item = 503;

        // germany (prefab fields)
        germany.item = 510;

        // france (prefab fields)
        france.item = 509;

        // finland (prefab fields)
        finland.item = 508;

        // egypt (prefab fields)
        egypt.item = 530;

        // denmark (prefab fields)
        denmark.item = 507;

        // colombia (prefab fields)
        colombia.item = 536;

        // china (prefab fields)
        china.item = 506;

        // chile (prefab fields)
        chile.item = 535;

        // canada (prefab fields)
        canada.item = 500;

        // brazil (prefab fields)
        brazil.item = 505;

        // belize (prefab fields)
        belize.item = 529;

        // belgium (prefab fields)
        belgium.item = 504;

        // australia (prefab fields)
        australia.item = 502;

        // argentina (prefab fields)
        argentina.item = 533;

        // photoButton12 (prefab fields)
        photoButton12.item = 9038;

        // photoButton11 (prefab fields)
        photoButton11.item = 9043;

        // photoButton10 (prefab fields)
        photoButton10.item = 9032;

        // photoButton9 (prefab fields)
        photoButton9.item = 9044;

        // photoButton8 (prefab fields)
        photoButton8.item = 966;

        // photoButton7 (prefab fields)
        photoButton7.item = 976;

        // photoButton6 (prefab fields)
        photoButton6.item = 9037;

        // photoButton5 (prefab fields)
        photoButton5.item = 9000;

        // tag1_44 (prefab fields)
        tag1_44.item = 4100;

        // tag1_45 (prefab fields)
        tag1_45.item = 651;

        // tag2_36 (prefab fields)
        tag2_36.item = 1064;

        // tag2_37 (prefab fields)
        tag2_37.item = 6004;

        // photoButton4 (prefab fields)
        photoButton4.item = 9004;

        // photoButton3 (prefab fields)
        photoButton3.item = 985;

        // photoButton2 (prefab fields)
        photoButton2.item = 971;

        // photoButton1 (prefab fields)
        photoButton1.item = 928;

        // tag_16 (prefab fields)
        tag_16.item = 233;

        // tag_17 (prefab fields)
        tag_17.item = 728;

        // tag_18 (prefab fields)
        tag_18.item = 4099;

        // secret_22 (components)
        const secret_22SimpleButton = new SimpleButton(secret_22);
        secret_22SimpleButton.callback = () => this.buy(3058);

        // secret_23 (components)
        const secret_23SimpleButton = new SimpleButton(secret_23);
        secret_23SimpleButton.callback = () => this.buy(310);

        // secret_24 (components)
        const secret_24SimpleButton = new SimpleButton(secret_24);
        secret_24SimpleButton.callback = () => this.buy(106);

        // tag1_40 (prefab fields)
        tag1_40.item = 4018;

        // tag2_33 (prefab fields)
        tag2_33.item = 1015;

        // buyButton (prefab fields)
        buyButton.item = 841;

        // secret_20 (components)
        const secret_20SimpleButton = new SimpleButton(secret_20);
        secret_20SimpleButton.callback = () => this.buy(4270);

        // secret_21 (components)
        const secret_21SimpleButton = new SimpleButton(secret_21);
        secret_21SimpleButton.callback = () => this.buy(1185);

        // buyButton_1 (prefab fields)
        buyButton_1.item = 101;

        // buyButton_2 (prefab fields)
        buyButton_2.item = 4001;

        // buyButton_3 (prefab fields)
        buyButton_3.item = 3000;

        // buyButton_4 (prefab fields)
        buyButton_4.item = 6001;

        // buyButton_9 (prefab fields)
        buyButton_9.item = 4000;

        // secret_18 (components)
        const secret_18SimpleButton = new SimpleButton(secret_18);
        secret_18SimpleButton.callback = () => this.buy(4138);

        // secret_19 (components)
        const secret_19SimpleButton = new SimpleButton(secret_19);
        secret_19SimpleButton.callback = () => this.buy(4430);

        // tag1_33 (prefab fields)
        tag1_33.item = 4010;

        // tag2_26 (prefab fields)
        tag2_26.item = 111;

        // tag2_27 (prefab fields)
        tag2_27.item = 1006;

        // tag_15 (prefab fields)
        tag_15.item = 219;

        // secret_16 (components)
        const secret_16SimpleButton = new SimpleButton(secret_16);
        secret_16SimpleButton.callback = () => this.buy(266);

        // secret_17 (components)
        const secret_17SimpleButton = new SimpleButton(secret_17);
        secret_17SimpleButton.callback = () => this.buy(120);

        // tag1_24 (prefab fields)
        tag1_24.item = 1065;

        // tag1_26 (prefab fields)
        tag1_26.item = 1063;

        // tag2_22 (prefab fields)
        tag2_22.item = 4098;

        // tag2_24 (prefab fields)
        tag2_24.item = 4101;

        // tag2_25 (prefab fields)
        tag2_25.item = 732;

        // tag_14 (prefab fields)
        tag_14.item = 118;

        // secret_14 (components)
        const secret_14SimpleButton = new SimpleButton(secret_14);
        secret_14SimpleButton.callback = () => this.buy(4966);

        // secret_15 (components)
        const secret_15SimpleButton = new SimpleButton(secret_15);
        secret_15SimpleButton.callback = () => this.buy(1715);

        // tag1_21 (prefab fields)
        tag1_21.item = 4103;

        // tag1_22 (prefab fields)
        tag1_22.item = 234;

        // tag1_23 (prefab fields)
        tag1_23.item = 1067;

        // tag2_21 (prefab fields)
        tag2_21.item = 1066;

        // tag_9 (prefab fields)
        tag_9.item = 433;

        // tag_10 (prefab fields)
        tag_10.item = 843;

        // tag_11 (prefab fields)
        tag_11.item = 4102;

        // tag_12 (prefab fields)
        tag_12.item = 6022;

        // tag_13 (prefab fields)
        tag_13.item = 125;

        // secret_12 (components)
        const secret_12SimpleButton = new SimpleButton(secret_12);
        secret_12SimpleButton.callback = () => this.buy(309);

        // secret_13 (components)
        const secret_13SimpleButton = new SimpleButton(secret_13);
        secret_13SimpleButton.callback = () => this.buy(6090);

        // tag1_19 (prefab fields)
        tag1_19.item = 314;

        // tag1_20 (prefab fields)
        tag1_20.item = 1005;

        // tag2_17 (prefab fields)
        tag2_17.item = 3004;

        // tag2_18 (prefab fields)
        tag2_18.item = 312;

        // tag2_19 (prefab fields)
        tag2_19.item = 4009;

        // tag2_20 (prefab fields)
        tag2_20.item = 4008;

        // tag_8 (prefab fields)
        tag_8.item = 222;

        // secret_10 (components)
        const secret_10SimpleButton = new SimpleButton(secret_10);
        secret_10SimpleButton.callback = () => this.buy(227);

        // secret_11 (components)
        const secret_11SimpleButton = new SimpleButton(secret_11);
        secret_11SimpleButton.callback = () => this.buy(472);

        // tag1_14 (prefab fields)
        tag1_14.item = 357;

        // tag1_15 (prefab fields)
        tag1_15.item = 784;

        // tag1_16 (prefab fields)
        tag1_16.item = 670;

        // tag1_17 (prefab fields)
        tag1_17.item = 4108;

        // tag1_18 (prefab fields)
        tag1_18.item = 5043;

        // tag2_14 (prefab fields)
        tag2_14.item = 5116;

        // tag2_15 (prefab fields)
        tag2_15.item = 1074;

        // tag2_16 (prefab fields)
        tag2_16.item = 251;

        // tag_4 (prefab fields)
        tag_4.item = 657;

        // tag_5 (prefab fields)
        tag_5.item = 184;

        // tag_6 (prefab fields)
        tag_6.item = 4109;

        // tag_7 (prefab fields)
        tag_7.item = 6022;

        // secret_8 (components)
        const secret_8SimpleButton = new SimpleButton(secret_8);
        secret_8SimpleButton.callback = () => this.buy(1307);

        // secret_9 (components)
        const secret_9SimpleButton = new SimpleButton(secret_9);
        secret_9SimpleButton.callback = () => this.buy(6089);

        // tag1_9 (prefab fields)
        tag1_9.item = 4007;

        // tag1_10 (prefab fields)
        tag1_10.item = 3031;

        // tag2_11 (prefab fields)
        tag2_11.item = 237;

        // tag2_12 (prefab fields)
        tag2_12.item = 360;

        // tag2_13 (prefab fields)
        tag2_13.item = 1007;

        // tag_2 (prefab fields)
        tag_2.item = 3030;

        // tag_3 (prefab fields)
        tag_3.item = 677;

        // secret_6 (components)
        const secret_6SimpleButton = new SimpleButton(secret_6);
        secret_6SimpleButton.callback = () => this.buy(2082);

        // secret_7 (components)
        const secret_7SimpleButton = new SimpleButton(secret_7);
        secret_7SimpleButton.callback = () => this.buy(4435);

        // tag1_4 (prefab fields)
        tag1_4.item = 3034;

        // tag1_5 (prefab fields)
        tag1_5.item = 4129;

        // tag1_7 (prefab fields)
        tag1_7.item = 332;

        // tag1_8 (prefab fields)
        tag1_8.item = 4127;

        // tag2_4 (prefab fields)
        tag2_4.item = 1094;

        // tag2_5 (prefab fields)
        tag2_5.item = 6029;

        // tag2_10 (prefab fields)
        tag2_10.item = 1092;

        // secret_4 (components)
        const secret_4SimpleButton = new SimpleButton(secret_4);
        secret_4SimpleButton.callback = () => this.buy(4433);

        // secret_5 (components)
        const secret_5SimpleButton = new SimpleButton(secret_5);
        secret_5SimpleButton.callback = () => this.buy(24299);

        // tag1 (prefab fields)
        tag1.item = 4016;

        // tag1_1 (prefab fields)
        tag1_1.item = 4018;

        // tag2 (prefab fields)
        tag2.item = 4128;

        // tag2_1 (prefab fields)
        tag2_1.item = 1013;

        // tag2_2 (prefab fields)
        tag2_2.item = 1015;

        // tag (prefab fields)
        tag.item = 1093;

        // tag_1 (prefab fields)
        tag_1.item = 718;

        // secret_2 (components)
        const secret_2SimpleButton = new SimpleButton(secret_2);
        secret_2SimpleButton.callback = () => this.buy(1186);

        // secret_3 (components)
        const secret_3SimpleButton = new SimpleButton(secret_3);
        secret_3SimpleButton.callback = () => this.buy(789);

        // aqua (prefab fields)
        aqua.item = 15;

        // lime (prefab fields)
        lime.item = 13;

        // purple (prefab fields)
        purple.item = 8;

        // darkGreen (prefab fields)
        darkGreen.item = 11;

        // pink (prefab fields)
        pink.item = 3;

        // lightblue (prefab fields)
        lightblue.item = 12;

        // yellow (prefab fields)
        yellow.item = 7;

        // peach (prefab fields)
        peach.item = 10;

        // brown (prefab fields)
        brown.item = 9;

        // orange (prefab fields)
        orange.item = 6;

        // green (prefab fields)
        green.item = 2;

        // red (prefab fields)
        red.item = 5;

        // blue (prefab fields)
        blue.item = 1;

        // black (prefab fields)
        black.item = 4;

        // secret_1 (components)
        const secret_1SimpleButton = new SimpleButton(secret_1);
        secret_1SimpleButton.hoverCallback = () => {};
        secret_1SimpleButton.hoverOutCallback = () => {};
        secret_1SimpleButton.callback = () => this.buy(244);

        // secret (components)
        const secretSimpleButton = new SimpleButton(secret);
        secretSimpleButton.hoverCallback = () => {};
        secretSimpleButton.hoverOutCallback = () => {};
        secretSimpleButton.callback = () => this.buy(4271);

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

        this.photo12 = photo12;
        this.photo11 = photo11;
        this.photo10 = photo10;
        this.photo9 = photo9;
        this.photo8 = photo8;
        this.photo7 = photo7;
        this.photo6 = photo6;
        this.photo5 = photo5;
        this.photo4 = photo4;
        this.photo3 = photo3;
        this.photo2 = photo2;
        this.photo1 = photo1;
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
        this.interface.prompt.showItem(item)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
