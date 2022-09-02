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

        /** @type {Phaser.GameObjects.Container} */
        this.secret7;
        /** @type {Phaser.GameObjects.Container} */
        this.secret_4_1;
        /** @type {Phaser.GameObjects.Container} */
        this.secret_4_2;
        /** @type {Phaser.GameObjects.Container} */
        this.secret_1;
        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        /* START-USER-CTR-CODE */
        this.viking = 0;
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("clothingcatalog-pack", "assets/media/interface/catalogs/clothing/clothingcatalog-pack.json");
        this.load.pack("catalogs-master-pack", "assets/media/interface/catalogs/catalogs-master-pack.json");
        this.load.pack("furniturecatalog-pack", "assets/media/interface/catalogs/furniture/furniturecatalog-pack.json");
    }

    /** @returns {void} */
    _create() {

        // block
        const block = this.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;

        // page13
        const page13 = this.add.container(0, 0);
        page13.visible = false;

        // p16
        const p16 = this.add.image(0, 0, "clothingcatalog", "page/page0016");
        p16.setOrigin(0, 0);
        page13.add(p16);

        // pageLeft_1
        const pageLeft_1 = this.add.image(492, 590, "clothingcatalog", "page_left");
        pageLeft_1.setOrigin(0, 0);
        page13.add(pageLeft_1);

        // closeLeft
        const closeLeft = this.add.image(491, 39, "clothingcatalog", "close_left");
        closeLeft.setOrigin(0, 0);
        page13.add(closeLeft);

        // page12
        const page12 = this.add.container(0, 0);
        page12.visible = false;

        // p15
        const p15 = this.add.image(0, 0, "clothingcatalog", "page/page0015");
        p15.setOrigin(0, 0);
        page12.add(p15);

        // us
        const us = new FlagButton(this, 1231, 685);
        page12.add(us);

        // turkey
        const turkey = new FlagButton(this, 1112, 685);
        page12.add(turkey);

        // switzerland
        const switzerland = new FlagButton(this, 987, 685);
        page12.add(switzerland);

        // sweden
        const sweden = new FlagButton(this, 872, 685);
        page12.add(sweden);

        // spain
        const spain = new FlagButton(this, 1231, 547);
        page12.add(spain);

        // sa
        const sa = new FlagButton(this, 1112, 547);
        page12.add(sa);

        // russia
        const russia = new FlagButton(this, 987, 547);
        page12.add(russia);

        // portugal
        const portugal = new FlagButton(this, 872, 547);
        page12.add(portugal);

        // poland
        const poland = new FlagButton(this, 1231, 408);
        page12.add(poland);

        // norway
        const norway = new FlagButton(this, 1112, 408);
        page12.add(norway);

        // nz
        const nz = new FlagButton(this, 991, 408);
        page12.add(nz);

        // netherlands
        const netherlands = new FlagButton(this, 872, 408);
        page12.add(netherlands);

        // mexico
        const mexico = new FlagButton(this, 1230, 270);
        page12.add(mexico);

        // korea
        const korea = new FlagButton(this, 1113, 271);
        page12.add(korea);

        // japan
        const japan = new FlagButton(this, 988, 271);
        page12.add(japan);

        // jamaica
        const jamaica = new FlagButton(this, 871, 270);
        page12.add(jamaica);

        // italy
        const italy = new FlagButton(this, 1230, 129);
        page12.add(italy);

        // israel
        const israel = new FlagButton(this, 1113, 129);
        page12.add(israel);

        // ireland
        const ireland = new FlagButton(this, 986, 129);
        page12.add(ireland);

        // india
        const india = new FlagButton(this, 871, 129);
        page12.add(india);

        // hungary
        const hungary = new FlagButton(this, 657, 676);
        page12.add(hungary);

        // uk
        const uk = new FlagButton(this, 536, 677);
        page12.add(uk);

        // germany
        const germany = new FlagButton(this, 417, 677);
        page12.add(germany);

        // france
        const france = new FlagButton(this, 295, 676);
        page12.add(france);

        // finland
        const finland = new FlagButton(this, 652, 517);
        page12.add(finland);

        // egypt
        const egypt = new FlagButton(this, 532, 517);
        page12.add(egypt);

        // denmark
        const denmark = new FlagButton(this, 413, 517);
        page12.add(denmark);

        // colombia
        const colombia = new FlagButton(this, 294, 518);
        page12.add(colombia);

        // china
        const china = new FlagButton(this, 656, 366);
        page12.add(china);

        // chile
        const chile = new FlagButton(this, 537, 364);
        page12.add(chile);

        // canada
        const canada = new FlagButton(this, 416, 364);
        page12.add(canada);

        // brazil
        const brazil = new FlagButton(this, 295, 365);
        page12.add(brazil);

        // belize
        const belize = new FlagButton(this, 656, 210);
        page12.add(belize);

        // belgium
        const belgium = new FlagButton(this, 535, 210);
        page12.add(belgium);

        // australia
        const australia = new FlagButton(this, 418, 211);
        page12.add(australia);

        // argentina
        const argentina = new FlagButton(this, 295, 210);
        page12.add(argentina);

        // page11
        const page11 = this.add.container(0, 0);
        page11.visible = false;

        // p11_png
        const p11_png = this.add.image(0, 0, "clothing092022", "p11.png");
        p11_png.setOrigin(0, 0);
        page11.add(p11_png);

        // photoButton_4
        const photoButton_4 = new PhotoButton(this, 344, 373);
        page11.add(photoButton_4);

        // photoButton_5
        const photoButton_5 = new PhotoButton(this, 931, 615);
        page11.add(photoButton_5);

        // photoButton_6
        const photoButton_6 = new PhotoButton(this, 1173, 617);
        page11.add(photoButton_6);

        // photoButton_7
        const photoButton_7 = new PhotoButton(this, 933, 379);
        page11.add(photoButton_7);

        // photoButton_8
        const photoButton_8 = new PhotoButton(this, 1179, 387);
        page11.add(photoButton_8);

        // photoButton_9
        const photoButton_9 = new PhotoButton(this, 587, 379);
        page11.add(photoButton_9);

        // photoButton_10
        const photoButton_10 = new PhotoButton(this, 587, 617);
        page11.add(photoButton_10);

        // photoButton_11
        const photoButton_11 = new PhotoButton(this, 342, 615);
        page11.add(photoButton_11);

        // photo_12
        const photo_12 = this.add.image(348, 370, "clothingcatalog", "photo/12");
        page11.add(photo_12);

        // photo10_png
        const photo10_png = this.add.image(578, 378, "photos-092022", "photo10.png");
        photo10_png.scaleX = 0.4981654981235354;
        photo10_png.scaleY = 0.4981654981235354;
        page11.add(photo10_png);

        // photo12_png
        const photo12_png = this.add.image(342, 618, "photos-092022", "photo12.png");
        photo12_png.scaleX = 0.489695087555974;
        photo12_png.scaleY = 0.489695087555974;
        page11.add(photo12_png);

        // photo7_png
        const photo7_png = this.add.image(931, 379, "photos-092022", "photo7.png");
        photo7_png.scaleX = 0.4874619720931799;
        photo7_png.scaleY = 0.4874619720931799;
        page11.add(photo7_png);

        // photo9_png
        const photo9_png = this.add.image(588, 616, "photos-092022", "photo9.png");
        photo9_png.scaleX = 0.49401105779518206;
        photo9_png.scaleY = 0.49401105779518206;
        page11.add(photo9_png);

        // photo8_png
        const photo8_png = this.add.image(1179, 382, "photos-092022", "photo8.png");
        photo8_png.scaleX = 0.51672286960862;
        photo8_png.scaleY = 0.51672286960862;
        page11.add(photo8_png);

        // photo5_png
        const photo5_png = this.add.image(933, 615, "photos-092022", "photo5.png");
        photo5_png.scaleX = 0.5023864061703872;
        photo5_png.scaleY = 0.5023864061703872;
        page11.add(photo5_png);

        // photo6_png
        const photo6_png = this.add.image(1178, 617, "photos-092022", "photo6.png");
        photo6_png.scaleX = 0.5202732110448915;
        photo6_png.scaleY = 0.5202732110448915;
        page11.add(photo6_png);

        // page10
        const page10 = this.add.container(0, 0);
        page10.visible = false;

        // p10_png
        const p10_png = this.add.image(0, 0, "clothing092022", "p10.png");
        p10_png.setOrigin(0, 0);
        page10.add(p10_png);

        // photoButton
        const photoButton = new PhotoButton(this, 928, 377);
        page10.add(photoButton);

        // photoButton_1
        const photoButton_1 = new PhotoButton(this, 1174, 378);
        page10.add(photoButton_1);

        // photoButton_2
        const photoButton_2 = new PhotoButton(this, 928, 613);
        page10.add(photoButton_2);

        // photoButton_3
        const photoButton_3 = new PhotoButton(this, 1171, 615);
        page10.add(photoButton_3);

        // photo1_png
        const photo1_png = this.add.image(933, 379, "photos-092022", "photo1.png");
        photo1_png.scaleX = 0.4963472694664711;
        photo1_png.scaleY = 0.4963472694664711;
        page10.add(photo1_png);

        // buyButton_37
        const buyButton_37 = new BuyButton(this, 458, 188);
        buyButton_37.scaleX = 1.465489536985481;
        buyButton_37.scaleY = 1.465489536985481;
        page10.add(buyButton_37);

        // buyButton_38
        const buyButton_38 = new BuyButton(this, 277, 406);
        buyButton_38.scaleX = 1.465489536985481;
        buyButton_38.scaleY = 1.465489536985481;
        page10.add(buyButton_38);

        // buyButton_39
        const buyButton_39 = new BuyButton(this, 259, 626);
        buyButton_39.scaleX = 1.3214803193966163;
        buyButton_39.scaleY = 1.3214803193966163;
        page10.add(buyButton_39);

        // photo3_png
        const photo3_png = this.add.image(1175, 380, "photos-092022", "photo3.png");
        photo3_png.scaleX = 0.4963472694664711;
        photo3_png.scaleY = 0.4963472694664711;
        page10.add(photo3_png);

        // photo2_png
        const photo2_png = this.add.image(929, 617, "photos-092022", "photo2.png");
        photo2_png.scaleX = 0.4963472694664711;
        photo2_png.scaleY = 0.4963472694664711;
        page10.add(photo2_png);

        // photo_penguin
        const photo_penguin = this.add.image(929, 392, "clothingcatalog", "photo/penguin");
        page10.add(photo_penguin);

        // photo4_png
        const photo4_png = this.add.image(1171, 621, "photos-092022", "photo4.png");
        photo4_png.scaleX = 0.15338265109085666;
        photo4_png.scaleY = 0.15338265109085666;
        page10.add(photo4_png);

        // photo_penguin_1
        const photo_penguin_1 = this.add.image(1171, 391, "clothingcatalog", "photo/penguin");
        page10.add(photo_penguin_1);

        // photo_penguin_2
        const photo_penguin_2 = this.add.image(1167, 617, "clothingcatalog", "photo/penguin");
        page10.add(photo_penguin_2);

        // photo_penguin_3
        const photo_penguin_3 = this.add.image(933, 621, "clothingcatalog", "photo/penguin");
        page10.add(photo_penguin_3);

        // page9
        const page9 = this.add.container(0, 0);
        page9.visible = false;

        // p9_png
        const p9_png = this.add.image(0, 0, "clothing092022", "p9.png");
        p9_png.setOrigin(0, 0);
        page9.add(p9_png);

        // buyButton_32
        const buyButton_32 = new BuyButton(this, 524, 329);
        buyButton_32.scaleX = 1.2866686757465589;
        buyButton_32.scaleY = 1.2866686757465589;
        page9.add(buyButton_32);

        // buyButton_33
        const buyButton_33 = new BuyButton(this, 558, 602);
        buyButton_33.scaleX = 1.3640764452141125;
        buyButton_33.scaleY = 1.3640764452141125;
        page9.add(buyButton_33);

        // buyButton_34
        const buyButton_34 = new BuyButton(this, 1086, 182);
        buyButton_34.scaleX = 1.3640764452141125;
        buyButton_34.scaleY = 1.3640764452141125;
        page9.add(buyButton_34);

        // buyButton_35
        const buyButton_35 = new BuyButton(this, 858, 436);
        buyButton_35.scaleX = 1.3640764452141125;
        buyButton_35.scaleY = 1.3640764452141125;
        page9.add(buyButton_35);

        // buyButton_36
        const buyButton_36 = new BuyButton(this, 838, 629);
        buyButton_36.scaleX = 1.2866686757465589;
        buyButton_36.scaleY = 1.2866686757465589;
        page9.add(buyButton_36);

        // rectangle_2
        const rectangle_2 = this.add.rectangle(463, 757, 128, 128);
        rectangle_2.scaleX = 3.797670284507542;
        rectangle_2.scaleY = 0.47051777444395515;
        rectangle_2.isFilled = true;
        page9.add(rectangle_2);

        // rectangle
        const rectangle = this.add.rectangle(1063, 757, 128, 128);
        rectangle.scaleX = 3.797670284507542;
        rectangle.scaleY = 0.47051777444395515;
        rectangle.isFilled = true;
        page9.add(rectangle);

        // page8
        const page8 = this.add.container(0, 0);
        page8.visible = false;

        // p8_png
        const p8_png = this.add.image(0, 0, "clothing092022", "p8.png");
        p8_png.setOrigin(0, 0);
        page8.add(p8_png);

        // buyButton_27
        const buyButton_27 = new BuyButton(this, 231, 305);
        buyButton_27.scaleX = 1.3425207199116265;
        buyButton_27.scaleY = 1.3425207199116265;
        page8.add(buyButton_27);

        // buyButton_28
        const buyButton_28 = new BuyButton(this, 489, 688);
        buyButton_28.scaleX = 1.3425207199116265;
        buyButton_28.scaleY = 1.3425207199116265;
        page8.add(buyButton_28);

        // buyButton_29
        const buyButton_29 = new BuyButton(this, 1089, 242);
        buyButton_29.scaleX = 1.3425207199116265;
        buyButton_29.scaleY = 1.3425207199116265;
        page8.add(buyButton_29);

        // buyButton_30
        const buyButton_30 = new BuyButton(this, 801, 514);
        buyButton_30.scaleX = 1.3425207199116265;
        buyButton_30.scaleY = 1.3425207199116265;
        page8.add(buyButton_30);

        // buyButton_31
        const buyButton_31 = new BuyButton(this, 1097, 584);
        buyButton_31.scaleX = 1.4441812004254455;
        buyButton_31.scaleY = 1.4441812004254455;
        page8.add(buyButton_31);

        // rectangle_3
        const rectangle_3 = this.add.rectangle(1064, 761, 128, 128);
        rectangle_3.scaleX = 3.666016531273444;
        rectangle_3.scaleY = 0.4891409593849487;
        rectangle_3.isFilled = true;
        page8.add(rectangle_3);

        // page7
        const page7 = this.add.container(0, 0);
        page7.visible = false;

        // p7_png
        const p7_png = this.add.image(0, 0, "clothing092022", "p7.png");
        p7_png.setOrigin(0, 0);
        page7.add(p7_png);

        // buyButton_20
        const buyButton_20 = new BuyButton(this, 558, 104);
        buyButton_20.scaleX = 1.4058721237720457;
        buyButton_20.scaleY = 1.4058721237720457;
        page7.add(buyButton_20);

        // buyButton_21
        const buyButton_21 = new BuyButton(this, 553, 370);
        buyButton_21.scaleX = 1.4058721237720457;
        buyButton_21.scaleY = 1.4058721237720457;
        page7.add(buyButton_21);

        // buyButton_22
        const buyButton_22 = new BuyButton(this, 559, 603);
        buyButton_22.scaleX = 1.4058721237720457;
        buyButton_22.scaleY = 1.4058721237720457;
        page7.add(buyButton_22);

        // buyButton_23
        const buyButton_23 = new BuyButton(this, 807, 153);
        buyButton_23.scaleX = 1.635651859299817;
        buyButton_23.scaleY = 1.635651859299817;
        page7.add(buyButton_23);

        // buyButton_24
        const buyButton_24 = new BuyButton(this, 807, 429);
        buyButton_24.scaleX = 1.1932918920206816;
        buyButton_24.scaleY = 1.1932918920206816;
        page7.add(buyButton_24);

        // buyButton_25
        const buyButton_25 = new BuyButton(this, 1082, 669);
        buyButton_25.scaleX = 1.4058721237720457;
        buyButton_25.scaleY = 1.4058721237720457;
        page7.add(buyButton_25);

        // openSecret7
        const openSecret7 = this.add.ellipse(799, 569, 128, 128);
        openSecret7.scaleX = 0.3885326833033877;
        openSecret7.scaleY = 0.3885326833033877;
        openSecret7.isFilled = true;
        openSecret7.fillAlpha = 0;
        page7.add(openSecret7);

        // secret7
        const secret7 = this.add.container(971, 603);
        secret7.visible = false;
        page7.add(secret7);

        // s7_png
        const s7_png = this.add.image(-200, -200, "clothing092022", "s7.png");
        secret7.add(s7_png);

        // buyButton_26
        const buyButton_26 = new BuyButton(this, -387, -209);
        buyButton_26.scaleX = 1.5312828042208035;
        buyButton_26.scaleY = 1.5312828042208035;
        secret7.add(buyButton_26);

        // closeSecret7
        const closeSecret7 = this.add.rectangle(6, -92, 128, 128);
        closeSecret7.scaleX = 0.24625156712727328;
        closeSecret7.scaleY = 0.24625156712727328;
        closeSecret7.isFilled = true;
        closeSecret7.fillAlpha = 0;
        secret7.add(closeSecret7);

        // page6
        const page6 = this.add.container(0, 0);
        page6.visible = false;

        // p6_png
        const p6_png = this.add.image(0, 0, "clothing092022", "p6.png");
        p6_png.setOrigin(0, 0);
        page6.add(p6_png);

        // tag2
        const tag2 = new Tag2(this, 611, 274);
        tag2.scaleX = 1.0839952769117966;
        tag2.scaleY = 1.0839952769117966;
        tag2.angle = 16;
        page6.add(tag2);

        // tag_5
        const tag_5 = new Tag2(this, 614, 526);
        tag_5.scaleX = 1.1960305260996156;
        tag_5.scaleY = 1.1960305260996156;
        tag_5.angle = 34;
        page6.add(tag_5);

        // buyButton_16
        const buyButton_16 = new BuyButton(this, 860, 219);
        buyButton_16.scaleX = 1.0745081751218968;
        buyButton_16.scaleY = 1.0745081751218968;
        page6.add(buyButton_16);

        // buyButton_17
        const buyButton_17 = new BuyButton(this, 1115, 220);
        buyButton_17.scaleX = 1.0988044862665898;
        buyButton_17.scaleY = 1.0988044862665898;
        page6.add(buyButton_17);

        // buyButton_18
        const buyButton_18 = new BuyButton(this, 1130, 436);
        buyButton_18.scaleX = 1.3401460621551953;
        buyButton_18.scaleY = 1.3401460621551953;
        page6.add(buyButton_18);

        // buyButton_19
        const buyButton_19 = new BuyButton(this, 1143, 692);
        buyButton_19.scaleX = 1.1981543157440888;
        buyButton_19.scaleY = 1.1981543157440888;
        page6.add(buyButton_19);

        // page5
        const page5 = this.add.container(0, 0);
        page5.visible = false;

        // p5_png
        const p5_png = this.add.image(0, 0, "clothing092022", "p5.png");
        p5_png.setOrigin(0, 0);
        page5.add(p5_png);

        // buyButton_12
        const buyButton_12 = new BuyButton(this, 576, 253);
        buyButton_12.scaleX = 1.1888338579244073;
        buyButton_12.scaleY = 1.1888338579244073;
        page5.add(buyButton_12);

        // buyButton_13
        const buyButton_13 = new BuyButton(this, 582, 597);
        buyButton_13.scaleX = 1.1888338579244073;
        buyButton_13.scaleY = 1.1888338579244073;
        page5.add(buyButton_13);

        // buyButton_14
        const buyButton_14 = new BuyButton(this, 829, 299);
        buyButton_14.scaleX = 1.1888338579244073;
        buyButton_14.scaleY = 1.1888338579244073;
        page5.add(buyButton_14);

        // buyButton_15
        const buyButton_15 = new BuyButton(this, 814, 658);
        buyButton_15.scaleX = 1.1888338579244073;
        buyButton_15.scaleY = 1.1888338579244073;
        page5.add(buyButton_15);

        // page4
        const page4 = this.add.container(0, 0);
        page4.visible = false;

        // p4_png
        const p4_png = this.add.image(0, 0, "clothing092022", "p4.png");
        p4_png.setOrigin(0, 0);
        page4.add(p4_png);

        // buyButton_5
        const buyButton_5 = new BuyButton(this, 590, 208);
        buyButton_5.scaleX = 1.1993652871005305;
        buyButton_5.scaleY = 1.1993652871005305;
        page4.add(buyButton_5);

        // buyButton_6
        const buyButton_6 = new BuyButton(this, 580, 424);
        buyButton_6.scaleX = 1.1993652871005305;
        buyButton_6.scaleY = 1.1993652871005305;
        page4.add(buyButton_6);

        // buyButton_7
        const buyButton_7 = new BuyButton(this, 233, 682);
        buyButton_7.scaleX = 1.3161013905958374;
        buyButton_7.scaleY = 1.3161013905958374;
        page4.add(buyButton_7);

        // buyButton_8
        const buyButton_8 = new BuyButton(this, 994, 683);
        buyButton_8.scaleX = 1.3161013905958374;
        buyButton_8.scaleY = 1.3161013905958374;
        page4.add(buyButton_8);

        // buyButton_9
        const buyButton_9 = new BuyButton(this, 817, 469);
        buyButton_9.scaleX = 1.1993652871005305;
        buyButton_9.scaleY = 1.1993652871005305;
        page4.add(buyButton_9);

        // openSecretVikingElipse
        const openSecretVikingElipse = this.add.ellipse(915, 362, 128, 128);
        openSecretVikingElipse.scaleX = 0.7360761998236621;
        openSecretVikingElipse.scaleY = 0.44669646199769564;
        openSecretVikingElipse.isFilled = true;
        openSecretVikingElipse.fillAlpha = 0;
        page4.add(openSecretVikingElipse);

        // secret_4_1
        const secret_4_1 = this.add.container(971, 603);
        secret_4_1.visible = false;
        page4.add(secret_4_1);

        // s4_1_png
        const s4_1_png = this.add.image(-200, -200, "clothing092022", "s4.1.png");
        secret_4_1.add(s4_1_png);

        // closeSecret4_1
        const closeSecret4_1 = this.add.rectangle(68, -30, 128, 128);
        closeSecret4_1.scaleX = 0.22265831583794415;
        closeSecret4_1.scaleY = 0.22265831583794415;
        closeSecret4_1.isFilled = true;
        closeSecret4_1.fillAlpha = 0;
        secret_4_1.add(closeSecret4_1);

        // buyButton_11
        const buyButton_11 = new BuyButton(this, -404, -133);
        buyButton_11.scaleX = 1.4201108360878758;
        buyButton_11.scaleY = 1.4201108360878758;
        secret_4_1.add(buyButton_11);

        // secret_4_2
        const secret_4_2 = this.add.container(971, 603);
        secret_4_2.visible = false;
        page4.add(secret_4_2);

        // s4_2_png
        const s4_2_png = this.add.image(-200, -200, "clothing092022", "s4.2.png");
        secret_4_2.add(s4_2_png);

        // closeSecret4_2
        const closeSecret4_2 = this.add.rectangle(69, -31, 128, 128);
        closeSecret4_2.scaleX = 0.24354548154010935;
        closeSecret4_2.scaleY = 0.24354548154010935;
        closeSecret4_2.isFilled = true;
        closeSecret4_2.fillAlpha = 0;
        secret_4_2.add(closeSecret4_2);

        // buyButton_10
        const buyButton_10 = new BuyButton(this, -404, -133);
        buyButton_10.scaleX = 1.4201108360878758;
        buyButton_10.scaleY = 1.4201108360878758;
        secret_4_2.add(buyButton_10);

        // page3
        const page3 = this.add.container(0, 0);
        page3.visible = false;

        // p3_png
        const p3_png = this.add.image(0, 0, "clothing092022", "p3.png");
        p3_png.setOrigin(0, 0);
        page3.add(p3_png);

        // buyButton_1
        const buyButton_1 = new BuyButton(this, 556, 231);
        buyButton_1.scaleX = 1.1993652871005305;
        buyButton_1.scaleY = 1.1993652871005305;
        page3.add(buyButton_1);

        // buyButton_2
        const buyButton_2 = new BuyButton(this, 826, 299);
        buyButton_2.scaleX = 1.1993652871005305;
        buyButton_2.scaleY = 1.1993652871005305;
        page3.add(buyButton_2);

        // buyButton_3
        const buyButton_3 = new BuyButton(this, 597, 656);
        buyButton_3.scaleX = 1.1993652871005305;
        buyButton_3.scaleY = 1.1993652871005305;
        page3.add(buyButton_3);

        // buyButton_4
        const buyButton_4 = new BuyButton(this, 975, 673);
        buyButton_4.scaleX = 1.1993652871005305;
        buyButton_4.scaleY = 1.1993652871005305;
        page3.add(buyButton_4);

        // page2
        const page2 = this.add.container(0, 0);
        page2.visible = false;

        // p2_png
        const p2_png = this.add.image(0, 0, "clothing092022", "p2.png");
        p2_png.setOrigin(0, 0);
        page2.add(p2_png);

        // rectangle_1
        const rectangle_1 = this.add.rectangle(599, 452, 128, 128);
        rectangle_1.scaleX = 2.0406589362761376;
        rectangle_1.scaleY = 3.5256616447022546;
        rectangle_1.isFilled = true;
        page2.add(rectangle_1);

        // aqua
        const aqua = new ColorButton(this, -950, -158);
        aqua.tintTopLeft = 4718591;
        aqua.tintTopRight = 4718591;
        aqua.tintBottomLeft = 4718591;
        aqua.tintBottomRight = 4718591;
        page2.add(aqua);

        // lime
        const lime = new ColorButton(this, 642, 583);
        lime.scaleX = 0.78;
        lime.scaleY = 0.78;
        lime.tintFill = false;
        lime.tintTopLeft = 7536384;
        lime.tintTopRight = 7536384;
        lime.tintBottomLeft = 7536384;
        lime.tintBottomRight = 7536384;
        page2.add(lime);

        // purple
        const purple = new ColorButton(this, 559, 415);
        purple.scaleX = 0.78;
        purple.scaleY = 0.78;
        purple.tintFill = false;
        purple.tintTopLeft = 6619289;
        purple.tintTopRight = 6619289;
        purple.tintBottomLeft = 6619289;
        purple.tintBottomRight = 6619289;
        page2.add(purple);

        // darkGreen
        const darkGreen = new ColorButton(this, 643, 413);
        darkGreen.scaleX = 0.78;
        darkGreen.scaleY = 0.78;
        darkGreen.tintFill = false;
        darkGreen.tintTopLeft = 25856;
        darkGreen.tintTopRight = 25856;
        darkGreen.tintBottomLeft = 25856;
        darkGreen.tintBottomRight = 25856;
        page2.add(darkGreen);

        // pink
        const pink = new ColorButton(this, 602, 499);
        pink.scaleX = 0.78;
        pink.scaleY = 0.78;
        pink.tintFill = false;
        pink.tintTopLeft = 16724633;
        pink.tintTopRight = 16724633;
        pink.tintBottomLeft = 16724633;
        pink.tintBottomRight = 16724633;
        page2.add(pink);

        // lightblue
        const lightblue = new ColorButton(this, 559, 583);
        lightblue.scaleX = 0.78;
        lightblue.scaleY = 0.78;
        lightblue.tintFill = false;
        lightblue.tintTopLeft = 39372;
        lightblue.tintTopRight = 39372;
        lightblue.tintBottomLeft = 39372;
        lightblue.tintBottomRight = 39372;
        page2.add(lightblue);

        // yellow
        const yellow = new ColorButton(this, 475, 413);
        yellow.scaleX = 0.78;
        yellow.scaleY = 0.78;
        yellow.tintFill = false;
        yellow.tintTopLeft = 16763904;
        yellow.tintTopRight = 16763904;
        yellow.tintBottomLeft = 16763904;
        yellow.tintBottomRight = 16763904;
        page2.add(yellow);

        // peach
        const peach = new ColorButton(this, 643, 245);
        peach.scaleX = 0.78;
        peach.scaleY = 0.78;
        peach.tintFill = false;
        peach.tintTopLeft = 16737637;
        peach.tintTopRight = 16737637;
        peach.tintBottomLeft = 16737637;
        peach.tintBottomRight = 16737637;
        page2.add(peach);

        // brown
        const brown = new ColorButton(this, 519, 499);
        brown.scaleX = 0.78;
        brown.scaleY = 0.78;
        brown.tintFill = false;
        brown.tintTopLeft = 10052864;
        brown.tintTopRight = 10052864;
        brown.tintBottomLeft = 10052864;
        brown.tintBottomRight = 10052864;
        page2.add(brown);

        // orange
        const orange = new ColorButton(this, 475, 583);
        orange.scaleX = 0.78;
        orange.scaleY = 0.78;
        orange.tintFill = false;
        orange.tintTopLeft = 16737536;
        orange.tintTopRight = 16737536;
        orange.tintBottomLeft = 16737536;
        orange.tintBottomRight = 16737536;
        page2.add(orange);

        // green
        const green = new ColorButton(this, 558, 245);
        green.scaleX = 0.78;
        green.scaleY = 0.78;
        green.tintFill = false;
        green.tintTopLeft = 39168;
        green.tintTopRight = 39168;
        green.tintBottomLeft = 39168;
        green.tintBottomRight = 39168;
        page2.add(green);

        // red
        const red = new ColorButton(this, 602, 329);
        red.scaleX = 0.78;
        red.scaleY = 0.78;
        red.tintFill = false;
        red.tintTopLeft = 13369344;
        red.tintTopRight = 13369344;
        red.tintBottomLeft = 13369344;
        red.tintBottomRight = 13369344;
        page2.add(red);

        // blue
        const blue = new ColorButton(this, 475, 245);
        blue.scaleX = 0.78;
        blue.scaleY = 0.78;
        blue.tintFill = false;
        blue.tintTopLeft = 12901;
        blue.tintTopRight = 12901;
        blue.tintBottomLeft = 12901;
        blue.tintBottomRight = 12901;
        page2.add(blue);

        // black
        const black = new ColorButton(this, 519, 329);
        black.scaleX = 0.78;
        black.scaleY = 0.78;
        black.tintFill = false;
        black.tintTopLeft = 3289650;
        black.tintTopRight = 3289650;
        black.tintBottomLeft = 3289650;
        black.tintBottomRight = 3289650;
        page2.add(black);

        // tag
        const tag = new Tag1(this, 794, 473);
        tag.scaleX = 1.4985333198142567;
        tag.scaleY = 1.4985333198142567;
        tag.angle = 16;
        page2.add(tag);

        // tag_1
        const tag_1 = new Tag1(this, 838, 674);
        tag_1.scaleX = 1.406022420385302;
        tag_1.scaleY = 1.406022420385302;
        tag_1.angle = -23;
        page2.add(tag_1);

        // tag_2
        const tag_2 = new Tag1(this, 949, 748);
        tag_2.scaleX = 1.452140031717185;
        tag_2.scaleY = 1.452140031717185;
        tag_2.angle = -44;
        page2.add(tag_2);

        // tag_3
        const tag_3 = new Tag1(this, 1053, 777);
        tag_3.scaleX = 1.3842181543634866;
        tag_3.scaleY = 1.3842181543634866;
        tag_3.angle = -59;
        page2.add(tag_3);

        // tag_4
        const tag_4 = new Tag2(this, 1248, 415);
        tag_4.scaleX = 1.3171066257853319;
        tag_4.scaleY = 1.3171066257853319;
        tag_4.angle = 55;
        page2.add(tag_4);

        // openSecret
        const openSecret = this.add.rectangle(955, 393, 128, 128);
        openSecret.scaleX = 0.6766556121747187;
        openSecret.scaleY = 0.6766556121747187;
        openSecret.isFilled = true;
        openSecret.fillAlpha = 0;
        page2.add(openSecret);

        // secret_1
        const secret_1 = this.add.container(971, 603);
        secret_1.visible = false;
        page2.add(secret_1);

        // s2_png
        const s2_png = this.add.image(-200, -200, "clothing092022", "s2.png");
        secret_1.add(s2_png);

        // buyButton
        const buyButton = new BuyButton(this, -182, -194);
        buyButton.scaleX = 1.5267843727804766;
        buyButton.scaleY = 1.5267843727804766;
        secret_1.add(buyButton);

        // closeSecret
        const closeSecret = this.add.rectangle(-335, -101, 128, 128);
        closeSecret.scaleX = 0.2480241173226403;
        closeSecret.scaleY = 0.2480241173226403;
        closeSecret.isFilled = true;
        closeSecret.fillAlpha = 0;
        secret_1.add(closeSecret);

        // page1
        const page1 = this.add.container(0, 0);
        page1.visible = false;

        // p1
        const p1 = this.add.image(0, 0, "clothingcatalog", "page/page0001");
        p1.setOrigin(0, 0);
        page1.add(p1);

        // p1_png
        const p1_png = this.add.image(52.17263592119457, 27.128452413264654, "clothing092022", "p1.png");
        p1_png.scaleX = 0.9358428186142707;
        p1_png.scaleY = 0.9358428186142707;
        p1_png.setOrigin(0.0006189995940105637, 0.005338244963006869);
        page1.add(p1_png);

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
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13];

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

        // photoButton_4 (prefab fields)
        photoButton_4.item = 982;

        // photoButton_5 (prefab fields)
        photoButton_5.item = 904;

        // photoButton_6 (prefab fields)
        photoButton_6.item = 913;

        // photoButton_7 (prefab fields)
        photoButton_7.item = 924;

        // photoButton_8 (prefab fields)
        photoButton_8.item = 980;

        // photoButton_9 (prefab fields)
        photoButton_9.item = 983;

        // photoButton_10 (prefab fields)
        photoButton_10.item = 981;

        // photoButton_11 (prefab fields)
        photoButton_11.item = 923;

        // photoButton (prefab fields)
        photoButton.item = 985;

        // photoButton_1 (prefab fields)
        photoButton_1.item = 922;

        // photoButton_2 (prefab fields)
        photoButton_2.item = 908;

        // photoButton_3 (prefab fields)
        photoButton_3.item = 986;

        // buyButton_37 (prefab fields)
        buyButton_37.item = 221;

        // buyButton_38 (prefab fields)
        buyButton_38.item = 450;

        // buyButton_39 (prefab fields)
        buyButton_39.item = 223;

        // buyButton_32 (prefab fields)
        buyButton_32.item = 449;

        // buyButton_33 (prefab fields)
        buyButton_33.item = 286;

        // buyButton_34 (prefab fields)
        buyButton_34.item = 287;

        // buyButton_35 (prefab fields)
        buyButton_35.item = 411;

        // buyButton_36 (prefab fields)
        buyButton_36.item = 764;

        // buyButton_27 (prefab fields)
        buyButton_27.item = 769;

        // buyButton_28 (prefab fields)
        buyButton_28.item = 457;

        // buyButton_29 (prefab fields)
        buyButton_29.item = 251;

        // buyButton_30 (prefab fields)
        buyButton_30.item = 380;

        // buyButton_31 (prefab fields)
        buyButton_31.item = 342;

        // buyButton_20 (prefab fields)
        buyButton_20.item = 478;

        // buyButton_21 (prefab fields)
        buyButton_21.item = 181;

        // buyButton_22 (prefab fields)
        buyButton_22.item = 768;

        // buyButton_23 (prefab fields)
        buyButton_23.item = 308;

        // buyButton_24 (prefab fields)
        buyButton_24.item = 239;

        // buyButton_25 (prefab fields)
        buyButton_25.item = 362;

        // openSecret7 (components)
        const openSecret7SimpleButton = new SimpleButton(openSecret7);
        openSecret7SimpleButton.callback = () => this.secret7.visible=true;

        // buyButton_26 (prefab fields)
        buyButton_26.item = 131;

        // closeSecret7 (components)
        const closeSecret7SimpleButton = new SimpleButton(closeSecret7);
        closeSecret7SimpleButton.callback = () => this.secret7.visible=false;

        // tag2 (prefab fields)
        tag2.item = 464;

        // tag_5 (prefab fields)
        tag_5.item = 785;

        // buyButton_16 (prefab fields)
        buyButton_16.item = 108;

        // buyButton_17 (prefab fields)
        buyButton_17.item = 110;

        // buyButton_18 (prefab fields)
        buyButton_18.item = 781;

        // buyButton_19 (prefab fields)
        buyButton_19.item = 351;

        // buyButton_12 (prefab fields)
        buyButton_12.item = 660;

        // buyButton_13 (prefab fields)
        buyButton_13.item = 782;

        // buyButton_14 (prefab fields)
        buyButton_14.item = 417;

        // buyButton_15 (prefab fields)
        buyButton_15.item = 780;

        // buyButton_5 (prefab fields)
        buyButton_5.item = 437;

        // buyButton_6 (prefab fields)
        buyButton_6.item = 275;

        // buyButton_7 (prefab fields)
        buyButton_7.item = 307;

        // buyButton_8 (prefab fields)
        buyButton_8.item = 291;

        // buyButton_9 (prefab fields)
        buyButton_9.item = 324;

        // openSecretVikingElipse (components)
        const openSecretVikingElipseSimpleButton = new SimpleButton(openSecretVikingElipse);
        openSecretVikingElipseSimpleButton.callback = () => this.openVikingSecret();

        // closeSecret4_1 (components)
        const closeSecret4_1SimpleButton = new SimpleButton(closeSecret4_1);
        closeSecret4_1SimpleButton.callback = () => this.secret_4_1.visible=false;

        // buyButton_11 (prefab fields)
        buyButton_11.item = 452;

        // closeSecret4_2 (components)
        const closeSecret4_2SimpleButton = new SimpleButton(closeSecret4_2);
        closeSecret4_2SimpleButton.callback = () => this.secret_4_2.visible=false;

        // buyButton_10 (prefab fields)
        buyButton_10.item = 456;

        // buyButton_1 (prefab fields)
        buyButton_1.item = 713;

        // buyButton_2 (prefab fields)
        buyButton_2.item = 783;

        // buyButton_3 (prefab fields)
        buyButton_3.item = 784;

        // buyButton_4 (prefab fields)
        buyButton_4.item = 381;

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

        // tag (prefab fields)
        tag.item = 176;

        // tag_1 (prefab fields)
        tag_1.item = 188;

        // tag_2 (prefab fields)
        tag_2.item = 177;

        // tag_3 (prefab fields)
        tag_3.item = 189;

        // tag_4 (prefab fields)
        tag_4.item = 167;

        // openSecret (components)
        const openSecretSimpleButton = new SimpleButton(openSecret);
        openSecretSimpleButton.callback = () => this.secret_1.visible=true;

        // buyButton (prefab fields)
        buyButton.item = 187;

        // closeSecret (components)
        const closeSecretSimpleButton = new SimpleButton(closeSecret);
        closeSecretSimpleButton.callback = () => this.secret_1.visible=false;

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

        this.secret7 = secret7;
        this.secret_4_1 = secret_4_1;
        this.secret_4_2 = secret_4_2;
        this.secret_1 = secret_1;
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

    openVikingSecret(){
        if(this.viking==3){
            this.viking=0;
            this.secret_4_2.visible=true;
        }
        else{
            this.viking++;
            this.secret_4_1.visible=true;
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
