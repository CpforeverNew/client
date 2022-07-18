import BaseContainer from '@scenes/base/BaseContainer'
import { Button, Interactive, NineSlice, SimpleButton } from '@components/components'

// You can write more code here

/* START OF COMPILED CODE */

export default class Elevator extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 40, y ?? 47);

        /** @type {Phaser.GameObjects.Sprite} */
        this.puffleBtn1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.puffleBtn2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.puffleBtn3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.puffleBtn1_active;
        /** @type {Phaser.GameObjects.Sprite} */
        this.puffleBtn2_active;
        /** @type {Phaser.GameObjects.Sprite} */
        this.puffleBtn3_active;
        /** @type {Phaser.GameObjects.Sprite} */
        this.eatAndSleep;
        /** @type {Phaser.GameObjects.Sprite} */
        this.playAndGroom;
        /** @type {Phaser.GameObjects.Sprite} */
        this.eatAndDress;
        /** @type {Phaser.GameObjects.Sprite} */
        this.eatAndSleep_active;
        /** @type {Phaser.GameObjects.Sprite} */
        this.playAndGroom_active;
        /** @type {Phaser.GameObjects.Sprite} */
        this.eatAndDress_active;


        // bg
        const bg = scene.add.image(1, 0, "elevator", "bg");
        bg.setOrigin(0, 0);
        this.add(bg);

        // wood
        const wood = scene.add.image(728, 440, "elevator", "wood");
        this.add(wood);

        // puffleGoldBar
        const puffleGoldBar = scene.add.image(759, 140, "elevator", "puffleGoldBar");
        this.add(puffleGoldBar);

        // goldBar
        const goldBar = scene.add.image(820, 296, "elevator", "goldBar");
        this.add(goldBar);

        // goldBar_1
        const goldBar_1 = scene.add.image(820, 688, "elevator", "goldBar");
        this.add(goldBar_1);

        // goldBar_2
        const goldBar_2 = scene.add.image(820, 492, "elevator", "goldBar");
        this.add(goldBar_2);

        // puffleBtn1
        const puffleBtn1 = scene.add.sprite(264, 295, "elevator", "puffleBtn");
        this.add(puffleBtn1);

        // puffleBtn2
        const puffleBtn2 = scene.add.sprite(260, 690, "elevator", "puffleBtn");
        this.add(puffleBtn2);

        // puffleBtn3
        const puffleBtn3 = scene.add.sprite(260, 490, "elevator", "puffleBtn");
        this.add(puffleBtn3);

        // puffleBtn1_active
        const puffleBtn1_active = scene.add.sprite(260, 294, "elevator", "puffleBtn-active");
        puffleBtn1_active.visible = false;
        this.add(puffleBtn1_active);

        // puffleBtn2_active
        const puffleBtn2_active = scene.add.sprite(260, 690, "elevator", "puffleBtn-active");
        puffleBtn2_active.visible = false;
        this.add(puffleBtn2_active);

        // puffleBtn3_active
        const puffleBtn3_active = scene.add.sprite(260, 490, "elevator", "puffleBtn-active");
        puffleBtn3_active.visible = false;
        this.add(puffleBtn3_active);

        // eatAndSleep
        const eatAndSleep = scene.add.sprite(1100, 295, "elevator", "eatAndSleep");
        this.add(eatAndSleep);

        // playAndGroom
        const playAndGroom = scene.add.sprite(1100, 492, "elevator", "playAndGroom");
        this.add(playAndGroom);

        // eatAndDress
        const eatAndDress = scene.add.sprite(1100, 690, "elevator", "eatAndDress");
        this.add(eatAndDress);

        // eatAndSleep_active
        const eatAndSleep_active = scene.add.sprite(1100, 296, "elevator", "eatAndSleep-active");
        eatAndSleep_active.visible = false;
        this.add(eatAndSleep_active);

        // playAndGroom_active
        const playAndGroom_active = scene.add.sprite(1100, 492, "elevator", "playAndGroom-active");
        playAndGroom_active.visible = false;
        this.add(playAndGroom_active);

        // eatAndDress_active
        const eatAndDress_active = scene.add.sprite(1101, 690, "elevator", "eatAndDress-active");
        eatAndDress_active.visible = false;
        this.add(eatAndDress_active);

        // elevator
        const elevator = scene.add.image(690, 142, "elevator", "elevator");
        this.add(elevator);

        // roof
        const roof = scene.add.image(480, 296, "elevator", "roof");
        this.add(roof);

        // gymAndSpa
        const gymAndSpa = scene.add.image(625, 494, "elevator", "gymAndSpa");
        this.add(gymAndSpa);

        // lobby
        const lobby = scene.add.image(503, 687, "elevator", "lobby");
        this.add(lobby);

        // grey_button
        const grey_button = scene.add.image(1405, 47, "main", "grey-button");
        this.add(grey_button);

        // grey_x
        const grey_x = scene.add.image(1405, 47, "main", "grey-x");
        this.add(grey_x);

        // goldBar (components)
        const goldBarSimpleButton = new SimpleButton(goldBar);
        goldBarSimpleButton.callback = () => {this.onRoomClick(432)};

        // goldBar_1 (components)
        const goldBar_1SimpleButton = new SimpleButton(goldBar_1);
        goldBar_1SimpleButton.callback = () => {this.onRoomClick(430,72,520)};

        // goldBar_2 (components)
        const goldBar_2SimpleButton = new SimpleButton(goldBar_2);
        goldBar_2SimpleButton.callback = () => {this.onRoomClick(431)};

        // puffleBtn1 (components)
        const puffleBtn1SimpleButton = new SimpleButton(puffleBtn1);
        puffleBtn1SimpleButton.callback = () => {this.onRoomClick(432)};

        // puffleBtn2 (components)
        const puffleBtn2SimpleButton = new SimpleButton(puffleBtn2);
        puffleBtn2SimpleButton.callback = () => {this.onRoomClick(430,72,520)};

        // puffleBtn3 (components)
        const puffleBtn3SimpleButton = new SimpleButton(puffleBtn3);
        puffleBtn3SimpleButton.callback = () => {this.onSpa()};

        // grey_button (components)
        const grey_buttonButton = new Button(grey_button);
        grey_buttonButton.spriteName = "grey-button";
        grey_buttonButton.callback = () => { this.closeElevator() };

        this.puffleBtn1 = puffleBtn1;
        this.puffleBtn2 = puffleBtn2;
        this.puffleBtn3 = puffleBtn3;
        this.puffleBtn1_active = puffleBtn1_active;
        this.puffleBtn2_active = puffleBtn2_active;
        this.puffleBtn3_active = puffleBtn3_active;
        this.eatAndSleep = eatAndSleep;
        this.playAndGroom = playAndGroom;
        this.eatAndDress = eatAndDress;
        this.eatAndSleep_active = eatAndSleep_active;
        this.playAndGroom_active = playAndGroom_active;
        this.eatAndDress_active = eatAndDress_active;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    closeElevator() {
        this.visible = false
        this.puffleBtn1_active.visible = false;
        this.puffleBtn1.visible = true;
        this.puffleBtn2_active.visible = false;
        this.puffleBtn2.visible = true;
        this.puffleBtn3_active.visible = false;
        this.puffleBtn3.visible = true;
        this.eatAndSleep_active.visible = false;
        this.eatAndSleep.visible = true;
        this.playAndGroom_active.visible = false;
        this.playAndGroom.visible = true;
        this.eatAndDress_active.visible = false;
        this.eatAndDress.visible = true;
    }

    onRoomClick(id,x=0,y=0) {
        let room = this.crumbs.scenes.rooms[id]
        if (this.world.room.key == room.key) return
        if (x==0) x = room.x
        if (y==0) y = room.y

        this.closeElevator();
        this.world.client.sendJoinRoom(id, room.key, x, y)
    }

    onSpa(){
        this.closeElevator();
        this.world.network.send("send_error", {error: "This feature is not yet implemented!\nCPForever is in development, and is being\nactively updated. Check back soon!'"})
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
