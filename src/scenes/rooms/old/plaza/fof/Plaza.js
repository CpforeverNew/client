import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Plaza extends RoomScene {

    constructor() {
        super("Plaza");

        /** @type {Phaser.GameObjects.Sprite} */
        this.propplaza;
        /** @type {Phaser.GameObjects.Image} */
        this.greenhats;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.greenprop;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'forts': () => this.triggerRoom(801, 1284, 720),
            'pet': () => this.triggerRoom(310, 818, 520),
            'cave': () => { this.triggerRoom(806, 1180, 614); this.world.client.stampEarned(10); },
            'stage1': () => this.triggerRoom(340, 240, 660),
            'stage2': () => this.triggerRoom(340, 240, 660),
            'pizza': () => this.triggerRoom(330, 1200, 400),
            'forest': () => this.triggerRoom(809, 270, 430)
        }
        this.music = '277'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("plaza-pack", "assets/media/rooms/old/plaza/plaza-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-18, -2, "plaza", "bg");
        bg.setOrigin(0, 0);

        // red_carpet
        const red_carpet = this.add.image(649, 656, "plaza-red-carpet", "red_carpet");
        red_carpet.angle = -2;

        // right_pole_3
        const right_pole_3 = this.add.image(777, 547, "plaza-red-carpet", "right_pole_3");
        right_pole_3.angle = -5;

        // right_red_rope_2
        const right_red_rope_2 = this.add.image(789, 550, "plaza-red-carpet", "right_red_rope_2");
        right_red_rope_2.angle = -5;

        // right_pole_2
        const right_pole_2 = this.add.image(785, 613, "plaza-red-carpet", "right_pole_2");
        right_pole_2.angle = -5;

        // right_red_rope_1
        const right_red_rope_1 = this.add.image(787, 624, "plaza-red-carpet", "right_red_rope_1");
        right_red_rope_1.angle = -5;

        // right_pole_1
        const right_pole_1 = this.add.image(793, 696, "plaza-red-carpet", "right_pole_1");
        right_pole_1.angle = -5;

        // star_3
        const star_3 = this.add.image(802, 489, "plaza-red-carpet", "star_3");
        star_3.scaleX = 0.8;
        star_3.scaleY = 0.8;

        // star_2
        const star_2 = this.add.image(645, 500, "plaza-red-carpet", "star_2");
        star_2.scaleX = 0.9;
        star_2.scaleY = 0.9;
        star_2.angle = -10;

        // image
        this.add.image(765, 225, "plazasky");

        // camera_left
        this.add.image(427, 760, "plaza-red-carpet", "camera_left");

        // camera_right
        this.add.image(786, 802, "plaza-red-carpet", "camera_right");

        // video_cam_1
        this.add.image(877, 716, "plaza-red-carpet", "video_cam_1");

        // video_cam_2
        this.add.image(887, 576, "plaza-red-carpet", "video_cam_2");

        // strings
        this.add.image(782, 137, "fof-plaza", "strings");

        // propplaza
        const propplaza = this.add.sprite(50, 445, "fof-plaza", "propplaza0001");
        propplaza.scaleX = 0.28;
        propplaza.scaleY = 0.28;

        // propholder
        const propholder = this.add.image(50, 516, "fof-plaza", "propholder");
        propholder.scaleX = 0.28;
        propholder.scaleY = 0.28;

        // pet_door
        const pet_door = this.add.image(333, 489, "plaza", "pet_door");
        pet_door.setOrigin(0.473118, 0.678218);

        // cave_door
        const cave_door = this.add.image(562, 510, "plaza", "cave_door");
        cave_door.setOrigin(0.473684, 0.781513);

        // left_pole_3
        this.add.image(594, 542, "plaza-red-carpet", "left_pole_3");

        // left_red_rope_2
        this.add.image(562, 547, "plaza-red-carpet", "left_red_rope_2");

        // left_pole_2
        this.add.image(546, 604, "plaza-red-carpet", "left_pole_2");

        // left_red_rope_1
        this.add.image(520, 619, "plaza-red-carpet", "left_red_rope_1");

        // left_pole_1
        this.add.image(502, 688, "plaza-red-carpet", "left_pole_1");

        // pizza_door
        const pizza_door = this.add.image(1194, 410, "plaza", "pizza_door");
        pizza_door.setOrigin(0.5311, 0.442211);

        // stage_lights_back
        const stage_lights_back = this.add.sprite(851, 174, "plaza", "stage_lights_back0001");
        stage_lights_back.setOrigin(0.5011764705882353, 0.5);

        // stage_screen
        this.add.image(847, 221, "plaza", "stage_screen");

        // stage_lights_front
        this.add.sprite(853, 166, "plaza", "stage_lights_front0001");

        // lights
        const lights = this.add.image(130, 834.1071262380094, "fof-plaza", "lights");
        lights.setOrigin(0.5, 0.8693135544022872);

        // lamp
        const lamp = this.add.image(129, 827, "plaza", "lamp");
        lamp.setOrigin(0.5099009900990099, 0.9323076923076923);

        // stage_door_1
        const stage_door_1 = this.add.image(733, 385, "plaza", "stage_door_1");
        stage_door_1.setOrigin(0.5045871559633027, 0.4567901234567901);

        // stage_door_2
        const stage_door_2 = this.add.image(958, 385, "plaza", "stage_door_2");
        stage_door_2.setOrigin(0.5045871559633027, 0.4567901234567901);

        // tickets
        const tickets = this.add.image(846, 457, "plaza", "tickets");
        tickets.setOrigin(0.49612403100775193, 0.9247311827956989);

        // text
        const text = this.add.image(851, 248, "plaza", "text");
        text.setOrigin(0.5, 0.49333333333333335);

        // text_1
        const text_1 = this.add.text(768, 212, "", {});
        text_1.text = "PENGUIN THEATRE\nGRAND OPENING";
        text_1.setStyle({ "align": "center", "color": "#352b2bff", "fontFamily": "Burbank Small", "fontSize": "20px" });
        text_1.setLineSpacing(-3);

        // balloon
        const balloon = this.add.image(64.93834387525126, 903.7989802521776, "fof-plaza", "balloon");
        balloon.setOrigin(0.5887792603519189, 0.8716891700067002);

        // cloudsonwall
        this.add.image(843, 291, "fof-plaza", "cloudsonwall");

        // greenhats
        const greenhats = this.add.image(1204, 795, "fof-plaza", "greenhats");

        // rightlights
        const rightlights = this.add.image(1412, 864, "fof-plaza", "rightlights");
        rightlights.setOrigin(0.6198936472431653, 0.8225204710841232);

        // greenprop
        const greenprop = this.add.ellipse(1200, 802, 128, 128);
        greenprop.scaleX = 1.4804944119135839;
        greenprop.scaleY = 1.8655415710751233;
        greenprop.angle = 53;
        greenprop.isFilled = true;
        greenprop.fillAlpha = 0;

        // lists
        const sort = [lamp, tickets, balloon, lights];

        this.propplaza = propplaza;
        this.greenhats = greenhats;
        this.greenprop = greenprop;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create()
        this.propplaza.play('propplaza')
        this.roomZones = {
            'greenprop': { 
                key: this.greenprop,
                callback: () => this.interface.prompt.showItem(1075)
            }
        }

        super.addZones()
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
