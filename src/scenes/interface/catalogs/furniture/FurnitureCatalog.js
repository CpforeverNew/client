import { Button, Interactive, SimpleButton, Zone } from '@components/components'

import Book from '@scenes/interface/books/Book'
import BuyButton from './buttons/BuyButton'


/* START OF COMPILED CODE */

export default class FurnitureCatalog extends Book {

    constructor() {
        super("FurnitureCatalog");

        /** @type {Phaser.GameObjects.Container} */
        this.secret11_1;
        /** @type {Phaser.GameObjects.Container} */
        this.secret11_2;
        /** @type {Phaser.GameObjects.Container} */
        this.secret11_3;
        /** @type {Phaser.GameObjects.Container} */
        this.secret10_1;
        /** @type {Phaser.GameObjects.Container} */
        this.secret10_2;
        /** @type {Phaser.GameObjects.Container} */
        this.secret9_1;
        /** @type {Phaser.GameObjects.Container} */
        this.secret9_2;
        /** @type {Phaser.GameObjects.Container} */
        this.secret8_1;
        /** @type {Phaser.GameObjects.Container} */
        this.secret7_1;
        /** @type {Phaser.GameObjects.Container} */
        this.secret6_1;
        /** @type {Phaser.GameObjects.Container} */
        this.secret6_2;
        /** @type {Phaser.GameObjects.Container} */
        this.secret5_1;
        /** @type {Phaser.GameObjects.Container} */
        this.secret4_1;
        /** @type {Phaser.GameObjects.Container} */
        this.secret4_2;
        /** @type {Phaser.GameObjects.Container} */
        this.secret3_1;
        /** @type {Phaser.GameObjects.Container} */
        this.secret3_2;
        /** @type {Phaser.GameObjects.Container} */
        this.secret3_3;
        /** @type {Phaser.GameObjects.Container} */
        this.secret3_4;
        /** @type {Phaser.GameObjects.Container} */
        this.secret3_5;
        /** @type {Phaser.GameObjects.Container} */
        this.secret2_1;
        /** @type {Phaser.GameObjects.Container} */
        this.secret2_2;
        /** @type {Phaser.GameObjects.Container} */
        this.secret2_3;
        /** @type {Phaser.GameObjects.Container} */
        this.secret2_4;
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

        // page12
        const page12 = this.add.container(0, 0);
        page12.visible = false;

        // p8
        const p8 = this.add.image(0, 0, "furniturecatalog", "page/page0008");
        p8.setOrigin(0, 0);
        page12.add(p8);

        // pageLeft_1
        const pageLeft_1 = this.add.image(492, 590, "furniturecatalog", "page_left");
        pageLeft_1.setOrigin(0, 0);
        page12.add(pageLeft_1);

        // closeLeft
        const closeLeft = this.add.image(491, 39, "furniturecatalog", "close_left");
        closeLeft.setOrigin(0, 0);
        page12.add(closeLeft);

        // page11
        const page11 = this.add.container(0, 0);
        page11.visible = false;

        // p11_png
        const p11_png = this.add.image(0, 0, "furncatalog092022", "p11.png");
        p11_png.setOrigin(0, 0);
        page11.add(p11_png);

        // buyButton_72
        const buyButton_72 = new BuyButton(this, 561, 254);
        page11.add(buyButton_72);

        // buyButton_73
        const buyButton_73 = new BuyButton(this, 286, 660);
        page11.add(buyButton_73);

        // buyButton_74
        const buyButton_74 = new BuyButton(this, 1137, 137);
        page11.add(buyButton_74);

        // buyButton_76
        const buyButton_76 = new BuyButton(this, 546, 660);
        page11.add(buyButton_76);

        // buyButton_77
        const buyButton_77 = new BuyButton(this, 876, 590);
        page11.add(buyButton_77);

        // secret11_1Zone
        const secret11_1Zone = this.add.ellipse(537, 139, 128, 128);
        secret11_1Zone.scaleX = 0.3410402366037203;
        secret11_1Zone.scaleY = 0.28536079611892945;
        secret11_1Zone.isFilled = true;
        secret11_1Zone.fillAlpha = 0;
        page11.add(secret11_1Zone);

        // secret11_2Zone
        const secret11_2Zone = this.add.ellipse(340, 495, 128, 128);
        secret11_2Zone.scaleX = 0.4075463071000618;
        secret11_2Zone.scaleY = 0.3349618884692826;
        secret11_2Zone.isFilled = true;
        secret11_2Zone.fillAlpha = 0;
        page11.add(secret11_2Zone);

        // secret11_3Zone
        const secret11_3Zone = this.add.ellipse(1126, 538, 128, 128);
        secret11_3Zone.scaleX = 0.3972704197467679;
        secret11_3Zone.scaleY = 0.3250382681765704;
        secret11_3Zone.isFilled = true;
        secret11_3Zone.fillAlpha = 0;
        page11.add(secret11_3Zone);

        // secret11_1
        const secret11_1 = this.add.container(500, 260);
        secret11_1.visible = false;
        page11.add(secret11_1);

        // s11_1_png
        const s11_1_png = this.add.image(0, 0, "furncatalog092022", "s11_1.png");
        s11_1_png.scaleX = 0.39433703786975116;
        s11_1_png.scaleY = 0.39433703786975116;
        s11_1_png.setOrigin(0, 0);
        secret11_1.add(s11_1_png);

        // buyButton_78
        const buyButton_78 = new BuyButton(this, 246, 11);
        buyButton_78.scaleX = 1.4014969476737023;
        buyButton_78.scaleY = 1.4014969476737023;
        secret11_1.add(buyButton_78);

        // closeSecret11_1
        const closeSecret11_1 = this.add.rectangle(438, 24, 128, 128);
        closeSecret11_1.scaleX = 0.3272514695828044;
        closeSecret11_1.scaleY = 0.3272514695828044;
        closeSecret11_1.isFilled = true;
        closeSecret11_1.fillAlpha = 0;
        secret11_1.add(closeSecret11_1);

        // secret11_2
        const secret11_2 = this.add.container(500, 260);
        secret11_2.visible = false;
        page11.add(secret11_2);

        // s11_2_png
        const s11_2_png = this.add.image(0, 0, "furncatalog092022", "s11_2.png");
        s11_2_png.setOrigin(0, 0);
        secret11_2.add(s11_2_png);

        // buyButton_79
        const buyButton_79 = new BuyButton(this, 280, 213);
        buyButton_79.scaleX = 1.4014969476737023;
        buyButton_79.scaleY = 1.4014969476737023;
        secret11_2.add(buyButton_79);

        // closeSecret11_2
        const closeSecret11_2 = this.add.rectangle(457, 28, 128, 128);
        closeSecret11_2.scaleX = 0.3272514695828044;
        closeSecret11_2.scaleY = 0.3272514695828044;
        closeSecret11_2.isFilled = true;
        closeSecret11_2.fillAlpha = 0;
        secret11_2.add(closeSecret11_2);

        // secret11_3
        const secret11_3 = this.add.container(500, 260);
        secret11_3.visible = false;
        page11.add(secret11_3);

        // s11_3_png
        const s11_3_png = this.add.image(0, 0, "furncatalog092022", "s11_3.png");
        s11_3_png.setOrigin(0, 0);
        secret11_3.add(s11_3_png);

        // buyButton_75
        const buyButton_75 = new BuyButton(this, 280, 132);
        buyButton_75.scaleX = 1.4014969476737023;
        buyButton_75.scaleY = 1.4014969476737023;
        secret11_3.add(buyButton_75);

        // closeSecret11_3
        const closeSecret11_3 = this.add.rectangle(457, 28, 128, 128);
        closeSecret11_3.scaleX = 0.3272514695828044;
        closeSecret11_3.scaleY = 0.3272514695828044;
        closeSecret11_3.isFilled = true;
        closeSecret11_3.fillAlpha = 0;
        secret11_3.add(closeSecret11_3);

        // page10
        const page10 = this.add.container(0, 0);
        page10.visible = false;

        // p10_png
        const p10_png = this.add.image(0, 0, "furncatalog092022", "p10.png");
        p10_png.setOrigin(0, 0);
        page10.add(p10_png);

        // buyButton_62
        const buyButton_62 = new BuyButton(this, 510, 195);
        page10.add(buyButton_62);

        // buyButton_65
        const buyButton_65 = new BuyButton(this, 306, 430);
        page10.add(buyButton_65);

        // buyButton_66
        const buyButton_66 = new BuyButton(this, 886, 195);
        page10.add(buyButton_66);

        // buyButton_67
        const buyButton_67 = new BuyButton(this, 902, 670);
        page10.add(buyButton_67);

        // buyButton_70
        const buyButton_70 = new BuyButton(this, 505, 670);
        page10.add(buyButton_70);

        // buyButton_71
        const buyButton_71 = new BuyButton(this, 1080, 430);
        page10.add(buyButton_71);

        // secret10_1Zone
        const secret10_1Zone = this.add.ellipse(410, 161, 128, 128);
        secret10_1Zone.scaleX = 0.28198369338465384;
        secret10_1Zone.scaleY = 0.5483619974306684;
        secret10_1Zone.isFilled = true;
        secret10_1Zone.fillAlpha = 0;
        page10.add(secret10_1Zone);

        // secret10_2Zone
        const secret10_2Zone = this.add.ellipse(614, 424, 128, 128);
        secret10_2Zone.scaleX = 0.2709533342862894;
        secret10_2Zone.scaleY = 0.7716591769400973;
        secret10_2Zone.isFilled = true;
        secret10_2Zone.fillAlpha = 0;
        page10.add(secret10_2Zone);

        // secret10_1
        const secret10_1 = this.add.container(500, 260);
        secret10_1.visible = false;
        page10.add(secret10_1);

        // s10_1_png
        const s10_1_png = this.add.image(0, 0, "furncatalog092022", "s10_1.png");
        s10_1_png.setOrigin(0, 0);
        secret10_1.add(s10_1_png);

        // buyButton_68
        const buyButton_68 = new BuyButton(this, 274, 161);
        buyButton_68.scaleX = 1.4014969476737023;
        buyButton_68.scaleY = 1.4014969476737023;
        secret10_1.add(buyButton_68);

        // closeSecret10_1
        const closeSecret10_1 = this.add.rectangle(455, 29, 128, 128);
        closeSecret10_1.scaleX = 0.3272514695828044;
        closeSecret10_1.scaleY = 0.3272514695828044;
        closeSecret10_1.isFilled = true;
        closeSecret10_1.fillAlpha = 0;
        secret10_1.add(closeSecret10_1);

        // secret10_2
        const secret10_2 = this.add.container(500, 260);
        secret10_2.visible = false;
        page10.add(secret10_2);

        // s10_2_png
        const s10_2_png = this.add.image(0, 0, "furncatalog092022", "s10_2.png");
        s10_2_png.setOrigin(0, 0);
        secret10_2.add(s10_2_png);

        // buyButton_69
        const buyButton_69 = new BuyButton(this, 280, 163);
        buyButton_69.scaleX = 1.4014969476737023;
        buyButton_69.scaleY = 1.4014969476737023;
        secret10_2.add(buyButton_69);

        // closeSecret10_2
        const closeSecret10_2 = this.add.rectangle(457, 28, 128, 128);
        closeSecret10_2.scaleX = 0.3272514695828044;
        closeSecret10_2.scaleY = 0.3272514695828044;
        closeSecret10_2.isFilled = true;
        closeSecret10_2.fillAlpha = 0;
        secret10_2.add(closeSecret10_2);

        // page9
        const page9 = this.add.container(0, 0);
        page9.visible = false;

        // p9_png
        const p9_png = this.add.image(0, 0, "furncatalog092022", "p9.png");
        p9_png.setOrigin(0, 0);
        page9.add(p9_png);

        // buyButton_58
        const buyButton_58 = new BuyButton(this, 579, 300);
        page9.add(buyButton_58);

        // buyButton_59
        const buyButton_59 = new BuyButton(this, 529, 480);
        page9.add(buyButton_59);

        // buyButton_61
        const buyButton_61 = new BuyButton(this, 1067, 241);
        page9.add(buyButton_61);

        // buyButton_63
        const buyButton_63 = new BuyButton(this, 889, 612);
        page9.add(buyButton_63);

        // secret9_1Zone
        const secret9_1Zone = this.add.ellipse(414, 155, 128, 128);
        secret9_1Zone.scaleX = 0.20763992669229397;
        secret9_1Zone.scaleY = 0.21516311740347305;
        secret9_1Zone.angle = 19;
        secret9_1Zone.isFilled = true;
        secret9_1Zone.fillAlpha = 0;
        page9.add(secret9_1Zone);

        // secret9_2Zone
        const secret9_2Zone = this.add.ellipse(566, 592, 128, 128);
        secret9_2Zone.scaleX = 0.547639828542778;
        secret9_2Zone.scaleY = 0.36747870335005683;
        secret9_2Zone.angle = 19;
        secret9_2Zone.isFilled = true;
        secret9_2Zone.fillAlpha = 0;
        page9.add(secret9_2Zone);

        // secret9_1
        const secret9_1 = this.add.container(500, 260);
        secret9_1.visible = false;
        page9.add(secret9_1);

        // s9_1_png
        const s9_1_png = this.add.image(0, 0, "furncatalog092022", "s9_1.png");
        s9_1_png.setOrigin(0, 0);
        secret9_1.add(s9_1_png);

        // buyButton_64
        const buyButton_64 = new BuyButton(this, 231, 160);
        buyButton_64.scaleX = 1.4014969476737023;
        buyButton_64.scaleY = 1.4014969476737023;
        secret9_1.add(buyButton_64);

        // closeSecret9_1
        const closeSecret9_1 = this.add.rectangle(455, 29, 128, 128);
        closeSecret9_1.scaleX = 0.3272514695828044;
        closeSecret9_1.scaleY = 0.3272514695828044;
        closeSecret9_1.isFilled = true;
        closeSecret9_1.fillAlpha = 0;
        secret9_1.add(closeSecret9_1);

        // secret9_2
        const secret9_2 = this.add.container(500, 260);
        secret9_2.visible = false;
        page9.add(secret9_2);

        // s9_2_png
        const s9_2_png = this.add.image(0, 0, "furncatalog092022", "s9_2.png");
        s9_2_png.setOrigin(0, 0);
        secret9_2.add(s9_2_png);

        // buyButton_60
        const buyButton_60 = new BuyButton(this, 265, 184);
        buyButton_60.scaleX = 1.4014969476737023;
        buyButton_60.scaleY = 1.4014969476737023;
        secret9_2.add(buyButton_60);

        // closeSecret9_2
        const closeSecret9_2 = this.add.rectangle(457, 28, 128, 128);
        closeSecret9_2.scaleX = 0.3272514695828044;
        closeSecret9_2.scaleY = 0.3272514695828044;
        closeSecret9_2.isFilled = true;
        closeSecret9_2.fillAlpha = 0;
        secret9_2.add(closeSecret9_2);

        // page8
        const page8 = this.add.container(0, 0);
        page8.visible = false;

        // p8_png
        const p8_png = this.add.image(0, 0, "furncatalog092022", "p8.png");
        p8_png.setOrigin(0, 0);
        page8.add(p8_png);

        // buyButton_51
        const buyButton_51 = new BuyButton(this, 577, 169);
        page8.add(buyButton_51);

        // buyButton_52
        const buyButton_52 = new BuyButton(this, 282, 666);
        page8.add(buyButton_52);

        // buyButton_53
        const buyButton_53 = new BuyButton(this, 549, 666);
        page8.add(buyButton_53);

        // buyButton_54
        const buyButton_54 = new BuyButton(this, 853, 391);
        page8.add(buyButton_54);

        // buyButton_55
        const buyButton_55 = new BuyButton(this, 1120, 391);
        page8.add(buyButton_55);

        // buyButton_56
        const buyButton_56 = new BuyButton(this, 1141, 614);
        page8.add(buyButton_56);

        // secret8_1Zone
        const secret8_1Zone = this.add.ellipse(1012, 692, 128, 128);
        secret8_1Zone.scaleX = 0.2848228925767585;
        secret8_1Zone.scaleY = 0.33988153434492674;
        secret8_1Zone.angle = 19;
        secret8_1Zone.isFilled = true;
        secret8_1Zone.fillAlpha = 0;
        page8.add(secret8_1Zone);

        // secret8_1
        const secret8_1 = this.add.container(500, 260);
        secret8_1.visible = false;
        page8.add(secret8_1);

        // s8_1_png
        const s8_1_png = this.add.image(0, 0, "furncatalog092022", "s8_1.png");
        s8_1_png.setOrigin(0, 0);
        secret8_1.add(s8_1_png);

        // buyButton_57
        const buyButton_57 = new BuyButton(this, 284, 186);
        buyButton_57.scaleX = 1.4014969476737023;
        buyButton_57.scaleY = 1.4014969476737023;
        secret8_1.add(buyButton_57);

        // closeSecret8_1
        const closeSecret8_1 = this.add.rectangle(454, 29, 128, 128);
        closeSecret8_1.scaleX = 0.3272514695828044;
        closeSecret8_1.scaleY = 0.3272514695828044;
        closeSecret8_1.isFilled = true;
        closeSecret8_1.fillAlpha = 0;
        secret8_1.add(closeSecret8_1);

        // page7
        const page7 = this.add.container(0, 0);
        page7.visible = false;

        // p7_png
        const p7_png = this.add.image(0, 0, "furncatalog092022", "p7.png");
        p7_png.setOrigin(0, 0);
        page7.add(p7_png);

        // buyButton_29
        const buyButton_29 = new BuyButton(this, 572, 160);
        page7.add(buyButton_29);

        // buyButton_30
        const buyButton_30 = new BuyButton(this, 282, 660);
        page7.add(buyButton_30);

        // buyButton_31
        const buyButton_31 = new BuyButton(this, 549, 660);
        page7.add(buyButton_31);

        // buyButton_32
        const buyButton_32 = new BuyButton(this, 856, 160);
        page7.add(buyButton_32);

        // buyButton_33
        const buyButton_33 = new BuyButton(this, 859, 660);
        page7.add(buyButton_33);

        // buyButton_34
        const buyButton_34 = new BuyButton(this, 1126, 660);
        page7.add(buyButton_34);

        // secret7_1Zone
        const secret7_1Zone = this.add.ellipse(622, 421, 128, 128);
        secret7_1Zone.scaleX = 0.2814766144775602;
        secret7_1Zone.scaleY = 0.560606769689971;
        secret7_1Zone.angle = 19;
        secret7_1Zone.isFilled = true;
        secret7_1Zone.fillAlpha = 0;
        page7.add(secret7_1Zone);

        // secret7_1
        const secret7_1 = this.add.container(500, 260);
        secret7_1.visible = false;
        page7.add(secret7_1);

        // s7_1_png
        const s7_1_png = this.add.image(0, 0, "furncatalog092022", "s7_1.png");
        s7_1_png.setOrigin(0, 0);
        secret7_1.add(s7_1_png);

        // buyButton_50
        const buyButton_50 = new BuyButton(this, 284, 186);
        buyButton_50.scaleX = 1.4014969476737023;
        buyButton_50.scaleY = 1.4014969476737023;
        secret7_1.add(buyButton_50);

        // closeSecret7_1
        const closeSecret7_1 = this.add.rectangle(455, 29, 128, 128);
        closeSecret7_1.scaleX = 0.3272514695828044;
        closeSecret7_1.scaleY = 0.3272514695828044;
        closeSecret7_1.isFilled = true;
        closeSecret7_1.fillAlpha = 0;
        secret7_1.add(closeSecret7_1);

        // page6
        const page6 = this.add.container(0, 0);
        page6.visible = false;

        // p6_png
        const p6_png = this.add.image(0, 0, "furncatalog092022", "p6.png");
        p6_png.setOrigin(0, 0);
        page6.add(p6_png);

        // buyButton_22
        const buyButton_22 = new BuyButton(this, 283, 390);
        page6.add(buyButton_22);

        // buyButton_23
        const buyButton_23 = new BuyButton(this, 546, 390);
        page6.add(buyButton_23);

        // buyButton_24
        const buyButton_24 = new BuyButton(this, 571, 555);
        page6.add(buyButton_24);

        // buyButton_25
        const buyButton_25 = new BuyButton(this, 877, 219);
        page6.add(buyButton_25);

        // buyButton_26
        const buyButton_26 = new BuyButton(this, 855, 680);
        page6.add(buyButton_26);

        // buyButton_27
        const buyButton_27 = new BuyButton(this, 1118, 680);
        page6.add(buyButton_27);

        // secret6_1Zone
        const secret6_1Zone = this.add.ellipse(1138, 202, 128, 128);
        secret6_1Zone.scaleX = 0.5583497749658008;
        secret6_1Zone.scaleY = 0.5128408669138849;
        secret6_1Zone.isFilled = true;
        secret6_1Zone.fillAlpha = 0;
        page6.add(secret6_1Zone);

        // secret6_2Zone
        const secret6_2Zone = this.add.ellipse(1173, 459, 128, 128);
        secret6_2Zone.scaleX = 0.5583497749658008;
        secret6_2Zone.scaleY = 0.5128408669138849;
        secret6_2Zone.isFilled = true;
        secret6_2Zone.fillAlpha = 0;
        page6.add(secret6_2Zone);

        // secret6_1
        const secret6_1 = this.add.container(500, 260);
        secret6_1.visible = false;
        page6.add(secret6_1);

        // s6_1_png
        const s6_1_png = this.add.image(0, 0, "furncatalog092022", "s6_1.png");
        s6_1_png.setOrigin(0, 0);
        secret6_1.add(s6_1_png);

        // buyButton_28
        const buyButton_28 = new BuyButton(this, 284, 186);
        buyButton_28.scaleX = 1.4014969476737023;
        buyButton_28.scaleY = 1.4014969476737023;
        secret6_1.add(buyButton_28);

        // closeSecret6_1
        const closeSecret6_1 = this.add.rectangle(456, 30, 128, 128);
        closeSecret6_1.scaleX = 0.3272514695828044;
        closeSecret6_1.scaleY = 0.3272514695828044;
        closeSecret6_1.isFilled = true;
        closeSecret6_1.fillAlpha = 0;
        secret6_1.add(closeSecret6_1);

        // secret6_2
        const secret6_2 = this.add.container(500, 260);
        secret6_2.visible = false;
        page6.add(secret6_2);

        // s6_2_png
        const s6_2_png = this.add.image(0, 0, "furncatalog092022", "s6_2.png");
        s6_2_png.setOrigin(0, 0);
        secret6_2.add(s6_2_png);

        // buyButton_49
        const buyButton_49 = new BuyButton(this, 261, 160);
        buyButton_49.scaleX = 1.4014969476737023;
        buyButton_49.scaleY = 1.4014969476737023;
        secret6_2.add(buyButton_49);

        // closeSecret6_2
        const closeSecret6_2 = this.add.rectangle(454, 31, 128, 128);
        closeSecret6_2.scaleX = 0.3272514695828044;
        closeSecret6_2.scaleY = 0.3272514695828044;
        closeSecret6_2.isFilled = true;
        closeSecret6_2.fillAlpha = 0;
        secret6_2.add(closeSecret6_2);

        // page5
        const page5 = this.add.container(0, 0);
        page5.visible = false;

        // p5_png
        const p5_png = this.add.image(0, 0, "furncatalog092022", "p5.png");
        p5_png.setOrigin(0, 0);
        page5.add(p5_png);

        // buyButton_15
        const buyButton_15 = new BuyButton(this, 572, 166);
        page5.add(buyButton_15);

        // buyButton_16
        const buyButton_16 = new BuyButton(this, 285, 653);
        page5.add(buyButton_16);

        // buyButton_17
        const buyButton_17 = new BuyButton(this, 544, 653);
        page5.add(buyButton_17);

        // buyButton_18
        const buyButton_18 = new BuyButton(this, 856, 377);
        page5.add(buyButton_18);

        // buyButton_19
        const buyButton_19 = new BuyButton(this, 1116, 377);
        page5.add(buyButton_19);

        // buyButton_20
        const buyButton_20 = new BuyButton(this, 867, 653);
        page5.add(buyButton_20);

        // secret5_1Zone
        const secret5_1Zone = this.add.ellipse(1100, 581, 128, 128);
        secret5_1Zone.scaleX = 0.5213873681730947;
        secret5_1Zone.scaleY = 0.5398119063749283;
        secret5_1Zone.isFilled = true;
        secret5_1Zone.fillAlpha = 0;
        page5.add(secret5_1Zone);

        // secret5_1
        const secret5_1 = this.add.container(500, 260);
        secret5_1.visible = false;
        page5.add(secret5_1);

        // s5_1_png
        const s5_1_png = this.add.image(0, 0, "furncatalog092022", "s5_1.png");
        s5_1_png.setOrigin(0, 0);
        secret5_1.add(s5_1_png);

        // buyButton_21
        const buyButton_21 = new BuyButton(this, 284, 186);
        buyButton_21.scaleX = 1.4014969476737023;
        buyButton_21.scaleY = 1.4014969476737023;
        secret5_1.add(buyButton_21);

        // closeSecret5_1
        const closeSecret5_1 = this.add.rectangle(449, 38, 128, 128);
        closeSecret5_1.scaleX = 0.3272514695828044;
        closeSecret5_1.scaleY = 0.3272514695828044;
        closeSecret5_1.isFilled = true;
        closeSecret5_1.fillAlpha = 0;
        secret5_1.add(closeSecret5_1);

        // page4
        const page4 = this.add.container(0, 0);
        page4.visible = false;

        // p4_png
        const p4_png = this.add.image(0, 0, "furncatalog092022", "p4.png");
        p4_png.setOrigin(0, 0);
        page4.add(p4_png);

        // buyButton_10
        const buyButton_10 = new BuyButton(this, 528, 240);
        page4.add(buyButton_10);

        // buyButton_11
        const buyButton_11 = new BuyButton(this, 325, 618);
        page4.add(buyButton_11);

        // buyButton_12
        const buyButton_12 = new BuyButton(this, 1105, 199);
        page4.add(buyButton_12);

        // buyButton_13
        const buyButton_13 = new BuyButton(this, 1090, 444);
        page4.add(buyButton_13);

        // buyButton_14
        const buyButton_14 = new BuyButton(this, 1109, 666);
        page4.add(buyButton_14);

        // secret4_1Zone
        const secret4_1Zone = this.add.rectangle(592, 511, 128, 128);
        secret4_1Zone.scaleX = 0.3399525533458278;
        secret4_1Zone.scaleY = 0.09083371907229743;
        secret4_1Zone.angle = 20;
        secret4_1Zone.isFilled = true;
        secret4_1Zone.fillAlpha = 0;
        page4.add(secret4_1Zone);

        // secret4_2Zone
        const secret4_2Zone = this.add.ellipse(1196, 421, 128, 128);
        secret4_2Zone.scaleX = 0.17449441260056386;
        secret4_2Zone.scaleY = 0.17449441260056386;
        secret4_2Zone.isFilled = true;
        secret4_2Zone.fillAlpha = 0;
        page4.add(secret4_2Zone);

        // secret4_1
        const secret4_1 = this.add.container(500, 260);
        secret4_1.visible = false;
        page4.add(secret4_1);

        // s4_1_png
        const s4_1_png = this.add.image(0, 0, "furncatalog092022", "s4_1.png");
        s4_1_png.setOrigin(0, 0);
        secret4_1.add(s4_1_png);

        // buyButton_47
        const buyButton_47 = new BuyButton(this, 286, 168);
        buyButton_47.scaleX = 1.4014969476737023;
        buyButton_47.scaleY = 1.4014969476737023;
        secret4_1.add(buyButton_47);

        // closeSecret4_1
        const closeSecret4_1 = this.add.rectangle(454, 30, 128, 128);
        closeSecret4_1.scaleX = 0.3272514695828044;
        closeSecret4_1.scaleY = 0.3272514695828044;
        closeSecret4_1.isFilled = true;
        closeSecret4_1.fillAlpha = 0;
        secret4_1.add(closeSecret4_1);

        // secret4_2
        const secret4_2 = this.add.container(500, 260);
        secret4_2.visible = false;
        page4.add(secret4_2);

        // s4_2_png
        const s4_2_png = this.add.image(0, 0, "furncatalog092022", "s4_2.png");
        s4_2_png.setOrigin(0, 0);
        secret4_2.add(s4_2_png);

        // buyButton_48
        const buyButton_48 = new BuyButton(this, 271, 163);
        buyButton_48.scaleX = 1.4014969476737023;
        buyButton_48.scaleY = 1.4014969476737023;
        secret4_2.add(buyButton_48);

        // closeSecret4_2
        const closeSecret4_2 = this.add.rectangle(456, 29, 128, 128);
        closeSecret4_2.scaleX = 0.3272514695828044;
        closeSecret4_2.scaleY = 0.3272514695828044;
        closeSecret4_2.isFilled = true;
        closeSecret4_2.fillAlpha = 0;
        secret4_2.add(closeSecret4_2);

        // page3
        const page3 = this.add.container(0, 0);
        page3.visible = false;

        // p3_png
        const p3_png = this.add.image(0, 0, "furncatalog092022", "p3.png");
        p3_png.setOrigin(0, 0);
        page3.add(p3_png);

        // buyButton_5
        const buyButton_5 = new BuyButton(this, 514, 213);
        page3.add(buyButton_5);

        // buyButton_6
        const buyButton_6 = new BuyButton(this, 301, 437);
        page3.add(buyButton_6);

        // buyButton_7
        const buyButton_7 = new BuyButton(this, 506, 555);
        page3.add(buyButton_7);

        // buyButton_8
        const buyButton_8 = new BuyButton(this, 894, 437);
        page3.add(buyButton_8);

        // buyButton_9
        const buyButton_9 = new BuyButton(this, 856, 693);
        page3.add(buyButton_9);

        // buyButton_40
        const buyButton_40 = new BuyButton(this, 1117, 693);
        page3.add(buyButton_40);

        // buyButton_45
        const buyButton_45 = new BuyButton(this, 1058, 192);
        page3.add(buyButton_45);

        // secret3_1Zone
        const secret3_1Zone = this.add.ellipse(327, 209, 128, 128);
        secret3_1Zone.scaleX = 0.1373952116706586;
        secret3_1Zone.scaleY = 0.1373952116706586;
        secret3_1Zone.isFilled = true;
        secret3_1Zone.fillAlpha = 0;
        page3.add(secret3_1Zone);

        // secret3_2Zone
        const secret3_2Zone = this.add.rectangle(397, 405, 128, 128);
        secret3_2Zone.scaleX = 0.27616296180303235;
        secret3_2Zone.scaleY = 0.27616296180303235;
        secret3_2Zone.isFilled = true;
        secret3_2Zone.fillAlpha = 0;
        page3.add(secret3_2Zone);

        // secret3_3Zone
        const secret3_3Zone = this.add.ellipse(462, 730, 128, 128);
        secret3_3Zone.scaleX = 0.6191462932505898;
        secret3_3Zone.scaleY = 0.6191462932505898;
        secret3_3Zone.isFilled = true;
        secret3_3Zone.fillAlpha = 0;
        page3.add(secret3_3Zone);

        // secret3_4Zone
        const secret3_4Zone = this.add.rectangle(887, 234, 128, 128);
        secret3_4Zone.scaleX = 0.11416473041830225;
        secret3_4Zone.scaleY = 0.34423956228970154;
        secret3_4Zone.angle = 35;
        secret3_4Zone.isFilled = true;
        secret3_4Zone.fillAlpha = 0;
        page3.add(secret3_4Zone);

        // secret3_5Zone
        const secret3_5Zone = this.add.ellipse(1187, 446, 128, 128);
        secret3_5Zone.scaleX = 0.27365794892514766;
        secret3_5Zone.scaleY = 0.3124899294151209;
        secret3_5Zone.angle = 14;
        secret3_5Zone.isFilled = true;
        secret3_5Zone.fillAlpha = 0;
        page3.add(secret3_5Zone);

        // secret3_1
        const secret3_1 = this.add.container(500, 260);
        secret3_1.visible = false;
        page3.add(secret3_1);

        // s3_1_png
        const s3_1_png = this.add.image(0, 0, "furncatalog092022", "s3_1.png");
        s3_1_png.setOrigin(0, 0);
        secret3_1.add(s3_1_png);

        // buyButton_41
        const buyButton_41 = new BuyButton(this, 264, 233);
        buyButton_41.scaleX = 1.4014969476737023;
        buyButton_41.scaleY = 1.4014969476737023;
        secret3_1.add(buyButton_41);

        // closeSecret3_1
        const closeSecret3_1 = this.add.rectangle(456, 31, 128, 128);
        closeSecret3_1.scaleX = 0.3272514695828044;
        closeSecret3_1.scaleY = 0.3272514695828044;
        closeSecret3_1.isFilled = true;
        closeSecret3_1.fillAlpha = 0;
        secret3_1.add(closeSecret3_1);

        // secret3_2
        const secret3_2 = this.add.container(500, 260);
        secret3_2.visible = false;
        page3.add(secret3_2);

        // s3_2_png
        const s3_2_png = this.add.image(0, 0, "furncatalog092022", "s3_2.png");
        s3_2_png.setOrigin(0, 0);
        secret3_2.add(s3_2_png);

        // buyButton_42
        const buyButton_42 = new BuyButton(this, 271, 156);
        buyButton_42.scaleX = 1.4014969476737023;
        buyButton_42.scaleY = 1.4014969476737023;
        secret3_2.add(buyButton_42);

        // closeSecret3_2
        const closeSecret3_2 = this.add.rectangle(454, 31, 128, 128);
        closeSecret3_2.scaleX = 0.3272514695828044;
        closeSecret3_2.scaleY = 0.3272514695828044;
        closeSecret3_2.isFilled = true;
        closeSecret3_2.fillAlpha = 0;
        secret3_2.add(closeSecret3_2);

        // secret3_3
        const secret3_3 = this.add.container(500, 260);
        secret3_3.visible = false;
        page3.add(secret3_3);

        // s3_3_png
        const s3_3_png = this.add.image(0, 0, "furncatalog092022", "s3_3.png");
        s3_3_png.setOrigin(0, 0);
        secret3_3.add(s3_3_png);

        // buyButton_44
        const buyButton_44 = new BuyButton(this, 51, 179);
        buyButton_44.scaleX = 1.4014969476737023;
        buyButton_44.scaleY = 1.4014969476737023;
        secret3_3.add(buyButton_44);

        // closeSecret3_3
        const closeSecret3_3 = this.add.rectangle(455, 29, 128, 128);
        closeSecret3_3.scaleX = 0.3272514695828044;
        closeSecret3_3.scaleY = 0.3272514695828044;
        closeSecret3_3.isFilled = true;
        closeSecret3_3.fillAlpha = 0;
        secret3_3.add(closeSecret3_3);

        // secret3_4
        const secret3_4 = this.add.container(500, 260);
        secret3_4.visible = false;
        page3.add(secret3_4);

        // s3_4_png
        const s3_4_png = this.add.image(0, 0, "furncatalog092022", "s3_4.png");
        s3_4_png.setOrigin(0, 0);
        secret3_4.add(s3_4_png);

        // buyButton_43
        const buyButton_43 = new BuyButton(this, 275, 56);
        buyButton_43.scaleX = 1.4014969476737023;
        buyButton_43.scaleY = 1.4014969476737023;
        secret3_4.add(buyButton_43);

        // closeSecret3_4
        const closeSecret3_4 = this.add.rectangle(457, 31, 128, 128);
        closeSecret3_4.scaleX = 0.3272514695828044;
        closeSecret3_4.scaleY = 0.3272514695828044;
        closeSecret3_4.isFilled = true;
        closeSecret3_4.fillAlpha = 0;
        secret3_4.add(closeSecret3_4);

        // secret3_5
        const secret3_5 = this.add.container(500, 260);
        secret3_5.visible = false;
        page3.add(secret3_5);

        // s3_5_png
        const s3_5_png = this.add.image(0, 0, "furncatalog092022", "s3_5.png");
        s3_5_png.setOrigin(0, 0);
        secret3_5.add(s3_5_png);

        // buyButton_46
        const buyButton_46 = new BuyButton(this, 272, 187);
        buyButton_46.scaleX = 1.4014969476737023;
        buyButton_46.scaleY = 1.4014969476737023;
        secret3_5.add(buyButton_46);

        // closeSecret3_5
        const closeSecret3_5 = this.add.rectangle(457, 29, 128, 128);
        closeSecret3_5.scaleX = 0.3272514695828044;
        closeSecret3_5.scaleY = 0.3272514695828044;
        closeSecret3_5.isFilled = true;
        closeSecret3_5.fillAlpha = 0;
        secret3_5.add(closeSecret3_5);

        // page2
        const page2 = this.add.container(0, 0);
        page2.visible = false;

        // p2_png
        const p2_png = this.add.image(0, 0, "furncatalog092022", "p2.png");
        p2_png.setOrigin(0, 0);
        page2.add(p2_png);

        // buyButton_1
        const buyButton_1 = new BuyButton(this, 503, 107);
        page2.add(buyButton_1);

        // buyButton_2
        const buyButton_2 = new BuyButton(this, 284, 640);
        page2.add(buyButton_2);

        // buyButton_3
        const buyButton_3 = new BuyButton(this, 547, 493);
        page2.add(buyButton_3);

        // buyButton_4
        const buyButton_4 = new BuyButton(this, 1082, 216);
        page2.add(buyButton_4);

        // buyButton_35
        const buyButton_35 = new BuyButton(this, 854, 685);
        page2.add(buyButton_35);

        // buyButton_36
        const buyButton_36 = new BuyButton(this, 1107, 685);
        page2.add(buyButton_36);

        // s2_1Zone
        const s2_1Zone = this.add.rectangle(408, 160, 128, 128);
        s2_1Zone.scaleX = 0.23676158126423563;
        s2_1Zone.scaleY = 0.23676158126423563;
        s2_1Zone.isFilled = true;
        s2_1Zone.fillAlpha = 0;
        page2.add(s2_1Zone);

        // s2_2Zone
        const s2_2Zone = this.add.rectangle(592, 686, 128, 128);
        s2_2Zone.scaleX = 0.14853857861280106;
        s2_2Zone.scaleY = 0.14853857861280106;
        s2_2Zone.angle = -155;
        s2_2Zone.isFilled = true;
        s2_2Zone.fillAlpha = 0;
        page2.add(s2_2Zone);

        // s2_3Zone
        const s2_3Zone = this.add.rectangle(877, 156, 128, 128);
        s2_3Zone.scaleX = 0.21441939092259804;
        s2_3Zone.scaleY = 0.6831702325877471;
        s2_3Zone.isFilled = true;
        s2_3Zone.fillAlpha = 0;
        page2.add(s2_3Zone);

        // s2_4Zone
        const s2_4Zone = this.add.ellipse(1157, 475, 128, 128);
        s2_4Zone.scaleX = 0.14381240188915378;
        s2_4Zone.scaleY = 0.14381240188915378;
        s2_4Zone.isFilled = true;
        s2_4Zone.fillAlpha = 0;
        page2.add(s2_4Zone);

        // secret2_1
        const secret2_1 = this.add.container(500, 260);
        secret2_1.visible = false;
        page2.add(secret2_1);

        // s2_1_png
        const s2_1_png = this.add.image(0, 0, "furncatalog092022", "s2_1.png");
        s2_1_png.setOrigin(0, 0);
        secret2_1.add(s2_1_png);

        // buyButton
        const buyButton = new BuyButton(this, 264, 187);
        buyButton.scaleX = 1.4014969476737023;
        buyButton.scaleY = 1.4014969476737023;
        secret2_1.add(buyButton);

        // closeSecret2_1
        const closeSecret2_1 = this.add.rectangle(449, 38, 128, 128);
        closeSecret2_1.scaleX = 0.3272514695828044;
        closeSecret2_1.scaleY = 0.3272514695828044;
        closeSecret2_1.isFilled = true;
        closeSecret2_1.fillAlpha = 0;
        secret2_1.add(closeSecret2_1);

        // secret2_2
        const secret2_2 = this.add.container(500, 260);
        secret2_2.visible = false;
        page2.add(secret2_2);

        // s2_2_png
        const s2_2_png = this.add.image(0, 0, "furncatalog092022", "s2_2.png");
        s2_2_png.setOrigin(0, 0);
        secret2_2.add(s2_2_png);

        // buyButton_37
        const buyButton_37 = new BuyButton(this, 264, 187);
        buyButton_37.scaleX = 1.4014969476737023;
        buyButton_37.scaleY = 1.4014969476737023;
        secret2_2.add(buyButton_37);

        // closeSecret2_2
        const closeSecret2_2 = this.add.rectangle(457, 31, 128, 128);
        closeSecret2_2.scaleX = 0.3272514695828044;
        closeSecret2_2.scaleY = 0.3272514695828044;
        closeSecret2_2.isFilled = true;
        closeSecret2_2.fillAlpha = 0;
        secret2_2.add(closeSecret2_2);

        // secret2_3
        const secret2_3 = this.add.container(500, 260);
        secret2_3.visible = false;
        page2.add(secret2_3);

        // s2_3_png
        const s2_3_png = this.add.image(0, 0, "furncatalog092022", "s2_3.png");
        s2_3_png.setOrigin(0, 0);
        secret2_3.add(s2_3_png);

        // buyButton_38
        const buyButton_38 = new BuyButton(this, 264, 187);
        buyButton_38.scaleX = 1.4014969476737023;
        buyButton_38.scaleY = 1.4014969476737023;
        secret2_3.add(buyButton_38);

        // closeSecret2_3
        const closeSecret2_3 = this.add.rectangle(454, 29, 128, 128);
        closeSecret2_3.scaleX = 0.3272514695828044;
        closeSecret2_3.scaleY = 0.3272514695828044;
        closeSecret2_3.isFilled = true;
        closeSecret2_3.fillAlpha = 0;
        secret2_3.add(closeSecret2_3);

        // secret2_4
        const secret2_4 = this.add.container(500, 260);
        secret2_4.visible = false;
        page2.add(secret2_4);

        // s2_4_png
        const s2_4_png = this.add.image(0, 0, "furncatalog092022", "s2_4.png");
        s2_4_png.setOrigin(0, 0);
        secret2_4.add(s2_4_png);

        // buyButton_39
        const buyButton_39 = new BuyButton(this, 266, 232);
        buyButton_39.scaleX = 1.4014969476737023;
        buyButton_39.scaleY = 1.4014969476737023;
        secret2_4.add(buyButton_39);

        // closeSecret2_4
        const closeSecret2_4 = this.add.rectangle(456, 31, 128, 128);
        closeSecret2_4.scaleX = 0.3272514695828044;
        closeSecret2_4.scaleY = 0.3272514695828044;
        closeSecret2_4.isFilled = true;
        closeSecret2_4.fillAlpha = 0;
        secret2_4.add(closeSecret2_4);

        // page1
        const page1 = this.add.container(0, 0);
        page1.visible = false;

        // p1_png
        const p1_png = this.add.image(760, 480, "furncatalog092022", "p1.png");
        page1.add(p1_png);

        // pageFront
        const pageFront = this.add.image(468, 44, "furniturecatalog", "page_front");
        pageFront.setOrigin(0, 0);
        page1.add(pageFront);

        // closeRight_1
        const closeRight_1 = this.add.image(924, 39, "furniturecatalog", "close_right");
        closeRight_1.setOrigin(0, 0);
        page1.add(closeRight_1);

        // text_1
        const text_1 = this.add.text(573, 149, "", {});
        text_1.text = "SEPTEMBER FURNITURE CATALOG";
        text_1.setStyle({ "backgroundColor": "", "color": "#000000", "fontFamily": "Burbank Big Regular", "fontSize": "30px", "fontStyle": "bold", "shadow.color": "#fff", "shadow.blur":5,"shadow.stroke":true,"shadow.fill":true});
        page1.add(text_1);

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
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12];

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

