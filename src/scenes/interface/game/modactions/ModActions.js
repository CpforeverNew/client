import BaseContainer from '@scenes/base/BaseContainer'

import { Button, SimpleButton, Interactive, NineSlice } from '@components/components'

import Inventory from '../playercard/inventory/Inventory'
import InventorySort from '../playercard/inventory_sort/InventorySort'
import Buttons from '../playercard/buttons/Buttons'
import PaperDoll from '../playercard/paperdoll/PaperDoll'


/* START OF COMPILED CODE */

export default class ModActions extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 460);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle;
        /** @type {PaperDoll} */
        this.paperDoll;
        /** @type {Phaser.GameObjects.Text} */
        this.username;
        /** @type {Phaser.GameObjects.Sprite} */
        this.badge;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Text} */
        this.item_txt;
        /** @type {Phaser.GameObjects.Text} */
        this.ban_txt;
        /** @type {Phaser.GameObjects.Text} */
        this.stamps_txt;
        /** @type {Phaser.GameObjects.Text} */
        this.ban_count_txt;
        /** @type {Phaser.GameObjects.Text} */
        this.banned_until_txt;
        /** @type {Phaser.GameObjects.Text} */
        this.joindate_txt;
        /** @type {Phaser.GameObjects.Text} */
        this.username_status_txt;
        /** @type {Phaser.GameObjects.Text} */
        this.activated_txt;
        /** @type {Phaser.GameObjects.Text} */
        this.activated_txt_1;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // rectangle
        const rectangle = scene.add.rectangle(0, 0, 800, 600);
        rectangle.isFilled = true;
        rectangle.fillColor = 164045;
        this.add(rectangle);

        // card_photo
        const card_photo = scene.add.image(-156, -2, "main", "card-photo");
        this.add(card_photo);

        // paperDoll
        const paperDoll = new PaperDoll(scene, -156, -2);
        this.add(paperDoll);

        // username
        const username = scene.add.text(-156, -238, "", {});
        username.setOrigin(0.5, 0.5);
        username.text = "Username";
        username.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":360,"fontFamily": "Burbank Small", "fontSize": "32px", "fontStyle": "bold" });
        this.add(username);

        // badge
        const badge = scene.add.sprite(-305, -217, "main", "card-badge-free");
        this.add(badge);

        // x_button
        const x_button = scene.add.image(347, -253, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(347, -255, "main", "blue-x");
        this.add(blue_x);

        // coins
        const coins = scene.add.text(246, -183, "", {});
        coins.setOrigin(0.5, 0.5);
        coins.text = "add coins: 000000";
        coins.setStyle({ "color": "#000000ff", "fixedWidth":250,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(coins);

        // card_coin
        const card_coin = scene.add.image(90, -185, "main", "card-coin");
        this.add(card_coin);

        // item_txt
        const item_txt = scene.add.text(247, -82, "", {});
        item_txt.setOrigin(0.5, 0.5);
        item_txt.text = "add item by id";
        item_txt.setStyle({ "color": "#000000ff", "fixedWidth":250,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(item_txt);

        // item_icon
        const item_icon = scene.add.image(90, -81, "main", "buddy/icon-mascot");
        this.add(item_icon);

        // ban_txt
        const ban_txt = scene.add.text(247, 45, "", {});
        ban_txt.setOrigin(0.5, 0.5);
        ban_txt.text = "ban player for\n3H  1D  3D  1W  3W PERM";
        ban_txt.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(ban_txt);

        // ban_icon
        const ban_icon = scene.add.image(90, 31, "main", "mod-icon");
        this.add(ban_icon);

        // stamps_txt
        const stamps_txt = scene.add.text(247, 138, "", {});
        stamps_txt.setOrigin(0.5, 0.5);
        stamps_txt.text = "change username";
        stamps_txt.setStyle({ "color": "#000000ff", "fixedWidth":250,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(stamps_txt);

        // help_icon
        const help_icon = scene.add.image(90, 137, "main", "help-icon");
        this.add(help_icon);

        // username_rounded
        const username_rounded = scene.add.ellipse(124, 180, 30, 30);
        username_rounded.isFilled = true;
        username_rounded.fillColor = 1136020;
        this.add(username_rounded);

        // username_bg
        const username_bg = scene.add.rectangle(223, 180, 200, 30);
        username_bg.isFilled = true;
        username_bg.fillColor = 1136020;
        this.add(username_bg);

        // username_btn
        const username_btn = scene.add.image(322, 180, "main", "grey-arrow");
        username_btn.angle = 90;
        this.add(username_btn);

        // ban_btn_5
        const ban_btn_5 = scene.add.image(346, 86, "main", "grey-arrow");
        ban_btn_5.angle = 90;
        this.add(ban_btn_5);

        // ban_btn_4
        const ban_btn_4 = scene.add.image(294, 86, "main", "grey-arrow");
        ban_btn_4.angle = 90;
        this.add(ban_btn_4);

        // ban_btn_3
        const ban_btn_3 = scene.add.image(249, 86, "main", "grey-arrow");
        ban_btn_3.angle = 90;
        this.add(ban_btn_3);

        // ban_btn_2
        const ban_btn_2 = scene.add.image(206, 86, "main", "grey-arrow");
        ban_btn_2.angle = 90;
        this.add(ban_btn_2);

        // ban_btn_1
        const ban_btn_1 = scene.add.image(167, 86, "main", "grey-arrow");
        ban_btn_1.angle = 90;
        this.add(ban_btn_1);

        // ban_btn
        const ban_btn = scene.add.image(128, 86, "main", "grey-arrow");
        ban_btn.angle = 90;
        this.add(ban_btn);

        // items_rounded
        const items_rounded = scene.add.ellipse(124, -32, 30, 30);
        items_rounded.isFilled = true;
        items_rounded.fillColor = 1136020;
        this.add(items_rounded);

        // items_bg
        const items_bg = scene.add.rectangle(223, -32, 200, 30);
        items_bg.isFilled = true;
        items_bg.fillColor = 1136020;
        this.add(items_bg);

        // items_btn
        const items_btn = scene.add.image(322, -32, "main", "grey-arrow");
        items_btn.angle = 90;
        this.add(items_btn);

        // coins_rounded
        const coins_rounded = scene.add.ellipse(124, -137, 30, 30);
        coins_rounded.isFilled = true;
        coins_rounded.fillColor = 1136020;
        this.add(coins_rounded);

        // coins_bg
        const coins_bg = scene.add.rectangle(223, -137, 200, 30);
        coins_bg.isFilled = true;
        coins_bg.fillColor = 1136020;
        this.add(coins_bg);

        // coins_btn
        const coins_btn = scene.add.image(322, -137, "main", "grey-arrow");
        coins_btn.angle = 90;
        this.add(coins_btn);

        // ban_count_txt
        const ban_count_txt = scene.add.text(150, 235, "", {});
        ban_count_txt.setOrigin(0.5, 0.5);
        ban_count_txt.text = "banned 0 times";
        ban_count_txt.setStyle({ "color": "#000000ff", "fixedWidth":180,"fontFamily": "Burbank Small", "fontSize": "20px" });
        this.add(ban_count_txt);

        // banned_until_txt
        const banned_until_txt = scene.add.text(-157, 235, "", {});
        banned_until_txt.setOrigin(0.5, 0.5);
        banned_until_txt.text = "not currently banned";
        banned_until_txt.setStyle({ "color": "#000000ff", "fixedWidth":430,"fontFamily": "Burbank Small", "fontSize": "20px" });
        this.add(banned_until_txt);

        // joindate_txt
        const joindate_txt = scene.add.text(-157, 265, "", {});
        joindate_txt.setOrigin(0.5, 0.5);
        joindate_txt.text = "no join time recorded";
        joindate_txt.setStyle({ "color": "#000000ff", "fixedWidth":430,"fontFamily": "Burbank Small", "fontSize": "20px" });
        this.add(joindate_txt);

        // username_status_txt
        const username_status_txt = scene.add.text(150, 265, "", {});
        username_status_txt.setOrigin(0.5, 0.5);
        username_status_txt.text = "status: pending";
        username_status_txt.setStyle({ "color": "#000000ff", "fixedWidth":180,"fontFamily": "Burbank Small", "fontSize": "20px" });
        this.add(username_status_txt);

        // activated_txt
        const activated_txt = scene.add.text(335, 235, "", {});
        activated_txt.setOrigin(0.5, 0.5);
        activated_txt.text = "activated: no";
        activated_txt.setStyle({ "color": "#000000ff", "fixedWidth":180,"fontFamily": "Burbank Small", "fontSize": "20px" });
        this.add(activated_txt);

        // activate_btn_1
        const activate_btn_1 = scene.add.image(353, 270, "main", "grey-arrow");
        activate_btn_1.angle = 90;
        this.add(activate_btn_1);

        // activated_txt_1
        const activated_txt_1 = scene.add.text(335, 269, "", {});
        activated_txt_1.setOrigin(0.5, 0.5);
        activated_txt_1.text = "Activate";
        activated_txt_1.setStyle({ "color": "#000000ff", "fixedWidth":180,"fontFamily": "Burbank Small", "fontSize": "20px" });
        this.add(activated_txt_1);

        // block (components)
        new Interactive(block);

        // rectangle (components)
        const rectangleNineSlice = new NineSlice(rectangle);
        rectangleNineSlice.corner = 50;

        // card_photo (components)
        new Interactive(card_photo);

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => { this.hide() };

        // username_btn (components)
        const username_btnSimpleButton = new SimpleButton(username_btn);
        username_btnSimpleButton.callback = () => this.changeUsernames();

        // ban_btn_5 (components)
        const ban_btn_5SimpleButton = new SimpleButton(ban_btn_5);
        ban_btn_5SimpleButton.callback = () => this.banPlayers(5);

        // ban_btn_4 (components)
        const ban_btn_4SimpleButton = new SimpleButton(ban_btn_4);
        ban_btn_4SimpleButton.callback = () => this.banPlayers(4);

        // ban_btn_3 (components)
        const ban_btn_3SimpleButton = new SimpleButton(ban_btn_3);
        ban_btn_3SimpleButton.callback = () => this.banPlayers(3);

        // ban_btn_2 (components)
        const ban_btn_2SimpleButton = new SimpleButton(ban_btn_2);
        ban_btn_2SimpleButton.callback = () => this.banPlayers(2);

        // ban_btn_1 (components)
        const ban_btn_1SimpleButton = new SimpleButton(ban_btn_1);
        ban_btn_1SimpleButton.callback = () => this.banPlayers(1);

        // ban_btn (components)
        const ban_btnSimpleButton = new SimpleButton(ban_btn);
        ban_btnSimpleButton.callback = () => this.banPlayers(0);

        // items_btn (components)
        const items_btnSimpleButton = new SimpleButton(items_btn);
        items_btnSimpleButton.callback = () => this.addItem();

        // coins_btn (components)
        const coins_btnSimpleButton = new SimpleButton(coins_btn);
        coins_btnSimpleButton.callback = () => this.addCoin();

        // activate_btn_1 (components)
        const activate_btn_1SimpleButton = new SimpleButton(activate_btn_1);
        activate_btn_1SimpleButton.callback = () => this.handleActivate();

        this.rectangle = rectangle;
        this.paperDoll = paperDoll;
        this.username = username;
        this.badge = badge;
        this.coins = coins;
        this.item_txt = item_txt;
        this.ban_txt = ban_txt;
        this.stamps_txt = stamps_txt;
        this.ban_count_txt = ban_count_txt;
        this.banned_until_txt = banned_until_txt;
        this.joindate_txt = joindate_txt;
        this.username_status_txt = username_status_txt;
        this.activated_txt = activated_txt;
        this.activated_txt_1 = activated_txt_1;

        /* START-USER-CTR-CODE */

        // Active penguin id
        this.id = null

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    /**
     * Shows a player card by id, if the user is found in the current room the penguin object can
     * be taken from there. Otherwise the penguin object must be fetched from the server.
     *
     * @param {number} id - Penguin ID
     * @param {boolean} refresh - Whether or not a card should pass the already open check
     */
    showCard(id, refresh = false) {
        // Don't open player's card if it's already open
        if (id == this.id && this.visible && !refresh) return

        else {
            this.network.send('get_player', { id: id })
        }
    }

    /**
     * Primary showCard function, which accepts a penguin object, and optionally an items object to
     * fill the player card with the correct data. The items object is not required if the penguin is fetched
     * from the server due to all necessary data being available from the penguin object.
     *
     * @param {object} penguin - Penguin object
     * @param {object} items - Penguin items object
     */
    _showCard(penguin, bancount, activeban, items = penguin) {

        this.addcoins = document.getElementById("addcoins")
        this.additems = document.getElementById("additems")
        this.banplayer = document.getElementById("banplayer")
        this.changeusername = document.getElementById("changeusername")

        // Text
        this.username.text = penguin.username

        let jointime = new Date(penguin.joinTime)
        this.joindate_txt.text = "join time: " + jointime.toUTCString().substring(5)

        if (penguin.username_rejected == 1) this.username_status_txt.text = "status: rejected"
        if (penguin.username_approved == 1) this.username_status_txt.text = "status: approved"
        if (penguin.username_approved == 0 && penguin.username_rejected == 0) this.username_status_txt.text = "status: pending"

        if (activeban) { 
            let banduration = new Date(activeban.expires)
            this.banned_until_txt.text = "banned until: " + banduration.toUTCString().substring(5)
        }
        if (penguin.permaBan == 1) this.banned_until_txt.text = "ACCOUNT PERMANENTLY BANNED"
        if (penguin.permaBan == 0 && !activeban) this.banned_until_txt.text = "not currently banned"

        if (!bancount || bancount == 0) { this.ban_count_txt.text = "banned 0 times" }
        else if (bancount == 1) { this.ban_count_txt.text = "banned 1 time" }
        else { this.ban_count_txt.text = "banned " + bancount + " times" }

        if(penguin.activation == 1) this.activated_txt.text = "activated: yes"
        if(penguin.activation == 0) this.activated_txt.text = "activated: no"

        // Paper doll
        this.paperDoll.loadDoll(items, penguin.isClient)

        // Visible elements
        this.coins.text = `add coins: ${penguin.coins}`

        this.id = penguin.id

        this.visible = true

        this.addcoins.style.visibility = 'visible'
        this.additems.style.visibility = 'visible'
        this.changeusername.style.visibility = 'visible'
    }

    hide(){
        this.visible = false

        this.addcoins.style.visibility = 'hidden' 
        this.additems.style.visibility = 'hidden'
        this.changeusername.style.visibility = 'hidden'
    }

    show(){
        this.visible = true

        this.addcoins.style.visibility = 'visible'
        this.additems.style.visibility = 'visible'
        this.changeusername.style.visibility = 'visible'
    }

    addCoin(){
        this.interface.prompt.showWindow(`Are you sure you want to add ${this.addcoins.value.toString()}\ncoins to ${this.username.text}?`, "dual", () => this.handleAddCoins(), () => this.show())
        this.hide()
    }

    addItem(){
        let item = this.crumbs.items[this.additems.value]
        this.interface.prompt.showWindow(`Are you sure you want to add\n${item.name} to ${this.username.text}?`, "dual", () => this.handleAddItems(item.name), () => this.show())
        this.hide()
    }

    banPlayers(duration){
        let durationArray = ["3 hours", "1 day", "3 days", "1 week", "3 weeks", "permanent"]
        this.interface.prompt.showWindow(`Are you sure you want to ban\n ${this.username.text} for ${durationArray[duration]}?`, "dual", () => this.handleBanPlayer(duration, durationArray[duration]), () => this.show())
        this.hide()
    }

    changeUsernames(){
        this.interface.prompt.showWindow(`Are you sure you want to change ${this.username.text}'s\nusername to ${this.changeusername.value}?`, "dual", () => this.handleChangeUsername(), () => this.show())
        this.hide()
    }

    handleAddCoins(){
        let coins = this.addcoins.value.toString()
        this.network.send('add_user_coins', { id: this.id, coins: coins })
        this.show()
    }

    handleAddItems(itemName){
        let item = this.additems.value.toString()
        this.network.send('add_user_items', { id: this.id, item: item, itemName: itemName })
        this.show()
    }

    handleBanPlayer(duration, durationText){
        let durationArray = [10800000, 86400000, 259200000, 604800000, 2332800000, 315536400000]
        this.network.send('ban_user', { id: this.id, banDuration: durationArray[duration], durationText: durationText })
        this.show()
    }

    handleChangeUsername(){
        let newUsername = this.changeusername.value.toString()
        this.network.send('change_user_name', { id: this.id, newUsername: newUsername })
        this.show()
    }

    handleActivate(){
        this.network.send('activate_user', { id: this.id })
        this.show()
    }




    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
