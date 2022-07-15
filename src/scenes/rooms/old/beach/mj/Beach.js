import RoomScene from '@scenes/rooms/RoomScene'

import { Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Beach extends RoomScene {

    constructor() {
        super("Beach");

        /** @type {Phaser.GameObjects.Sprite} */
        this.campfire0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.flame10001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.radio10001;
        /** @type {Array<any>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'village': () => this.triggerRoom(200, 450, 750),
            'dock': () => this.triggerRoom(800, 240, 420),
            'lighthouse': () => this.triggerRoom(410, 530, 530),
            'ship': null
        }
        this.roomAnims = true
        this.music = '583'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("beach-pack", "assets/media/rooms/old/beach/beach-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky11
        this.add.image(764, 320, "beachmj", "sky11");

        // lighthous123
        const lighthous123 = this.add.image(-46, -19, "lighthous123");
        lighthous123.setOrigin(0, 0);

        // lighthouse_door
        const lighthouse_door = this.add.image(383, 214, "beach", "lighthouse_door");
        lighthouse_door.setOrigin(0, 0);

        // campfire0001
        const campfire0001 = this.add.sprite(917, 740, "beachmj", "campfire0001");

        // flame10001
        const flame10001 = this.add.sprite(918, 661, "beachmj", "flame10001");

        // bench45
        this.add.image(798, 695, "bench45");

        // table1
        this.add.image(1022, 682, "beachmj", "table1");

        // balloons1
        this.add.image(175, 281, "beachmj", "balloons1");

        // board1
        this.add.image(496, 237, "beachmj", "board1");

        // radio10001
        const radio10001 = this.add.sprite(359, 399, "beachmj", "radio10001");

        // sign3
        this.add.image(263, 422, "beachmj", "sign3");

        // sign2
        this.add.image(269, 401, "beachmj", "sign2");

        // sign1
        this.add.image(603, 346, "beachmj", "sign1");

        // signs4
        this.add.image(832, 465, "beachmj", "signs4");

        // sign6
        this.add.image(974, 400, "beachmj", "sign6");

        // sign5
        this.add.image(735, 420, "beachmj", "sign5");

        // balloons2
        this.add.image(1307, 414, "beachmj", "balloons2");

        // lists
        const sort = [];

        // lighthouse_door (components)
        const lighthouse_doorButton = new Button(lighthouse_door);
        lighthouse_doorButton.spriteName = "lighthouse_door";
        lighthouse_doorButton.activeFrame = false;
        const lighthouse_doorMoveTo = new MoveTo(lighthouse_door);
        lighthouse_doorMoveTo.x = 480;
        lighthouse_doorMoveTo.y = 400;

        this.campfire0001 = campfire0001;
        this.flame10001 = flame10001;
        this.radio10001 = radio10001;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create();
        this.campfire0001.play("mjbeach_campfire");
        this.flame10001.play("mjbeach_flame");
        this.radio10001.play("mjbeach_radio");
    }

    onBucketOver() {
        let frame = this.bucket.frame.name
        frame = frame.substr(frame.length - 4)

        switch (frame) {
            case '0001':
            case '0346':
                this.bucket.play('bucket1')
                break
            case '0070':
                this.bucket.play('bucket2')
                break
            case '0137':
                this.bucket.play('bucket3')
                break
            case '0210':
                this.bucket.play('bucket4')
                break
            case '0269':
                this.bucket.play('bucket5')
                break
            default:
                break
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
