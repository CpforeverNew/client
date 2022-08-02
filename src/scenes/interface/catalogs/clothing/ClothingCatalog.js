import { Button, Interactive, SimpleButton } from '@components/components'

import Book from '@scenes/interface/books/Book'
import ColorButton from './buttons/ColorButton'
import FlagButton from './buttons/FlagButton'
import PhotoButton from './buttons/PhotoButton'
import Tag1 from './buttons/Tag1'
import Tag2 from './buttons/Tag2'


/* START OF COMPILED CODE */

export default class ClothingCatalog extends Book {

    constructor() {
        super("ClothingCatalog");

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

        this.load.pack("sep05-pack", "assets/media/interface/catalogs/clothing/sep05-pack.json");
        this.load.pack("clothingcatalog-pack", "assets/media/interface/catalogs/clothing/clothingcatalog-pack.json");
        this.load.pack("catalogs-master-pack", "assets/media/interface/catalogs/catalogs-master-pack.json");
        this.load.pack("jul22-pack", "assets/media/interface/catalogs/clothing/july22/jul22-pack.json");
        this.load.pack("may22-clothing", "assets/media/interface/catalogs/clothing/may22-clothing.json");
        this.load.pack("aug22-pack", "assets/media/interface/catalogs/clothing/aug22/aug22-pack.json");
    }

