import RoomScene from '@scenes/rooms/RoomScene'
import { Animation } from '@components/components'


/* START OF COMPILED CODE */

export default class Observatory extends RoomScene {

    constructor() {
        super("Observatory");

        /** @type {Phaser.GameObjects.Sprite} */
        this.shooting_star0001;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'bloon': () => this.triggerRoom(899, 784, 598), 
            'trigger_2': () => this.triggerRoom(230, 500, 800), 
            'trigger_3': () => null,
            'jetpack': () => this.interface.prompt.showItem(3028)
        }
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("observatory-pack", "assets/media/rooms/old/observatory/observatory-pack.json");
    }

    /** @returns {void} */
    _create() {

        // stars
        const stars = this.add.image(0, 0, "observatory", "stars");
        stars.setOrigin(0, 0);

        // shooting_star0001
        const shooting_star0001 = this.add.sprite(766, -119, "observatory", "shooting_star0001");

        // bg
        const bg = this.add.image(0, 0, "observatory", "bg");
        bg.setOrigin(0, 0);

        // blueboard
        const blueboard = this.add.image(1455, 604, "observatory", "blueboard");

        // table
        const table = this.add.image(1231, 763, "observatory", "table");

        // jetpack
        const jetpack = this.add.image(658, 502, "observatory", "jetpack");

        // lists
        const sort = [blueboard, jetpack, table];

        this.shooting_star0001 = shooting_star0001;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        this.shooting_star0001.play('shooting_stars')
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
