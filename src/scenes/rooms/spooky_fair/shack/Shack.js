import RoomScene from '@scenes/rooms/RoomScene'
import { Animation } from '@components/components'

// You can write more code here

/* START OF COMPILED CODE */

export default class Shack extends RoomScene {

    constructor() {
        super("Shack");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'forest': () => this.triggerRoom(809, 1234, 410),
            'mine': () => this.triggerRoom(808, 1200, 400)
        }
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("sky-pack", "assets/media/rooms/spooky_fair/sky/sky-pack.json");
        this.load.pack("shack-pack", "assets/media/rooms/spooky_fair/shack/shack-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky0001
        const sky0001 = this.add.sprite(596, 40, "sky_spooky", "sky0001");
        sky0001.flipX = true;

        // bg
        const bg = this.add.image(760, 501, "shack_halloween", "bg");
        bg.scaleX = 1.02;

        // shack
        const shack = this.add.image(761.5786196953577, 428.8066026074407, "shack_halloween", "shack");
        shack.setOrigin(0.3145399337839007, 0.7780110202362959);

        // track
        const track = this.add.image(507.15943334815415, 491.7294290058801, "shack_halloween", "track");
        track.setOrigin(0.12111235656284401, 0.07400820833820383);

        // carts
        const carts = this.add.image(596.5179452510395, 561.2993868579348, "shack_halloween", "carts");
        carts.setOrigin(0.5585192435109934, 0.5677591240653604);

        // right_ash
        const right_ash = this.add.image(774, 593, "shack_halloween", "right ash");

        // barrel
        const barrel = this.add.image(727, 571, "shack_halloween", "barrel");

        // left_ash
        const left_ash = this.add.image(690, 609, "shack_halloween", "left ash");

        // right_tree
        const right_tree = this.add.image(1449.1009569966384, 746.6323483102981, "shack_halloween", "right tree");
        right_tree.setOrigin(0.7163461412649262, 0.6274117572964768);

        // topleft_tree
        const topleft_tree = this.add.image(140, 242, "shack_halloween", "topleft tree");

        // bottom_left_tree
        const bottom_left_tree = this.add.image(138, 580, "shack_halloween", "bottom left tree");

        // pumpkin
        const pumpkin = this.add.image(1067.112419624942, 537.1248657516484, "shack_halloween", "pumpkin");
        pumpkin.setOrigin(0.661498765958707, 0.7549980515137471);

        // download__4_
        const download__4_ = this.add.image(184, 674, "shack_halloween", "download (4)");
        download__4_.scaleX = 0.2;
        download__4_.scaleY = 0.2;

        // lists
        const sort = [pumpkin, bottom_left_tree, topleft_tree, right_tree, left_ash, barrel, right_ash, carts, shack, download__4_, track];

        // sky0001 (components)
        const sky0001Animation = new Animation(sky0001);
        sky0001Animation.key = "sky";
        sky0001Animation.end = 282;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
