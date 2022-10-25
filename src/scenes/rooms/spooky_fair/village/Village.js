import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton, ShowHint } from '@components/components'


/* START OF COMPILED CODE */

export default class Village extends RoomScene {

    constructor() {
        super("Village");

        /** @type {Phaser.GameObjects.Sprite} */
        this.ghost0001;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'lodge': () => this.triggerRoom(220, 320, 640),
            'dock': () => this.triggerRoom(800, 436, 280),
            'beach': () => this.triggerRoom(400, 920, 360),
            'mtn': () => this.triggerRoom(230, 840, 320)
        }
        this.music = '251'

        this.roomAnims = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("village-pack", "assets/media/rooms/spooky_fair/village/village-pack.json");
        this.load.pack("sky-pack", "assets/media/rooms/spooky_fair/sky/sky-pack.json");
        this.load.audio('thunder', `assets/media/music/sf_thunder.mp3`);
    }

    /** @returns {void} */
    _create() {
        const thunder = this.sound.add('thunder');
        this.loopAudio(thunder, 5000);
        // sky0001
        const sky0001 = this.add.sprite(1032, 37, "sky_spooky", "sky0001");

        // bg
        this.add.image(729, 478, "village_halloween", "bg");

        // trees_shadow
        const trees_shadow = this.add.image(801, 49, "village_halloween", "trees shadow");
        trees_shadow.setOrigin(0.49822930060553045, 0.2469256450122031);

        // snowfront
        this.add.image(1137, 415, "village_halloween", "snowfront");

        // fish_room
        this.add.image(1129, 429, "village_halloween", "fish room");

        // epf
        const epf = this.add.image(1267, 415, "village_halloween", "epf");
        epf.setOrigin(0.5298318890781366, 0.6206973924121636);

        // fence
        const fence = this.add.image(225, 346, "village_halloween", "fence");

        // bottom_costume
        const bottom_costume = this.add.image(704, 337, "village_halloween", "bottom costume");
        bottom_costume.setOrigin(0.6668813901726748, 0.5382650441086291);

        // costume_top0001
        const costume_top0001 = this.add.image(697, 456, "village_halloween", "costume top0001");
        costume_top0001.setOrigin(0.4872307517953811, 0.914769140890163);

        // eyes0001
        const eyes0001 = this.add.sprite(1170, 293, "village_halloween", "eyes0001");

        // leftleaves
        this.add.image(526, 711, "village_halloween", "leftleaves");

        // rightleaves
        this.add.image(991, 662, "village_halloween", "rightleaves");

        // plank
        this.add.image(640, 553, "village_halloween", "plank");

        // door
        const door = this.add.image(1072, 298, "village_halloween", "door");

        // tree
        const tree = this.add.image(413.1243172723871, 694.4275099134696, "village_halloween", "tree");
        tree.setOrigin(0.8723524044415973, 0.6300487663719795);

        // wood
        this.add.image(1087, 692, "village_halloween", "wood");

        // tours0001
        const tours0001 = this.add.image(261.4244760345749, 731.176403319818, "village_halloween", "tours0001");
        tours0001.setOrigin(0.5252301210910462, 0.6736207727329341);

        // ghost0001
        const ghost0001 = this.add.sprite(541.6251187717811, 498.21392594748824, "village_halloween", "ghost0001");
        ghost0001.setOrigin(0.8719637230388408, 0.7622248916553525);

        // lists
        const sort = [fence, bottom_costume, costume_top0001, tours0001, ghost0001, tree];

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
        doorMoveTo.x = 1076;
        doorMoveTo.y = 325;

        // tours0001 (components)
        const tours0001SimpleButton = new SimpleButton(tours0001);
        tours0001SimpleButton.callback = () => this.interface.prompt.showItem(428);
        tours0001SimpleButton.pixelPerfect = true;

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