    /** @returns {void} */
    _create() {

        // block
        const block = this.add.rectangle(760, 484, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;

        // page15
        const page15 = this.add.container(0, 6);
        page15.visible = false;

        // p16
        const p16 = this.add.image(0, -77, "aug-22", "page/page0015.png");
        p16.setOrigin(0, 0);
        page15.add(p16);

        // pageLeft_1
        const pageLeft_1 = this.add.image(492, 590, "clothingcatalog", "page_left");
        pageLeft_1.setOrigin(0, 0);
        page15.add(pageLeft_1);

        // closeLeft
        const closeLeft = this.add.image(491, 39, "clothingcatalog", "close_left");
        closeLeft.setOrigin(0, 0);
        page15.add(closeLeft);

        // page14
        const page14 = this.add.container(0, -3);
        page14.visible = false;

        // p15
        const p15 = this.add.image(0, 0, "clothingcatalog", "page/page0015");
        p15.setOrigin(0, 0);
        page14.add(p15);

        // us
        const us = new FlagButton(this, 1231, 685);
        page14.add(us);

        // turkey
        const turkey = new FlagButton(this, 1112, 685);
        page14.add(turkey);

        // switzerland
        const switzerland = new FlagButton(this, 987, 685);
        page14.add(switzerland);

        // sweden
        const sweden = new FlagButton(this, 872, 685);
        page14.add(sweden);

        // spain
        const spain = new FlagButton(this, 1231, 547);
        page14.add(spain);

        // sa
        const sa = new FlagButton(this, 1112, 547);
        page14.add(sa);

        // russia
        const russia = new FlagButton(this, 987, 547);
        page14.add(russia);

        // portugal
        const portugal = new FlagButton(this, 872, 547);
        page14.add(portugal);

        // poland
        const poland = new FlagButton(this, 1231, 408);
        page14.add(poland);

        // norway
        const norway = new FlagButton(this, 1112, 408);
        page14.add(norway);

        // nz
        const nz = new FlagButton(this, 991, 408);
        page14.add(nz);

        // netherlands
        const netherlands = new FlagButton(this, 872, 408);
        page14.add(netherlands);

        // mexico
        const mexico = new FlagButton(this, 1230, 270);
        page14.add(mexico);

        // korea
        const korea = new FlagButton(this, 1113, 271);
        page14.add(korea);

        // japan
        const japan = new FlagButton(this, 988, 271);
        page14.add(japan);

        // jamaica
        const jamaica = new FlagButton(this, 871, 270);
        page14.add(jamaica);

        // italy
        const italy = new FlagButton(this, 1230, 129);
        page14.add(italy);

        // israel
        const israel = new FlagButton(this, 1113, 129);
        page14.add(israel);

        // ireland
        const ireland = new FlagButton(this, 986, 129);
        page14.add(ireland);

        // india
        const india = new FlagButton(this, 871, 129);
        page14.add(india);

        // hungary
        const hungary = new FlagButton(this, 657, 676);
        page14.add(hungary);

        // uk
        const uk = new FlagButton(this, 536, 677);
        page14.add(uk);

        // germany
        const germany = new FlagButton(this, 417, 677);
        page14.add(germany);

        // france
        const france = new FlagButton(this, 295, 676);
        page14.add(france);

        // finland
        const finland = new FlagButton(this, 652, 517);
        page14.add(finland);

        // egypt
        const egypt = new FlagButton(this, 532, 517);
        page14.add(egypt);

        // denmark
        const denmark = new FlagButton(this, 413, 517);
        page14.add(denmark);

        // colombia
        const colombia = new FlagButton(this, 294, 518);
        page14.add(colombia);

        // china
        const china = new FlagButton(this, 656, 366);
        page14.add(china);

        // chile
        const chile = new FlagButton(this, 537, 364);
        page14.add(chile);

        // canada
        const canada = new FlagButton(this, 416, 364);
        page14.add(canada);

        // brazil
        const brazil = new FlagButton(this, 295, 365);
        page14.add(brazil);

        // belize
        const belize = new FlagButton(this, 656, 210);
        page14.add(belize);

        // belgium
        const belgium = new FlagButton(this, 535, 210);
        page14.add(belgium);

        // australia
        const australia = new FlagButton(this, 418, 211);
        page14.add(australia);

        // argentina
        const argentina = new FlagButton(this, 295, 210);
        page14.add(argentina);

        // page13
        const page13 = this.add.container(0, -6);
        page13.visible = false;

        // p13
        const p13 = this.add.image(0, -77, "aug-22", "page/page0013.png");
        p13.setOrigin(0, 0);
        page13.add(p13);

        // photoButton8
        const photoButton8 = new PhotoButton(this, 608, 639);
        page13.add(photoButton8);

        // photoButton5
        const photoButton5 = new PhotoButton(this, 348, 379);
        page13.add(photoButton5);

        // photoButton6
        const photoButton6 = new PhotoButton(this, 608, 379);
        page13.add(photoButton6);

        // photoButton7
        const photoButton7 = new PhotoButton(this, 348, 639);
        page13.add(photoButton7);

        // photo5
        const photo5 = this.add.image(348, 379, "aug-22", "photo/5.png");
        photo5.scaleX = 0.5;
        photo5.scaleY = 0.5;
        page13.add(photo5);

        // photo6
        const photo6 = this.add.image(611, 379, "aug-22", "photo/6.png");
        photo6.scaleX = 0.43;
        photo6.scaleY = 0.43;
        page13.add(photo6);

        // photo7
        const photo7 = this.add.image(348, 639, "aug-22", "photo/7.png");
        photo7.scaleX = 0.5;
        photo7.scaleY = 0.5;
        page13.add(photo7);

        // photo8
        const photo8 = this.add.image(608, 644, "aug-22", "photo/8.png");
        photo8.scaleX = 0.5;
        photo8.scaleY = 0.5;
        page13.add(photo8);

        // penguin5
        const penguin5 = this.add.image(348, 389, "clothingcatalog", "photo/penguin");
        page13.add(penguin5);

        // penguin6
        const penguin6 = this.add.image(608, 389, "clothingcatalog", "photo/penguin");
        page13.add(penguin6);

        // penguin7
        const penguin7 = this.add.image(348, 649, "clothingcatalog", "photo/penguin");
        page13.add(penguin7);

        // penguin8
        const penguin8 = this.add.image(608, 649, "clothingcatalog", "photo/penguin");
        page13.add(penguin8);

        // photoButton9
        const photoButton9 = new PhotoButton(this, 930, 375);
        page13.add(photoButton9);

        // photoButton10
        const photoButton10 = new PhotoButton(this, 1190, 375);
        page13.add(photoButton10);

        // photoButton11
        const photoButton11 = new PhotoButton(this, 930, 635);
        page13.add(photoButton11);

        // photoButton12
        const photoButton12 = new PhotoButton(this, 1190, 635);
        page13.add(photoButton12);

        // photo9
        const photo9 = this.add.image(930, 375, "aug-22", "photo/9.png");
        photo9.scaleX = 0.5;
        photo9.scaleY = 0.5;
        page13.add(photo9);

        // photo10
        const photo10 = this.add.image(1190, 375, "aug-22", "photo/10.png");
        photo10.scaleX = 0.5;
        photo10.scaleY = 0.5;
        page13.add(photo10);

        // photo11
        const photo11 = this.add.image(930, 628, "aug-22", "photo/11.png");
        photo11.scaleX = 0.5;
        photo11.scaleY = 0.5;
        page13.add(photo11);

        // photo12
        const photo12 = this.add.image(1190, 635, "aug-22", "photo/12.png");
        photo12.scaleX = 0.5;
        photo12.scaleY = 0.5;
        page13.add(photo12);

        // penguin9
        const penguin9 = this.add.image(930, 385, "clothingcatalog", "photo/penguin");
        page13.add(penguin9);

        // penguin10
        const penguin10 = this.add.image(1190, 385, "clothingcatalog", "photo/penguin");
        page13.add(penguin10);

        // penguin11
        const penguin11 = this.add.image(930, 645, "clothingcatalog", "photo/penguin");
        page13.add(penguin11);

        // penguin12
        const penguin12 = this.add.image(1190, 645, "clothingcatalog", "photo/penguin");
        page13.add(penguin12);

        // page12
        const page12 = this.add.container(0, 0);
        page12.visible = false;

        // p12
        const p12 = this.add.image(0, -80, "aug-22", "page/page0012.png");
        p12.setOrigin(0, 0);
        page12.add(p12);

        // tag_53
        const tag_53 = new Tag2(this, 609, 489);
        tag_53.angle = 12;
        page12.add(tag_53);

        // tag_54
        const tag_54 = new Tag1(this, 286, 598);
        tag_54.angle = -30;
        page12.add(tag_54);

        // tag_55
        const tag_55 = new Tag1(this, 220, 259);
        tag_55.angle = -18;
        page12.add(tag_55);

        // tag_56
        const tag_56 = new Tag1(this, 420, 163);
        tag_56.angle = 19;
        page12.add(tag_56);

        // photoButton4
        const photoButton4 = new PhotoButton(this, 1170, 628);
        page12.add(photoButton4);

        // photoButton3
        const photoButton3 = new PhotoButton(this, 910, 629);
        page12.add(photoButton3);

        // photoButton2
        const photoButton2 = new PhotoButton(this, 1170, 369);
        page12.add(photoButton2);

        // photoButton1
        const photoButton1 = new PhotoButton(this, 910, 369);
        page12.add(photoButton1);

        // photo4
        const photo4 = this.add.image(1170, 630, "aug-22", "photo/4.png");
        photo4.scaleX = 0.5;
        photo4.scaleY = 0.5;
        page12.add(photo4);

        // photo3
        const photo3 = this.add.image(918, 631, "aug-22", "photo/3.png");
        photo3.scaleX = 0.5;
        photo3.scaleY = 0.5;
        page12.add(photo3);

        // photo2
        const photo2 = this.add.image(1170, 367, "aug-22", "photo/2.png");
        photo2.scaleX = 0.5;
        photo2.scaleY = 0.5;
        page12.add(photo2);

        // photo1
        const photo1 = this.add.image(910, 367, "aug-22", "photo/1.png");
        photo1.scaleX = 0.5;
        photo1.scaleY = 0.5;
        page12.add(photo1);

        // penguin4
        const penguin4 = this.add.image(1170, 640, "clothingcatalog", "photo/penguin");
        page12.add(penguin4);

        // penguin3
        const penguin3 = this.add.image(910, 638, "clothingcatalog", "photo/penguin");
        page12.add(penguin3);

        // penguin2
        const penguin2 = this.add.image(1170, 380, "clothingcatalog", "photo/penguin");
        page12.add(penguin2);

        // penguin1
        const penguin1 = this.add.image(910, 377, "clothingcatalog", "photo/penguin");
        page12.add(penguin1);

        // secret_7
        const secret_7 = this.add.rectangle(339, 110, 135, 160);
        secret_7.scaleX = 0.4281282457840876;
        secret_7.scaleY = 0.5520472126275546;
        secret_7.alpha = 0.00001;
        secret_7.isFilled = true;
        secret_7.fillColor = 65280;
        page12.add(secret_7);

        // page11
        const page11 = this.add.container(0, 3);
        page11.visible = false;

        // p11
        const p11 = this.add.image(0, -82, "aug-22", "page/page0011.png");
        p11.setOrigin(0, 0);
        page11.add(p11);

        // tag_50
        const tag_50 = new Tag1(this, 285, 280);
        tag_50.angle = -22;
        page11.add(tag_50);

        // tag_51
        const tag_51 = new Tag2(this, 1196, 527);
        tag_51.angle = 14;
        page11.add(tag_51);

        // tag_52
        const tag_52 = new Tag2(this, 1129, 198);
        tag_52.angle = -22;
        page11.add(tag_52);

        // secret_6
        const secret_6 = this.add.rectangle(1033, 108, 135, 160);
        secret_6.scaleX = 0.6456573414587834;
        secret_6.scaleY = 0.5520472126275546;
        secret_6.alpha = 0.00001;
        secret_6.isFilled = true;
        secret_6.fillColor = 65280;
        page11.add(secret_6);

        // page10
        const page10 = this.add.container(0, 1);
        page10.visible = false;

        // p10
        const p10 = this.add.image(0, -82, "aug-22", "page/page0010.png");
        p10.setOrigin(0, 0);
        page10.add(p10);

        // tag_46
        const tag_46 = new Tag1(this, 339, 419);
        tag_46.angle = -11;
        page10.add(tag_46);

        // tag_47
        const tag_47 = new Tag1(this, 842, 359);
        tag_47.angle = -21;
        page10.add(tag_47);

        // tag_48
        const tag_48 = new Tag2(this, 1159, 672);
        tag_48.angle = 16;
        page10.add(tag_48);

        // tag_49
        const tag_49 = new Tag2(this, 581, 501);
        tag_49.angle = -44;
        page10.add(tag_49);

        // secret_5
        const secret_5 = this.add.rectangle(373, 254, 135, 160);
        secret_5.scaleX = 0.6456573414587834;
        secret_5.scaleY = 0.283438579871872;
        secret_5.alpha = 0.00001;
        secret_5.isFilled = true;
        secret_5.fillColor = 65280;
        page10.add(secret_5);

        // page9
        const page9 = this.add.container(0, 1);
        page9.visible = false;

        // p9
        const p9 = this.add.image(0, -83, "aug-22", "page/page0009.png");
        p9.setOrigin(0, 0);
        page9.add(p9);

        // tag_39
        const tag_39 = new Tag1(this, 320, 220);
        tag_39.angle = 24;
        page9.add(tag_39);

        // tag_40
        const tag_40 = new Tag2(this, 609, 430);
        tag_40.angle = 15;
        page9.add(tag_40);

        // tag_41
        const tag_41 = new Tag1(this, 304, 474);
        tag_41.angle = -17;
        page9.add(tag_41);

        // tag_42
        const tag_42 = new Tag1(this, 303, 605);
        tag_42.angle = -18;
        page9.add(tag_42);

        // tag_43
        const tag_43 = new Tag1(this, 958, 120);
        tag_43.angle = 14;
        page9.add(tag_43);

        // tag_44
        const tag_44 = new Tag1(this, 803, 326);
        tag_44.angle = -18;
        page9.add(tag_44);

        // tag_45
        const tag_45 = new Tag2(this, 1141, 439);
        tag_45.angle = 16;
        page9.add(tag_45);

        // secret
        const secret = this.add.rectangle(1049, 233, 135, 160);
        secret.scaleX = 0.7568619808686627;
        secret.scaleY = 0.4100258205122569;
        secret.alpha = 0.00001;
        secret.isFilled = true;
        secret.fillColor = 65280;
        page9.add(secret);

        // page8
        const page8 = this.add.container(0, 2);
        page8.visible = false;

        // p8
        const p8 = this.add.image(0, -83, "aug-22", "page/page0008.png");
        p8.setOrigin(0, 0);
        page8.add(p8);

        // tag_35
        const tag_35 = new Tag1(this, 817, 154);
        tag_35.angle = 18;
        page8.add(tag_35);

        // tag_36
        const tag_36 = new Tag2(this, 997, 410);
        tag_36.angle = -11;
        page8.add(tag_36);

        // tag_31
        const tag_31 = new Tag2(this, 443, 119);
        tag_31.angle = -20;
        page8.add(tag_31);

        // tag_38
        const tag_38 = new Tag1(this, 979, 502);
        tag_38.angle = 23;
        page8.add(tag_38);

        // tag_37
        const tag_37 = new Tag2(this, 1196, 426);
        tag_37.angle = -51;
        page8.add(tag_37);

        // tag_34
        const tag_34 = new Tag1(this, 540, 218);
        tag_34.angle = 36;
        page8.add(tag_34);

        // tag_33
        const tag_33 = new Tag1(this, 293, 329);
        tag_33.angle = 22;
        page8.add(tag_33);

        // tag_32
        const tag_32 = new Tag1(this, 252, 666);
        tag_32.angle = -20;
        page8.add(tag_32);

        // secret_4
        const secret_4 = this.add.rectangle(1255, 307, 135, 160);
        secret_4.scaleX = 0.7568619808686627;
        secret_4.scaleY = 0.4100258205122569;
        secret_4.alpha = 0.00001;
        secret_4.isFilled = true;
        secret_4.fillColor = 65280;
        page8.add(secret_4);

        // page7
        const page7 = this.add.container(0, 4);
        page7.visible = false;

        // p7
        const p7 = this.add.image(0, -85, "aug-22", "page/page0007.png");
        p7.setOrigin(0, 0);
        page7.add(p7);

        // tag_26
        const tag_26 = new Tag1(this, 373, 97);
        tag_26.angle = 23;
        page7.add(tag_26);

        // tag_27
        const tag_27 = new Tag2(this, 590, 472);
        tag_27.angle = -25;
        page7.add(tag_27);

        // tag_28
        const tag_28 = new Tag1(this, 820, 109);
        tag_28.angle = 17;
        page7.add(tag_28);

        // tag_29
        const tag_29 = new Tag2(this, 1120, 165);
        tag_29.angle = -16;
        page7.add(tag_29);

        // tag_30
        const tag_30 = new Tag1(this, 806, 466);
        tag_30.angle = -19;
        page7.add(tag_30);

        // secret_3
        const secret_3 = this.add.rectangle(744, 335, 135, 160);
        secret_3.scaleX = 0.33405165689980654;
        secret_3.scaleY = 0.31826832497179797;
        secret_3.alpha = 0.00001;
        secret_3.isFilled = true;
        secret_3.fillColor = 65280;
        page7.add(secret_3);

        // page6
        const page6 = this.add.container(0, 0);
        page6.visible = false;

        // p6
        const p6 = this.add.image(0, -81, "aug-22", "page/page0006.png");
        p6.setOrigin(0, 0);
        page6.add(p6);

        // tag_21
        const tag_21 = new Tag2(this, 573, 367);
        tag_21.angle = 24;
        page6.add(tag_21);

        // tag_23
        const tag_23 = new Tag1(this, 800, 258);
        tag_23.angle = -17;
        page6.add(tag_23);

        // tag_24
        const tag_24 = new Tag2(this, 1199, 385);
        tag_24.angle = -18;
        page6.add(tag_24);

        // tag_25
        const tag_25 = new Tag1(this, 945, 483);
        tag_25.angle = 19;
        page6.add(tag_25);

        // tag_22
        const tag_22 = new Tag2(this, 1078, 105);
        tag_22.angle = 10;
        page6.add(tag_22);

        // secret_2
        const secret_2 = this.add.rectangle(395, 124, 135, 160);
        secret_2.scaleX = 0.20330625988017983;
        secret_2.scaleY = 0.31826832497179797;
        secret_2.alpha = 0.00001;
        secret_2.isFilled = true;
        secret_2.fillColor = 65280;
        page6.add(secret_2);

        // page5
        const page5 = this.add.container(0, -1);
        page5.visible = false;

        // p5
        const p5 = this.add.image(0, -81, "aug-22", "page/page0005.png");
        p5.setOrigin(0, 0);
        page5.add(p5);

        // tag_11
        const tag_11 = new Tag1(this, 449, 74);
        tag_11.angle = 17;
        page5.add(tag_11);

        // tag_12
        const tag_12 = new Tag2(this, 606, 526);
        tag_12.angle = 36;
        page5.add(tag_12);

        // tag_13
        const tag_13 = new Tag2(this, 488, 659);
        tag_13.angle = 21;
        page5.add(tag_13);

        // tag_14
        const tag_14 = new Tag2(this, 334, 260);
        tag_14.angle = -44;
        page5.add(tag_14);

        // tag_16
        const tag_16 = new Tag1(this, 912, 235);
        tag_16.scaleX = 0.7;
        tag_16.scaleY = 0.7;
        tag_16.angle = 9;
        page5.add(tag_16);

        // tag_17
        const tag_17 = new Tag1(this, 1083, 181);
        tag_17.scaleX = 0.7;
        tag_17.scaleY = 0.7;
        tag_17.angle = 9;
        page5.add(tag_17);

        // tag_18
        const tag_18 = new Tag1(this, 1049, 754);
        tag_18.scaleX = 0.7;
        tag_18.scaleY = 0.7;
        tag_18.angle = -25;
        page5.add(tag_18);

        // tag_15
        const tag_15 = new Tag2(this, 947, 335);
        tag_15.scaleX = 0.7;
        tag_15.scaleY = 0.7;
        tag_15.angle = 16;
        page5.add(tag_15);

        // tag_20
        const tag_20 = new Tag2(this, 1118, 553);
        tag_20.scaleX = 0.7;
        tag_20.scaleY = 0.7;
        tag_20.angle = 7;
        page5.add(tag_20);

        // tag_19
        const tag_19 = new Tag2(this, 957, 660);
        tag_19.scaleX = 0.7;
        tag_19.scaleY = 0.7;
        tag_19.angle = 7;
        page5.add(tag_19);

        // secret_1
        const secret_1 = this.add.rectangle(949, 114, 135, 160);
        secret_1.scaleX = 0.4001033463251785;
        secret_1.scaleY = 0.5104989480990085;
        secret_1.alpha = 0.00001;
        secret_1.isFilled = true;
        secret_1.fillColor = 65280;
        page5.add(secret_1);

        // page4
        const page4 = this.add.container(0, -8);
        page4.visible = false;

        // p4
        const p4 = this.add.image(0, -76, "aug-22", "page/page0004.png");
        p4.setOrigin(0, 0);
        page4.add(p4);

        // tag_4
        const tag_4 = new Tag1(this, 213, 364);
        tag_4.scaleX = 0.7;
        tag_4.scaleY = 0.7;
        tag_4.angle = -41;
        page4.add(tag_4);

        // tag_5
        const tag_5 = new Tag1(this, 375, 305);
        tag_5.scaleX = 0.7;
        tag_5.scaleY = 0.7;
        tag_5.angle = -41;
        page4.add(tag_5);

        // tag_7
        const tag_7 = new Tag1(this, 206, 593);
        tag_7.scaleX = 0.7;
        tag_7.scaleY = 0.7;
        tag_7.angle = -32.00000000000006;
        page4.add(tag_7);

        // tag_8
        const tag_8 = new Tag1(this, 421, 575);
        tag_8.scaleX = 0.7;
        tag_8.scaleY = 0.7;
        tag_8.angle = -32.00000000000006;
        page4.add(tag_8);

        // tag_9
        const tag_9 = new Tag1(this, 540, 692);
        tag_9.scaleX = 0.7;
        tag_9.scaleY = 0.7;
        tag_9.angle = -32.00000000000006;
        page4.add(tag_9);

        // tag_10
        const tag_10 = new Tag1(this, 333, 708);
        tag_10.scaleX = 0.7;
        tag_10.scaleY = 0.7;
        tag_10.angle = -32.00000000000006;
        page4.add(tag_10);

        // tag_6
        const tag_6 = new Tag2(this, 671, 319);
        tag_6.scaleX = 0.7;
        tag_6.scaleY = 0.7;
        tag_6.angle = 23;
        page4.add(tag_6);

        // secret_hex_3
        const secret_hex_3 = this.add.rectangle(1054, 708, 135, 160);
        secret_hex_3.scaleX = 0.8126942847066034;
        secret_hex_3.scaleY = 0.4066250432874592;
        secret_hex_3.alpha = 0.00001;
        secret_hex_3.isFilled = true;
        secret_hex_3.fillColor = 65280;
        page4.add(secret_hex_3);

        // page3
        const page3 = this.add.container(0, -3);
        page3.visible = false;

        // p3
        const p3 = this.add.image(0, -80, "aug-22", "page/page0003.png");
        p3.setOrigin(0, 0);
        page3.add(p3);

        // tag2
        const tag2 = new Tag2(this, 575, 310);
        tag2.angle = -24;
        page3.add(tag2);

        // tag_3
        const tag_3 = new Tag2(this, 1173, 530);
        tag_3.angle = 20;
        page3.add(tag_3);

        // tag1
        const tag1 = new Tag1(this, 325, 138);
        tag1.angle = 20;
        page3.add(tag1);

        // tag_2
        const tag_2 = new Tag1(this, 839, 678);
        tag_2.angle = -35.00000000000006;
        page3.add(tag_2);

        // tag_1
        const tag_1 = new Tag1(this, 923, 298);
        tag_1.angle = 65;
        page3.add(tag_1);

        // tag
        const tag = new Tag1(this, 236, 526);
        tag.angle = -26;
        page3.add(tag);

        // secret_hex_2
        const secret_hex_2 = this.add.rectangle(809, 212, 135, 160);
        secret_hex_2.scaleX = 0.3217586194875338;
        secret_hex_2.scaleY = 0.325132808240461;
        secret_hex_2.alpha = 0.00001;
        secret_hex_2.isFilled = true;
        secret_hex_2.fillColor = 65280;
        page3.add(secret_hex_2);

        // page2
        const page2 = this.add.container(0, 0);
        page2.visible = false;

        // p2
        const p2 = this.add.image(0, -82, "aug-22", "page/page0002.png");
        p2.setOrigin(0, 0);
        page2.add(p2);

        // aqua
        const aqua = new ColorButton(this, 687, 270);
        aqua.scaleX = 0.7;
        aqua.scaleY = 0.7;
        aqua.tintTopLeft = 4718591;
        aqua.tintTopRight = 4718591;
        aqua.tintBottomLeft = 4718591;
        aqua.tintBottomRight = 4718591;
        page2.add(aqua);

        // lime
        const lime = new ColorButton(this, 653, 497);
        lime.scaleX = 0.7;
        lime.scaleY = 0.7;
        lime.tintFill = false;
        lime.tintTopLeft = 7536384;
        lime.tintTopRight = 7536384;
        lime.tintBottomLeft = 7536384;
        lime.tintBottomRight = 7536384;
        page2.add(lime);

        // purple
        const purple = new ColorButton(this, 578, 345);
        purple.scaleX = 0.7;
        purple.scaleY = 0.7;
        purple.tintFill = false;
        purple.tintTopLeft = 6619289;
        purple.tintTopRight = 6619289;
        purple.tintBottomLeft = 6619289;
        purple.tintBottomRight = 6619289;
        page2.add(purple);

        // darkGreen
        const darkGreen = new ColorButton(this, 654, 345);
        darkGreen.scaleX = 0.7;
        darkGreen.scaleY = 0.7;
        darkGreen.tintFill = false;
        darkGreen.tintTopLeft = 25856;
        darkGreen.tintTopRight = 25856;
        darkGreen.tintBottomLeft = 25856;
        darkGreen.tintBottomRight = 25856;
        page2.add(darkGreen);

        // pink
        const pink = new ColorButton(this, 617, 422);
        pink.scaleX = 0.7;
        pink.scaleY = 0.7;
        pink.tintFill = false;
        pink.tintTopLeft = 16724633;
        pink.tintTopRight = 16724633;
        pink.tintBottomLeft = 16724633;
        pink.tintBottomRight = 16724633;
        page2.add(pink);

        // lightblue
        const lightblue = new ColorButton(this, 578, 497);
        lightblue.scaleX = 0.7;
        lightblue.scaleY = 0.7;
        lightblue.tintFill = false;
        lightblue.tintTopLeft = 39372;
        lightblue.tintTopRight = 39372;
        lightblue.tintBottomLeft = 39372;
        lightblue.tintBottomRight = 39372;
        page2.add(lightblue);

        // yellow
        const yellow = new ColorButton(this, 503, 345);
        yellow.scaleX = 0.7;
        yellow.scaleY = 0.7;
        yellow.tintFill = false;
        yellow.tintTopLeft = 16763904;
        yellow.tintTopRight = 16763904;
        yellow.tintBottomLeft = 16763904;
        yellow.tintBottomRight = 16763904;
        page2.add(yellow);

        // peach
        const peach = new ColorButton(this, 654, 194);
        peach.scaleX = 0.7;
        peach.scaleY = 0.7;
        peach.tintFill = false;
        peach.tintTopLeft = 16737637;
        peach.tintTopRight = 16737637;
        peach.tintBottomLeft = 16737637;
        peach.tintBottomRight = 16737637;
        page2.add(peach);

        // brown
        const brown = new ColorButton(this, 542, 422);
        brown.scaleX = 0.7;
        brown.scaleY = 0.7;
        brown.tintFill = false;
        brown.tintTopLeft = 10052864;
        brown.tintTopRight = 10052864;
        brown.tintBottomLeft = 10052864;
        brown.tintBottomRight = 10052864;
        page2.add(brown);

        // orange
        const orange = new ColorButton(this, 503, 497);
        orange.scaleX = 0.7;
        orange.scaleY = 0.7;
        orange.tintFill = false;
        orange.tintTopLeft = 16737536;
        orange.tintTopRight = 16737536;
        orange.tintBottomLeft = 16737536;
        orange.tintBottomRight = 16737536;
        page2.add(orange);

        // green
        const green = new ColorButton(this, 578, 194);
        green.scaleX = 0.7;
        green.scaleY = 0.7;
        green.tintFill = false;
        green.tintTopLeft = 39168;
        green.tintTopRight = 39168;
        green.tintBottomLeft = 39168;
        green.tintBottomRight = 39168;
        page2.add(green);

        // red
        const red = new ColorButton(this, 617, 270);
        red.scaleX = 0.7;
        red.scaleY = 0.7;
        red.tintFill = false;
        red.tintTopLeft = 13369344;
        red.tintTopRight = 13369344;
        red.tintBottomLeft = 13369344;
        red.tintBottomRight = 13369344;
        page2.add(red);

        // blue
        const blue = new ColorButton(this, 503, 194);
        blue.scaleX = 0.7;
        blue.scaleY = 0.7;
        blue.tintFill = false;
        blue.tintTopLeft = 12901;
        blue.tintTopRight = 12901;
        blue.tintBottomLeft = 12901;
        blue.tintBottomRight = 12901;
        page2.add(blue);

        // black
        const black = new ColorButton(this, 541, 269);
        black.scaleX = 0.7;
        black.scaleY = 0.7;
        black.tintFill = false;
        black.tintTopLeft = 3289650;
        black.tintTopRight = 3289650;
        black.tintBottomLeft = 3289650;
        black.tintBottomRight = 3289650;
        page2.add(black);

        // secret_hex
        const secret_hex = this.add.rectangle(263, 565, 135, 160);
        secret_hex.scaleX = 0.5714166201025659;
        secret_hex.scaleY = 0.5682791587991533;
        secret_hex.alpha = 0.00001;
        secret_hex.isFilled = true;
        secret_hex.fillColor = 65280;
        page2.add(secret_hex);

        // page1
        const page1 = this.add.container(0, 0);
        page1.visible = false;

        // p1
        const p1 = this.add.image(0, -82, "aug-22", "page/page0001.png");
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

        // secret_hex_1
        const secret_hex_1 = this.add.rectangle(646, 315, 135, 160);
        secret_hex_1.scaleX = 0.9433455353966516;
        secret_hex_1.scaleY = 0.5104989480990085;
        secret_hex_1.alpha = 0.00001;
        secret_hex_1.isFilled = true;
        secret_hex_1.fillColor = 65280;
        page1.add(secret_hex_1);

        // buttons
        const buttons = this.add.container(189, 41);
        buttons.visible = false;

        // coins
        const coins = this.add.text(1134, 796, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // page_left
        const page_left = this.add.image(2, 548, "catalogs-master", "prevpagebtn");
        page_left.setOrigin(0, 0);
        buttons.add(page_left);

        // page_right_1
        const page_right_1 = this.add.image(1031, 546, "catalogs-master", "nextpagebtn");
        page_right_1.setOrigin(0, 0);
        buttons.add(page_right_1);

        // close_right_1
        const close_right_1 = this.add.image(1030, 2, "catalogs-master", "catclosebtn");
        close_right_1.setOrigin(0, 0);
        buttons.add(close_right_1);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15];

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

        // photoButton8 (prefab fields)
        photoButton8.item = 938;

        // photoButton5 (prefab fields)
        photoButton5.item = 9014;

        // photoButton6 (prefab fields)
        photoButton6.item = 9013;

        // photoButton7 (prefab fields)
        photoButton7.item = 937;

        // photoButton9 (prefab fields)
        photoButton9.item = 9011;

        // photoButton10 (prefab fields)
        photoButton10.item = 978;

        // photoButton11 (prefab fields)
        photoButton11.item = 933;

        // photoButton12 (prefab fields)
        photoButton12.item = 936;

        // tag_53 (prefab fields)
        tag_53.item = 4024;

        // tag_54 (prefab fields)
        tag_54.item = 175;

        // tag_55 (prefab fields)
        tag_55.item = 5010;

        // tag_56 (prefab fields)
        tag_56.item = 658;

        // photoButton4 (prefab fields)
        photoButton4.item = 908;

        // photoButton3 (prefab fields)
        photoButton3.item = 925;

        // photoButton2 (prefab fields)
        photoButton2.item = 904;

        // photoButton1 (prefab fields)
        photoButton1.item = 9016;

        // secret_7 (components)
        const secret_7SimpleButton = new SimpleButton(secret_7);
        secret_7SimpleButton.callback = () => this.interface.prompt.showItem(6073);;

        // tag_50 (prefab fields)
        tag_50.item = 10213;

        // tag_51 (prefab fields)
        tag_51.item = 249;

        // tag_52 (prefab fields)
        tag_52.item = 657;

        // secret_6 (components)
        const secret_6SimpleButton = new SimpleButton(secret_6);
        secret_6SimpleButton.callback = () => this.interface.prompt.showItem(4448);;

        // tag_46 (prefab fields)
        tag_46.item = 1026;

        // tag_47 (prefab fields)
        tag_47.item = 243;

        // tag_48 (prefab fields)
        tag_48.item = 365;

        // tag_49 (prefab fields)
        tag_49.item = 14041;

        // secret_5 (components)
        const secret_5SimpleButton = new SimpleButton(secret_5);
        secret_5SimpleButton.callback = () => this.interface.prompt.showItem(4147);;

        // tag_39 (prefab fields)
        tag_39.item = 1021;

        // tag_40 (prefab fields)
        tag_40.item = 4023;

        // tag_41 (prefab fields)
        tag_41.item = 179;

        // tag_42 (prefab fields)
        tag_42.item = 5011;

        // tag_43 (prefab fields)
        tag_43.item = 11020;

        // tag_44 (prefab fields)
        tag_44.item = 10380;

        // tag_45 (prefab fields)
        tag_45.item = 226;

        // secret (components)
        const secretSimpleButton = new SimpleButton(secret);
        secretSimpleButton.callback = () => this.interface.prompt.showItem(1595);;

        // tag_35 (prefab fields)
        tag_35.item = 1030;

        // tag_36 (prefab fields)
        tag_36.item = 4050;

        // tag_31 (prefab fields)
        tag_31.item = 5014;

        // tag_38 (prefab fields)
        tag_38.item = 10236;

        // tag_37 (prefab fields)
        tag_37.item = 10401;

        // tag_34 (prefab fields)
        tag_34.item = 234;

        // tag_33 (prefab fields)
        tag_33.item = 1027;

        // tag_32 (prefab fields)
        tag_32.item = 4049;

        // secret_4 (components)
        const secret_4SimpleButton = new SimpleButton(secret_4);
        secret_4SimpleButton.callback = () => this.interface.prompt.showItem(443);;

        // tag_26 (prefab fields)
        tag_26.item = 1029;

        // tag_27 (prefab fields)
        tag_27.item = 4047;

        // tag_28 (prefab fields)
        tag_28.item = 5015;

        // tag_29 (prefab fields)
        tag_29.item = 1028;

        // tag_30 (prefab fields)
        tag_30.item = 4048;

        // secret_3 (components)
        const secret_3SimpleButton = new SimpleButton(secret_3);
        secret_3SimpleButton.callback = () => this.interface.prompt.showItem(24080);;

        // tag_21 (prefab fields)
        tag_21.item = 4063;

        // tag_23 (prefab fields)
        tag_23.item = 4044;

        // tag_24 (prefab fields)
        tag_24.item = 484;

        // tag_25 (prefab fields)
        tag_25.item = 4043;

        // tag_22 (prefab fields)
        tag_22.item = 402;

        // secret_2 (components)
        const secret_2SimpleButton = new SimpleButton(secret_2);
        secret_2SimpleButton.callback = () => this.interface.prompt.showItem(2047);;

        // tag_11 (prefab fields)
        tag_11.item = 652;

        // tag_12 (prefab fields)
        tag_12.item = 377;

        // tag_13 (prefab fields)
        tag_13.item = 378;

        // tag_14 (prefab fields)
        tag_14.item = 10671;

        // tag_16 (prefab fields)
        tag_16.item = 4057;

        // tag_17 (prefab fields)
        tag_17.item = 206;

        // tag_18 (prefab fields)
        tag_18.item = 4062;

        // tag_15 (prefab fields)
        tag_15.item = 4059;

        // tag_20 (prefab fields)
        tag_20.item = 4061;

        // tag_19 (prefab fields)
        tag_19.item = 781;

        // secret_1 (components)
        const secret_1SimpleButton = new SimpleButton(secret_1);
        secret_1SimpleButton.callback = () => this.interface.prompt.showItem(353);;

        // tag_4 (prefab fields)
        tag_4.item = 1539;

        // tag_5 (prefab fields)
        tag_5.item = 1038;

        // tag_7 (prefab fields)
        tag_7.item = 221;

        // tag_8 (prefab fields)
        tag_8.item = 222;

        // tag_9 (prefab fields)
        tag_9.item = 223;

        // tag_10 (prefab fields)
        tag_10.item = 224;

        // tag_6 (prefab fields)
        tag_6.item = 406;

        // secret_hex_3 (components)
        const secret_hex_3SimpleButton = new SimpleButton(secret_hex_3);
        secret_hex_3SimpleButton.callback = () => this.interface.prompt.showItem(262);;

        // tag2 (prefab fields)
        tag2.item = 3013;

        // tag_3 (prefab fields)
        tag_3.item = 4058;

        // tag1 (prefab fields)
        tag1.item = 1039;

        // tag_2 (prefab fields)
        tag_2.item = 3012;

        // tag_1 (prefab fields)
        tag_1.item = 10662;

        // tag (prefab fields)
        tag.item = 4060;

        // secret_hex_2 (components)
        const secret_hex_2SimpleButton = new SimpleButton(secret_hex_2);
        secret_hex_2SimpleButton.callback = () => this.interface.prompt.showItem(250);;

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

        // secret_hex (components)
        const secret_hexSimpleButton = new SimpleButton(secret_hex);
        secret_hexSimpleButton.callback = () => this.interface.prompt.showItem(240);;

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

        // secret_hex_1 (components)
        const secret_hex_1SimpleButton = new SimpleButton(secret_hex_1);
        secret_hex_1SimpleButton.callback = () => this.interface.prompt.showItem(783);;

        // page_left (components)
        const page_leftButton = new Button(page_left);
        page_leftButton.spriteName = "prevpagebtn";
        page_leftButton.callback = () => this.prevPage();
        page_leftButton.activeFrame = false;
        page_leftButton.pixelPerfect = true;

        // page_right_1 (components)
        const page_right_1Button = new Button(page_right_1);
        page_right_1Button.spriteName = "nextpagebtn";
        page_right_1Button.callback = () => this.nextPage();
        page_right_1Button.activeFrame = false;
        page_right_1Button.pixelPerfect = true;

        // close_right_1 (components)
        const close_right_1Button = new Button(close_right_1);
        close_right_1Button.spriteName = "catclosebtn";
        close_right_1Button.callback = () => this.close();
        close_right_1Button.activeFrame = false;
        close_right_1Button.pixelPerfect = true;

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
