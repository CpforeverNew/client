import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Zone, MoveTo, SimpleButton, ShowHint } from '@components/components'

import MtnSeat from './MtnSeat'


/* START OF COMPILED CODE */

export default class Mtn extends RoomScene {

    constructor() {
        super("Mtn");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;
        /** @type {MtnSeat[]} */
        this.seats100;
        /** @type {MtnSeat[]} */
        this.seats101;
        /** @type {MtnSeat[]} */
        this.seats102;
        /** @type {MtnSeat[]} */
        this.seats103;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'village': () => this.triggerRoom(200, 480, 560),
            'waddle100': () => this.triggerWaddle(100),
            'waddle101': () => this.triggerWaddle(101),
            'waddle102': () => this.triggerWaddle(102),
            'waddle103': () => this.triggerWaddle(103),
        }
        this.music = 'mountain'

        this.waddles = {}
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("mtn-pack", "assets/media/rooms/spooky_fair/mtn/mtn-pack.json");
        this.load.pack("sky-pack", "assets/media/rooms/spooky_fair/sky/sky-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky0001
        const sky0001 = this.add.sprite(932, -25, "sky_spooky", "sky0001");
        sky0001.scaleX = 1.185732906855572;
        sky0001.scaleY = 1.185732906855572;

        // mtnSeat11
        const mtnSeat11 = new MtnSeat(this, 1155, 638);
        this.add.existing(mtnSeat11);
        mtnSeat11.visible = false;

        // zone4
        const zone4 = this.add.rectangle(1114.2467531119082, 679.3181820541607, 180, 90);
        zone4.angle = -33;
        zone4.setOrigin(0.37304929821917765, 0.6307965099001169);
        zone4.alpha = 0.5;
        zone4.isFilled = true;
        zone4.fillColor = 65280;

        // zone3
        const zone3 = this.add.rectangle(906.9707793050574, 764.1590910270803, 180, 90);
        zone3.setOrigin(0.5442821072503187, 0.6239899003008923);
        zone3.alpha = 0.5;
        zone3.isFilled = true;
        zone3.fillColor = 65280;

        // zone2
        const zone2 = this.add.rectangle(634.0020624197113, 716.0144369379791, 200, 90);
        zone2.angle = 11;
        zone2.setOrigin(0.5116103472215081, 0.5743817728038835);
        zone2.alpha = 0.5;
        zone2.isFilled = true;
        zone2.fillColor = 65280;

        // zone1
        const zone1 = this.add.rectangle(324.9814382225983, 581.0268114562468, 230, 90);
        zone1.angle = 33;
        zone1.setOrigin(0.49796220887788906, 0.675967380375613);
        zone1.alpha = 0.5;
        zone1.isFilled = true;
        zone1.fillColor = 65280;

        // ocean
        const ocean = this.add.image(749, 598, "mtn_halloween", "ocean");
        ocean.scaleX = 1.0240811995855759;
        ocean.scaleY = 1.0240811995855759;

        // mountain_1
        const mountain_1 = this.add.image(765, 589, "mtn_halloween", "mountain");
        mountain_1.scaleX = 1.0171740286255455;
        mountain_1.scaleY = 1.0171740286255455;

        // shadowz
        this.add.image(761, 391, "mtn_halloween", "shadowz");

        // sled_1
        this.add.image(492, 250, "mtn_halloween", "sled");

        // leftpumpkin
        const leftpumpkin = this.add.image(452.258545887274, 345.6880095200287, "mtn_halloween", "leftpumpkin");
        leftpumpkin.setOrigin(0.512338685169353, 0.7163125743752241);

        // shopsled0001
        const shopsled0001 = this.add.image(502, 229, "mtn_halloween", "shopsled0001");

        // scarecrowshadow
        this.add.image(835, 458, "mtn_halloween", "scarecrowshadow");

        // feathers
        this.add.image(736, 363, "mtn_halloween", "feathers");

        // scarecrow
        const scarecrow = this.add.image(739.9123718582066, 360.4742311492396, "mtn_halloween", "scarecrow");
        scarecrow.setOrigin(0.5875911057077164, 0.9308535469947135);

        // rightpumpkin
        const rightpumpkin = this.add.image(1176, 466.4294636327547, "mtn_halloween", "rightpumpkin");
        rightpumpkin.setOrigin(0.5, 0.7064801846308959);

        // express0001
        const express0001 = this.add.image(1083, 770, "mtn_halloween", "express0001");

        // track0001
        const track0001 = this.add.sprite(1140, 297, "mtn_halloween", "track0001");
        track0001.scaleX = 1.0286146830746499;
        track0001.scaleY = 1.0286146830746499;

        // railing
        const railing = this.add.image(887, 213, "mtn_halloween", "railing");
        railing.scaleX = 1.0613720767924026;
        railing.scaleY = 1.0613720767924026;
        railing.setOrigin(0.2861106382987247, 0.30997233946917774);

        // barrier_1
        const barrier_1 = this.add.image(282, 533, "mtn_halloween", "barrier_1");
        barrier_1.setOrigin(0.5, 0.45901639344262296);

        // barrier_1_1
        const barrier_1_1 = this.add.image(341, 572, "mtn_halloween", "barrier_1_1");
        barrier_1_1.setOrigin(0.5, 0.45901639344262296);

        // barrier_1_2
        const barrier_1_2 = this.add.image(404, 612, "mtn_halloween", "barrier_1_2");
        barrier_1_2.setOrigin(0.5, 0.45901639344262296);

        // barrier_1_3
        const barrier_1_3 = this.add.image(584, 697, "mtn_halloween", "barrier_1_3");
        barrier_1_3.angle = -15;
        barrier_1_3.setOrigin(0.5, 0.45901639344262296);

        // barrier_2
        const barrier_2 = this.add.image(654, 707, "mtn_halloween", "barrier_2");
        barrier_2.setOrigin(0.48, 0.47761194029850745);

        // barrier_2_1
        const barrier_2_1 = this.add.image(902, 747, "mtn_halloween", "barrier_2");
        barrier_2_1.setOrigin(0.48, 0.47761194029850745);

        // barrier_1_4
        const barrier_1_4 = this.add.image(1120, 651, "mtn_halloween", "barrier_1_4");
        barrier_1_4.setOrigin(0.5, 0.45901639344262296);

        // catalog
        const catalog = this.add.image(1365, 939, "mtn_halloween", "shop");
        catalog.setOrigin(0, 1);

        // mtnSeat10
        const mtnSeat10 = new MtnSeat(this, 1093, 676, "mtn_halloween", "mtnSeat1");
        this.add.existing(mtnSeat10);
        mtnSeat10.visible = false;

        // mtnSeat9
        const mtnSeat9 = new MtnSeat(this, 955, 744, "mtn_halloween", "mtnSeat1");
        this.add.existing(mtnSeat9);
        mtnSeat9.visible = false;

        // mtnSeat8
        const mtnSeat8 = new MtnSeat(this, 857, 745, "mtn_halloween", "mtnSeat1");
        this.add.existing(mtnSeat8);
        mtnSeat8.visible = false;

        // mtnSeat7
        const mtnSeat7 = new MtnSeat(this, 698, 703, "mtn_halloween", "mtnSeat1");
        this.add.existing(mtnSeat7);
        mtnSeat7.visible = false;

        // mtnSeat6
        const mtnSeat6 = new MtnSeat(this, 561, 673, "mtn_halloween", "mtnSeat1");
        this.add.existing(mtnSeat6);
        mtnSeat6.visible = false;

        // mtnSeat5
        const mtnSeat5 = new MtnSeat(this, 612, 713, "mtn_halloween", "mtnSeat1");
        this.add.existing(mtnSeat5);
        mtnSeat5.visible = false;

        // mtnSeat4
        const mtnSeat4 = new MtnSeat(this, 252, 519, "mtn_halloween", "mtnSeat1");
        this.add.existing(mtnSeat4);
        mtnSeat4.visible = false;

        // mtnSeat3
        const mtnSeat3 = new MtnSeat(this, 307, 550, "mtn_halloween", "mtnSeat1");
        this.add.existing(mtnSeat3);
        mtnSeat3.visible = false;

        // mtnSeat2
        const mtnSeat2 = new MtnSeat(this, 369, 590, "mtn_halloween", "mtnSeat1");
        this.add.existing(mtnSeat2);
        mtnSeat2.visible = false;

        // mtnSeat1
        const mtnSeat1 = new MtnSeat(this, 433, 618, "mtn_halloween", "mtnSeat1");
        this.add.existing(mtnSeat1);
        mtnSeat1.visible = false;

        // lists
        const sort = [railing, express0001, rightpumpkin, scarecrow, shopsled0001, leftpumpkin];
        const seats100 = [mtnSeat4, mtnSeat3, mtnSeat2, mtnSeat1];
        const seats101 = [mtnSeat6, mtnSeat5, mtnSeat7];
        const seats102 = [mtnSeat8, mtnSeat9];
        const seats103 = [mtnSeat10, mtnSeat11];

        // sky0001 (components)
        const sky0001Animation = new Animation(sky0001);
        sky0001Animation.key = "sky";
        sky0001Animation.end = 282;

        // mtnSeat11 (prefab fields)
        mtnSeat11.sitFrame = 24;
        mtnSeat11.offsetX = -100;
        mtnSeat11.offsetY = -70;

        // zone4 (components)
        new MoveTo(zone4);
        const zone4ShowHint = new ShowHint(zone4);
        zone4ShowHint.text = "Sled Race";
        new SimpleButton(zone4);

        // zone3 (components)
        new MoveTo(zone3);
        const zone3ShowHint = new ShowHint(zone3);
        zone3ShowHint.text = "Sled Race";
        new SimpleButton(zone3);

        // zone2 (components)
        new MoveTo(zone2);
        const zone2ShowHint = new ShowHint(zone2);
        zone2ShowHint.text = "Sled Race";
        new SimpleButton(zone2);

        // zone1 (components)
        new MoveTo(zone1);
        const zone1ShowHint = new ShowHint(zone1);
        zone1ShowHint.text = "Sled Race";
        new SimpleButton(zone1);

        // shopsled0001 (components)
        const shopsled0001SimpleButton = new SimpleButton(shopsled0001);
        shopsled0001SimpleButton.callback = () => this.interface.loadExternal('Sled');

        // track0001 (components)
        const track0001Animation = new Animation(track0001);
        track0001Animation.key = "track";
        track0001Animation.end = 87;

        // catalog (components)
        const catalogSimpleButton = new SimpleButton(catalog);
        catalogSimpleButton.callback = () => this.interface.loadExternal('Sled');

        // mtnSeat10 (prefab fields)
        mtnSeat10.sitFrame = 24;
        mtnSeat10.offsetX = -100;
        mtnSeat10.offsetY = -70;

        // mtnSeat9 (prefab fields)
        mtnSeat9.sitFrame = 17;
        mtnSeat9.offsetX = -10;
        mtnSeat9.offsetY = -90;

        // mtnSeat8 (prefab fields)
        mtnSeat8.sitFrame = 17;
        mtnSeat8.offsetX = -10;
        mtnSeat8.offsetY = -90;

        // mtnSeat7 (prefab fields)
        mtnSeat7.sitFrame = 18;
        mtnSeat7.offsetX = 10;
        mtnSeat7.offsetY = -70;

        // mtnSeat6 (prefab fields)
        mtnSeat6.sitFrame = 18;
        mtnSeat6.offsetX = 10;
        mtnSeat6.offsetY = -70;

        // mtnSeat5 (prefab fields)
        mtnSeat5.sitFrame = 18;
        mtnSeat5.offsetX = 10;
        mtnSeat5.offsetY = -110;

        // mtnSeat4 (prefab fields)
        mtnSeat4.sitFrame = 18;
        mtnSeat4.offsetX = 90;
        mtnSeat4.offsetY = -70;

        // mtnSeat3 (prefab fields)
        mtnSeat3.sitFrame = 18;
        mtnSeat3.offsetX = 90;
        mtnSeat3.offsetY = -70;

        // mtnSeat2 (prefab fields)
        mtnSeat2.sitFrame = 18;
        mtnSeat2.offsetX = 90;
        mtnSeat2.offsetY = -70;

        // mtnSeat1 (prefab fields)
        mtnSeat1.sitFrame = 18;
        mtnSeat1.offsetX = 90;
        mtnSeat1.offsetY = -70;

        this.sort = sort;
        this.seats100 = seats100;
        this.seats101 = seats101;
        this.seats102 = seats102;
        this.seats103 = seats103;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
        triggerWaddle(id) {
        if (this.world.client.activeSeat) {
            return
        }

        let text = 'Would you like to join this\nSled Race?'

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.network.send('join_waddle', { id: id })

            this.interface.prompt.window.visible = false
        })

    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
