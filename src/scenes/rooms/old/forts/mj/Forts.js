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
        /** @type {Phaser.GameObjects.Image[]} */
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
        const stages50002 = this.add.image(417, 691.6499308424081, "forts-mj", "Stages50002");
        stages50002.setOrigin(0.5, 1.0005187918422427);

        // stages40001
        const stages40001 = this.add.image(657, 613.2907124733263, "forts-mj", "Stages40001");
        stages40001.setOrigin(0.5, 0.9234016913311098);

        // stages20001
        const stages20001 = this.add.image(890, 674.9079999005328, "forts-mj", "Stages20001");
        stages20001.setOrigin(0.5, 0.9771210184747311);

        // stages90001
        const stages90001 = this.add.image(1059, 619.3791263247381, "forts-mj", "Stages90001");
        stages90001.setOrigin(0.5, 0.9488251400252026);

        // stages30002
        const stages30002 = this.add.image(659, 782.0127065763311, "forts-mj", "Stages30002");
        stages30002.setOrigin(0.5, 0.9962318147310893);

        // stages70001
        const stages70001 = this.add.image(806, 547.6841837902859, "forts-mj", "Stages70001");
        stages70001.setOrigin(0.5, 0.9434209189514298);

        // stages
        const stages = this.add.image(1268, 519.3520458729711, "forts-mj", "Stages90001");
        stages.setOrigin(0.5, 0.9167662014519739);

        // stages80001
        const stages80001 = this.add.image(1050, 460.65710333851894, "forts-mj", "Stages80001");
        stages80001.setOrigin(0.5, 0.8862481464416773);

        // stages1
        const stages1 = this.add.image(866, 281.10279173024287, "forts-mj", "Stages1");
        stages1.setOrigin(0.5, 0.00857124787359909);

        // speakers30001
        const speakers30001 = this.add.image(482, 680.6018391317763, "forts-mj", "Speakers30001");
        speakers30001.setOrigin(0.5, 0.900013724864002);

        // speakers10001
        const speakers10001 = this.add.image(426, 743.954834730207, "forts-mj", "Speakers10001");
        speakers10001.setOrigin(0.5, 0.8563275155958534);

        // speakers20001
        const speakers20001 = this.add.image(939, 753.1697671368012, "forts-mj", "Speakers20001");
        speakers20001.setOrigin(0.5, 0.8701436343647231);

        // sign2
        const sign2 = this.add.image(1302, 686.423511299569, "forts-mj", "Sign2");
        sign2.setOrigin(0.5, 0.36682662890581436);

        // sign10001
        const sign10001 = this.add.image(1228, 824.8992237893372, "forts-mj", "Sign10001");
        sign10001.setOrigin(0.5, 0.892052447613725);

        // drums50001
        const drums50001 = this.add.image(431, 829.0554905069572, "forts-mj", "Drums50001");
        drums50001.setOrigin(0.5, 0.8194438836806655);

        // drums30001
        const drums30001 = this.add.image(453, 841.8689273350457, "forts-mj", "Drums30001");
        drums30001.setOrigin(0.5, 0.8316529145518675);

        // drums40001
        const drums40001 = this.add.image(586, 812.2672477315346, "forts-mj", "Drums40001");
        drums40001.setOrigin(0.5, 0.7524745160327273);

        // drums20001
        const drums20001 = this.add.image(558, 848.4706069385567, "forts-mj", "Drums20001");
        drums20001.setOrigin(0.5, 0.8652329393814429);

        // drums10001
        const drums10001 = this.add.image(510, 845.84373328238, "forts-mj", "Drums10001");
        drums10001.setOrigin(0.5, 0.8659666662685934);

        // drums110001
        const drums110001 = this.add.image(1303, 572.3663067898041, "forts-mj", "Drums110001");
        drums110001.setOrigin(0.5, 0.8566060930155524);

        // drums70001
        const drums70001 = this.add.image(1326, 585.3313098432634, "forts-mj", "Drums70001");
        drums70001.setOrigin(0.5, 0.8504014082469666);

        // drums80001
        const drums80001 = this.add.image(1458, 560.4568343912606, "forts-mj", "Drums80001");
        drums80001.setOrigin(0.5, 0.8283040221413018);

        // drums60001
        const drums60001 = this.add.image(1433, 578.4671012454482, "forts-mj", "Drums60001");
        drums60001.setOrigin(0.5, 0.775628376797735);

        // drums90001
        const drums90001 = this.add.image(1384, 586.2757791883475, "forts-mj", "Drums90001");
        drums90001.setOrigin(0.5, 0.8693420249089652);

        // booth2
        this.add.image(195, 628, "forts-mj", "Booth2");

        // booth1
        const booth1 = this.add.image(179, 779.4348044898848, "forts-mj", "Booth1");
        booth1.setOrigin(0.5, 0.8677487991641099);

        // speakers40001
        const speakers40001 = this.add.image(1011, 621, "forts-mj", "Speakers40001");

        // lists
        const sort = [stages50002, stages80001, stages, stages70001, stages30002, stages90001, stages20001, stages40001, speakers30001, speakers20001, speakers10001, sign2, sign10001, drums50001, drums30001, drums40001, drums20001, drums10001, drums70001, drums110001, drums80001, drums60001, drums90001, booth1, speakers40001];

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
