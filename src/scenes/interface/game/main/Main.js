import BaseScene from '@scenes/base/BaseScene'

import { Button, Interactive, SimpleButton, ShowHint } from '@components/components'
import TextInput from '@engine/interface/text/TextInput'

import BalloonFactory from '@engine/interface/balloons/BalloonFactory'
import Hint from '@engine/interface/hint/Hint'
import SnowballFactory from '@engine/interface/snowball/SnowballFactory'

import FindFour from '@scenes/games/four/FindFour'

import ActionsMenu from '../floating/actions/ActionsMenu'
import Buddy from '../buddy/Buddy'
import ChatLog from '../chatlog/ChatLog'
import EmotesMenu from '../floating/emotes/EmotesMenu'
import Waddle from '../waddle/Waddle'
import Map from '../map/Map'
import Newspaper from '../newspaper/Newspaper'
import Moderator from '../moderator/Moderator'
import ModActions from '../modactions/ModActions'
import PlayerCard from '../playercard/PlayerCard'
import PuffleCare from '../pufflecare/PuffleCare'
import Safe from '../floating/safe/Safe'
import Settings from '../settings/Settings'
import Prompt from '../prompt/Prompt'
import Snitch from '../snitch/Snitch'
import PufflesMenu from '../floating/puffles/PufflesMenu'
import Daily from '../daily/Daily'
import CandyHunt from '../candyhunt/CandyHunt'

/* START OF COMPILED CODE */

export default class Main extends BaseScene {

