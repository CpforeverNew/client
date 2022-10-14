import { Button, Interactive, SimpleButton } from '@components/components'

import Book from '@scenes/interface/books/Book'
import FloorButton from './buttons/FloorButton'
import UpgradeButton from './buttons/UpgradeButton'


/* START OF COMPILED CODE */

export default class IglooCatalog extends Book {

    constructor() {
        super("IglooCatalog");

        /** @type {Phaser.GameObjects.Container} */
        this.secret;
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

        this.load.pack("igloocatalog-pack", "assets/media/interface/catalogs/igloo/igloocatalog-pack.json");
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

        // page_7
        const page_7 = this.add.image(673, 626, "igloocatalog", "page8");
        page8.add(page_7);

        // close_left_111111
        const close_left_111111 = this.add.image(494, 36, "igloocatalog", "close_left");
        close_left_111111.setOrigin(0, 0);
        page8.add(close_left_111111);

        // page_left_1_11111
        const page_left_1_11111 = this.add.image(492, 584, "igloocatalog", "page_left");
        page_left_1_11111.setOrigin(0, 0);
        page8.add(page_left_1_11111);

        // page7
        const page7 = this.add.container(0, 0);
        page7.visible = false;

        // page_6
        const page_6 = this.add.image(669, 628, "igloocatalog", "page7");
        page7.add(page_6);

        // upgradeButton
        const upgradeButton = new UpgradeButton(this, 292, 529);
        page7.add(upgradeButton);

        // upgradeButton_1
        const upgradeButton_1 = new UpgradeButton(this, 867, 531);
        page7.add(upgradeButton_1);

        // page_left_5
        const page_left_5 = this.add.image(194, 587, "igloocatalog", "page_left");
        page_left_5.setOrigin(0, 0);
        page7.add(page_left_5);

        // close_right_5
        const close_right_5 = this.add.image(1207, 39, "igloocatalog", "close_right");
        close_right_5.setOrigin(0, 0);
        page7.add(close_right_5);

        // page_right_5
        const page_right_5 = this.add.image(1208, 588, "igloocatalog", "page_right");
        page_right_5.setOrigin(0, 0);
        page7.add(page_right_5);

        // close_left_5
        const close_left_5 = this.add.image(196, 39, "igloocatalog", "close_left");
        close_left_5.setOrigin(0, 0);
        page7.add(close_left_5);

        // page6
        const page6 = this.add.container(0, 0);
        page6.visible = false;

        // page_1
        const page_1 = this.add.image(669, 625, "igloocatalog", "page6");
        page6.add(page_1);

        // upgradeButton_21111111
        const upgradeButton_21111111 = new UpgradeButton(this, 292, 526);
        page6.add(upgradeButton_21111111);

        // upgradeButton_2_111111
        const upgradeButton_2_111111 = new UpgradeButton(this, 867, 571);
        page6.add(upgradeButton_2_111111);

        // page_left_4
        const page_left_4 = this.add.image(194, 587, "igloocatalog", "page_left");
        page_left_4.setOrigin(0, 0);
        page6.add(page_left_4);

        // close_right_3
        const close_right_3 = this.add.image(1207, 39, "igloocatalog", "close_right");
        close_right_3.setOrigin(0, 0);
        page6.add(close_right_3);

        // page_right_3
        const page_right_3 = this.add.image(1208, 588, "igloocatalog", "page_right");
        page_right_3.setOrigin(0, 0);
        page6.add(page_right_3);

        // close_left_4
        const close_left_4 = this.add.image(196, 39, "igloocatalog", "close_left");
        close_left_4.setOrigin(0, 0);
        page6.add(close_left_4);

        // page5
        const page5 = this.add.container(0, 0);
        page5.visible = false;

        // page_5
        const page_5 = this.add.image(677, 627, "igloocatalog", "page5");
        page5.add(page_5);

        // upgradeButton_211
        const upgradeButton_211 = new UpgradeButton(this, 299, 569);
        page5.add(upgradeButton_211);

        // upgradeButton_2_111
        const upgradeButton_2_111 = new UpgradeButton(this, 871, 583);
        page5.add(upgradeButton_2_111);

        // close_left_3
        const close_left_3 = this.add.image(196, 39, "igloocatalog", "close_left");
        close_left_3.setOrigin(0, 0);
        page5.add(close_left_3);

        // page_right_2
        const page_right_2 = this.add.image(1208, 588, "igloocatalog", "page_right");
        page_right_2.setOrigin(0, 0);
        page5.add(page_right_2);

        // close_right_2
        const close_right_2 = this.add.image(1207, 39, "igloocatalog", "close_right");
        close_right_2.setOrigin(0, 0);
        page5.add(close_right_2);

        // page_left_3
        const page_left_3 = this.add.image(194, 587, "igloocatalog", "page_left");
        page_left_3.setOrigin(0, 0);
        page5.add(page_left_3);

        // page4
        const page4 = this.add.container(0, 0);
        page4.visible = false;

        // page_4
        const page_4 = this.add.image(672, 624, "igloocatalog", "page4");
        page4.add(page_4);

        // upgradeButton_21
        const upgradeButton_21 = new UpgradeButton(this, 295, 530);
        page4.add(upgradeButton_21);

        // upgradeButton_2_11
        const upgradeButton_2_11 = new UpgradeButton(this, 867, 568);
        page4.add(upgradeButton_2_11);

        // page_left_2
        const page_left_2 = this.add.image(194, 587, "igloocatalog", "page_left");
        page_left_2.setOrigin(0, 0);
        page4.add(page_left_2);

        // close_right_1
        const close_right_1 = this.add.image(1207, 39, "igloocatalog", "close_right");
        close_right_1.setOrigin(0, 0);
        page4.add(close_right_1);

        // page_right_1
        const page_right_1 = this.add.image(1208, 588, "igloocatalog", "page_right");
        page_right_1.setOrigin(0, 0);
        page4.add(page_right_1);

        // close_left_2
        const close_left_2 = this.add.image(196, 39, "igloocatalog", "close_left");
        close_left_2.setOrigin(0, 0);
        page4.add(close_left_2);

        // page3
        const page3 = this.add.container(0, 0);
        page3.visible = false;

        // page_3_fin
        const page_3_fin = this.add.image(765, 432, "igloojul22", "page_3_fin");
        page3.add(page_3_fin);

        // page_3
        const page_3 = this.add.image(675, 628, "igloocatalog", "page3");
        page3.add(page_3);

        // floorButton_5
        const floorButton_5 = new FloorButton(this, 530, 173);
        page3.add(floorButton_5);

        // floorButton_6
        const floorButton_6 = new FloorButton(this, 535, 339);
        page3.add(floorButton_6);

        // floorButton_7
        const floorButton_7 = new FloorButton(this, 534, 522);
        page3.add(floorButton_7);

        // floorButton_8
        const floorButton_8 = new FloorButton(this, 537, 692);
        page3.add(floorButton_8);

        // floorButton_9
        const floorButton_9 = new FloorButton(this, 847, 656);
        floorButton_9.scaleX = 1.3;
        floorButton_9.scaleY = 1.3;
        floorButton_9.setOrigin(0, 0);
        page3.add(floorButton_9);

        // close_left_1
        const close_left_1 = this.add.image(196, 39, "igloocatalog", "close_left");
        close_left_1.setOrigin(0, 0);
        page3.add(close_left_1);

        // page_right
        const page_right = this.add.image(1208, 588, "igloocatalog", "page_right");
        page_right.setOrigin(0, 0);
        page3.add(page_right);

        // close_right
        const close_right = this.add.image(1207, 39, "igloocatalog", "close_right");
        close_right.setOrigin(0, 0);
        page3.add(close_right);

        // page_left
        const page_left = this.add.image(194, 587, "igloocatalog", "page_left");
        page_left.setOrigin(0, 0);
        page3.add(page_left);

        // secret
        const secret = this.add.container(0, 0);
        secret.visible = false;
        page3.add(secret);

        // secret_1
        const secret_1 = this.add.image(780, 426, "igloocatalog", "secret");
        secret.add(secret_1);

        // sbtn
        const sbtn = this.add.image(995, 248, "igloocatalog", "sbtn");
        secret.add(sbtn);

        // upgradeButton_2
        const upgradeButton_2 = new UpgradeButton(this, 587, 491);
        secret.add(upgradeButton_2);

        // rectangle_1
        const rectangle_1 = this.add.rectangle(1178, 111, 128, 128);
        rectangle_1.scaleY = 0.5564219459795425;
        rectangle_1.alpha = 0.00005;
        rectangle_1.isFilled = true;
        page3.add(rectangle_1);

        // page2
        const page2 = this.add.container(0, 0);
        page2.visible = false;

        // page_2
        const page_2 = this.add.image(677, 487, "igloocatalog", "page2");
        page2.add(page_2);

        // page_left_1
        const page_left_1 = this.add.image(194, 587, "igloocatalog", "page_left");
        page_left_1.setOrigin(0, 0);
        page2.add(page_left_1);

        // close_right_4
        const close_right_4 = this.add.image(1207, 39, "igloocatalog", "close_right");
        close_right_4.setOrigin(0, 0);
        page2.add(close_right_4);

        // page_right_4
        const page_right_4 = this.add.image(1208, 588, "igloocatalog", "page_right");
        page_right_4.setOrigin(0, 0);
        page2.add(page_right_4);

        // close_left
        const close_left = this.add.image(196, 39, "igloocatalog", "close_left");
        close_left.setOrigin(0, 0);
        page2.add(close_left);

        // floorButton
        const floorButton = new FloorButton(this, 525, 461);
        page2.add(floorButton);

        // floorButton_1
        const floorButton_1 = new FloorButton(this, 535, 687);
        page2.add(floorButton_1);

        // floorButton_2
        const floorButton_2 = new FloorButton(this, 1105, 513);
        page2.add(floorButton_2);

        // floorButton_3
        const floorButton_3 = new FloorButton(this, 1111, 686);
        page2.add(floorButton_3);

        // floorButton_4
        const floorButton_4 = new FloorButton(this, 1117, 345);
        page2.add(floorButton_4);

        // floorButton_10
        const floorButton_10 = new FloorButton(this, 1116, 178);
        page2.add(floorButton_10);

        // page1
        const page1 = this.add.container(0, 0);

        // page
        const page = this.add.image(663, 513, "igloocatalog", "page1");
        page1.add(page);

        // logo
        const logo = this.add.image(761, 167, "igloocatalog", "logo");
        page1.add(logo);

        // next_page0001_png
        const next_page0001_png = this.add.image(981, 700, "igloocatalog", "page_right");
        page1.add(next_page0001_png);

        // close_right_4_1
        const close_right_4_1 = this.add.image(918, 38, "igloocatalog", "close_right");
        close_right_4_1.setOrigin(0, 0);
        page1.add(close_right_4_1);

        // buttons
        const buttons = this.add.container(190, 41);
        buttons.visible = false;

        // coins
        const coins = this.add.text(1130, 790, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page8];

        // block (components)
        new Interactive(block);

        // close_left_111111 (components)
        const close_left_111111Button = new Button(close_left_111111);
        close_left_111111Button.spriteName = "close_left";
        close_left_111111Button.callback = () => this.close();
        close_left_111111Button.activeFrame = false;

        // page_left_1_11111 (components)
        const page_left_1_11111Button = new Button(page_left_1_11111);
        page_left_1_11111Button.spriteName = "page_left";
        page_left_1_11111Button.callback = () => this.prevPage();
        page_left_1_11111Button.activeFrame = false;

        // upgradeButton (prefab fields)
        upgradeButton.igloo = 21;

        // upgradeButton_1 (prefab fields)
        upgradeButton_1.igloo = 1;

        // page_left_5 (components)
        const page_left_5Button = new Button(page_left_5);
        page_left_5Button.spriteName = "page_left";
        page_left_5Button.callback = () => this.prevPage();
        page_left_5Button.activeFrame = false;

        // close_right_5 (components)
        const close_right_5Button = new Button(close_right_5);
        close_right_5Button.spriteName = "close_right";
        close_right_5Button.callback = () => this.close();
        close_right_5Button.activeFrame = false;

        // page_right_5 (components)
        const page_right_5Button = new Button(page_right_5);
        page_right_5Button.spriteName = "page_right";
        page_right_5Button.callback = () => this.nextPage();
        page_right_5Button.activeFrame = false;

        // close_left_5 (components)
        const close_left_5Button = new Button(close_left_5);
        close_left_5Button.spriteName = "close_left";
        close_left_5Button.callback = () => this.close();
        close_left_5Button.activeFrame = false;

        // upgradeButton_21111111 (prefab fields)
        upgradeButton_21111111.igloo = 16;

        // upgradeButton_2_111111 (prefab fields)
        upgradeButton_2_111111.igloo = 13;

        // page_left_4 (components)
        const page_left_4Button = new Button(page_left_4);
        page_left_4Button.spriteName = "page_left";
        page_left_4Button.callback = () => this.prevPage();
        page_left_4Button.activeFrame = false;

        // close_right_3 (components)
        const close_right_3Button = new Button(close_right_3);
        close_right_3Button.spriteName = "close_right";
        close_right_3Button.callback = () => this.close();
        close_right_3Button.activeFrame = false;

        // page_right_3 (components)
        const page_right_3Button = new Button(page_right_3);
        page_right_3Button.spriteName = "page_right";
        page_right_3Button.callback = () => this.nextPage();
        page_right_3Button.activeFrame = false;

        // close_left_4 (components)
        const close_left_4Button = new Button(close_left_4);
        close_left_4Button.spriteName = "close_left";
        close_left_4Button.callback = () => this.close();
        close_left_4Button.activeFrame = false;

        // upgradeButton_211 (prefab fields)
        upgradeButton_211.igloo = 27;

        // upgradeButton_2_111 (prefab fields)
        upgradeButton_2_111.igloo = 26;

        // close_left_3 (components)
        const close_left_3Button = new Button(close_left_3);
        close_left_3Button.spriteName = "close_left";
        close_left_3Button.callback = () => this.close();
        close_left_3Button.activeFrame = false;

        // page_right_2 (components)
        const page_right_2Button = new Button(page_right_2);
        page_right_2Button.spriteName = "page_right";
        page_right_2Button.callback = () => this.nextPage();
        page_right_2Button.activeFrame = false;

        // close_right_2 (components)
        const close_right_2Button = new Button(close_right_2);
        close_right_2Button.spriteName = "close_right";
        close_right_2Button.callback = () => this.close();
        close_right_2Button.activeFrame = false;

        // page_left_3 (components)
        const page_left_3Button = new Button(page_left_3);
        page_left_3Button.spriteName = "page_left";
        page_left_3Button.callback = () => this.prevPage();
        page_left_3Button.activeFrame = false;

        // upgradeButton_21 (prefab fields)
        upgradeButton_21.igloo = 20;

        // upgradeButton_2_11 (prefab fields)
        upgradeButton_2_11.igloo = 28;

        // page_left_2 (components)
        const page_left_2Button = new Button(page_left_2);
        page_left_2Button.spriteName = "page_left";
        page_left_2Button.callback = () => this.prevPage();
        page_left_2Button.activeFrame = false;

        // close_right_1 (components)
        const close_right_1Button = new Button(close_right_1);
        close_right_1Button.spriteName = "close_right";
        close_right_1Button.callback = () => this.close();
        close_right_1Button.activeFrame = false;

        // page_right_1 (components)
        const page_right_1Button = new Button(page_right_1);
        page_right_1Button.spriteName = "page_right";
        page_right_1Button.callback = () => this.nextPage();
        page_right_1Button.activeFrame = false;

        // close_left_2 (components)
        const close_left_2Button = new Button(close_left_2);
        close_left_2Button.spriteName = "close_left";
        close_left_2Button.callback = () => this.close();
        close_left_2Button.activeFrame = false;

        // floorButton_5 (prefab fields)
        floorButton_5.floor = 5;

        // floorButton_6 (prefab fields)
        floorButton_6.floor = 16;

        // floorButton_7 (prefab fields)
        floorButton_7.floor = 2;

        // floorButton_8 (prefab fields)
        floorButton_8.floor = 15;

        // close_left_1 (components)
        const close_left_1Button = new Button(close_left_1);
        close_left_1Button.spriteName = "close_left";
        close_left_1Button.callback = () => this.close();
        close_left_1Button.activeFrame = false;

        // page_right (components)
        const page_rightButton = new Button(page_right);
        page_rightButton.spriteName = "page_right";
        page_rightButton.callback = () => this.nextPage();
        page_rightButton.activeFrame = false;

        // close_right (components)
        const close_rightButton = new Button(close_right);
        close_rightButton.spriteName = "close_right";
        close_rightButton.callback = () => this.close();
        close_rightButton.activeFrame = false;

        // page_left (components)
        const page_leftButton = new Button(page_left);
        page_leftButton.spriteName = "page_left";
        page_leftButton.callback = () => this.prevPage();
        page_leftButton.activeFrame = false;

        // sbtn (components)
        const sbtnButton = new Button(sbtn);
        sbtnButton.spriteName = "sbtn";
        sbtnButton.callback = () => this.secret.visible = false;

        // rectangle_1 (components)
        const rectangle_1SimpleButton = new SimpleButton(rectangle_1);
        rectangle_1SimpleButton.callback = () => this.secret.visible = true;

        // page_left_1 (components)
        const page_left_1Button = new Button(page_left_1);
        page_left_1Button.spriteName = "page_left";
        page_left_1Button.callback = () => this.prevPage();
        page_left_1Button.activeFrame = false;

        // close_right_4 (components)
        const close_right_4Button = new Button(close_right_4);
        close_right_4Button.spriteName = "close_right";
        close_right_4Button.callback = () => this.close();
        close_right_4Button.activeFrame = false;

        // page_right_4 (components)
        const page_right_4Button = new Button(page_right_4);
        page_right_4Button.spriteName = "page_right";
        page_right_4Button.callback = () => this.nextPage();
        page_right_4Button.activeFrame = false;

        // close_left (components)
        const close_leftButton = new Button(close_left);
        close_leftButton.spriteName = "close_left";
        close_leftButton.callback = () => this.close();
        close_leftButton.activeFrame = false;

        // floorButton (prefab fields)
        floorButton.floor = 20;

        // floorButton_1 (prefab fields)
        floorButton_1.floor = 7;

        // floorButton_2 (prefab fields)
        floorButton_2.floor = 18;

        // floorButton_3 (prefab fields)
        floorButton_3.floor = 549;

        // floorButton_3 (components)
        const floorButton_3Button = Button.getComponent(floorButton_3);
        floorButton_3Button.callback = () => this.scene.buy(this.floor);

        // floorButton_4 (prefab fields)
        floorButton_4.floor = 19;

        // floorButton_10 (prefab fields)
        floorButton_10.floor = 17;

        // next_page0001_png (components)
        const next_page0001_pngButton = new Button(next_page0001_png);
        next_page0001_pngButton.spriteName = "page_right";
        next_page0001_pngButton.callback = () => this.nextPage();
        next_page0001_pngButton.pixelPerfect = true;

        // close_right_4_1 (components)
        const close_right_4_1Button = new Button(close_right_4_1);
        close_right_4_1Button.spriteName = "close_right";
        close_right_4_1Button.callback = () => this.close();
        close_right_4_1Button.activeFrame = false;

        this.secret = secret;
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

    buyFloor(floor) {
        if (floor == this.world.room.args.flooring) {
            return this.interface.prompt.showError('You already have this flooring.')
        }

        this.showPrompt(floor, 'flooring', () => {
            this.network.send('update_flooring', { flooring: floor })
            this.interface.prompt.window.visible = false
            this.close()
        })
    }

    buyIgloo(igloo) {
        if (this.world.client.igloos.includes(igloo)) {
            return this.interface.prompt.showError('You already have this igloo.')
        }

        this.showPrompt(igloo, 'igloos', () => {
            this.network.send('add_igloo', { igloo: igloo })
            this.interface.prompt.window.visible = false
        })
    }

    showPrompt(id, type, callback) {
        let name = this.crumbs[type][id].name
        let cost = this.crumbs[type][id].cost

        let text = `Would you like to buy ${name}\n for ${cost} coins? You currently have ${this.world.client.coins} coins.`

        this.interface.prompt.showWindow(text, 'dual', callback, () => {
            this.interface.prompt.window.visible = false
        })
    }

    buy(item) {
         this.interface.prompt.showFurniture(item)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
