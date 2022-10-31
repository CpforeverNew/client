import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, ShowHint, Zone, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Dock extends RoomScene {

    constructor() {
        super("Dock");

        /** @type {Phaser.GameObjects.Sprite} */
        this.boatbob0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.smalllamp0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.smalllamp;
        /** @type {Phaser.GameObjects.Sprite} */
        this.lamp;
        /** @type {Phaser.GameObjects.Sprite} */
        this.lamp_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rings;
        /** @type {Phaser.GameObjects.Sprite} */
        this.peel0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.boatring;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'beach': () => this.triggerRoom(400, 950, 430),
            'village': () => this.triggerRoom(200, 1300, 760),
            'town': () => this.triggerRoom(100, 368, 640),
            'hydro': () => this.triggerGame('HydroHopper', 924)
        }

        this.music = 254;

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("dock-holiday-pack", "assets/media/rooms/holiday_party/dock/dock-holiday-pack.json");
        this.load.pack("sky-holiday", "assets/media/rooms/holiday_party/sky/sky-holiday.json");
    }

    /** @returns {void} */
    _create() {

        // sky
        const sky = this.add.image(704, 152, "sky", "sky");
        sky.scaleX = 1.4680349462054876;
        sky.scaleY = 1.4680349462054876;

        // aurora0001
        const aurora0001 = this.add.sprite(262, 71, "sky", "aurora0001");

        // aurora
        const aurora = this.add.sprite(680, 68, "sky", "aurora0001");

        // aurora_1
        const aurora_1 = this.add.sprite(1285, 57, "sky", "aurora0001");

        // aurora_2
        const aurora_2 = this.add.sprite(912, 83, "sky", "aurora0001");

        // bg
        this.add.image(769, 503, "dock-holiday", "bg");

        // blackthing
        this.add.image(274, 714, "dock-holiday", "blackthing");

        // campfire0001
        const campfire0001 = this.add.sprite(642.3585577464777, 223.415609389662, "dock-holiday", "campfire0001");
        campfire0001.scaleX = 0.33026465110741676;
        campfire0001.scaleY = 0.33026465110741676;
        campfire0001.setOrigin(0.5119928356356648, 0.614265072862022);

        // tree
        const tree = this.add.image(1008.7008934475367, 307.57231635118393, "dock-holiday", "tree");
        tree.setOrigin(0.4474116410557946, 0.9499286503896494);

        // fire
        const fire = this.add.image(1148.3458048146122, 322.7780608328775, "dock-holiday", "fire");
        fire.setOrigin(0.5571816422975285, 0.5769926049832873);

        // stand
        const stand = this.add.image(440.2405877902275, 233.37022943624902, "dock-holiday", "stand");
        stand.setOrigin(0.4635008351297521, 1.0460247116641508);

        // stand_1
        const stand_1 = this.add.image(796.2621180724313, 188.05630383497618, "dock-holiday", "stand");
        stand_1.setOrigin(0.5510885249750617, 0.8161187358770536);
        stand_1.flipX = true;

        // boatbob0001
        const boatbob0001 = this.add.sprite(225, 645, "dock-holiday", "boatbob0001");

        // smalllamp0001
        const smalllamp0001 = this.add.sprite(486, 102, "dock-holiday", "smalllamp0001");
        smalllamp0001.scaleX = 0.5203451338745538;
        smalllamp0001.scaleY = 0.5203451338745538;

        // smalllamp
        const smalllamp = this.add.sprite(752, 97, "dock-holiday", "smalllamp0001");
        smalllamp.scaleX = 0.5203451338745538;
        smalllamp.scaleY = 0.5203451338745538;
        smalllamp.flipX = true;

        // back
        const back = this.add.image(1360.20148911899, 625.616506389303, "dock-holiday", "back");
        back.setOrigin(0.7265980874135874, 0.6643841940398033);

        // front
        const front = this.add.image(1222.276030148497, 727.3660964204636, "dock-holiday", "front");
        front.setOrigin(0.3939855359999986, 0.8534955708154026);

        // table
        const table = this.add.image(949.9865720729892, 768.4143696287903, "dock-holiday", "table");
        table.setOrigin(0.418966723905319, 0.589208499743628);

        // lamp
        const lamp = this.add.sprite(919.1451554535164, 840.3413485263163, "dock-holiday", "lamp");
        lamp.scaleX = 0.7787654141646153;
        lamp.scaleY = 0.7787654141646153;
        lamp.angle = -3;
        lamp.setOrigin(0.3910192370488433, 0.9042426652470088);

        // lamp_1
        const lamp_1 = this.add.sprite(133.32569300777214, 437.96828299663053, "dock-holiday", "lamp");
        lamp_1.scaleX = 0.7140024301340478;
        lamp_1.scaleY = 0.7140024301340478;
        lamp_1.angle = -3;
        lamp_1.setOrigin(0.3500848382038602, 0.8847850995451235);

        // left_bench
        const left_bench = this.add.image(269.2926437735747, 326.7747869256481, "dock-holiday", "left bench");
        left_bench.setOrigin(0.7356665180102253, 0.18265573806890156);

        // candle0001
        const candle0001 = this.add.sprite(921.4832977071642, 375.2689892603657, "dock-holiday", "candle0001");
        candle0001.setOrigin(1.4261843478161123, 10.012227147577427);

        // candle
        const candle = this.add.sprite(1129.5760043203804, 441.3523326692871, "dock-holiday", "candle0001");
        candle.setOrigin(1.0108577600543478, 13.01601512133123);

        // candle_1
        const candle_1 = this.add.sprite(954.7089792699107, 397.91947836948907, "dock-holiday", "candle0001");
        candle_1.setOrigin(-1.2558601042984654, 16.087249016794956);

        // candle_2
        const candle_2 = this.add.sprite(856.2764716032553, 721.0580560417999, "dock-holiday", "candle0001");
        candle_2.setOrigin(0.5394984263402064, 2.866275751968105);

        // backleftdock
        const backleftdock = this.add.image(438.102711701356, 580.7674595837285, "dock-holiday", "backleftdock");
        backleftdock.setOrigin(0.5275677925338996, 0.3849344311628566);

        // backrightdock
        const backrightdock = this.add.image(525.1608420103462, 687.9365004794353, "dock-holiday", "backrightdock");
        backrightdock.setOrigin(-0.6848422204218423, 1.0511770558035562);

        // dock
        const dock = this.add.image(350.4075322497798, 674.6341587112323, "dock-holiday", "dock");
        dock.setOrigin(0.5140824884610545, 0.24200048535545052);

        // rings
        const rings = this.add.sprite(622.6030688648809, 690.0901134862596, "dock-holiday", "rubber0001");
        rings.setOrigin(0.46833202408356894, 0.8833621850479132);

        // boards_1
        const boards_1 = this.add.image(736.836158915399, 752.3827326308584, "dock-holiday", "boards");
        boards_1.setOrigin(0.4989825166481159, 0.7998831277058116);

        // ringshover
        const ringshover = this.add.rectangle(626.4247935775011, 581.7488886150363, 128, 128);
        ringshover.scaleY = 1.2526105139495551;
        ringshover.setOrigin(0.5189439791280126, 0.17411116785524117);

        // red
        const red = this.add.sprite(1425, 869, "dock-holiday", "red");

        // peel0001
        const peel0001 = this.add.sprite(737, 863, "dock-holiday", "peel0001");
        peel0001.angle = 11;
        peel0001.setOrigin(0.3027355886991528, 3.6601360122735254);

        // peel
        const peel = this.add.rectangle(780, 677, 128, 128);
        peel.scaleX = 0.3657079147092659;
        peel.scaleY = 0.3657079147092659;
        peel.angle = 7;
        peel.setOrigin(0.5189439791280126, 0.17411116785524117);

        // boatring
        const boatring = this.add.sprite(196, 655, "dock-holiday", "ring");
        boatring.scaleX = 0.39353611881933315;
        boatring.scaleY = 0.39353611881933315;
        boatring.visible = false;

        // rectangle_1
        const rectangle_1 = this.add.rectangle(918, 544, 128, 128);
        rectangle_1.scaleX = 0.7591398238213805;
        rectangle_1.scaleY = 0.8182852979233071;

        // rectangle
        const rectangle = this.add.rectangle(140, 177, 128, 128);
        rectangle.scaleX = 0.7591398238213805;
        rectangle.scaleY = 0.8182852979233071;

        // lists
        const sort = [table, lamp, front, back, tree, fire, campfire0001, left_bench, lamp_1, backleftdock, backrightdock, dock, boards_1, stand, stand_1, rings, candle0001, candle_2, candle, candle_1, peel0001];

        // aurora0001 (components)
        const aurora0001Animation = new Animation(aurora0001);
        aurora0001Animation.key = "aurora";
        aurora0001Animation.end = 100;

        // aurora (components)
        const auroraAnimation = new Animation(aurora);
        auroraAnimation.key = "aurora";
        auroraAnimation.end = 100;

        // aurora_1 (components)
        const aurora_1Animation = new Animation(aurora_1);
        aurora_1Animation.key = "aurora";
        aurora_1Animation.end = 100;

        // aurora_2 (components)
        const aurora_2Animation = new Animation(aurora_2);
        aurora_2Animation.key = "aurora";
        aurora_2Animation.end = 100;

        // campfire0001 (components)
        const campfire0001Animation = new Animation(campfire0001);
        campfire0001Animation.key = "campfire";
        campfire0001Animation.end = 10;

        // boatbob0001 (components)
        const boatbob0001Animation = new Animation(boatbob0001);
        boatbob0001Animation.key = "boatbob";
        boatbob0001Animation.end = 80;
        const boatbob0001SimpleButton = new SimpleButton(boatbob0001);
        boatbob0001SimpleButton.hoverCallback = () => this.boatring.visible = true;;
        boatbob0001SimpleButton.hoverOutCallback = () => this.boatring.visible = false;;
        new MoveTo(boatbob0001);
        const boatbob0001ShowHint = new ShowHint(boatbob0001);
        boatbob0001ShowHint.text = "Hydro Hopper";

        // smalllamp0001 (components)
        const smalllamp0001SimpleButton = new SimpleButton(smalllamp0001);
        smalllamp0001SimpleButton.callback = () => {this.backlClick()};

        // smalllamp (components)
        const smalllampSimpleButton = new SimpleButton(smalllamp);
        smalllampSimpleButton.callback = () => {this.backrClick()};

        // candle0001 (components)
        const candle0001Animation = new Animation(candle0001);
        candle0001Animation.key = "candle";
        candle0001Animation.end = 14;

        // candle (components)
        const candleAnimation = new Animation(candle);
        candleAnimation.key = "candle";
        candleAnimation.end = 14;

        // candle_1 (components)
        const candle_1Animation = new Animation(candle_1);
        candle_1Animation.key = "candle";
        candle_1Animation.end = 14;

        // candle_2 (components)
        const candle_2Animation = new Animation(candle_2);
        candle_2Animation.key = "candle";
        candle_2Animation.end = 14;

        // rings (components)
        const ringsAnimation = new Animation(rings);
        ringsAnimation.key = "rubber";
        ringsAnimation.end = 34;
        ringsAnimation.repeat = 0;
        ringsAnimation.autoPlay = false;

        // ringshover (components)
        const ringshoverSimpleButton = new SimpleButton(ringshover);
        ringshoverSimpleButton.hoverCallback = () => {this.onRingsOver()};
        ringshoverSimpleButton.callback = null;

        // red (components)
        const redButton = new Button(red);
        redButton.spriteName = "red";
        redButton.callback = () => this.interface.loadExternal('Hydro');
        redButton.activeFrame = false;

        // peel0001 (components)
        const peel0001Animation = new Animation(peel0001);
        peel0001Animation.key = "peel";
        peel0001Animation.end = 7;
        peel0001Animation.repeat = 0;
        peel0001Animation.autoPlay = false;

        // peel (components)
        const peelSimpleButton = new SimpleButton(peel);
        peelSimpleButton.hoverCallback = () => {this.peel0001.__Animation.play()};
        peelSimpleButton.hoverOutCallback = () => {this.peel0001.__Animation.stop()};
        peelSimpleButton.callback = () => this.interface.loadExternal('Hydro');

        // rectangle_1 (components)
        const rectangle_1SimpleButton = new SimpleButton(rectangle_1);
        rectangle_1SimpleButton.callback = () => {this.rlClick()};

        // rectangle (components)
        const rectangleSimpleButton = new SimpleButton(rectangle);
        rectangleSimpleButton.callback = () => {this.lClick()};

        this.boatbob0001 = boatbob0001;
        this.smalllamp0001 = smalllamp0001;
        this.smalllamp = smalllamp;
        this.lamp = lamp;
        this.lamp_1 = lamp_1;
        this.rings = rings;
        this.peel0001 = peel0001;
        this.boatring = boatring;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.rLanternToggle = false;

        // this.up = false

        // this.time.addEvent({
        //     delay: 1500,
        //     callback: () => this.floatBoat(),
        //     loop: true
        // })
    }

    onRingsOver() {
        this.rings.__Animation.play()
    }

    shouldSlide() {
        return true;
    }

    rlClick() {
        let frame = this.rLanternToggle ? 'lamp' : 'lampon'
        this.lamp.setFrame(frame)
        this.rLanternToggle = !this.rLanternToggle
    }

    lClick() {
        let frame = this.lLanternToggle ? 'lamp' : 'lampon'
        this.lamp_1.setFrame(frame)
        this.lLanternToggle = !this.lLanternToggle
    }

    backlClick() {
        let frame = this.blLanternToggle ? 'smalllamp0001' : 'smalllamp0002'
        this.smalllamp0001.setFrame(frame)
        this.blLanternToggle = !this.blLanternToggle
    }

    backrClick() {
        let frame = this.brLanternToggle ? 'smalllamp0001' : 'smalllamp0002'
        this.smalllamp.setFrame(frame)
        this.brLanternToggle = !this.brLanternToggle
    }
    // floatBoat() {
    //     let value = (this.up) ? -2 : 2
    //     this.boat.y += value
    //     this.up = !this.up
    // }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
