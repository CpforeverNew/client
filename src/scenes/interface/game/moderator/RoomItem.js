import BaseContainer from "@scenes/base/BaseContainer";
import {SimpleButton} from "@components/components";

/* START OF COMPILED CODE */

export default class RoomItem extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 630, y ?? 496);

        /** @type {Phaser.GameObjects.Text} */
        this.text_1;


        // larger_button0001
        const larger_button0001 = scene.add.image(154, 0, "login", "larger-button0001");
        this.add(larger_button0001);

        // text_1
        const text_1 = scene.add.text(-102, -16, "", {});
        text_1.text = "Room Name Here\n";
        text_1.setStyle({ "fixedWidth":500,"fixedHeight":35,"fontFamily": "Burbank Small", "fontSize": "25px" });
        this.add(text_1);

        // larger_button0001 (components)
        const larger_button0001SimpleButton = new SimpleButton(larger_button0001);
        larger_button0001SimpleButton.callback = () =>  this.onClick();
        larger_button0001SimpleButton.pixelPerfect = true;

        this.text_1 = text_1;

        /* START-USER-CTR-CODE */
        this.room
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    setItem(room) {

        console.log(room)

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
            console.log("join room", this.room[0])
            this.world.client.sendJoinRoom(this.room[0], this.room[1].key, this.room[1].x,this.room[1].y, 80)
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