    constructor() {
        super("Main");

        /** @type {Phaser.GameObjects.Container} */
        this.pinContainer;
        /** @type {Phaser.GameObjects.Image} */
        this.dock;
        /** @type {Phaser.GameObjects.Image} */
        this.chat_box;
        /** @type {Phaser.GameObjects.Image} */
        this.puffle_button_disabled;
        /** @type {Phaser.GameObjects.Sprite} */
        this.puffle_button;
        /** @type {Phaser.GameObjects.Image} */
        this.puffle_icon;
        /** @type {Phaser.GameObjects.Image} */
        this.emote_button;
        /** @type {Phaser.GameObjects.Image} */
        this.action_button;
        /** @type {Phaser.GameObjects.Image} */
        this.action_icon;
        /** @type {Phaser.GameObjects.Image} */
        this.snowball_button;
        /** @type {Phaser.GameObjects.Image} */
        this.snowball_icon;
        /** @type {Phaser.GameObjects.Image} */
        this.chat_send_button;
        /** @type {Phaser.GameObjects.Image} */
        this.chat_send_icon;
        /** @type {Phaser.GameObjects.Image} */
        this.player_button;
        /** @type {Phaser.GameObjects.Image} */
        this.badge_member;
        /** @type {Phaser.GameObjects.Image} */
        this.buddies_button;
        /** @type {Phaser.GameObjects.Image} */
        this.buddies_icon;
        /** @type {Phaser.GameObjects.Image} */
        this.igloo_button;
        /** @type {Phaser.GameObjects.Image} */
        this.igloo_icon;
        /** @type {Phaser.GameObjects.Image} */
        this.help_button;
        /** @type {Phaser.GameObjects.Image} */
        this.help_icon;
        /** @type {Phaser.GameObjects.Image} */
        this.chat_button;
        /** @type {Phaser.GameObjects.Image} */
        this.chat_icon;
        /** @type {Phaser.GameObjects.Container} */
        this.onlinePopup;
        /** @type {Phaser.GameObjects.Image} */
        this.popup;
        /** @type {Phaser.GameObjects.Text} */
        this.popupText;
        /** @type {ChatLog} */
        this.chatLog;
        /** @type {Phaser.GameObjects.Image} */
        this.crosshair;
        /** @type {Phaser.GameObjects.Sprite} */
        this.map_button;
        /** @type {Phaser.GameObjects.Image} */
        this.request_button;
        /** @type {Phaser.GameObjects.Sprite} */
        this.mail_btn;
        /** @type {Phaser.GameObjects.Image} */
        this.news_button;
        /** @type {Phaser.GameObjects.Container} */
        this.mod_btn;
        /** @type {Phaser.GameObjects.Image} */
        this.mod_button;
        /** @type {Phaser.GameObjects.Sprite} */
        this.mod_m;
        /** @type {Phaser.GameObjects.Image} */
        this.news_button_1;
        /** @type {ModActions} */
        this.modActions;
        /** @type {Moderator} */
        this.moderator;
        /** @type {Phaser.GameObjects.Layer} */
        this.widgetLayer;
        /** @type {Buddy} */
        this.buddy;
        /** @type {PlayerCard} */
        this.playerCard;
        /** @type {Settings} */
        this.settings;
        /** @type {Snitch} */
        this.snitch;
        /** @type {ActionsMenu} */
        this.actionsMenu;
        /** @type {EmotesMenu} */
        this.emotesMenu;
        /** @type {PufflesMenu} */
        this.pufflesMenu;
        /** @type {Safe} */
        this.safe;
        /** @type {Waddle} */
        this.waddle;
        /** @type {FindFour} */
        this.findFour;
        /** @type {Phaser.GameObjects.Container} */
        this.stampEarned;
        /** @type {Phaser.GameObjects.Image} */
        this.stampEarnedBg;
        /** @type {Phaser.GameObjects.Image} */
        this.stampEarnedImage;
        /** @type {Phaser.GameObjects.Text} */
        this.stampEarnedHeader;
        /** @type {Phaser.GameObjects.Text} */
        this.stampEarnedBody;
        /** @type {PuffleCare} */
        this.puffleCare;
        /** @type {Prompt} */
        this.prompt;
        /** @type {Daily} */
        this.daily;
        /** @type {Phaser.GameObjects.Text} */
        this.version;
        /** @type {Phaser.GameObjects.Text} */
        this.tickets;
        /** @type {Newspaper} */
        this.newspaper;
        /** @type {Phaser.GameObjects.Image} */
        this.mail_new;
        /** @type {Phaser.GameObjects.Text} */
        this.mail_text;
        /** @type {Phaser.GameObjects.Image} */
        this.cany_hunt_button;
        /** @type {CandyHunt} */
        this.candyhunt;
        /** @type {Array<PlayerCard|Buddy|Moderator>} */
        this.hideOnSleep;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|ChatLog>} */
        this.interfaceList;


        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {

        // pinContainer
        const pinContainer = this.add.container(0, 0);

        // dock
        const dock = this.add.image(760, 924, "main", "dock");

        // chatbar_png
        this.add.image(760, 924, "chatbar", "chatbar.png");

        // chat_box
        const chat_box = this.add.image(748, 929, "main", "chat-box");

        // puffle_button_disabled
        const puffle_button_disabled = this.add.image(246, 930, "main", "blue-button-disabled");

        // puffle_button
        const puffle_button = this.add.sprite(246, 930, "main", "blue-button");
        puffle_button.visible = false;

        // puffle_icon
        const puffle_icon = this.add.image(245, 929, "main", "puffle-icon-disabled");

        // emote_button
        const emote_button = this.add.image(306, 931, "main", "blue-button");

        // emote_icon
        const emote_icon = this.add.image(306, 929, "chatbar", "emotes.png");

        // action_button
        const action_button = this.add.image(366, 931, "main", "blue-button");

        // action_icon
        const action_icon = this.add.image(366, 927, "main", "action-icon");

        // snowball_button
        const snowball_button = this.add.image(426, 931, "main", "blue-button");

        // snowball_icon
        const snowball_icon = this.add.image(426, 931, "main", "snowball-icon");

        // chat_send_button
        const chat_send_button = this.add.image(1026, 931, "main", "blue-button");

        // chat_send_icon
        const chat_send_icon = this.add.image(1027, 929, "main", "chat-send0001");

        // player_button
        const player_button = this.add.image(1086, 931, "main", "blue-button");

        // badge_member
        const badge_member = this.add.image(1086, 928, "chatbar", "playercard0001.png");

        // buddies_button
        const buddies_button = this.add.image(1146, 931, "main", "blue-button");

        // buddies_icon
        const buddies_icon = this.add.image(1146, 929, "main", "buddies-icon");

        // igloo_button
        const igloo_button = this.add.image(1206, 931, "main", "blue-button");

        // igloo_icon
        const igloo_icon = this.add.image(1206, 929, "main", "igloo-icon");

        // help_button
        const help_button = this.add.image(1266, 931, "main", "blue-button");

        // help_icon
        const help_icon = this.add.image(1266, 929, "main", "help-icon");

        // chat_button
        const chat_button = this.add.image(486, 930, "main", "blue-button");

        // chat_icon
        const chat_icon = this.add.image(486, 929, "main", "chat-icon");

        // onlinePopup
        const onlinePopup = this.add.container(1155, 858);
        onlinePopup.visible = false;

        // popup
        const popup = this.add.image(0, 11, "main", "buddy-online");
        onlinePopup.add(popup);

        // popupText
        const popupText = this.add.text(-6, 0, "", {});
        popupText.setOrigin(0.5, 0.5);
        popupText.setStyle({ "align": "center", "color": "#000000", "fixedWidth":380,"fontFamily": "Burbank Small", "fontSize": "24px" });
        onlinePopup.add(popupText);

        // chatLog
        const chatLog = new ChatLog(this, 760, 3);
        this.add.existing(chatLog);

        // crosshair
        const crosshair = this.add.image(0, 1101, "main", "crosshair");
        crosshair.visible = false;

        // map_button
        const map_button = this.add.sprite(90, 889, "main", "map-button");

        // request_button
        const request_button = this.add.image(269, 59, "main", "buddy-button");
        request_button.visible = false;

        // mail_btn
        const mail_btn = this.add.sprite(170, 46, "main", "mail-button");

        // news_button
        const news_button = this.add.image(70, 62, "main", "news-button");

        // mod_btn
        const mod_btn = this.add.container(70, 162);
        mod_btn.visible = false;

        // mod_button
        const mod_button = this.add.image(0, 0, "main", "mod/button");
        mod_btn.add(mod_button);

        // mod_m
        const mod_m = this.add.sprite(0, 0, "main", "mod/m");
        mod_btn.add(mod_m);

        // news_button_1
        const news_button_1 = this.add.image(1447, 60, "daily", "dailyrewardiconn");
        news_button_1.scaleX = 0.5;
        news_button_1.scaleY = 0.5;

        // modActions
        const modActions = new ModActions(this, 760, 461);
        this.add.existing(modActions);
        modActions.visible = false;

        // moderator
        const moderator = new Moderator(this, 760, 481);
        this.add.existing(moderator);
        moderator.visible = false;

        // widgetLayer
        const widgetLayer = this.add.layer();

        // buddy
        const buddy = new Buddy(this, 1140, 436);
        buddy.visible = false;
        widgetLayer.add(buddy);

        // playerCard
        const playerCard = new PlayerCard(this, 446, 436);
        playerCard.visible = false;
        widgetLayer.add(playerCard);

        // settings
        const settings = new Settings(this, 760, 481);
        this.add.existing(settings);
        settings.visible = false;

        // snitch
        const snitch = new Snitch(this, 760, 481);
        this.add.existing(snitch);
        snitch.visible = false;

        // actionsMenu
        const actionsMenu = new ActionsMenu(this, 366, 873);
        this.add.existing(actionsMenu);
        actionsMenu.visible = false;

        // emotesMenu
        const emotesMenu = new EmotesMenu(this, 306, 906);
        this.add.existing(emotesMenu);
        emotesMenu.visible = false;

        // pufflesMenu
        const pufflesMenu = new PufflesMenu(this, 246, 858);
        this.add.existing(pufflesMenu);
        pufflesMenu.visible = false;

        // safe
        const safe = new Safe(this, 244, 933);
        this.add.existing(safe);
        safe.visible = false;

        // waddle
        const waddle = new Waddle(this, 733, 422);
        this.add.existing(waddle);
        waddle.visible = false;

        // findFour
        const findFour = new FindFour(this, 736, 472);
        this.add.existing(findFour);
        findFour.visible = false;

        // stampEarned
        const stampEarned = this.add.container(933, -150);

        // stampEarnedBg
        const stampEarnedBg = this.add.image(196, 0, "main", "stamps/bg");
        stampEarnedBg.alpha = 0.7;
        stampEarnedBg.alphaTopLeft = 0.7;
        stampEarnedBg.alphaTopRight = 0.7;
        stampEarnedBg.alphaBottomLeft = 0.7;
        stampEarnedBg.alphaBottomRight = 0.7;
        stampEarned.add(stampEarnedBg);

        // stampEarnedImage
        const stampEarnedImage = this.add.image(0, 70, "main", "stamps/activities0001");
        stampEarned.add(stampEarnedImage);

        // stampEarnedHeader
        const stampEarnedHeader = this.add.text(88, 25, "", {});
        stampEarnedHeader.text = "STAMP EARNED!";
        stampEarnedHeader.setStyle({ "fixedWidth":380,"fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold italic" });
        stampEarned.add(stampEarnedHeader);

        // stampEarnedBody
        const stampEarnedBody = this.add.text(90, 80, "", {});
        stampEarnedBody.text = "Stamp Name";
        stampEarnedBody.setStyle({ "fixedWidth":380,"fontFamily": "Burbank Small", "fontSize": "35px" });
        stampEarned.add(stampEarnedBody);

        // puffleCare
        const puffleCare = new PuffleCare(this, 500, 583);
        this.add.existing(puffleCare);
        puffleCare.visible = false;

        // prompt
        const prompt = new Prompt(this, 0, 0);
        this.add.existing(prompt);
        prompt.visible = false;

        // daily
        const daily = new Daily(this, 0, 0);
        this.add.existing(daily);
        daily.visible = false;

        // version
        const version = this.add.text(1315, 939, "", {});
        version.alpha = 0.5;
        version.alphaTopLeft = 0.5;
        version.alphaTopRight = 0.5;
        version.alphaBottomLeft = 0.5;
        version.alphaBottomRight = 0.5;
        version.text = "v1.1.1-beta";
        version.setStyle({ "align": "right", "color": "#000000ff", "fixedWidth":200,"fontFamily": "Burbank Small", "fontSize": "18px", "fontStyle": "bold", "stroke": "#000000ff", "strokeThickness":1,"shadow.stroke":true,"shadow.fill":true});

        // tickets_button
        const tickets_button = this.add.image(1297, 57, "tickets", "tickets");
        tickets_button.visible = false;

        // tickets
        const tickets = this.add.text(1248, 34, "", {});
        tickets.visible = false;
        tickets.text = "0";
        tickets.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":100,"fontFamily": "CCFaceFront", "fontSize": "17px" });

        // news_new
        this.add.image(96, 90, "main", "news-new");

        // newspaper
        const newspaper = new Newspaper(this, -28, 7);
        this.add.existing(newspaper);
        newspaper.visible = false;

        // mail_new
        const mail_new = this.add.image(197, 29, "main", "mail-new");

        // mail_text
        const mail_text = this.add.text(187, 20, "", {});
        mail_text.text = "0";
        mail_text.setStyle({ "align": "center", "fixedWidth":20,"fontFamily": "CCFaceFront", "fontSize": "19px", "fontStyle": "bold" });

        // cany_hunt_button
        const cany_hunt_button = this.add.image(1340, 58, "candyhunt", "huntbtn");
        cany_hunt_button.scaleX = 0.5;
        cany_hunt_button.scaleY = 0.5;

        // candyhunt
        const candyhunt = new CandyHunt(this, 660, 364);
        this.add.existing(candyhunt);
        candyhunt.scaleX = 0.7;
        candyhunt.scaleY = 0.7;
        candyhunt.visible = false;

        // lists
        const hideOnSleep = [playerCard, buddy, moderator];
        const interfaceList = [dock, help_icon, help_button, igloo_icon, igloo_button, buddies_icon, buddies_button, player_button, chat_send_icon, chat_send_button, snowball_icon, snowball_button, action_icon, action_button, emote_button, puffle_icon, puffle_button_disabled, chat_box, map_button, news_button, mod_m, chatLog, badge_member, emote_icon];

        // dock (components)
        new Interactive(dock);

        // chat_box (components)
        new Interactive(chat_box);

        // puffle_button (components)
        const puffle_buttonButton = new Button(puffle_button);
        puffle_buttonButton.spriteName = "blue-button";
        puffle_buttonButton.callback = () => this.pufflesMenu.visible = true;

        // emote_button (components)
        const emote_buttonButton = new Button(emote_button);
        emote_buttonButton.spriteName = "blue-button";
        emote_buttonButton.callback = () => this.emotesMenu.visible = true;
        const emote_buttonShowHint = new ShowHint(emote_button);
        emote_buttonShowHint.text = "Emotes";

        // action_button (components)
        const action_buttonButton = new Button(action_button);
        action_buttonButton.spriteName = "blue-button";
        action_buttonButton.callback = () => this.actionsMenu.visible = true;
        const action_buttonShowHint = new ShowHint(action_button);
        action_buttonShowHint.text = "Actions";

        // snowball_button (components)
        const snowball_buttonButton = new Button(snowball_button);
        snowball_buttonButton.spriteName = "blue-button";
        snowball_buttonButton.callback = () => this.onSnowballClick();
        const snowball_buttonShowHint = new ShowHint(snowball_button);
        snowball_buttonShowHint.text = "Snowball";

        // chat_send_button (components)
        const chat_send_buttonButton = new Button(chat_send_button);
        chat_send_buttonButton.spriteName = "blue-button";
        chat_send_buttonButton.callback = () => this.onChatSend();
        const chat_send_buttonShowHint = new ShowHint(chat_send_button);
        chat_send_buttonShowHint.text = "Send";

        // player_button (components)
        const player_buttonButton = new Button(player_button);
        player_buttonButton.spriteName = "blue-button";
        player_buttonButton.callback = () => this.onPlayerClick();
        const player_buttonShowHint = new ShowHint(player_button);
        player_buttonShowHint.text = "Edit Player";

        // buddies_button (components)
        const buddies_buttonButton = new Button(buddies_button);
        buddies_buttonButton.spriteName = "blue-button";
        buddies_buttonButton.callback = () => this.onBuddyClick();
        const buddies_buttonShowHint = new ShowHint(buddies_button);
        buddies_buttonShowHint.text = "Show Buddies";

        // igloo_button (components)
        const igloo_buttonButton = new Button(igloo_button);
        igloo_buttonButton.spriteName = "blue-button";
        igloo_buttonButton.callback = () => this.onIglooClick();
        const igloo_buttonShowHint = new ShowHint(igloo_button);
        igloo_buttonShowHint.text = "Your Home";

        // help_button (components)
        const help_buttonButton = new Button(help_button);
        help_buttonButton.spriteName = "blue-button";
        help_buttonButton.callback = () => { this.settings.visible = true };
        const help_buttonShowHint = new ShowHint(help_button);
        help_buttonShowHint.text = "Edit Account";

        // chat_button (components)
        const chat_buttonButton = new Button(chat_button);
        chat_buttonButton.spriteName = "blue-button";
        chat_buttonButton.callback = () => this.safe.visible = true;
        const chat_buttonShowHint = new ShowHint(chat_button);
        chat_buttonShowHint.text = "Messages";

        // crosshair (components)
        const crosshairSimpleButton = new SimpleButton(crosshair);
        crosshairSimpleButton.callback = () => this.onCrosshairClick();

        // map_button (components)
        const map_buttonButton = new Button(map_button);
        map_buttonButton.spriteName = "map-button";
        map_buttonButton.callback = () => this.map.visible = true;
        map_buttonButton.activeFrame = false;

        // request_button (components)
        const request_buttonButton = new Button(request_button);
        request_buttonButton.spriteName = "buddy-button";
        request_buttonButton.callback = () => this.onRequestClick();
        request_buttonButton.activeFrame = false;

        // mail_btn (components)
        const mail_btnButton = new Button(mail_btn);
        mail_btnButton.spriteName = "mail-button";
        mail_btnButton.callback = () => this.onMailClick();
        mail_btnButton.activeFrame = false;

        // news_button (components)
        const news_buttonButton = new Button(news_button);
        news_buttonButton.spriteName = "news-button";
        news_buttonButton.callback = () => this.newspaper.visible = true;
        news_buttonButton.activeFrame = false;

        // mod_button (components)
        const mod_buttonSimpleButton = new SimpleButton(mod_button);
        mod_buttonSimpleButton.hoverCallback = () => this.onModOver();
        mod_buttonSimpleButton.hoverOutCallback = () => this.onModOut();
        mod_buttonSimpleButton.callback = () => this.onModClick();

        // news_button_1 (components)
        const news_button_1SimpleButton = new SimpleButton(news_button_1);
        news_button_1SimpleButton.callback = () => this.daily.visible = true;

        // tickets_button (components)
        const tickets_buttonButton = new Button(tickets_button);
        tickets_buttonButton.spriteName = "tickets";
        tickets_buttonButton.callback = () => { console.log("tickets")};

        // cany_hunt_button (components)
        const cany_hunt_buttonButton = new Button(cany_hunt_button);
        cany_hunt_buttonButton.spriteName = "huntbtn";
        cany_hunt_buttonButton.callback = () => this.huntButton();;

        this.pinContainer = pinContainer;
        this.dock = dock;
        this.chat_box = chat_box;
        this.puffle_button_disabled = puffle_button_disabled;
        this.puffle_button = puffle_button;
        this.puffle_icon = puffle_icon;
        this.emote_button = emote_button;
        this.action_button = action_button;
        this.action_icon = action_icon;
        this.snowball_button = snowball_button;
        this.snowball_icon = snowball_icon;
        this.chat_send_button = chat_send_button;
        this.chat_send_icon = chat_send_icon;
        this.player_button = player_button;
        this.badge_member = badge_member;
        this.buddies_button = buddies_button;
        this.buddies_icon = buddies_icon;
        this.igloo_button = igloo_button;
        this.igloo_icon = igloo_icon;
        this.help_button = help_button;
        this.help_icon = help_icon;
        this.chat_button = chat_button;
        this.chat_icon = chat_icon;
        this.onlinePopup = onlinePopup;
        this.popup = popup;
        this.popupText = popupText;
        this.chatLog = chatLog;
        this.crosshair = crosshair;
        this.map_button = map_button;
        this.request_button = request_button;
        this.mail_btn = mail_btn;
        this.news_button = news_button;
        this.mod_btn = mod_btn;
        this.mod_button = mod_button;
        this.mod_m = mod_m;
        this.news_button_1 = news_button_1;
        this.modActions = modActions;
        this.moderator = moderator;
        this.widgetLayer = widgetLayer;
        this.buddy = buddy;
        this.playerCard = playerCard;
        this.settings = settings;
        this.snitch = snitch;
        this.actionsMenu = actionsMenu;
        this.emotesMenu = emotesMenu;
        this.pufflesMenu = pufflesMenu;
        this.safe = safe;
        this.waddle = waddle;
        this.findFour = findFour;
        this.stampEarned = stampEarned;
        this.stampEarnedBg = stampEarnedBg;
        this.stampEarnedImage = stampEarnedImage;
        this.stampEarnedHeader = stampEarnedHeader;
        this.stampEarnedBody = stampEarnedBody;
        this.puffleCare = puffleCare;
        this.prompt = prompt;
        this.daily = daily;
        this.version = version;
        this.tickets = tickets;
        this.newspaper = newspaper;
        this.mail_new = mail_new;
        this.mail_text = mail_text;
        this.cany_hunt_button = cany_hunt_button;
        this.candyhunt = candyhunt;
        this.hideOnSleep = hideOnSleep;
        this.interfaceList = interfaceList;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {

        this._create()

        // Get User tickets
        // this.network.send("get_user_tickets");

        // Version
        this.version.text = "v" + VERSION;

        // map
        const map = new Map(this, 760, 460)
        this.add.existing(map);
        map.visible = false;
        this.map = map;

        this.events.on('sleep', this.onSleep, this)

        if (this.world.client.penguin.rank > 3){
            this.mod_btn.visible = true
        }

        this.setupWidgets()

        // Factories

        this.balloonFactory = new BalloonFactory(this)
        this.snowballFactory = new SnowballFactory(this.world)

        // Hints

        this.hint = new Hint(this, 0, 0)
        this.add.existing(this.hint)
        this.hideOnSleep.push(this.hint)
        this.hint.visible = false

        // Buddy requests

        this.requests = []

        // Chat input

        let style = {
            width: 480,
            height: 50,
            fontFamily: 'Burbank Small',
            fontSize: 24,
            color: '#fff'
        }

        this.chatInput = (this.world.client.penguin.rank > 3) ? new TextInput(this, 755, 931, 'text', style, () => this.onChatSend(), 192, true, 'chat', true, true) : new TextInput(this, 755, 931, 'text', style, () => this.onChatSend(), 48, true, 'chat', false, false)
        this.add.existing(this.chatInput)

        // Mod search

        let searchstyle = {
            width: 250,
            height: 50,
            fontFamily: 'Burbank Small',
            fontSize: 24,
            color: '#fff',
            visibility: 'hidden'
        }

        this.search = new TextInput(this, 814, 128, 'text', searchstyle, () => this.onSearch(), 48, true, 'search', false, true)

        // Mod actions

        let actionsstyle = {
            width: 200,
            height: 30,
            fontFamily: 'Burbank Small',
            fontSize: 20,
            color: '#fff',
            visibility: 'hidden'
        }

        this.addcoins = new TextInput(this, 974, 322, 'number', actionsstyle, () => this.modActions.handleAddCoins(), 48, true, 'addcoins')
        this.additems = new TextInput(this, 974, 427, 'number', actionsstyle, () => this.modActions.handleAddItems(), 48, true, 'additems')
        this.changeusername = new TextInput(this, 974, 639, 'text', actionsstyle, () => this.modActions.handleChangeUsername(), 48, true, 'changeusername', false, true)

        let managestyle = {
            width: 250,
            height: 37.5,
            fontFamily: 'Burbank Small',
            fontSize: 25,
            color: '#fff',
            visibility: 'hidden'
        }

        this.newuser = new TextInput(this, 600, 352, 'text', managestyle, null, 48, true, 'newuser', false, true)
        this.newuserconfirm = new TextInput(this, 600, 459, 'text', managestyle, null, 48, true, 'newuserconfirm', false, true)
        this.newpass = new TextInput(this, 920, 352, 'text', managestyle, null, 48, true, 'newpass', true)
        this.newpassconfirm = new TextInput(this, 920, 459, 'text', managestyle, null, 48, true, 'newpassconfirm', true)


        if (this.world.client.penguin.rank > 3) {
            this.add.existing(this.addcoins)
            this.add.existing(this.additems)
            this.add.existing(this.changeusername)

            this.add.existing(this.search)
        }

        this.add.existing(this.newuser)
        this.add.existing(this.newuserconfirm)
        this.add.existing(this.newpass)
        this.add.existing(this.newpassconfirm)

        // Input

        this.input.keyboard.on('keydown-TAB', (event) => this.onChatKeyDown(event))
        this.input.keyboard.on('keydown-ENTER', (event) => this.onChatKeyDown(event))

        // Anims

        let anims = this.cache.json.get('main-anims')
        this.anims.fromJSON(anims)

        // Window functions

        window.hide = this.hide
        window.hide = hide.bind(this)

        window.show = this.show
        window.show = show.bind(this)

        // init partycontroller

        this.world.party.getPartyCompletion()
    }

    onSleep(sys, data) {
        if (data.clearChat) {
            this.chatInput.clearText()
            this.chatLog.clearMessages()
        }

        if (this.chatLog.open) {
            this.chatLog.onTabClick()
        }

        this.stopCrosshair()

        this.waddle.activeSeat = null

        this.interface.prompt.hideAll()

        for (let item of this.hideOnSleep) {
            item.visible = false
        }
        this.map.iglooMap.visible = false
    }

    setupWidgets() {
        for (let widget of this.widgetLayer.list) {
            if (widget.__DraggableContainer) {
                widget.__DraggableContainer.widgetLayer = this.widgetLayer
            }
        }
    }

    showWidget(widget) {
        this.widgetLayer.bringToTop(widget)
        widget.visible = true
    }

    onSnowballClick() {
        this.crosshair.visible = true
        this.crosshair.x = this.input.x
        this.crosshair.y = this.input.y
    }

    onCrosshairMove(pointer) {
        this.crosshair.x = Math.round(pointer.x)
        this.crosshair.y = Math.round(pointer.y)
    }

    onCrosshairClick() {
        this.stopCrosshair()
        this.world.client.sendSnowball(this.crosshair.x, this.crosshair.y)
    }

    stopCrosshair() {
        this.crosshair.visible = false
    }

    onChatKeyDown(event) {
        // Prevent default to stop tab switching elements
        event.preventDefault()

        this.chatInput.setFocus()
    }

    onChatSend() {
        let text = this.chatInput.text
        text = text.replace(/[^\x00-\x7F]/g, "");
        if (text.replace(" ", "").length < 1) return;

        this.chatInput.clearText()

        this.network.send('send_message', { message: text })

        this.game.scene.getScene('InterfaceController')
            .showTextBalloon(this.world.client.penguin.id, text)
    }

    onSearch() {
        let text = this.search.text

        this.search.clearText()

        this.network.send('get_user_info', { username: text })
    }

    onPlayerClick() {
        this.playerCard.showCard(this.world.client.id)
    }

    onBuddyClick() {
        this.showWidget(this.buddy)
        this.buddy.showPage()
    }

    onIglooClick() {
        this.world.client.sendJoinIgloo(this.world.client.id)
    }

    onRequestClick() {
        let request = this.requests.shift()
        if (this.requests.length < 1) this.request_button.visible = false
        if (!request) return

        if (request.requester) {
            // Show buddy accept prompt
            this.showAccept(request)
        } else {
            // Show buddy request prompt
            this.showRequest(request)
        }
    }

    showAccept(request) {
        let text = `${request.username} is now your buddy!`

        this.interface.prompt.showWindow(text, 'single')
    }

    showRequest(request) {
        let text = `${request.username} has asked to be your buddy.\nDo you accept?`

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.network.send('buddy_accept', request)
            this.interface.prompt.window.visible = false

        }, () => {
            this.network.send('buddy_reject', { id: request.id })
            this.interface.prompt.window.visible = false
        })
    }

    addRequest(request) {
        // Prevent duplicate requests
        if (this.requests.some(item => item.id == request.id && !item.requester)) return

        this.requests.push(request)

        this.request_button.visible = true
        this.bounce(this.request_button)
    }

    showOnlinePopup(username) {
        let text = `${username} is online`
        let texture = (text.length > 18) ? 'buddy-online-large' : 'buddy-online'

        this.popupText.text = text
        this.popup.setTexture('main', texture)

        this.onlinePopup.visible = true
        this.bounce(this.onlinePopup, 20)

        // Hide popup after 10 seconds
        this.time.addEvent({
            delay: 10000,
            callback: () => this.onlinePopup.visible = false
        })
    }

    bounce(gameObject, from = -100) {
        if (!gameObject.startY) gameObject.startY = gameObject.y

        this.tweens.add({
            targets: gameObject,
            y: {
                from: gameObject.startY + from,
                to: gameObject.startY
            },
            ease: 'Bounce',
            duration: 200
        })
    }

    onModOver() {
        this.mod_m.play('mod_button')
    }

    onModOut() {
        this.mod_m.stop()
        this.mod_m.setFrame('mod/m')
    }

    onModClick() {
        this.onModOut()
        this.moderator.visible = true
        this.moderator.load()
    }

    onNewspaperClick() {
        console.log('News Clicked');
        this.newspaper.visible = true
    }

    onEasterClick() {
        this.eastBoard.visible = true
    }

    unimplementedPrompt(){
        let prompt = this.game.scene.getScene('InterfaceController').prompt
        prompt.showError('This feature is not yet implemented!\nCPForever is in development, and is being\nactively updated. Check back soon!',)
    }

    hide(){
        for (let item of this.interfaceList) {
            item.visible = false
        }

        if (this.world.client.penguin.rank > 1){
            this.mod_btn.visible = true
        }

        this.input.keyboard.on('keydown-TAB', (event) => null)
        this.input.keyboard.on('keydown-ENTER', (event) => null)

        this.world.client.blockKeys()

        try {
              for (let penguin of Object.values(this.world.room.penguins)) {
                penguin.visible = false
                penguin.nameTag.visible = false
            }
        }

        catch(err) {
              console.error(err)
        }


    }

    show(){
        for (let item of this.interfaceList) {
            item.visible = true
        }

        this.mod_btn.visible = false

        this.input.keyboard.on('keydown-TAB', (event) => this.onChatKeyDown(event))
        this.input.keyboard.on('keydown-ENTER', (event) => this.onChatKeyDown(event))

        this.world.client.initKeys()

        try {
              for (let penguin of Object.values(this.world.room.penguins)) {
                penguin.visible = true
                penguin.nameTag.visible = true
            }
        }

        catch(err) {
              console.error(err)
        }
    }

    stampTween() {
        let tween = this.tweens.add({
            targets: this.stampEarned,
            y: 0,
            delay: 1000,
            duration: 300,
            onComplete: () => this.onStampTweenComplete()
        });
    }

    onStampTweenComplete() {
        let tween = this.tweens.add({
            targets: this.stampEarned,
            y: -150,
            delay: 1500,
            duration: 300,
        });
    }

    onPIntOver(){
        this.party_interface.scaleX = 0.5
        this.party_interface.scaleY= 0.5
    }

    onPIntOut(){
        this.party_interface.scaleX = 0.4
        this.party_interface.scaleY= 0.4
    }

    onPuffleClick(){

    }

    onMailClick(){
        this.world.RuffleManager.handleLoadOtherSwf("mail.swf")
        this.mail_text.text = "0"
    }

    update() {
        if(this.mail_text.text == "0"){
            this.mail_text.visible = false
            this.mail_new.visible = false
        }else{
            this.mail_text.visible = true
            this.mail_new.visible = true
        }
    }

    huntButton(){
        this.network.send("user_candy_current_collected")
        this.candyhunt.visible = true
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */