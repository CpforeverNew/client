import RoomScene from '@scenes/rooms/RoomScene'

import { Button, MoveTo, SimpleButton, ShowHint, Animation } from '@components/components'


/* START OF COMPILED CODE */

export default class Beacon extends RoomScene {

    constructor() {
        super("Beacon");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'lighthouse': () => this.triggerRoom(410, 1320, 700),
            'jetpack': () => this.triggerGame("JetpackAdventure", 926),
        }
        this.music = '583'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("sky-pack", "assets/media/rooms/spooky_fair/sky/sky-pack.json");
        this.load.pack("beacon-pack", "assets/media/rooms/spooky_fair/beacon/beacon-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky0001
        const sky0001 = this.add.sprite(888, 113, "sky_spooky", "sky0001");
        sky0001.scaleX = 1.2292763795703783;
        sky0001.scaleY = 1.2292763795703783;

        // ocean
        this.add.image(790, 725, "beacon_halloween", "ocean");

        // fg
        const fg = this.add.image(387.0507698475818, 544.1375560771464, "beacon_halloween", "fg");
        fg.setOrigin(0.25853085762836747, 0.3651263112106916);

        // topbarrier
        this.add.image(635, 492, "beacon_halloween", "topbarrier");

        // box
        const box = this.add.image(367.8205563766963, 406.93765113429373, "beacon_halloween", "box");
        box.setOrigin(0.752257441868124, 0.16954937305686837);

        // pumpkin
        const pumpkin = this.add.image(693.8760814677714, 542.5243092274156, "beacon_halloween", "pumpkin");
        pumpkin.setOrigin(0.4721686742026109, 0.7717280630848816);

        // telescope_1
        const telescope_1 = this.add.image(297, 285, "beacon_halloween", "telescope");

        // jetpack_1
        const jetpack_1 = this.add.image(1322.3420043493293, 703.542903664104, "beacon_halloween", "jetpack");
        jetpack_1.setOrigin(0.49564846063936474, 0.6792766571936238);

        // landing
        const landing = this.add.sprite(1321.17621023904, 564.1174239103713, "beacon_halloween", "landing");
        landing.setOrigin(0.4805872411541319, 0.4810607230772021);

        // stairtop
        const stairtop = this.add.image(233, 582, "beacon_halloween", "stairtop");
        stairtop.setOrigin(0.5738520627114743, 0.3782284025337291);

        // bottom
        const bottom = this.add.image(681.6883712955367, 1000.9119738297734, "beacon_halloween", "bottom");
        bottom.setOrigin(0.49317792686249307, 0.9231052230129088);

        // lists
        const sort = [pumpkin, box, bottom, stairtop];

        // sky0001 (components)
        const sky0001Animation = new Animation(sky0001);
        sky0001Animation.key = "sky";
        sky0001Animation.end = 282;

        // telescope_1 (components)
        const telescope_1MoveTo = new MoveTo(telescope_1);
        telescope_1MoveTo.x = 335;
        telescope_1MoveTo.y = 413;
        const telescope_1SimpleButton = new SimpleButton(telescope_1);
        telescope_1SimpleButton.callback = () => this.interface.loadExternal("TelescopeSpooky");;

        // landing (components)
        const landingButton = new Button(landing);
        landingButton.spriteName = "landing";
        landingButton.activeFrame = false;
        const landingShowHint = new ShowHint(landing);
        landingShowHint.text = "Jetpack Adventure";
        const landingMoveTo = new MoveTo(landing);
        landingMoveTo.x = 1331;
        landingMoveTo.y = 579;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
