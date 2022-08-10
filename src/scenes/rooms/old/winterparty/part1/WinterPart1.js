import MoveTo from "@scenes/components/MoveTo";
import SimpleButton from "@scenes/components/SimpleButton";
import RoomScene from "@scenes/rooms/RoomScene";

/* START OF COMPILED CODE */

export default class WinterPart1 extends RoomScene {

    constructor() {
        super("WinterPart1");

        /** @type {Phaser.GameObjects.Image} */
        this.cave_glow;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'party11': () => this.triggerRoom(861, 234, 547),
            'trigger_1': () => this.triggerRoom(843, 476, 69),
            'trigger_2': () => this.triggerRoom(843, 769, 101),
            'trigger_3': () => this.triggerRoom(843, 1033, 41),
        }
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("winterparty-part1-pack", "assets/media/rooms/old/winterparty/part1/winterparty-part1-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(770, 482, "winterparty-part1", "bg");

        // cave_glow
        const cave_glow = this.add.image(781, 479, "winterparty-part1", "cave_glow0002");
        cave_glow.visible = false;

        // zone
        const zone = this.add.rectangle(784, 456, 135, 160);
        zone.scaleX = 1.8596476067378762;
        zone.scaleY = 1.1003240383378348;
        zone.alpha = 0.00001;
        zone.isFilled = true;
        zone.fillColor = 65280;

        // cave
        const cave = this.add.image(771, 396, "winterparty-part1", "cave");

        // left_flag
        this.add.image(591, 624, "winterparty-part1", "left_flag");

        // right_flag
        this.add.image(959, 619, "winterparty-part1", "right_flag");

        // fg
        this.add.image(769, 570, "winterparty-part1", "fg");

        // lists
        const sort = [cave];

        // zone (components)
        const zoneSimpleButton = new SimpleButton(zone);
        zoneSimpleButton.hoverCallback = () => this.cave_glow.visible = true;
        zoneSimpleButton.hoverOutCallback = () => this.cave_glow.visible = false;
        new MoveTo(zone);

        this.cave_glow = cave_glow;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    create() {

       super.create();
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
