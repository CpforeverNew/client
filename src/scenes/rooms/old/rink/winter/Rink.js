import RoomScene from "@scenes/rooms/RoomScene";

/* START OF COMPILED CODE */

export default class Rink extends RoomScene {

    constructor() {
        super("Rink");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'forts': () => this.triggerRoom(801, 560, 400)
        }
        this.music = '592'
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("rink-winter-pack", "assets/media/rooms/old/rink/winter/rink-winter-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(763, 386, "rink-winter", "bg");

        // fg
        this.add.image(773, 509, "rink-winter", "fg");

        // door0001
        this.add.image(781, 271, "rink-winter", "door0001");

        // left_glass
        const left_glass = this.add.image(479, 245, "rink-winter", "left_glass");

        // puck
        const puck = this.add.image(802, 481, "rink-winter", "puck");

        // goal_left_back
        const goal_left_back = this.add.image(310, 426, "rink-winter", "goal_left_back");

        // goal_left
        const goal_left = this.add.image(272, 465, "rink-winter", "goal_left");

        // goal_right_back
        const goal_right_back = this.add.image(1254, 433, "rink-winter", "goal_right_back");

        // goal_right
        const goal_right = this.add.image(1291, 467, "rink-winter", "goal_right");

        // lists
        const sort = [goal_left, goal_left_back, left_glass, goal_right, goal_right_back, puck];

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create()
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
