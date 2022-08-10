import RoomScene from '@scenes/rooms/RoomScene'
import { Animation, Button, MoveTo, SimpleButton, Zone } from '@components/components'

/* START OF COMPILED CODE */

export default class Village extends RoomScene {

    constructor() {
        super("Village");

        /** @type {Phaser.GameObjects.Sprite} */
        this.smoke;
        /** @type {Phaser.GameObjects.Sprite} */
        this.snow_man;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'lodge': () => this.triggerRoom(220, 320, 640),
            'dock': () => this.triggerRoom(800, 436, 280),
            'beach': () => this.triggerRoom(400, 920, 360),
            'mtn': () => this.triggerRoom(230, 840, 320),
            'snow_maze_1': () => this.triggerRoom(849, 767, 658),
            'phone': null
        }
        this.music='280'
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("village-winter-pack", "assets/media/rooms/old/village/winter/village-winter-pack.json");
        this.load.pack("village-pack", "assets/media/rooms/old/village/village-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(703, 492, "village-winter", "bg");

        // lift
        this.add.image(343, 182, "village", "lift");

        // chair
        const chair = this.add.sprite(287, 131, "village", "chair0001");

        // maze_map_box0001
        this.add.image(399, 319, "village-winter", "maze_map_box0001");

        // zone_1
        const zone_1 = this.add.rectangle(423, 317, 135, 160);
        zone_1.scaleX = 1.8757759515503634;
        zone_1.scaleY = 1.9736394342343848;
        zone_1.alpha = 0.5;
        zone_1.isFilled = true;
        zone_1.fillColor = 65280;

        // button0001
        this.add.image(502, 442, "village-winter", "button0001");

        // stairs
        this.add.image(981, 430, "village-winter", "stairs");

        // door0001
        this.add.image(1110, 293, "village-winter", "door0001");

        // lodge_front
        const lodge_front = this.add.image(1095, 372, "village-winter", "lodge_front");

        // lodge_snow
        this.add.image(1131, 419, "village-winter", "lodge_snow");

        // top_of_mnt0001
        this.add.image(177, 328, "village-winter", "top_of_mnt0001");

        // left_ballons
        this.add.image(86, 516, "village-winter", "left_ballons");

        // snow_maze_sign
        this.add.image(754, 287, "village-winter", "snow_maze_sign");

        // tours_booth0001
        const tours_booth0001 = this.add.image(214, 626, "village-winter", "tours_booth0001");

        // tree_stump
        const tree_stump = this.add.image(810, 775, "village-winter", "tree_stump");

        // right_tree_stump
        this.add.image(1115, 642, "village-winter", "right_tree_stump");

        // snow_drinks
        const snow_drinks = this.add.image(974, 679, "village-winter", "snow_drinks");

        // phone
        this.add.image(1378, 276, "village", "phone");

        // phone_snow
        const phone_snow = this.add.image(1372, 555, "village", "phone_snow");
        phone_snow.setOrigin(0.509090909090909, 0.5272727272727272);

        // red_dougnut
        this.add.image(1481, 511, "village-winter", "red_dougnut");

        // phone_door
        const phone_door = this.add.image(1358, 347, "village", "phone_door");
        phone_door.setOrigin(0.22797927461139897, 0.6206896551724138);

        // right_ballons
        this.add.image(1472, 460, "village-winter", "right_ballons");

        // smoke
        const smoke = this.add.sprite(1116, 31, "village-winter", "smoke0001");

        // bottom_tree_stump
        this.add.image(1094, 816, "village-winter", "bottom_tree_stump");

        // snow_man
        const snow_man = this.add.sprite(1351, 466, "village-winter", "snow_man0001");

        // zone
        const zone = this.add.rectangle(1359, 519, 135, 160);
        zone.scaleX = 1.1722589486945634;
        zone.scaleY = 1.6065297728351975;
        zone.alpha = 0.5;
        zone.isFilled = true;
        zone.fillColor = 65280;

        // lists
        const sort = [tours_booth0001, tree_stump, snow_drinks, lodge_front];

        // chair (components)
        const chairAnimation = new Animation(chair);
        chairAnimation.key = "chair";
        chairAnimation.end = 179;
        chairAnimation.repeatDelay = 1500;

        // zone_1 (components)
        const zone_1Zone = new Zone(zone_1);
        zone_1Zone.hoverCallback = () => this.onSnowmanOver();

        // tours_booth0001 (components)
        const tours_booth0001SimpleButton = new SimpleButton(tours_booth0001);
        tours_booth0001SimpleButton.callback = () => this.interface.prompt.showItem(428);

        // smoke (components)
        const smokeAnimation = new Animation(smoke);
        smokeAnimation.key = "smoke";
        smokeAnimation.end = 5;

        // zone (components)
        const zoneZone = new Zone(zone);
        zoneZone.hoverCallback = () => this.onSnowmanOver();

        this.smoke = smoke;
        this.snow_man = snow_man;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    create() {

        super.create();
        this.smoke.play("smoke");
    }

    onSnowmanOver(){
        this.snow_man.play("snow_man");
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
