import RoomScene from '@scenes/rooms/RoomScene'

import { MoveTo, Interactive, SimpleButton, Button } from '@components/components'

/* START OF COMPILED CODE */

export default class HotelSpa extends RoomScene {

    constructor() {
        super("HotelSpa");

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'lift' : () => this.lobbyLift(),
        }
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("hotelspa-pack", "assets/media/rooms/new/hotelspa/hotelspa-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(0, 0, "hotelspa", "bg");
        bg.setOrigin(0, 0);

        // cushion
        this.add.image(768, 391, "hotelspa", "cushion");

        // door0001
        const door0001 = this.add.sprite(38, 318, "hotelspa", "door0001");

        // doorFrame0001
        const doorFrame0001 = this.add.image(29, 328, "hotelspa", "doorFrame0001");

        // gymMat2
        const gymMat2 = this.add.image(276, 513, "hotelspa", "gymMat2");

        // gymMat3
        const gymMat3 = this.add.image(553, 510, "hotelspa", "gymMat3");

        // gymMat4
        const gymMat4 = this.add.image(378, 589, "hotelspa", "gymMat4");

        // gymMat1
        const gymMat1 = this.add.image(429, 378, "hotelspa", "gymMat1");

        // gymItems2
        this.add.image(485, 533, "hotelspa", "gymItems2");

        // rail
        const rail = this.add.image(668.1534729003906, 678.5384521484375, "hotelspa", "rail");
        rail.setOrigin(1.0047385927818233, 0.9904802474864849);

        // punchingBag
        const punchingBag = this.add.image(31.42292457506531, 688.2360243322455, "hotelspa", "punchingBag");
        punchingBag.setOrigin(0.6471146228753265, 0.6226419743560889);

        // doorTop
        this.add.image(9, 92, "hotelspa", "doorTop");

        // mirrorLights
        this.add.image(1196, 287, "hotelspa", "mirrorLights");

        // tables2
        this.add.image(1206, 326, "hotelspa", "tables2");

        // table
        this.add.image(1501, 659, "hotelspa", "table");

        // foreground
        const foreground = this.add.image(991.6228102235642, 910.6261995143603, "hotelspa", "foreground");
        foreground.setOrigin(0.5938231013235501, 0.6715622424202058);

        // leftChair
        const leftChair = this.add.image(1037, 702, "hotelspa", "leftChair");

        // leftChair2
        const leftChair2 = this.add.image(1080, 368, "hotelspa", "leftChair2");

        // rightChair2
        const rightChair2 = this.add.image(1267, 366, "hotelspa", "rightChair2");

        // rightChair
        const rightChair = this.add.sprite(1319, 700, "hotelspa", "rightChair");
        rightChair.flipX = true;

        // rightChair_hover
        const rightChair_hover = this.add.sprite(1319, 701, "hotelspa", "rightChair-hover");
        rightChair_hover.flipX = true;
        rightChair_hover.visible = false;

        // rightChairArm
        const rightChairArm = this.add.sprite(1408.6271771210043, 742.0847847473361, "hotelspa", "rightChairArm");
        rightChairArm.setOrigin(0.7375311017286321, 0.6817177827432153);

        // rightChairArm_hover
        const rightChairArm_hover = this.add.sprite(1408.6271771210043, 742.0847847473361, "hotelspa", "rightChairArm-hover");
        rightChairArm_hover.setOrigin(0.7375311017286321, 0.6817177827432153);
        rightChairArm_hover.visible = false;

        // speakersLeft0001
        const speakersLeft0001 = this.add.sprite(207, 192, "hotelspa", "speakersLeft0001");

        // speakersRight0001
        const speakersRight0001 = this.add.sprite(576, 191, "hotelspa", "speakersRight0001");

        // gymItems
        this.add.image(273, 361, "hotelspa", "gymItems");

        // weights2
        this.add.image(739, 887, "hotelspa", "weights2");

        // treadmillGroup
        const treadmillGroup = this.add.container(299.3897350656369, 792.741262506165);

        // treadmill
        const treadmill = this.add.sprite(-24.1485304736932, -35.78588031528386, "hotelspa", "treadmill");
        treadmill.setOrigin(0.7376413946086398, 0.72512008944286);
        treadmillGroup.add(treadmill);

        // treadmill_hover
        const treadmill_hover = this.add.sprite(6.6102649343631015, 6.258737493835042, "hotelspa", "treadmill-hover");
        treadmill_hover.setOrigin(0.8849765258215962, 0.868421052631579);
        treadmill_hover.visible = false;
        treadmillGroup.add(treadmill_hover);

        // treadmillRail
        const treadmillRail = this.add.sprite(5.533254942093265, -58.356777494569656, "hotelspa", "treadmillRail");
        treadmillRail.setOrigin(0.7287946155828247, 0.6143973077914129);
        treadmillGroup.add(treadmillRail);

        // treadmillRail_hover
        const treadmillRail_hover = this.add.sprite(6.6102649343631015, -28.741262506164958, "hotelspa", "treadmillRail-hover");
        treadmillRail_hover.setOrigin(0.75, 0.8414634146341463);
        treadmillRail_hover.visible = false;
        treadmillGroup.add(treadmillRail_hover);

        // treadmillGroup_1
        const treadmillGroup_1 = this.add.container(516.6975966488976, 764.0545823215841);

        // treadmill2
        const treadmill2 = this.add.sprite(27.224829899765837, 11.252327564481675, "hotelspa", "treadmill");
        treadmill2.setOrigin(0.8296671185121985, 0.817418616875777);
        treadmillGroup_1.add(treadmill2);

        // treadmill_hover2
        const treadmill_hover2 = this.add.sprite(39.302403351102384, 30.94541767841588, "hotelspa", "treadmill-hover");
        treadmill_hover2.setOrigin(0.8849765258215962, 0.868421052631579);
        treadmill_hover2.visible = false;
        treadmillGroup_1.add(treadmill_hover2);

        // treadmillRail2
        const treadmillRail2 = this.add.sprite(38.22539335883255, -32.67009730998882, "hotelspa", "treadmillRail");
        treadmillRail2.setOrigin(0.7287946155828247, 0.6143973077914129);
        treadmillGroup_1.add(treadmillRail2);

        // treadmillRail_hover2
        const treadmillRail_hover2 = this.add.sprite(39.302403351102384, -3.054582321584121, "hotelspa", "treadmillRail-hover");
        treadmillRail_hover2.setOrigin(0.75, 0.8414634146341463);
        treadmillRail_hover2.visible = false;
        treadmillGroup_1.add(treadmillRail_hover2);

        // lists
        const sort = [foreground, punchingBag, rail, treadmillGroup_1, treadmillGroup, rightChairArm, rightChairArm_hover];

        // door0001 (components)
        const door0001MoveTo = new MoveTo(door0001);
        door0001MoveTo.x = 104;
        door0001MoveTo.y = 425;
        const door0001SimpleButton = new SimpleButton(door0001);
        door0001SimpleButton.hoverCallback = () => {this.door0001.play("hotelspa_door_open"); this.sound.play("hl_liftOpen")};
        door0001SimpleButton.hoverOutCallback = () => {this.door0001.play("hotelspa_door_close"); this.sound.play('hl_liftClose')};

        // doorFrame0001 (components)
        const doorFrame0001MoveTo = new MoveTo(doorFrame0001);
        doorFrame0001MoveTo.x = 104;

        // gymMat2 (components)
        const gymMat2Button = new Button(gymMat2);
        gymMat2Button.spriteName = "gymMat2";
        gymMat2Button.activeFrame = false;
        const gymMat2MoveTo = new MoveTo(gymMat2);
        gymMat2MoveTo.x = 260;
        gymMat2MoveTo.y = 490;

        // gymMat3 (components)
        const gymMat3Button = new Button(gymMat3);
        gymMat3Button.spriteName = "gymMat3";
        gymMat3Button.activeFrame = false;
        const gymMat3MoveTo = new MoveTo(gymMat3);
        gymMat3MoveTo.x = 540;
        gymMat3MoveTo.y = 490;

        // gymMat4 (components)
        const gymMat4Button = new Button(gymMat4);
        gymMat4Button.spriteName = "gymMat4";
        gymMat4Button.activeFrame = false;
        const gymMat4MoveTo = new MoveTo(gymMat4);
        gymMat4MoveTo.x = 360;
        gymMat4MoveTo.y = 580;

        // gymMat1 (components)
        const gymMat1Button = new Button(gymMat1);
        gymMat1Button.spriteName = "gymMat1";
        gymMat1Button.activeFrame = false;
        const gymMat1MoveTo = new MoveTo(gymMat1);
        gymMat1MoveTo.x = 414;
        gymMat1MoveTo.y = 360;

        // leftChair (components)
        const leftChairButton = new Button(leftChair);
        leftChairButton.spriteName = "leftChair";
        leftChairButton.activeFrame = false;

        // leftChair2 (components)
        const leftChair2Button = new Button(leftChair2);
        leftChair2Button.spriteName = "leftChair2";
        leftChair2Button.activeFrame = false;

        // rightChair2 (components)
        const rightChair2Button = new Button(rightChair2);
        rightChair2Button.spriteName = "rightChair2";
        rightChair2Button.activeFrame = false;

        // rightChair (components)
        const rightChairSimpleButton = new SimpleButton(rightChair);
        rightChairSimpleButton.hoverCallback = () => {this.rightChairOn(true)};
        rightChairSimpleButton.hoverOutCallback = () => {this.rightChairOn(false)};

        // rightChair_hover (components)
        const rightChair_hoverSimpleButton = new SimpleButton(rightChair_hover);
        rightChair_hoverSimpleButton.hoverCallback = () => {this.rightChairOn(true)};
        rightChair_hoverSimpleButton.hoverOutCallback = () => {this.rightChairOn(false)};

        // rightChairArm (components)
        const rightChairArmSimpleButton = new SimpleButton(rightChairArm);
        rightChairArmSimpleButton.hoverCallback = () => {this.rightChairOn(true)};
        rightChairArmSimpleButton.hoverOutCallback = () => {this.rightChairOn(false)};

        // rightChairArm_hover (components)
        const rightChairArm_hoverSimpleButton = new SimpleButton(rightChairArm_hover);
        rightChairArm_hoverSimpleButton.hoverCallback = () => {this.rightChairOn(true)};
        rightChairArm_hoverSimpleButton.hoverOutCallback = () => {this.rightChairOn(false)};

        // treadmill (components)
        const treadmillSimpleButton = new SimpleButton(treadmill);
        treadmillSimpleButton.hoverCallback = () => {this.treadmillOn(true)};
        treadmillSimpleButton.hoverOutCallback = () => {this.treadmillOn(false)};

        // treadmill_hover (components)
        const treadmill_hoverSimpleButton = new SimpleButton(treadmill_hover);
        treadmill_hoverSimpleButton.hoverCallback = () => {this.treadmillOn(true)};
        treadmill_hoverSimpleButton.hoverOutCallback = () => {this.treadmillOn(false)};

        // treadmillRail (components)
        const treadmillRailSimpleButton = new SimpleButton(treadmillRail);
        treadmillRailSimpleButton.hoverCallback = () => {this.treadmillOn(true)};
        treadmillRailSimpleButton.hoverOutCallback = () => {this.treadmillOn(false)};

        // treadmillRail_hover (components)
        const treadmillRail_hoverSimpleButton = new SimpleButton(treadmillRail_hover);
        treadmillRail_hoverSimpleButton.hoverCallback = () => {this.treadmillOn(true)};
        treadmillRail_hoverSimpleButton.hoverOutCallback = () => {this.treadmillOn(false)};

        // treadmill2 (components)
        const treadmill2SimpleButton = new SimpleButton(treadmill2);
        treadmill2SimpleButton.hoverCallback = () => {this.treadmillOn2(true)};
        treadmill2SimpleButton.hoverOutCallback = () => {this.treadmillOn2(false)};

        // treadmill_hover2 (components)
        const treadmill_hover2SimpleButton = new SimpleButton(treadmill_hover2);
        treadmill_hover2SimpleButton.hoverCallback = () => {this.treadmillOn2(true)};
        treadmill_hover2SimpleButton.hoverOutCallback = () => {this.treadmillOn2(false)};

        // treadmillRail2 (components)
        const treadmillRail2SimpleButton = new SimpleButton(treadmillRail2);
        treadmillRail2SimpleButton.hoverCallback = () => {this.treadmillOn2(true)};
        treadmillRail2SimpleButton.hoverOutCallback = () => {this.treadmillOn2(false)};

        // treadmillRail_hover2 (components)
        const treadmillRail_hover2SimpleButton = new SimpleButton(treadmillRail_hover2);
        treadmillRail_hover2SimpleButton.hoverCallback = () => {this.treadmillOn2(true)};
        treadmillRail_hover2SimpleButton.hoverOutCallback = () => {this.treadmillOn2(false)};

        this.door0001 = door0001;
        this.rightChair = rightChair;
        this.rightChair_hover = rightChair_hover;
        this.rightChairArm = rightChairArm;
        this.rightChairArm_hover = rightChairArm_hover;
        this.speakersLeft0001 = speakersLeft0001;
        this.speakersRight0001 = speakersRight0001;
        this.treadmill = treadmill;
        this.treadmill_hover = treadmill_hover;
        this.treadmillRail = treadmillRail;
        this.treadmillRail_hover = treadmillRail_hover;
        this.treadmill2 = treadmill2;
        this.treadmill_hover2 = treadmill_hover2;
        this.treadmillRail2 = treadmillRail2;
        this.treadmillRail_hover2 = treadmillRail_hover2;
        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Sprite} */
    door0001;
    /** @type {Phaser.GameObjects.Sprite} */
    rightChair;
    /** @type {Phaser.GameObjects.Sprite} */
    rightChair_hover;
    /** @type {Phaser.GameObjects.Sprite} */
    rightChairArm;
    /** @type {Phaser.GameObjects.Sprite} */
    rightChairArm_hover;
    /** @type {Phaser.GameObjects.Sprite} */
    speakersLeft0001;
    /** @type {Phaser.GameObjects.Sprite} */
    speakersRight0001;
    /** @type {Phaser.GameObjects.Sprite} */
    treadmill;
    /** @type {Phaser.GameObjects.Sprite} */
    treadmill_hover;
    /** @type {Phaser.GameObjects.Sprite} */
    treadmillRail;
    /** @type {Phaser.GameObjects.Sprite} */
    treadmillRail_hover;
    /** @type {Phaser.GameObjects.Sprite} */
    treadmill2;
    /** @type {Phaser.GameObjects.Sprite} */
    treadmill_hover2;
    /** @type {Phaser.GameObjects.Sprite} */
    treadmillRail2;
    /** @type {Phaser.GameObjects.Sprite} */
    treadmillRail_hover2;
    /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Container|Phaser.GameObjects.Sprite>} */
    sort;

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
        this.elevatorPopup = this.world.interface.main.elevator;
        this.speakersLeft0001.play("hotelspa_speakersLeft")
        this.speakersRight0001.play("hotelspa_speakersRight")
    }


    rightChairOn(isHover) {
        this.rightChairArm_hover.visible = isHover;
        this.rightChairArm.visible = !isHover;
        this.rightChair_hover.visible = isHover;
        this.rightChair.visible = !isHover;
    }

    treadmillOn(isHover) {
        this.treadmillRail_hover.visible = isHover;
        this.treadmillRail.visible = !isHover;
        this.treadmill_hover.visible = isHover;
        this.treadmill.visible = !isHover;
    }

    treadmillOn2(isHover) {
        this.treadmillRail_hover2.visible = isHover;
        this.treadmillRail2.visible = !isHover;
        this.treadmill_hover2.visible = isHover;
        this.treadmill2.visible = !isHover;
    }

    lobbyLift() {
        this.elevatorPopup.visible = true;
        this.elevatorPopup.puffleBtn3_active.visible = true;
        this.elevatorPopup.puffleBtn3.visible = false;
        this.elevatorPopup.playAndGroom_active.visible = true;
        this.elevatorPopup.playAndGroom.visible = false;
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
