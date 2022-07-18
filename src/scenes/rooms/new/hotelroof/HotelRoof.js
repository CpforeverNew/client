
import RoomScene from '@scenes/rooms/RoomScene'

import { MoveTo, Interactive, SimpleButton, Button } from '@components/components'

/* START OF COMPILED CODE */

export default class HotelRoof extends RoomScene {

    constructor() {
        super("HotelRoof");

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'lift' : () => this.lobbyLift(),
        }
        this.playSpeaker = true;

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("hotelroof-pack", "assets/media/rooms/new/hotelroof/hotelroof-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(0, 0, "hotelroof", "bg");
        bg.setOrigin(0, 0);

        // cannonBase
        const cannonBase = this.add.sprite(1416, 451, "hotelroof", "cannonBase");

        // rightArray
        const rightArray = this.add.image(1554, 746, "hotelroof", "rightArray");
        rightArray.setOrigin(0.7570093457943925, 0.7995594713656388);

        // speakers
        const speakers = this.add.container(1323.7439476429045, 759.7135005215185);

        // leftSpeaker0001
        const leftSpeaker0001 = this.add.sprite(-33.984222636832556, -134.1544069366139, "hotelroof", "leftSpeaker0001");
        leftSpeaker0001.setOrigin(0.8750572094429465, 0.8304515856686954);
        speakers.add(leftSpeaker0001);

        // turntables0001
        const turntables0001 = this.add.sprite(35.193261205525005, 53.04422121087896, "hotelroof", "turntables0001");
        turntables0001.setOrigin(0.9436318194463339, 0.878266040736765);
        speakers.add(turntables0001);

        // rightSpeaker0001
        const rightSpeaker0001 = this.add.sprite(12.158450184228059, 23.612949823583108, "hotelroof", "rightSpeaker0001");
        rightSpeaker0001.setOrigin(0.6455478876466492, 0.7436307638293665);
        speakers.add(rightSpeaker0001);

        // speakers-hover
        const speakers_hover = this.add.container(1309.0823554964688, 771.9314939768816);
        speakers_hover.visible = false;

        // leftSpeaker_hover0001
        const leftSpeaker_hover0001 = this.add.sprite(36.14965955146431, -114.05193844321454, "hotelroof", "leftSpeaker-hover0001");
        leftSpeaker_hover0001.setOrigin(1.1661006476298788, 1.0209910238478161);
        speakers_hover.add(leftSpeaker_hover0001);

        // turntables_hover0001
        const turntables_hover0001 = this.add.sprite(25.18496973209676, 46.26749308084277, "hotelroof", "turntables-hover0001");
        turntables_hover0001.setOrigin(0.8122992089088762, 0.8876501604049947);
        speakers_hover.add(turntables_hover0001);

        // rightSpeaker_hover0001
        const rightSpeaker_hover0001 = this.add.sprite(51.09658454479154, 21.992552368195675, "hotelroof", "rightSpeaker-hover0001");
        rightSpeaker_hover0001.setOrigin(0.8269685056020006, 0.8021319420629605);
        speakers_hover.add(rightSpeaker_hover0001);

        // door0001
        const door0001 = this.add.sprite(76, 434, "hotelroof", "door0001");

        // doorBorder
        const doorBorder = this.add.image(60, 431, "hotelroof", "doorBorder");

        // cashier
        const cashier = this.add.image(263.08413015986997, 697.998550247332, "hotelroof", "cashier");
        cashier.setOrigin(0.7959251079637211, 0.7251559619028609);

        // bush
        this.add.image(-33, 764, "hotelroof", "bush");

        // drinks
        this.add.image(239, 779, "hotelroof", "drinks");

        // booths
        const booths = this.add.image(915.8527810487742, 774.8948387348324, "hotelroof", "booths");
        booths.setOrigin(0.6454834614216083, 0.4119962821185534);

        // statues
        const statues = this.add.image(1559.8235312055992, 984.1875511585295, "hotelroof", "statues");
        statues.setOrigin(0.9540019426036547, 0.8683365674043273);

        // rightTable
        const rightTable = this.add.container(1012.2913795268863, 830.2795502518297);

        // rightBoothTable
        const rightBoothTable = this.add.image(35.717145768053456, 17.75296532309312, "hotelroof", "rightBoothTable");
        rightBoothTable.setOrigin(0.8420286617718679, 0.9044214291033844);
        rightTable.add(rightBoothTable);

        // food30001
        const food30001 = this.add.image(-89.94325462257154, -81.24758399331313, "hotelroof", "food30001");
        food30001.setOrigin(0.5690017014194604, 0.5263895955072981);
        rightTable.add(food30001);

        // food40001
        const food40001 = this.add.image(-29.565813216321544, -131.91677344643813, "hotelroof", "food40001");
        food40001.setOrigin(-0.013852284189570326, 0.031089406937891553);
        rightTable.add(food40001);

        // rightTableDrinkNear
        const rightTableDrinkNear = this.add.image(-34.462785872571544, -73.19332373940688, "hotelroof", "rightTableDrinkNear");
        rightTableDrinkNear.setOrigin(0.3565728759077615, 0.3203162395802353);
        rightTable.add(rightTableDrinkNear);

        // leftTable
        const leftTable = this.add.container(558.1932546225714, 818.2816312197702);

        // leftBoothTable
        const leftBoothTable = this.add.image(50.68034156883482, 50.219894659136, "hotelroof", "leftBoothTable");
        leftBoothTable.setOrigin(0.9453401215342462, 0.9675972643007174);
        leftTable.add(leftBoothTable);

        // food0001
        const food0001 = this.add.image(-89.94325462257143, -77.95082067289525, "hotelroof", "food0001");
        food0001.setOrigin(0.654891220754619, 0.5952051438080235);
        leftTable.add(food0001);

        // food20001
        const food20001 = this.add.image(20.04209693992857, -73.79139684477025, "hotelroof", "food20001");
        food20001.setOrigin(0.6221234120949523, 0.5985557360766292);
        leftTable.add(food20001);

        // leftTableDrinkNear
        const leftTableDrinkNear = this.add.image(-68.32069602882143, -42.66395543852025, "hotelroof", "leftTableDrinkNear");
        leftTableDrinkNear.setOrigin(0.537451179709119, 0.5676828548959983);
        leftTable.add(leftTableDrinkNear);

        // diving0001
        const diving0001 = this.add.sprite(392.9784388506354, 470, "hotelroof", "diving0001");
        diving0001.setOrigin(-1.6589503597021444, 0.5);

        // diving_hover0001
        const diving_hover0001 = this.add.sprite(760, 470, "hotelroof", "diving-hover0001");
        diving_hover0001.visible = false;

        // chairEat
        const chairEat = this.add.image(270, 330, "hotelroof", "chairEat");

        // chairEat_1
        const chairEat_1 = this.add.image(434, 330, "hotelroof", "chairEat");

        // divebar
        const divebar = this.add.image(506.2803294900903, 438.4277429984754, "hotelroof", "divebar");
        divebar.setOrigin(0.7800007305766969, 0.6674805430903054);

        // doorTop
        this.add.image(42, 209, "hotelroof", "doorTop");

        // chairsFront
        const chairsFront = this.add.image(183.29047775876626, 475.14306425038114, "hotelroof", "chairsFront");
        chairsFront.setOrigin(0.16148629623868563, 0.4325425590330714);

        // cupLeft
        this.add.image(739, 320, "hotelroof", "cupLeft");

        // zzzChair
        const zzzChair = this.add.image(862, 275, "hotelroof", "zzzChair");

        // zzzChairRight
        const zzzChairRight = this.add.image(1098, 275, "hotelroof", "zzzChairRight");

        // cupRight
        this.add.image(986, 310, "hotelroof", "cupRight");

        // rail
        this.add.image(681, 340, "hotelroof", "rail");

        // lists
        const sort = [cashier, divebar, turntables0001, chairsFront, leftSpeaker_hover0001, turntables_hover0001, rightSpeaker_hover0001, rightSpeaker0001, leftSpeaker0001, statues, speakers_hover, speakers, booths, rightArray, rightTable, leftTable];

        // cannonBase (components)
        const cannonBaseMoveTo = new MoveTo(cannonBase);
        cannonBaseMoveTo.x = 1400;
        cannonBaseMoveTo.y = 500;
        const cannonBaseButton = new Button(cannonBase);
        cannonBaseButton.spriteName = "cannonBase";
        cannonBaseButton.activeFrame = false;

        // leftSpeaker0001 (components)
        const leftSpeaker0001SimpleButton = new SimpleButton(leftSpeaker0001);
        leftSpeaker0001SimpleButton.hoverCallback = () => {this.speakersTurnon(true)};
        leftSpeaker0001SimpleButton.hoverOutCallback = () => {this.speakersTurnon(false)};
        const leftSpeaker0001MoveTo = new MoveTo(leftSpeaker0001);
        leftSpeaker0001MoveTo.x = 1350;
        leftSpeaker0001MoveTo.y = 700;

        // turntables0001 (components)
        const turntables0001SimpleButton = new SimpleButton(turntables0001);
        turntables0001SimpleButton.hoverCallback = () => {this.speakersTurnon(true)};
        turntables0001SimpleButton.hoverOutCallback = () => {this.speakersTurnon(false)};
        const turntables0001MoveTo = new MoveTo(turntables0001);
        turntables0001MoveTo.x = 1350;
        turntables0001MoveTo.y = 700;

        // rightSpeaker0001 (components)
        const rightSpeaker0001SimpleButton = new SimpleButton(rightSpeaker0001);
        rightSpeaker0001SimpleButton.hoverCallback = () => {this.speakersTurnon(true)};
        rightSpeaker0001SimpleButton.hoverOutCallback = () => {this.speakersTurnon(false)};
        const rightSpeaker0001MoveTo = new MoveTo(rightSpeaker0001);
        rightSpeaker0001MoveTo.x = 1350;
        rightSpeaker0001MoveTo.y = 700;

        // leftSpeaker_hover0001 (components)
        const leftSpeaker_hover0001SimpleButton = new SimpleButton(leftSpeaker_hover0001);
        leftSpeaker_hover0001SimpleButton.hoverCallback = () => {this.speakersTurnon(true)};
        leftSpeaker_hover0001SimpleButton.hoverOutCallback = () => {this.speakersTurnon(false)};
        const leftSpeaker_hover0001MoveTo = new MoveTo(leftSpeaker_hover0001);
        leftSpeaker_hover0001MoveTo.x = 1350;
        leftSpeaker_hover0001MoveTo.y = 700;

        // turntables_hover0001 (components)
        const turntables_hover0001SimpleButton = new SimpleButton(turntables_hover0001);
        turntables_hover0001SimpleButton.hoverCallback = () => {this.speakersTurnon(true)};
        turntables_hover0001SimpleButton.hoverOutCallback = () => {this.speakersTurnon(false)};
        const turntables_hover0001MoveTo = new MoveTo(turntables_hover0001);
        turntables_hover0001MoveTo.x = 1350;
        turntables_hover0001MoveTo.y = 700;

        // rightSpeaker_hover0001 (components)
        const rightSpeaker_hover0001SimpleButton = new SimpleButton(rightSpeaker_hover0001);
        rightSpeaker_hover0001SimpleButton.hoverCallback = () => {this.speakersTurnon(true)};
        rightSpeaker_hover0001SimpleButton.hoverOutCallback = () => {this.speakersTurnon(false)};
        const rightSpeaker_hover0001MoveTo = new MoveTo(rightSpeaker_hover0001);
        rightSpeaker_hover0001MoveTo.x = 1350;
        rightSpeaker_hover0001MoveTo.y = 730;

        // door0001 (components)
        const door0001MoveTo = new MoveTo(door0001);
        door0001MoveTo.x = 130;
        door0001MoveTo.y = 560;
        const door0001SimpleButton = new SimpleButton(door0001);
        door0001SimpleButton.hoverCallback = () => {this.door0001.play("hotelroof_door_open"); this.sound.play("hl_liftOpen")};
        door0001SimpleButton.hoverOutCallback = () => {this.door0001.play("hotelroof_door_close"); this.sound.play('hl_liftClose')};

        // doorBorder (components)
        const doorBorderMoveTo = new MoveTo(doorBorder);
        doorBorderMoveTo.x = 130;
        doorBorderMoveTo.y = 560;

        // diving0001 (components)
        const diving0001SimpleButton = new SimpleButton(diving0001);
        diving0001SimpleButton.hoverCallback = () => {this.divingBoardTurnOn(true)};
        diving0001SimpleButton.hoverOutCallback = () => {this.divingBoardTurnOn(false)};
        const diving0001MoveTo = new MoveTo(diving0001);
        diving0001MoveTo.x = 770;
        diving0001MoveTo.y = 450;

        // diving_hover0001 (components)
        const diving_hover0001SimpleButton = new SimpleButton(diving_hover0001);
        diving_hover0001SimpleButton.hoverCallback = () => {this.divingBoardTurnOn(true)};
        diving_hover0001SimpleButton.hoverOutCallback = () => {this.divingBoardTurnOn(false)};
        const diving_hover0001MoveTo = new MoveTo(diving_hover0001);
        diving_hover0001MoveTo.x = 770;
        diving_hover0001MoveTo.y = 450;

        // chairEat (components)
        const chairEatButton = new Button(chairEat);
        chairEatButton.spriteName = "chairEat";
        chairEatButton.activeFrame = false;
        const chairEatMoveTo = new MoveTo(chairEat);
        chairEatMoveTo.x = 230;
        chairEatMoveTo.y = 360;

        // chairEat_1 (components)
        const chairEat_1Button = new Button(chairEat_1);
        chairEat_1Button.spriteName = "chairEat";
        chairEat_1Button.activeFrame = false;
        const chairEat_1MoveTo = new MoveTo(chairEat_1);
        chairEat_1MoveTo.x = 400;
        chairEat_1MoveTo.y = 360;

        // zzzChair (components)
        const zzzChairButton = new Button(zzzChair);
        zzzChairButton.spriteName = "zzzChair";
        zzzChairButton.activeFrame = false;
        const zzzChairMoveTo = new MoveTo(zzzChair);
        zzzChairMoveTo.x = 840;
        zzzChairMoveTo.y = 300;

        // zzzChairRight (components)
        const zzzChairRightButton = new Button(zzzChairRight);
        zzzChairRightButton.spriteName = "zzzChairRight";
        zzzChairRightButton.activeFrame = false;
        const zzzChairRightMoveTo = new MoveTo(zzzChairRight);
        zzzChairRightMoveTo.x = 1090;
        zzzChairRightMoveTo.y = 300;

        this.cannonBase = cannonBase;
        this.speakers = speakers;
        this.leftSpeaker0001 = leftSpeaker0001;
        this.turntables0001 = turntables0001;
        this.rightSpeaker0001 = rightSpeaker0001;
        this.speakers_hover = speakers_hover;
        this.leftSpeaker_hover0001 = leftSpeaker_hover0001;
        this.turntables_hover0001 = turntables_hover0001;
        this.rightSpeaker_hover0001 = rightSpeaker_hover0001;
        this.door0001 = door0001;
        this.diving0001 = diving0001;
        this.diving_hover0001 = diving_hover0001;
        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Sprite} */
    cannonBase;
    /** @type {Phaser.GameObjects.Container} */
    speakers;
    /** @type {Phaser.GameObjects.Sprite} */
    leftSpeaker0001;
    /** @type {Phaser.GameObjects.Sprite} */
    turntables0001;
    /** @type {Phaser.GameObjects.Sprite} */
    rightSpeaker0001;
    /** @type {Phaser.GameObjects.Container} */
    speakers_hover;
    /** @type {Phaser.GameObjects.Sprite} */
    leftSpeaker_hover0001;
    /** @type {Phaser.GameObjects.Sprite} */
    turntables_hover0001;
    /** @type {Phaser.GameObjects.Sprite} */
    rightSpeaker_hover0001;
    /** @type {Phaser.GameObjects.Sprite} */
    door0001;
    /** @type {Phaser.GameObjects.Sprite} */
    diving0001;
    /** @type {Phaser.GameObjects.Sprite} */
    diving_hover0001;
    /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
    sort;

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
        this.elevatorPopup = this.world.interface.main.elevator;
    }

    lobbyLift() {
        this.elevatorPopup.visible = true;
        this.elevatorPopup.puffleBtn1_active.visible = true;
        this.elevatorPopup.puffleBtn1.visible = false;
        this.elevatorPopup.eatAndSleep_active.visible = true;
        this.elevatorPopup.eatAndSleep.visible = false;
    }

    generateAnimRoof(id, key, start, end=35, repeat=-1) {
        if (start == null) {
            start = 1
        } else if (start.currentFrame == null) {
            start = end - 1
        }
        else {
            start = start.currentFrame.index
        }

        console.log(start)
        let anim = {
            key: id,
            frames: this.world.anims.generateFrameNames("hotelroof", {prefix: key, start: start, zeroPad: 4 , end:end}),
            framerate: 24,
            repeat: repeat, 
        }
        this.anims.create(anim)
        return anim;
    }

    divingBoardTurnOn(isHover) {
        this.diving_hover0001.visible = isHover;
        this.diving0001.visible = !isHover;
    }

    speakersTurnon(isHover) {
        this.speakers_hover.visible = isHover;
        this.speakers.visible = !isHover;   

        this.playSpeaker = true;
        if (this.playSpeaker) {
            this.playSpeaker = false;
            if (isHover) {
               var leftSpeaker = this.generateAnimRoof((Math.random() + 1).toString(36).substring(7), "leftSpeaker-hover", this.leftSpeaker0001.anims)
               var rightSpeaker = this.generateAnimRoof((Math.random() + 1).toString(36).substring(7), "rightSpeaker-hover", this.rightSpeaker0001.anims)
               var turntables = this.generateAnimRoof((Math.random() + 1).toString(36).substring(7), "turntables-hover", this.turntables0001.anims, 71, 0)

               this.leftSpeaker_hover0001.play(leftSpeaker.key)
               this.rightSpeaker_hover0001.play(rightSpeaker.key)
               this.turntables_hover0001.play(turntables.key).once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
                    this.leftSpeaker0001.stop();
                    this.rightSpeaker0001.stop();
                    this.leftSpeaker_hover0001.stop();
                    this.rightSpeaker_hover0001.stop();
                    this.world.anims.remove(leftSpeaker.key)
                    this.world.anims.remove(rightSpeaker.key)
                    this.world.anims.remove(turntables.key)
                    this.playSpeaker = true;
                });
            } else {
                var leftSpeaker = this.generateAnimRoof((Math.random() + 1).toString(36).substring(7), "leftSpeaker", this.leftSpeaker_hover0001.anims)
                var rightSpeaker = this.generateAnimRoof((Math.random() + 1).toString(36).substring(7), "rightSpeaker", this.rightSpeaker_hover0001.anims)
                var turntables = this.generateAnimRoof((Math.random() + 1).toString(36).substring(7), "turntables", this.turntables_hover0001.anims, 71, 0)

                this.leftSpeaker0001.play(leftSpeaker.key)
                this.rightSpeaker0001.play(rightSpeaker.key)
                this.turntables0001.play(turntables.key).once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
                     this.leftSpeaker0001.stop();
                     this.rightSpeaker0001.stop();
                     this.leftSpeaker_hover0001.stop();
                     this.rightSpeaker_hover0001.stop();
                     this.world.anims.remove(leftSpeaker.key)
                     this.world.anims.remove(rightSpeaker.key)
                     this.world.anims.remove(turntables.key)
                     this.playSpeaker = true;
                });
            }
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
