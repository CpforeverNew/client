import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton, ShowHint } from '@components/components'


/* START OF COMPILED CODE */

export default class Vault extends RoomScene {

    constructor() {
        super("Vault");

        /** @type {Phaser.GameObjects.Sprite} */
        this.door;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cds0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.lightlight;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'book': () => this.triggerRoom(111,454,534)
        }

        this.roomAnims = true
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("vault-pack", "assets/media/rooms/spooky_fair/vault/vault-pack.json");
        this.load.pack("observatory-pack", "assets/media/rooms/old/observatory/observatory-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(778, 527, "vault", "bg");

        // door
        const door = this.add.sprite(763, 330, "vault", "door0001");

        // backright
        const backright = this.add.image(1209.157633760896, 526.1363539162678, "vault", "backright");
        backright.setOrigin(0.2019058422851251, 0.5559344466963608);

        // cds0001
        const cds0001 = this.add.sprite(1427.8353068972792, 516.7988222718776, "vault", "cds0001");
        cds0001.setOrigin(0.9139216817219336, 1.0734741531719103);

        // lightlight
        const lightlight = this.add.sprite(1399.4870711926933, 496.6623445122141, "vault", "lightlight");
        lightlight.setOrigin(0.3592418150124483, 0.9093735027786265);

        // map
        const map = this.add.image(203.58593944827803, 505.3931801963809, "vault", "map");
        map.setOrigin(0.4692800678054343, 0.4055522674751202);

        // beans
        const beans = this.add.image(370.20676823898197, 552.2066133021217, "vault", "beans");
        beans.setOrigin(0.46341055640407774, 0.5846041976895441);

        // frontright
        const frontright = this.add.image(1493.8853196175553, 650.5931778107364, "vault", "frontright");
        frontright.setOrigin(0.620026731746509, 0.44065191991050884);

        // freesign
        const freesign = this.add.image(1368.5194722075107, 631.7748100405204, "observatory", "freesign");
        freesign.scaleX = 0.3;
        freesign.scaleY = 0.3;
        freesign.angle = 6;
        freesign.setOrigin(0.6347974425334325, 1.0974444830506447);

        // pumpkins
        const pumpkins = this.add.image(831.5687391194599, 608.9820549450176, "vault", "pumpkins");
        pumpkins.setOrigin(0.5439447917708219, 0.5684759426576855);

        // leftfront
        const leftfront = this.add.image(177.8423144741384, 841.2061315199852, "vault", "leftfront");
        leftfront.setOrigin(0.5963117726514322, 0.6511262506666301);

        // rightshadow
        this.add.image(1491, 766, "vault", "rightshadow");

        // candy
        const candy = this.add.image(1497.464162380486, 794.3638170458468, "vault", "candy");
        candy.setOrigin(0.5867925858196041, 0.742425786716639);

        // candle
        const candle = this.add.image(1058.6893002935747, 493.88478121122415, "vault", "candle");
        candle.setOrigin(0.4904328488582092, 0.8165463441932986);

        // tableshadows
        this.add.image(890, 831, "vault", "tableshadows");

        // table
        const table = this.add.image(767.4928324760972, 807.3638170458468, "vault", "table");
        table.setOrigin(0.5041816035745019, 0.6404149358705286);

        // righttable
        const righttable = this.add.image(1064, 760, "vault", "righttable");
        righttable.setOrigin(0.49495884728297856, 0.7157859272773487);

        // cake
        const cake = this.add.image(1006.8261135130857, 892.009573894693, "vault", "17");
        cake.setOrigin(1.4529773897897285, 1.363916993403966);

        // backcandle10001
        const backcandle10001 = this.add.sprite(1004, 304, "vault", "backcandle10001");

        // backcandle20001
        const backcandle20001 = this.add.sprite(1029, 288, "vault", "backcandle20001");

        // backcandle
        const backcandle = this.add.sprite(1058, 270, "vault", "backcandle10001");

        // backcandle_1
        const backcandle_1 = this.add.sprite(1088, 281, "vault", "backcandle10001");

        // backcandle_2
        const backcandle_2 = this.add.sprite(1116, 292, "vault", "backcandle20001");

        // backcandle_3
        const backcandle_3 = this.add.sprite(702.8545245630261, 563.9118430074188, "vault", "backcandle10001");
        backcandle_3.setOrigin(4.050646366146582, 5.905083773064493);

        // backcandle_4
        const backcandle_4 = this.add.sprite(725.753273514089, 568.968869668319, "vault", "backcandle10001");
        backcandle_4.setOrigin(4.607610502012709, 6.680403166741774);

        // backcandle_5
        const backcandle_5 = this.add.sprite(751.6520224651518, 532.6459131122127, "vault", "backcandle10001");
        backcandle_5.setOrigin(5.164574637878835, 4.620268777827851);

        // backcandle_6
        const backcandle_6 = this.add.sprite(781.031713898666, 562.4940365388071, "vault", "backcandle10001");
        backcandle_6.setOrigin(3.0759591283808567, 4.886092569945777);

        // backcandle_7
        const backcandle_7 = this.add.sprite(810.8987489510629, 514.3799832170066, "vault", "backcandle10001");
        backcandle_7.setOrigin(1.0569641358661264, 3.3354537825912094);

        // backcandle_9
        const backcandle_9 = this.add.sprite(879.7657840034599, 544.6141992135466, "vault", "backcandle10001");
        backcandle_9.angle = 15;
        backcandle_9.setOrigin(1.7726349187292954, 3.8085791522795476);

        // backcandle_10
        const backcandle_10 = this.add.sprite(709.9115512239264, 585.0762300701954, "vault", "backcandle10001");
        backcandle_10.angle = -8;
        backcandle_10.setOrigin(4.956321745462755, 4.09946760659843);

        // backcandle_12
        const backcandle_12 = this.add.sprite(1069.36365449353, 736.3804408648155, "vault", "backcandle10001");
        backcandle_12.setOrigin(0.9805143085053974, 4.65365448317038);

        // backcandle_13
        const backcandle_13 = this.add.sprite(1099.3790480115717, 741.8231710486521, "vault", "backcandle20001");
        backcandle_13.setOrigin(1.6970051451088952, 5.446508020291509);

        // backcandle_14
        const backcandle_14 = this.add.sprite(1128.3526850436272, 739.3212010454299, "vault", "backcandle10001");
        backcandle_14.setOrigin(1.9789567199195193, 4.787326798407677);

        // topleftbook
        this.add.image(27, 599, "vault", "topleftbook");

        // partyhat
        const partyhat = this.add.rectangle(1341, 652, 128, 128);
        partyhat.scaleX = 0.7596523802665731;
        partyhat.scaleY = 1.130672726964664;
        partyhat.isFilled = true;
        partyhat.fillAlpha = 0;

        // backcandle_8
        const backcandle_8 = this.add.sprite(733, 538, "vault", "backcandle10001");
        backcandle_8.angle = 10;
        backcandle_8.setOrigin(0.4907198247454159, 1.3819215048876081);

        // backcandle_11
        const backcandle_11 = this.add.sprite(836, 560, "vault", "backcandle10001");
        backcandle_11.angle = 10;
        backcandle_11.setOrigin(0.6114402940997609, 3.8902984495849906);

        // rightglow
        this.add.image(1087, 637, "vault", "rightglow");

        // lists
        const sort = [cake, righttable, table, candle, candy, leftfront, pumpkins, frontright, beans, map, freesign, backcandle_12, backcandle_13, backcandle_14, backcandle_3, backcandle_4, backcandle_5, backcandle_6, backcandle_7, backcandle_11, backcandle_9, backcandle_8, backcandle_10];

        // door (components)
        const doorSimpleButton = new SimpleButton(door);
        doorSimpleButton.hoverCallback = () => this.onDoorHover();
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 763;
        doorMoveTo.y = 424;

        // cds0001 (components)
        const cds0001SimpleButton = new SimpleButton(cds0001);
        cds0001SimpleButton.hoverCallback = () => this.onCdHover();

        // backcandle10001 (components)
        const backcandle10001Animation = new Animation(backcandle10001);
        backcandle10001Animation.key = "backcandle1";
        backcandle10001Animation.end = 12;

        // backcandle20001 (components)
        const backcandle20001Animation = new Animation(backcandle20001);
        backcandle20001Animation.key = "backcandle2";
        backcandle20001Animation.end = 12;

        // backcandle (components)
        const backcandleAnimation = new Animation(backcandle);
        backcandleAnimation.key = "backcandle1";
        backcandleAnimation.end = 12;

        // backcandle_1 (components)
        const backcandle_1Animation = new Animation(backcandle_1);
        backcandle_1Animation.key = "backcandle1";
        backcandle_1Animation.end = 12;

        // backcandle_2 (components)
        const backcandle_2Animation = new Animation(backcandle_2);
        backcandle_2Animation.key = "backcandle2";
        backcandle_2Animation.end = 12;

        // backcandle_3 (components)
        const backcandle_3Animation = new Animation(backcandle_3);
        backcandle_3Animation.key = "backcandle1";
        backcandle_3Animation.end = 12;

        // backcandle_4 (components)
        const backcandle_4Animation = new Animation(backcandle_4);
        backcandle_4Animation.key = "backcandle1";
        backcandle_4Animation.end = 12;

        // backcandle_5 (components)
        const backcandle_5Animation = new Animation(backcandle_5);
        backcandle_5Animation.key = "backcandle1";
        backcandle_5Animation.end = 12;

        // backcandle_6 (components)
        const backcandle_6Animation = new Animation(backcandle_6);
        backcandle_6Animation.key = "backcandle1";
        backcandle_6Animation.end = 12;

        // backcandle_7 (components)
        const backcandle_7Animation = new Animation(backcandle_7);
        backcandle_7Animation.key = "backcandle1";
        backcandle_7Animation.end = 12;

        // backcandle_9 (components)
        const backcandle_9Animation = new Animation(backcandle_9);
        backcandle_9Animation.key = "backcandle1";
        backcandle_9Animation.end = 12;

        // backcandle_10 (components)
        const backcandle_10Animation = new Animation(backcandle_10);
        backcandle_10Animation.key = "backcandle1";
        backcandle_10Animation.end = 12;

        // backcandle_12 (components)
        const backcandle_12Animation = new Animation(backcandle_12);
        backcandle_12Animation.key = "backcandle1";
        backcandle_12Animation.end = 12;

        // backcandle_13 (components)
        const backcandle_13Animation = new Animation(backcandle_13);
        backcandle_13Animation.key = "backcandle2";
        backcandle_13Animation.end = 12;

        // backcandle_14 (components)
        const backcandle_14Animation = new Animation(backcandle_14);
        backcandle_14Animation.key = "backcandle1";
        backcandle_14Animation.end = 12;

        // partyhat (components)
        const partyhatSimpleButton = new SimpleButton(partyhat);
        partyhatSimpleButton.callback = () => this.interface.prompt.showItem(10);

        // backcandle_8 (components)
        const backcandle_8Animation = new Animation(backcandle_8);
        backcandle_8Animation.key = "backcandle1";
        backcandle_8Animation.end = 12;

        // backcandle_11 (components)
        const backcandle_11Animation = new Animation(backcandle_11);
        backcandle_11Animation.key = "backcandle1";
        backcandle_11Animation.end = 12;

        this.door = door;
        this.cds0001 = cds0001;
        this.lightlight = lightlight;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create();
        this.doorHovered = false;
    }

    onDoorHover() {
        if (this.doorHovered) {
            return;    
        }

        this.door.play("doorUnlock")
        this.doorHovered = true;
    }

    onCdHover() {
        this.cds0001.play("cds")
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