        // buyButton_72 (prefab fields)
        buyButton_72.item = 675;

        // buyButton_73 (prefab fields)
        buyButton_73.item = 676;

        // buyButton_74 (prefab fields)
        buyButton_74.item = 679;

        // buyButton_76 (prefab fields)
        buyButton_76.item = 677;

        // buyButton_77 (prefab fields)
        buyButton_77.item = 680;

        // secret11_1Zone (components)
        const secret11_1ZoneSimpleButton = new SimpleButton(secret11_1Zone);
        secret11_1ZoneSimpleButton.callback = () => this.secret11_1.visible=true;

        // secret11_2Zone (components)
        const secret11_2ZoneSimpleButton = new SimpleButton(secret11_2Zone);
        secret11_2ZoneSimpleButton.callback = () => this.secret11_2.visible=true;

        // secret11_3Zone (components)
        const secret11_3ZoneSimpleButton = new SimpleButton(secret11_3Zone);
        secret11_3ZoneSimpleButton.callback = () => this.secret11_3.visible=true;

        // buyButton_78 (prefab fields)
        buyButton_78.item = 596;

        // closeSecret11_1 (components)
        const closeSecret11_1SimpleButton = new SimpleButton(closeSecret11_1);
        closeSecret11_1SimpleButton.callback = () => this.secret11_1.visible=false;

