import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, ShowHint, Zone, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Dock extends RoomScene {

    constructor() {
        super("Dock");

        /** @type {Phaser.GameObjects.Image} */
        this.boat;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rings;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'beach': () => this.triggerRoom(400, 950, 430),
            'village': () => this.triggerRoom(200, 1300, 760),
            'town': () => this.triggerRoom(100, 368, 640),
            'hydro': () => this.triggerGame('HydroHopper', 924),
            'spintowin': () => this.triggerGame('spin', 1001),
            'ringthebell': () => this.triggerGame('ringthebell', 1002),
            'puffleshuffle' : () => this.triggerGame('pufflesuffle', 1003),
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("dock-spf-pack", "assets/media/rooms/spooky_fair/dock/dock-spf-pack.json");
    }

    /** @returns {void} */
    _create() {

        // rectangle_1
        const rectangle_1 = this.add.rectangle(764, 118, 128, 128);
        rectangle_1.scaleX = 12.146623719655171;
        rectangle_1.scaleY = 2.205665631429229;
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 538447;

        // sky
        this.add.image(842, 5, "dock-spf", "sky");

        // lightning_10006
        const lightning_10006 = this.add.sprite(375, 30, "dock-spf", "lightning_10005");

        // lightning_20122
        const lightning_20122 = this.add.sprite(1095, 55, "dock-spf", "lightning_20121");

        // bg
        this.add.image(715, 420, "dock-spf", "bg");

        // boat
        const boat = this.add.image(223, 647, "dock-spf", "boat0001");

        // post1
        const post1 = this.add.image(439, 595.5372015059321, "dock-spf", "post1");
        post1.setOrigin(0.5, 0.5394540428922225);

        // dock
        const dock = this.add.image(184.97704761448438, 589.3695288854817, "dock-spf", "dock");
        dock.setOrigin(0, 0);

        // bollard_1
        const bollard_1 = this.add.image(351, 671, "dock-spf", "bollard_1");

        // bollard_2
        const bollard_2 = this.add.image(274, 710, "dock-spf", "bollard_2");

        // post4
        const post4 = this.add.image(162, 826.7579100178693, "dock-spf", "post4");
        post4.setOrigin(0.5, 0.7747230922228245);

        // post3
        const post3 = this.add.image(365.04108806624544, 881.5752329274359, "dock-spf", "post3");
        post3.setOrigin(0.5444075611675323, 0.7946626714970618);

        // post2
        const post2 = this.add.image(569, 619, "dock-spf", "post2");

        // pumkin3
        const pumkin3 = this.add.image(644.9534095717188, 550.2213045343358, "dock-spf", "pumkin3");
        pumkin3.setOrigin(0.4768766261241074, 0.5804238683445012);

        // box
        const box = this.add.image(433, 639, "dock-spf", "box");

        // rings
        const rings = this.add.sprite(621.5758409621765, 696.8268096682154, "dock-spf", "tubes0001");
        rings.setOrigin(0.4731477275355271, 0.906045803678879);

        // boards
        const boards = this.add.image(707.8192057733216, 719.3131815449016, "dock-spf", "boards");
        boards.setOrigin(0.43055411826994205, 0.44806222274327123);

        // paper_wrapp
        const paper_wrapp = this.add.image(760.6024242603265, 762.205164680344, "dock-spf", "paper_wrapp");
        paper_wrapp.setOrigin(0.4714775842894411, 1.6745773533571857);

        // paper
        const paper = this.add.image(1441, 889, "dock-spf", "paper");

        // tree2
        const tree2 = this.add.image(124, 244, "dock-spf", "tree2");

        // gate2
        const gate2 = this.add.image(437.7761222698439, 248.54690250339814, "dock-spf", "gate2");
        gate2.setOrigin(0.6304007405898526, 0.6809251759945397);

        // gate1
        const gate1 = this.add.image(251, 345, "dock-spf", "gate1");

        // gate4
        const gate4 = this.add.image(1043.0247114780461, 86.16637995746022, "dock-spf", "gate4");
        gate4.setOrigin(-0.006590157294695202, 0.007540190460449977);

        // gate3
        const gate3 = this.add.image(1200, 350, "dock-spf", "gate3");

        // fence
        this.add.image(774, 151, "dock-spf", "fence");

        // ringthebell
        const ringthebell = this.add.image(982.2234874278905, 168.7152339347283, "dock-spf", "ringthebell");
        ringthebell.setOrigin(0.5154085903153228, 0.5534033187669708);

        // ringthebell_sign
        const ringthebell_sign = this.add.image(1110, 212, "dock-spf", "ringthebell_sign");

        // spintowin
        const spintowin = this.add.image(687.0698856424218, 284.9434561726946, "dock-spf", "spintowin");
        spintowin.setOrigin(0.5138898984952445, 0.7101114260838323);

        // pumkin1
        const pumkin1 = this.add.image(1070.0116476070702, 482.2096569272655, "dock-spf", "pumkin1");
        pumkin1.setOrigin(0.508224777293254, 0.6264559508837881);

        // pumkin2
        const pumkin2 = this.add.image(772.9766744625391, 482.8036817797264, "dock-spf", "pumkin2");
        pumkin2.setOrigin(0.4834156129988475, 0.8877982493769498);

        // pumkin
        const pumkin = this.add.image(542.0582380353516, 412.38437103332, "dock-spf", "pumkin");
        pumkin.setOrigin(0.5532446108984376, 0.7954369117992921);

        // tree1
        const tree1 = this.add.image(1432, 342, "dock-spf", "tree1");

        // pumkin4
        const pumkin4 = this.add.image(432.9301143575782, 504.535789925234, "dock-spf", "pumkin4");
        pumkin4.setOrigin(0.47914128645215875, 0.7820350904559635);

        // puffle_shuffle0001
        const puffle_shuffle0001 = this.add.image(1144.2085516339052, 677.1140217854041, "dock-spf", "puffle_shuffle0001");
        puffle_shuffle0001.setOrigin(0.5133182013731179, 0.644623767488155);

        // zone
        const zone = this.add.rectangle(622.491533458838, 693.3386616464769, 135, 160);
        zone.setOrigin(0.48882617376917065, 0.8771166352904807);
        zone.visible = false;
        zone.alpha = 0.5;
        zone.isFilled = true;
        zone.fillColor = 65280;

        // spintowin_logo
        const spintowin_logo = this.add.image(648, 291.8510798290158, "dock-spf", "spintowin-logo");
        spintowin_logo.setOrigin(0.5, 4.193769282660997);

        // lists
        const sort = [pumkin1, puffle_shuffle0001, gate3, pumkin2, pumkin3, pumkin4, pumkin, gate2, tree2, gate1, boards, paper_wrapp, tree1, rings, ringthebell, ringthebell_sign, dock, post2, post3, post4, post1, bollard_1, bollard_2, box, spintowin, spintowin_logo];

        // lightning_10006 (components)
        const lightning_10006Animation = new Animation(lightning_10006);
        lightning_10006Animation.key = "lightning_1";
        lightning_10006Animation.end = 290;

        // lightning_20122 (components)
        const lightning_20122Animation = new Animation(lightning_20122);
        lightning_20122Animation.key = "lightning_2";
        lightning_20122Animation.end = 290;

        // boat (components)
        const boatSimpleButton = new SimpleButton(boat);
        boatSimpleButton.pixelPerfect = true;
        new MoveTo(boat);
        const boatShowHint = new ShowHint(boat);
        boatShowHint.text = "Hydro Hopper";

        // rings (components)
        const ringsAnimation = new Animation(rings);
        ringsAnimation.key = "tubes";
        ringsAnimation.end = 34;
        ringsAnimation.repeat = 0;
        ringsAnimation.autoPlay = false;
        ringsAnimation.stopOnOut = false;

        // paper_wrapp (components)
        const paper_wrappSimpleButton = new SimpleButton(paper_wrapp);
        paper_wrappSimpleButton.callback = () => this.interface.loadExternal('Hydro');

        // paper (components)
        const paperButton = new Button(paper);
        paperButton.spriteName = "paper";
        paperButton.callback = () => this.interface.loadExternal('Hydro');

        // ringthebell (components)
        const ringthebellButton = new Button(ringthebell);
        ringthebellButton.spriteName = "ringthebell";
        const ringthebellMoveTo = new MoveTo(ringthebell);
        ringthebellMoveTo.x = 948;
        ringthebellMoveTo.y = 260;

        // spintowin (components)
        const spintowinButton = new Button(spintowin);
        spintowinButton.spriteName = "spintowin";
        spintowinButton.pixelPerfect = true;
        const spintowinMoveTo = new MoveTo(spintowin);
        spintowinMoveTo.x = 660;
        spintowinMoveTo.y = 270;

        // puffle_shuffle0001 (components)
        const puffle_shuffle0001SimpleButton = new SimpleButton(puffle_shuffle0001);
        puffle_shuffle0001SimpleButton.pixelPerfect = true;
        const puffle_shuffle0001MoveTo = new MoveTo(puffle_shuffle0001);
        puffle_shuffle0001MoveTo.x = 1085;
        puffle_shuffle0001MoveTo.y = 772;

        // zone (components)
        const zoneZone = new Zone(zone);
        zoneZone.hoverCallback = () => this.onRingsOver();
        new MoveTo(zone);

        this.boat = boat;
        this.rings = rings;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.up = false

        this.time.addEvent({
            delay: 1500,
            callback: () => this.floatBoat(),
            loop: true
        })
    }

    onRingsOver() {
        this.rings.__Animation.play()
    }

    floatBoat() {
        let value = (this.up) ? -2 : 2
        this.boat.y += value
        this.up = !this.up
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
