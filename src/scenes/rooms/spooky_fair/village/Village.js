import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton, ShowHint } from '@components/components'


/* START OF COMPILED CODE */

export default class Village extends RoomScene {

    constructor() {
        super("Village");

        /** @type {Phaser.GameObjects.Sprite} */
        this.ghost0001;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Container|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'lodge': () => this.triggerRoom(220, 320, 640),
            'dock': () => this.triggerRoom(800, 436, 280),
            'beach': () => this.triggerRoom(400, 920, 360),
            'mtn': () => this.triggerRoom(230, 840, 320)
        }

        this.roomAnims = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("village-pack", "assets/media/rooms/spooky_fair/village/village-pack.json");
        this.load.pack("sky-pack", "assets/media/rooms/spooky_fair/sky/sky-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky0001
        this.add.image(1032, 37, "sky_spooky", "sky0001");

        // bg
        this.add.image(729, 478, "village_halloween", "bg");

        // trees_shadow
        const trees_shadow = this.add.image(754, 175, "village_halloween", "trees shadow");

        // fish_room
        this.add.image(1093, 429, "village_halloween", "fish room");

        // fence
        const fence = this.add.image(225, 346, "village_halloween", "fence");

        // bottom_costume
        const bottom_costume = this.add.image(654.6333640881813, 337.42591498196043, "village_halloween", "bottom costume");
        bottom_costume.setOrigin(0.6668813901726748, 0.5382650441086291);

        // costume_top0001
        const costume_top0001 = this.add.image(647.1341416427867, 451.54393455916886, "village_halloween", "costume top0001");
        costume_top0001.setOrigin(0.4872307517953811, 0.914769140890163);

        // snowfront
        this.add.image(1105, 416, "village_halloween", "snowfront");

        // container_2
        const container_2 = this.add.container(1217, 353);

        // container_1
        const container_1 = this.add.container(0, 0);
        container_2.add(container_1);

        // epf
        const epf = this.add.image(64.72601361572356, 169.0290214382892, "village_halloween", "epf");
        epf.setOrigin(0.5940567143554701, 0.7519160669652747);
        container_1.add(epf);

        // tree
        const tree = this.add.image(-1179.5434565435273, 288.46229179765703, "village_halloween", "tree");
        tree.setOrigin(0.375436793492366, 0.6156712774561973);
        container_1.add(tree);

        // eyes0001
        const eyes0001 = this.add.sprite(1134, 293, "village_halloween", "eyes0001");

        // leftleaves
        this.add.image(526, 711, "village_halloween", "leftleaves");

        // rightleaves
        this.add.image(991, 662, "village_halloween", "rightleaves");

        // plank
        this.add.image(640, 553, "village_halloween", "plank");

        // door
        const door = this.add.image(1036, 298, "village_halloween", "door");

        // wood
        this.add.image(1087, 692, "village_halloween", "wood");

        // tours0001
        const tours0001 = this.add.image(261.4244760345749, 731.176403319818, "village_halloween", "tours0001");
        tours0001.setOrigin(0.5252301210910462, 0.6736207727329341);

        // ghost0001
        const ghost0001 = this.add.sprite(541.6251187717811, 498.21392594748824, "village_halloween", "ghost0001");
        ghost0001.setOrigin(0.8719637230388408, 0.7622248916553525);

        // lists
        const sort = [trees_shadow, fence, bottom_costume, costume_top0001, container_2, tours0001, ghost0001];

        // sky0001 (components)
        const sky0001Animation = new Animation(sky0001);
        sky0001Animation.key = "sky";
        sky0001Animation.end = 282;

        // eyes0001 (components)
        const eyes0001Animation = new Animation(eyes0001);
        eyes0001Animation.key = "eyes";
        eyes0001Animation.end = 127;

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 1040;
        doorMoveTo.y = 321;

        // tours0001 (components)
        const tours0001SimpleButton = new SimpleButton(tours0001);
        tours0001SimpleButton.callback = () => this.interface.prompt.showItem(428);

        this.ghost0001 = ghost0001;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    onGhostOver() {
        this.ghost0001.play('ghost')
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