        // buyButton_79 (prefab fields)
        buyButton_79.item = 681;

        // closeSecret11_2 (components)
        const closeSecret11_2SimpleButton = new SimpleButton(closeSecret11_2);
        closeSecret11_2SimpleButton.callback = () => this.secret11_2.visible=false;

        // buyButton_75 (prefab fields)
        buyButton_75.item = 678;

        // closeSecret11_3 (components)
        const closeSecret11_3SimpleButton = new SimpleButton(closeSecret11_3);
        closeSecret11_3SimpleButton.callback = () => this.secret11_3.visible=false;

        // buyButton_62 (prefab fields)
        buyButton_62.item = 370;

        // buyButton_65 (prefab fields)
        buyButton_65.item = 368;

        // buyButton_66 (prefab fields)
        buyButton_66.item = 629;

        // buyButton_67 (prefab fields)
        buyButton_67.item = 167;

        // buyButton_70 (prefab fields)
        buyButton_70.item = 371;

        // buyButton_71 (prefab fields)
        buyButton_71.item = 625;

        // secret10_1Zone (components)
        const secret10_1ZoneSimpleButton = new SimpleButton(secret10_1Zone);
        secret10_1ZoneSimpleButton.callback = () => this.secret10_1.visible=true;

        // secret10_2Zone (components)
        const secret10_2ZoneSimpleButton = new SimpleButton(secret10_2Zone);
        secret10_2ZoneSimpleButton.callback = () => this.secret10_2.visible=true;

        // buyButton_68 (prefab fields)
        buyButton_68.item = 344;

        // closeSecret10_1 (components)
        const closeSecret10_1SimpleButton = new SimpleButton(closeSecret10_1);
        closeSecret10_1SimpleButton.callback = () => this.secret10_1.visible=false;

        // buyButton_69 (prefab fields)
        buyButton_69.item = 345;

        // closeSecret10_2 (components)
        const closeSecret10_2SimpleButton = new SimpleButton(closeSecret10_2);
        closeSecret10_2SimpleButton.callback = () => this.secret10_2.visible=false;

        // buyButton_58 (prefab fields)
        buyButton_58.item = 685;

        // buyButton_59 (prefab fields)
        buyButton_59.item = 686;

        // buyButton_61 (prefab fields)
        buyButton_61.item = 687;

        // buyButton_63 (prefab fields)
        buyButton_63.item = 688;

        // secret9_1Zone (components)
        const secret9_1ZoneSimpleButton = new SimpleButton(secret9_1Zone);
        secret9_1ZoneSimpleButton.callback = () => this.secret9_1.visible=true;

        // secret9_2Zone (components)
        const secret9_2ZoneSimpleButton = new SimpleButton(secret9_2Zone);
        secret9_2ZoneSimpleButton.callback = () => this.secret9_2.visible=true;

