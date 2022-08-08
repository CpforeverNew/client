import BaseContainer from "@scenes/base/BaseContainer";
import {SimpleButton} from "@components/components";

/* START OF COMPILED CODE */

export default class RoomItem extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 630, y ?? 496);

        /** @type {Phaser.GameObjects.Image} */
        this.button;
        /** @type {Phaser.GameObjects.Text} */
        this.text_1;


        // button
        const button = scene.add.image(154, 0, "login", "larger-button0001");
        this.add(button);

        // text_1
        const text_1 = scene.add.text(-102, -16, "", {});
        text_1.text = "Room Name Here\n";
        text_1.setStyle({ "fixedWidth":500,"fixedHeight":35,"fontFamily": "Burbank Small", "fontSize": "25px" });
        this.add(text_1);

        // button (components)
        const buttonSimpleButton = new SimpleButton(button);
        buttonSimpleButton.callback = () =>  this.onClick();
        buttonSimpleButton.pixelPerfect = true;

        this.button = button;
        this.text_1 = text_1;

        /* START-USER-CTR-CODE */
        this.room
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    setItem(room) {

        if (!room) {
            return this.clearItem()
        }

        this.text_1.text = this.getString(room[1].key)
        this.room = room
    }


    clearItem() {
        this.text_1.text = ""
        this.roomID = null
    }

    onClick() {
        if(this.room) {
            if(this.world.room.id != this.room[0])
                this.world.client.sendJoinRoom(this.room[0], this.room[1].key, this.room[1].x,this.room[1].y, 80)
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
