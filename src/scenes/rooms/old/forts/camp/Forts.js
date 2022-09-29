
import { Animation, Button } from '@components/components'
import RoomScene from '@scenes/rooms/RoomScene';


/* START OF COMPILED CODE */

export default class Forts extends RoomScene {

    constructor() {
        super("Forts");

        /** @type {Phaser.GameObjects.Text} */
        this.am_pm;
        /** @type {Phaser.GameObjects.Text} */
        this.clockTime;
        /** @type {Phaser.GameObjects.Text} */
        this.day;
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

        this.load.pack("forts-camp-pack", "assets/media/rooms/old/forts/camp/forts-camp-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_png
        this.add.image(760, 480, "forts", "bg.png");

        // plant3_png
        this.add.image(1008, 222, "forts", "plant3.png");

        // plant5_png
        this.add.image(1338, 250, "forts", "plant5.png");

        // clocktower_png
        this.add.image(1187, 179, "forts", "clocktower.png");

        // leftfence_png
        this.add.image(590, 430, "forts", "leftfence.png");

        // bluepole_png
        this.add.image(997, 366, "forts", "bluepole.png");

        // plant2_png
        this.add.image(913, 351, "forts", "plant2.png");

        // bluefort_png
        this.add.image(1028, 418, "forts", "bluefort.png");

        // leftfortleft_png
        this.add.image(603, 627, "forts", "leftfortleft.png");

        // orangepole_png
        this.add.image(664, 566, "forts", "orangepole.png");

        // leftfortright_png
        this.add.image(708, 674, "forts", "leftfortright.png");

        // middlefence_png
        this.add.image(1001, 655, "forts", "middlefence.png");

        // clockinfo_png
        this.add.image(1417, 327, "forts", "clockinfo.png");

        // rightbush_png
        this.add.image(1349, 748, "forts", "rightbush.png");

        // clockdisplay_png
        this.add.image(1134, 170, "forts", "clockdisplay.png");

        // plant1_png
        this.add.image(748, 323, "forts", "plant1.png");

        // plant4_png
        this.add.image(1240, 290, "forts", "plant4.png");

        // rightmostfence_png
        this.add.image(1376, 432, "forts", "rightmostfence.png");

        // rightsign_png
        this.add.image(1300, 695, "forts", "rightsign.png");

        // directions_png
        this.add.image(404, 371, "forts", "directions.png");

        // leftbush_png
        this.add.image(236, 830, "forts", "leftbush.png");

        // orangeflag0001_png
        const orangeflag0001_png = this.add.sprite(628, 456, "forts", "orangeflag0001.png");

        // blueflag10001_png
        const blueflag10001_png = this.add.sprite(969, 257, "forts", "blueflag10001.png");

        // am_pm
        const am_pm = this.add.text(1187, 135, "", {});
        am_pm.angle = 1;
        am_pm.setOrigin(0.5, 0.5);
        am_pm.text = "AM";
        am_pm.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });

        // clockTime
        const clockTime = this.add.text(1112, 149, "", {});
        clockTime.scaleY = 1.5;
        clockTime.angle = 1;
        clockTime.setOrigin(0.5, 0.5);
        clockTime.text = "12:58";
        clockTime.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "45px" });

        // day
        const day = this.add.text(1125, 216, "", {});
        day.angle = 2.5;
        day.setOrigin(0.5, 0.5);
        day.text = "WEDNESDAY";
        day.setStyle({ "color": "#0d0d0dff", "fontFamily": "Burbank Small", "fontSize": "18px", "fontStyle": "bold" });

        // lists
        const sort = [];

        // orangeflag0001_png (components)
        const orangeflag0001_pngAnimation = new Animation(orangeflag0001_png);
        orangeflag0001_pngAnimation.key = "orangeflag";
        orangeflag0001_pngAnimation.end = 16;
        orangeflag0001_pngAnimation.onHover = true;

        // blueflag10001_png (components)
        const blueflag10001_pngAnimation = new Animation(blueflag10001_png);
        blueflag10001_pngAnimation.key = "blueflag1";
        blueflag10001_pngAnimation.end = 16;

        this.am_pm = am_pm;
        this.clockTime = clockTime;
        this.day = day;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        // this.bounds = this.hitbox.getBounds()
        // this.tower.on('animationcomplete', () => this.onTowerAnimComplete())

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

    onSnowballComplete(x, y) {
        if (this.bounds.contains(x, y)) {
            this.tower.__Animation.play()
        }
    }

    onTowerAnimComplete() {
        this.tower.setFrame('tower0001')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
