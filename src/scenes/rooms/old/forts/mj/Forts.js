import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button } from '@components/components'


/* START OF COMPILED CODE */

export default class Forts extends RoomScene {

    constructor() {
        super("Forts");

        /** @type {Phaser.GameObjects.Sprite} */
        this.tower;
        /** @type {Phaser.GameObjects.Text} */
        this.day;
        /** @type {Phaser.GameObjects.Text} */
        this.am_pm;
        /** @type {Phaser.GameObjects.Text} */
        this.clockTime;
        /** @type {Array<any>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'town': () => this.triggerRoom(100, 1240, 660),
            'rink': () => this.triggerRoom(802, 780, 340),
            'plaza': () => this.triggerRoom(300, 340, 660)
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("forts-pack", "assets/media/rooms/old/forts/forts-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(770, 388, "forts-mj", "bg");

        // tower_shadow
        const tower_shadow = this.add.image(1065, 304, "forts", "tower_shadow");
        tower_shadow.setOrigin(0, 0);

        // tower
        const tower = this.add.sprite(1046, -13, "forts", "tower0001");
        tower.setOrigin(0, 0);

        // clock
        const clock = this.add.image(1082, 104, "forts", "clock");
        clock.setOrigin(0, 0);

        // secret_message
        const secret_message = this.add.image(1252, 327, "forts", "secret_message");
        secret_message.setOrigin(0, 0);

        // day
        const day = this.add.text(1156, 221, "", {});
        day.angle = 2.5;
        day.setOrigin(0.5, 0.5);
        day.text = "WEDNESDAY";
        day.setStyle({ "color": "#0d0d0dff", "fontFamily": "Burbank Small", "fontSize": "18px", "fontStyle": "bold" });

        // am_pm
        const am_pm = this.add.text(1218, 140, "", {});
        am_pm.angle = 1;
        am_pm.setOrigin(0.5, 0.5);
        am_pm.text = "AM";
        am_pm.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });

        // clockTime
        const clockTime = this.add.text(1143, 154, "", {});
        clockTime.scaleY = 1.5;
        clockTime.angle = 1;
        clockTime.setOrigin(0.5, 0.5);
        clockTime.text = "12:58";
        clockTime.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "45px" });

        // score10001
        this.add.image(1410, 273, "forts-mj", "Score10001");

        // score20001
        this.add.image(213, 261, "forts-mj", "Score20001");

        // stages120001
        this.add.image(1035, 568, "forts-mj", "Stages120001");

        // stages60001
        this.add.image(672, 680, "forts-mj", "Stages60001");

        // stages50002
        this.add.image(417, 547, "forts-mj", "Stages50002");

        // stages40001
        this.add.image(657, 485, "forts-mj", "Stages40001");

        // stages20001
        this.add.image(890, 600, "forts-mj", "Stages20001");

        // stages90001
        this.add.image(1059, 535, "forts-mj", "Stages90001");

        // stages30002
        this.add.image(659, 652, "forts-mj", "Stages30002");

        // stages70001
        this.add.image(806, 459, "forts-mj", "Stages70001");

        // stages
        this.add.image(1268, 441, "forts-mj", "Stages90001");

        // stages80001
        this.add.image(1050, 378, "forts-mj", "Stages80001");

        // stages1
        this.add.image(866, 459, "forts-mj", "Stages1");

        // speakers30001
        this.add.image(482, 627, "forts-mj", "Speakers30001");

        // speakers10001
        this.add.image(426, 693, "forts-mj", "Speakers10001");

        // speakers20001
        this.add.image(939, 728, "forts-mj", "Speakers20001");

        // sign2
        this.add.image(1302, 706, "forts-mj", "Sign2");

        // sign10001
        this.add.image(1228, 741, "forts-mj", "Sign10001");

        // drums50001
        this.add.image(431, 792, "forts-mj", "Drums50001");

        // drums30001
        this.add.image(453, 816, "forts-mj", "Drums30001");

        // drums40001
        this.add.image(586, 785, "forts-mj", "Drums40001");

        // drums20001
        this.add.image(558, 824, "forts-mj", "Drums20001");

        // drums10001
        this.add.image(510, 799, "forts-mj", "Drums10001");

        // drums110001
        this.add.image(1303, 531, "forts-mj", "Drums110001");

        // drums70001
        this.add.image(1326, 558, "forts-mj", "Drums70001");

        // drums80001
        this.add.image(1458, 525, "forts-mj", "Drums80001");

        // drums60001
        this.add.image(1433, 560, "forts-mj", "Drums60001");

        // drums90001
        this.add.image(1384, 539, "forts-mj", "Drums90001");

        // booth2
        this.add.image(195, 628, "forts-mj", "Booth2");

        // booth1
        this.add.image(179, 643, "forts-mj", "Booth1");

        // speakers40001
        this.add.image(1011, 621, "forts-mj", "Speakers40001");

        // lists
        const sort = [];

        // tower (components)
        const towerAnimation = new Animation(tower);
        towerAnimation.key = "tower";
        towerAnimation.end = 24;
        towerAnimation.repeat = 0;
        towerAnimation.autoPlay = false;

        this.tower = tower;
        this.day = day;
        this.am_pm = am_pm;
        this.clockTime = clockTime;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {

        this.stampCompletion = 0

        super.create();

        var now = new Date();
        var timeInHours = now.getUTCHours();
        if (timeInHours > 12) {
            timeInHours = timeInHours - 12
            this.am_pm.text = "PM"
        }
        var timeInMinutes = now.getUTCMinutes();
        if (timeInMinutes < 10) {
            this.clockTime.text = timeInHours + ":0" + timeInMinutes;
        } else {
            this.clockTime.text = timeInHours + ":" + timeInMinutes;
        }
        var day = now.getUTCDay()

        if (day == 1) {
            this.day.text = "MONDAY"
        } else if (day == 2) {
            this.day.text = "TUESDAY"
        } else if (day == 3) {
            this.day.text = "WEDNESDAY"
        } else if (day == 4) {
            this.day.text = "THURSDAY"
        } else if (day == 5) {
            this.day.text = "FRIDAY"
        } else if (day = 6) {
            this.day.text = "SATURDAY"
        } else {
            this.day.text = "SUNDAY"
        }
    }


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