        // buyButton_64 (prefab fields)
        buyButton_64.item = 31;

        // closeSecret9_1 (components)
        const closeSecret9_1SimpleButton = new SimpleButton(closeSecret9_1);
        closeSecret9_1SimpleButton.callback = () => this.secret9_1.visible=false;

        // buyButton_60 (prefab fields)
        buyButton_60.item = 626;

        // closeSecret9_2 (components)
        const closeSecret9_2SimpleButton = new SimpleButton(closeSecret9_2);
        closeSecret9_2SimpleButton.callback = () => this.secret9_2.visible=false;

        // buyButton_51 (prefab fields)
        buyButton_51.item = 61;

        // buyButton_52 (prefab fields)
        buyButton_52.item = 62;

        // buyButton_53 (prefab fields)
        buyButton_53.item = 63;

        // buyButton_54 (prefab fields)
        buyButton_54.item = 67;

        // buyButton_55 (prefab fields)
        buyButton_55.item = 66;

        // buyButton_56 (prefab fields)
        buyButton_56.item = 65;

        // secret8_1Zone (components)
        const secret8_1ZoneSimpleButton = new SimpleButton(secret8_1Zone);
        secret8_1ZoneSimpleButton.callback = () => this.secret8_1.visible=true;

        // buyButton_57 (prefab fields)
        buyButton_57.item = 359;

