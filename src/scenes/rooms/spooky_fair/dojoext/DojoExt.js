import RoomScene from '@scenes/rooms/RoomScene'

import { Button, MoveTo } from '@components/components'


/* START OF COMPILED CODE */

export default class DojoExt extends RoomScene {

    constructor() {
        super("DojoExt");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'map': () => this.interface.main.map.visible = true,
            'dojo': () => this.triggerRoom(320, 384, 616)
        }
        this.music = 'dojo'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("dojoext-pack", "assets/media/rooms/spooky_fair/dojoext/dojoext-pack.json");
        this.load.pack("sky-pack", "assets/media/rooms/spooky_fair/sky/sky-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky0001
        this.add.image(951, 28, "sky_spooky", "sky0001");

        // dojo
        this.add.image(760, 484, "dojoext_halloween", "dojo");

        // dojo_door
        const dojo_door = this.add.sprite(682, 425, "dojoext_halloween", "door");
        dojo_door.setOrigin(0, 0);

        // door_top
        const door_top = this.add.image(689, 430, "dojoext_halloween", "woodblock");
        door_top.setOrigin(0, 0);

        // front
        const front = this.add.image(646.8618380517114, 818.7671749385655, "dojoext_halloween", "front");
        front.setOrigin(0.4271830039317995, 0.6442923649678788);

        // pumpkin
        const pumpkin = this.add.image(535.0838531467068, 630.7935134874159, "dojoext_halloween", "pumpkin");
        pumpkin.setOrigin(0.4727462910907179, 0.41423097490314165);

        // lists
        const sort = [pumpkin, front];

        // dojo_door (components)
        const dojo_doorButton = new Button(dojo_door);
        dojo_doorButton.spriteName = "door";
        dojo_doorButton.activeFrame = false;
        const dojo_doorMoveTo = new MoveTo(dojo_door);
        dojo_doorMoveTo.x = 780;
        dojo_doorMoveTo.y = 610;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
