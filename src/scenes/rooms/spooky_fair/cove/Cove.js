import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, ShowHint, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Cove extends RoomScene {

    constructor() {
        super("Cove");

        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */ 

        this.roomTriggers =  {
            'forest': () => this.triggerRoom(809, 1190, 750),
            'fap': () => this.triggerGame('feed', 1004),
        }
        //this.roomAnims = true
        this.music = 251;
        this.roomAnims = true;

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("cove-pack", "assets/media/rooms/spooky_fair/cove/cove-pack.json");
        this.load.pack("cove-pack", "assets/media/rooms/old/cove/cove-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(760, 480, "cove-spooky", "bg");

        // cautiontapemid
        const cautiontapemid = this.add.image(928, 657, "cove-spooky", "cautiontapemid");
        cautiontapemid.setOrigin(0.47923192611842114, 0.7493505292680174);

        // fap
        const fap = this.add.image(294.6660991304181, 451.1139848259839, "cove-spooky", "fap");
        fap.setOrigin(0.7057889601678863, 0.633016620875223);

        // jolright_1
        const jolright_1 = this.add.image(133, 576, "cove-spooky", "jolright");
        jolright_1.scaleX = 1.4;
        jolright_1.scaleY = 1.4;
        jolright_1.setOrigin(0.575005610209575, 0.8525828271442899);
        jolright_1.flipX = true;

        // jolleft
        const jolleft = this.add.image(122, 620, "cove-spooky", "jolleft");
        jolleft.scaleX = 1.4;
        jolleft.scaleY = 1.4;
        jolleft.setOrigin(0.5501743517867228, 0.8164986106227291);

        // cautiontapeleft
        const cautiontapeleft = this.add.image(551.6391303750045, 794.2369563125158, "cove-spooky", "cautiontapeleft");
        cautiontapeleft.setOrigin(0.6074370579000041, 0.8483279170354321);

        // fg
        const fg = this.add.image(265.67617433858857, 924.0133185965385, "cove-spooky", "fg");
        fg.setOrigin(0.5161869472083169, 0.9232940361649447);

        // jolleft_1
        const jolleft_1 = this.add.image(207, 622, "cove-spooky", "jolleft");
        jolleft_1.setOrigin(0.577694770948728, 0.8148642586646313);

        // bigrockright0001
        this.add.image(1434, 689, "cove-spooky", "bigrockright0001");

        // hutinterior
        this.add.image(1315, 447, "cove-spooky", "hutinterior");

        // hutright
        this.add.image(1437, 465, "cove-spooky", "hutright");

        // bigcage
        const bigcage = this.add.image(1144.870899626359, 437.77582283463465, "cove-spooky", "bigcage");
        bigcage.setOrigin(0.9464094596938811, 1.0280930763967868);

        // shackleftwall
        const shackleftwall = this.add.image(1081.0627165402236, 466.88698158996147, "cove-spooky", "shackleftwall");
        shackleftwall.setOrigin(0.427886198873283, 0.7858225101399036);

        // antennae0001
        const antennae0001 = this.add.sprite(1024.6777695965204, 476.25565399429564, "cove-spooky", "antennae0001");
        antennae0001.setOrigin(0.2577769470878593, 3.38643696056793);

        // hutroof
        const hutroof = this.add.image(1287.4562154538696, 558.9633008446433, "cove-spooky", "hutroof");
        hutroof.setOrigin(0.4786897984730925, 1.8997961042974758);

        // jolright
        const jolright = this.add.image(1137.5553112895166, 500, "cove-spooky", "jolright");
        jolright.setOrigin(0.4233958734637526, 0.7984364925922104);

        // roofnbeams
        const roofnbeams = this.add.image(745.8670295853256, 390.08411628536896, "cove-spooky", "roofnbeams");
        roofnbeams.setOrigin(0.4762193847524139, 0.9934751634095885);

        // smolcage
        const smolcage = this.add.image(638, 400, "cove-spooky", "smolcage");
        smolcage.setOrigin(0.5, 0.8108141559748211);

        // orangethingy
        const orangethingy = this.add.image(906, 394.33242603668623, "cove-spooky", "orangethingy");
        orangethingy.setOrigin(0.5, 0.7210046308335459);

        // fire0001
        const fire0001 = this.add.sprite(429, 608.2659445011531, "cove", "fire0001");
        fire0001.setOrigin(0.5029239766081871, 0.7925785933579806);

        // net0001
        const net0001 = this.add.sprite(465, 103, "cove-spooky", "net0001");

        // pcdesk
        const pcdesk = this.add.image(789, 301, "cove-spooky", "pcdesk");

        // tapedcat
        const tapedcat = this.add.image(1038.925347628277, 540.7801082933771, "cove-spooky", "tapedcat");
        tapedcat.setOrigin(0.5785069525655399, 3.597553230477084);

        // chairfar
        const chairfar = this.add.image(698, 296, "cove-spooky", "chairfar");
        chairfar.setOrigin(0.28192513176238826, 0.04604823346456595);

        // chairnear
        const chairnear = this.add.image(737, 317, "cove-spooky", "chairnear");
        chairnear.setOrigin(0.36370320735149403, 0.017939764948439182);

        // binoculars
        const binoculars = this.add.image(595, 270, "cove-spooky", "binoculars");
        binoculars.angle = -30;

        // cautiontaperight
        const cautiontaperight = this.add.image(1328.6298038817763, 631.3701961182237, "cove-spooky", "cautiontaperight");
        cautiontaperight.setOrigin(0.4582598269510632, 0.7707201135182815);

        // lists
        const sort = [shackleftwall, bigcage, hutroof, roofnbeams, orangethingy, antennae0001, fire0001, pcdesk, jolright, smolcage, chairnear, chairfar, tapedcat, cautiontapemid, cautiontapeleft, cautiontaperight, fg];

        // fap (components)
        const fapButton = new Button(fap);
        fapButton.spriteName = "fap";
        const fapMoveTo = new MoveTo(fap);
        fapMoveTo.x = 320;
        fapMoveTo.y = 550;
        const fapShowHint = new ShowHint(fap);
        fapShowHint.text = "Feed-A-Puffle";

        // antennae0001 (components)
        const antennae0001Animation = new Animation(antennae0001);
        antennae0001Animation.key = "antennae";
        antennae0001Animation.end = 6;
        antennae0001Animation.frameRate = 5;

        // fire0001 (components)
        const fire0001Animation = new Animation(fire0001);
        fire0001Animation.key = "fire";
        fire0001Animation.end = 10;

        // net0001 (components)
        const net0001Animation = new Animation(net0001);
        net0001Animation.key = "net";
        net0001Animation.end = 150;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