        // closeSecret8_1 (components)
        const closeSecret8_1SimpleButton = new SimpleButton(closeSecret8_1);
        closeSecret8_1SimpleButton.callback = () => this.secret8_1.visible=false;

        // buyButton_29 (prefab fields)
        buyButton_29.item = 343;

        // buyButton_30 (prefab fields)
        buyButton_30.item = 536;

        // buyButton_31 (prefab fields)
        buyButton_31.item = 342;

        // buyButton_32 (prefab fields)
        buyButton_32.item = 537;

        // buyButton_33 (prefab fields)
        buyButton_33.item = 539;

        // buyButton_34 (prefab fields)
        buyButton_34.item = 538;

        // secret7_1Zone (components)
        const secret7_1ZoneSimpleButton = new SimpleButton(secret7_1Zone);
        secret7_1ZoneSimpleButton.callback = () => this.secret7_1.visible=true;

        // buyButton_50 (prefab fields)
        buyButton_50.item = 376;

        // closeSecret7_1 (components)
        const closeSecret7_1SimpleButton = new SimpleButton(closeSecret7_1);
        closeSecret7_1SimpleButton.callback = () => this.secret7_1.visible=false;

        // buyButton_22 (prefab fields)
        buyButton_22.item = 547;

        // buyButton_23 (prefab fields)
        buyButton_23.item = 546;

