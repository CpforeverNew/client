
import RoomScene from '@scenes/rooms/RoomScene'

import { MoveTo, SimpleButton, Button } from '@components/components'

/* START OF COMPILED CODE */

export default class HotelRoof extends RoomScene {

    constructor() {
        super("HotelRoof");

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'lift' : () => this.lobbyLift(),
        }
		
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

        // cannon0001
        this.add.image(1249, 303, "hotelroof", "cannon0001");

        // rightArray
        this.add.image(1499, 610, "hotelroof", "rightArray");

        // leftSpeaker0001
        this.add.image(1226, 574, "hotelroof", "leftSpeaker0001");

        // turntables0001
        this.add.image(1264, 724, "hotelroof", "turntables0001");

        // rightSpeaker0001
        this.add.image(1318, 748, "hotelroof", "rightSpeaker0001");

        // door0001
        this.add.image(76, 434, "hotelroof", "door0001");

        // doorBorder
        this.add.image(60, 431, "hotelroof", "doorBorder");

        // cashier
        this.add.image(153, 664, "hotelroof", "cashier");

        // bush
        this.add.image(-33, 764, "hotelroof", "bush");

        // drinks
        this.add.image(239, 779, "hotelroof", "drinks");

        // booths
        this.add.image(742, 802, "hotelroof", "booths");

        // statues
        this.add.image(729, 884, "hotelroof", "statues");

        // leftBoothTable
        this.add.image(506, 717, "hotelroof", "leftBoothTable");

        // rightBoothTable
        this.add.image(969, 716, "hotelroof", "rightBoothTable");

        // diving
        this.add.image(761, 472, "hotelroof", "diving");

        // chairEat
        this.add.image(270, 330, "hotelroof", "chairEat");

        // chairEat_1
        this.add.image(434, 330, "hotelroof", "chairEat");

        // divebar
        this.add.image(380, 419, "hotelroof", "divebar");

        // doorTop
        this.add.image(42, 209, "hotelroof", "doorTop");

        // chairsFront
        this.add.image(295, 480, "hotelroof", "chairsFront");

        // cupLeft
        this.add.image(739, 320, "hotelroof", "cupLeft");

        // zzzChair
        this.add.image(862, 275, "hotelroof", "zzzChair");

        // zzzChairRight
        this.add.image(1098, 275, "hotelroof", "zzzChairRight");

        // cupRight
        this.add.image(986, 310, "hotelroof", "cupRight");

        // rail
        this.add.image(681, 340, "hotelroof", "rail");

        // food0001
        this.add.image(454, 733, "hotelroof", "food0001");

        // food20001
        this.add.image(567, 737, "hotelroof", "food20001");

        // food30001
        this.add.image(916, 746, "hotelroof", "food30001");

        // food40001
        this.add.image(1030, 733, "hotelroof", "food40001");

        // leftTableDrinkNear
        this.add.image(488, 770, "hotelroof", "leftTableDrinkNear");

        // rightTableDrinkNear
        this.add.image(985, 771, "hotelroof", "rightTableDrinkNear");

        this.events.emit("scene-awake");
    }

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

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