        // buyButton_24 (prefab fields)
        buyButton_24.item = 535;

        // buyButton_25 (prefab fields)
        buyButton_25.item = 696;

        // buyButton_26 (prefab fields)
        buyButton_26.item = 697;

        // buyButton_27 (prefab fields)
        buyButton_27.item = 698;

        // secret6_1Zone (components)
        const secret6_1ZoneSimpleButton = new SimpleButton(secret6_1Zone);
        secret6_1ZoneSimpleButton.callback = () => this.secret6_1.visible=true;

        // secret6_2Zone (components)
        const secret6_2ZoneSimpleButton = new SimpleButton(secret6_2Zone);
        secret6_2ZoneSimpleButton.callback = () => this.secret6_2.visible=true;

        // buyButton_28 (prefab fields)
        buyButton_28.item = 410;

        // closeSecret6_1 (components)
        const closeSecret6_1SimpleButton = new SimpleButton(closeSecret6_1);
        closeSecret6_1SimpleButton.callback = () => this.secret6_1.visible=false;

        // buyButton_49 (prefab fields)
        buyButton_49.item = 137;

        // closeSecret6_2 (components)
        const closeSecret6_2SimpleButton = new SimpleButton(closeSecret6_2);
        closeSecret6_2SimpleButton.callback = () => this.secret6_2.visible=false;

        // buyButton_15 (prefab fields)
        buyButton_15.item = 699;

        // buyButton_16 (prefab fields)
        buyButton_16.item = 691;

        // buyButton_17 (prefab fields)
        buyButton_17.item = 695;

        // buyButton_18 (prefab fields)
        buyButton_18.item = 692;

        // buyButton_19 (prefab fields)
        buyButton_19.item = 693;

        // buyButton_20 (prefab fields)
        buyButton_20.item = 694;

        // secret5_1Zone (components)
        const secret5_1ZoneSimpleButton = new SimpleButton(secret5_1Zone);
        secret5_1ZoneSimpleButton.callback = () => this.secret5_1.visible=true;

        // buyButton_21 (prefab fields)
        buyButton_21.item = 57;

        // closeSecret5_1 (components)
        const closeSecret5_1SimpleButton = new SimpleButton(closeSecret5_1);
        closeSecret5_1SimpleButton.callback = () => this.secret5_1.visible=false;

        // buyButton_10 (prefab fields)
        buyButton_10.item = 637;

        // buyButton_11 (prefab fields)
        buyButton_11.item = 636;

        // buyButton_12 (prefab fields)
        buyButton_12.item = 418;

        // buyButton_13 (prefab fields)
        buyButton_13.item = 355;

        // buyButton_14 (prefab fields)
        buyButton_14.item = 354;

        // secret4_1Zone (components)
        const secret4_1ZoneSimpleButton = new SimpleButton(secret4_1Zone);
        secret4_1ZoneSimpleButton.callback = () => this.secret4_1.visible=true;

        // secret4_2Zone (components)
        const secret4_2ZoneSimpleButton = new SimpleButton(secret4_2Zone);
        secret4_2ZoneSimpleButton.callback = () => this.secret4_2.visible=true;

        // buyButton_47 (prefab fields)
        buyButton_47.item = 411;

        // closeSecret4_1 (components)
        const closeSecret4_1SimpleButton = new SimpleButton(closeSecret4_1);
        closeSecret4_1SimpleButton.callback = () => this.secret4_1.visible=false;

        // buyButton_48 (prefab fields)
        buyButton_48.item = 544;

        // closeSecret4_2 (components)
        const closeSecret4_2SimpleButton = new SimpleButton(closeSecret4_2);
        closeSecret4_2SimpleButton.callback = () => this.secret4_2.visible=false;

        // buyButton_5 (prefab fields)
        buyButton_5.item = 712;

        // buyButton_6 (prefab fields)
        buyButton_6.item = 713;

        // buyButton_7 (prefab fields)
        buyButton_7.item = 711;

        // buyButton_8 (prefab fields)
        buyButton_8.item = 719;

        // buyButton_9 (prefab fields)
        buyButton_9.item = 710;

        // buyButton_40 (prefab fields)
        buyButton_40.item = 364;

        // buyButton_45 (prefab fields)
        buyButton_45.item = 714;

        // secret3_1Zone (components)
        const secret3_1ZoneSimpleButton = new SimpleButton(secret3_1Zone);
        secret3_1ZoneSimpleButton.callback = () => this.secret3_1.visible=true;

        // secret3_2Zone (components)
        const secret3_2ZoneSimpleButton = new SimpleButton(secret3_2Zone);
        secret3_2ZoneSimpleButton.callback = () => this.secret3_2.visible=true;

        // secret3_3Zone (components)
        const secret3_3ZoneSimpleButton = new SimpleButton(secret3_3Zone);
        secret3_3ZoneSimpleButton.callback = () => this.secret3_3.visible=true;

        // secret3_4Zone (components)
        const secret3_4ZoneSimpleButton = new SimpleButton(secret3_4Zone);
        secret3_4ZoneSimpleButton.callback = () => this.secret3_4.visible=true;

        // secret3_5Zone (components)
        const secret3_5ZoneSimpleButton = new SimpleButton(secret3_5Zone);
        secret3_5ZoneSimpleButton.callback = () => this.secret3_5.visible=true;

        // buyButton_41 (prefab fields)
        buyButton_41.item = 339;

        // closeSecret3_1 (components)
        const closeSecret3_1SimpleButton = new SimpleButton(closeSecret3_1);
        closeSecret3_1SimpleButton.callback = () => this.secret3_1.visible=false;

        // buyButton_42 (prefab fields)
        buyButton_42.item = 340;

        // closeSecret3_2 (components)
        const closeSecret3_2SimpleButton = new SimpleButton(closeSecret3_2);
        closeSecret3_2SimpleButton.callback = () => this.secret3_2.visible=false;

        // buyButton_44 (prefab fields)
        buyButton_44.item = 337;

        // closeSecret3_3 (components)
        const closeSecret3_3SimpleButton = new SimpleButton(closeSecret3_3);
        closeSecret3_3SimpleButton.callback = () => this.secret3_3.visible=false;

        // buyButton_43 (prefab fields)
        buyButton_43.item = 414;

        // closeSecret3_4 (components)
        const closeSecret3_4SimpleButton = new SimpleButton(closeSecret3_4);
        closeSecret3_4SimpleButton.callback = () => this.secret3_4.visible=false;

        // buyButton_46 (prefab fields)
        buyButton_46.item = 338;

        // closeSecret3_5 (components)
        const closeSecret3_5SimpleButton = new SimpleButton(closeSecret3_5);
        closeSecret3_5SimpleButton.callback = () => this.secret3_5.visible=false;

        // buyButton_1 (prefab fields)
        buyButton_1.item = 708;

        // buyButton_2 (prefab fields)
        buyButton_2.item = 715;

        // buyButton_3 (prefab fields)
        buyButton_3.item = 707;

        // buyButton_4 (prefab fields)
        buyButton_4.item = 717;

        // buyButton_35 (prefab fields)
        buyButton_35.item = 718;

        // buyButton_36 (prefab fields)
        buyButton_36.item = 716;

        // s2_1Zone (components)
        const s2_1ZoneSimpleButton = new SimpleButton(s2_1Zone);
        s2_1ZoneSimpleButton.callback = () => this.secret2_1.visible=true;

        // s2_2Zone (components)
        const s2_2ZoneSimpleButton = new SimpleButton(s2_2Zone);
        s2_2ZoneSimpleButton.callback = () => this.secret2_2.visible=true;

        // s2_3Zone (components)
        const s2_3ZoneSimpleButton = new SimpleButton(s2_3Zone);
        s2_3ZoneSimpleButton.callback = () => this.secret2_3.visible=true;

        // s2_4Zone (components)
        const s2_4ZoneSimpleButton = new SimpleButton(s2_4Zone);
        s2_4ZoneSimpleButton.callback = () => this.secret2_4.visible=true;

        // buyButton (prefab fields)
        buyButton.item = 251;

        // closeSecret2_1 (components)
        const closeSecret2_1SimpleButton = new SimpleButton(closeSecret2_1);
        closeSecret2_1SimpleButton.callback = () => this.secret2_1.visible=false;

        // buyButton_37 (prefab fields)
        buyButton_37.item = 413;

        // closeSecret2_2 (components)
        const closeSecret2_2SimpleButton = new SimpleButton(closeSecret2_2);
        closeSecret2_2SimpleButton.callback = () => this.secret2_2.visible=false;

        // buyButton_38 (prefab fields)
        buyButton_38.item = 353;

        // closeSecret2_3 (components)
        const closeSecret2_3SimpleButton = new SimpleButton(closeSecret2_3);
        closeSecret2_3SimpleButton.callback = () => this.secret2_3.visible=false;

        // buyButton_39 (prefab fields)
        buyButton_39.item = 252;

        // closeSecret2_4 (components)
        const closeSecret2_4SimpleButton = new SimpleButton(closeSecret2_4);
        closeSecret2_4SimpleButton.callback = () => this.secret2_4.visible=false;

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

        this.secret11_1 = secret11_1;
        this.secret11_2 = secret11_2;
        this.secret11_3 = secret11_3;
        this.secret10_1 = secret10_1;
        this.secret10_2 = secret10_2;
        this.secret9_1 = secret9_1;
        this.secret9_2 = secret9_2;
        this.secret8_1 = secret8_1;
        this.secret7_1 = secret7_1;
        this.secret6_1 = secret6_1;
        this.secret6_2 = secret6_2;
        this.secret5_1 = secret5_1;
        this.secret4_1 = secret4_1;
        this.secret4_2 = secret4_2;
        this.secret3_1 = secret3_1;
        this.secret3_2 = secret3_2;
        this.secret3_3 = secret3_3;
        this.secret3_4 = secret3_4;
        this.secret3_5 = secret3_5;
        this.secret2_1 = secret2_1;
        this.secret2_2 = secret2_2;
        this.secret2_3 = secret2_3;
        this.secret2_4 = secret2_4;
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
