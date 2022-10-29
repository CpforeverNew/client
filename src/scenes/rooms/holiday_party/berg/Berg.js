import RoomScene from '@scenes/rooms/RoomScene'

import {
    MoveTo,
    SimpleButton,
    ShowHint,
    Animation
} from '@components/components'


/* START OF COMPILED CODE */

export default class Berg extends RoomScene {

    constructor() {
        super("Berg");

        /** @type {Phaser.GameObjects.Sprite} */
        this.tree;
        /** @type {Phaser.GameObjects.Sprite} */
        this.aqua;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomAnims = true;


        this.roomTriggers = {
            'aqua': () => this.triggerGame("AquaGrabber", 916)
        }
        this.music = '227'
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("berg-christmas-pack", "assets/media/rooms/holiday_party/berg/berg-christmas-pack.json");
    }

    /** @returns {void} */
    _create() {

        // oceanfix
        const oceanfix = this.add.rectangle(936, 829, 128, 128);
        oceanfix.scaleX = 6.201258764243633;
        oceanfix.scaleY = 2.1041584437005336;
        oceanfix.isFilled = true;
        oceanfix.fillColor = 5157345;

        // sky
        this.add.image(764, 154, "berg-christmas", "sky");

        // northernlights0001
        const northernlights0001 = this.add.sprite(302, 162, "berg-christmas", "northernlights0001");

        // northernlights
        const northernlights = this.add.sprite(761, 148, "berg-christmas", "northernlights0001");

        // northernlights_1
        const northernlights_1 = this.add.sprite(1247, 150, "berg-christmas", "northernlights0001");

        // berg
        this.add.image(798, 516, "berg-christmas", "berg");

        // present_orange
        const present_orange = this.add.image(763, 694, "berg-christmas", "present_orange");
        present_orange.setOrigin(0.5087608651304267, 0.5532755311985399);

        // present_red0001
        const present_red0001 = this.add.sprite(104, 371, "berg-christmas", "present_red0001");

        // present_purple
        const present_purple = this.add.image(1085, 561, "berg-christmas", "present_purple");
        present_purple.setOrigin(0.6093259911054996, 0.4446862545001932);

        // tree
        const tree = this.add.sprite(725.2658532208204, 496.54390812933525, "berg-christmas", "tree0001");
        tree.setOrigin(0.4696878256992772, 0.8314887858758104);

        // aqua
        const aqua = this.add.sprite(1262, 292, "berg-christmas", "aqua0001");
        aqua.setOrigin(0.5, 0.4014336917562724);

        // lists
        const sort = [present_orange, tree, present_purple];

        // northernlights0001 (components)
        const northernlights0001Animation = new Animation(northernlights0001);
        northernlights0001Animation.key = "northernlights";
        northernlights0001Animation.end = 100;

        // northernlights (components)
        const northernlightsAnimation = new Animation(northernlights);
        northernlightsAnimation.key = "northernlights";
        northernlightsAnimation.end = 100;

        // northernlights_1 (components)
        const northernlights_1Animation = new Animation(northernlights_1);
        northernlights_1Animation.key = "northernlights";
        northernlights_1Animation.end = 100;

        // present_red0001 (components)
        const present_red0001Animation = new Animation(present_red0001);
        present_red0001Animation.key = "present_red";
        present_red0001Animation.end = 80;

        // aqua (components)
        const aquaSimpleButton = new SimpleButton(aqua);
        aquaSimpleButton.hoverCallback = () => this.onAquaOver();
        aquaSimpleButton.callback = () => this.onAquaClick();
        aquaSimpleButton.pixelPerfect = true;
        new MoveTo(aqua);
        const aquaShowHint = new ShowHint(aqua);
        aquaShowHint.text = "Aqua Grabber";

        this.tree = tree;
        this.aqua = aqua;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        this.aqua.on('animationcomplete', (animation) => this.onAquaAnimComplete(animation))
        this.aqua.play('aqua_float1')

        this.lastCount = 0

        this.events.on("roomready", () => this.addTree())
        this.events.on("addpenguin", () => this.addTree())
        this.events.on("removepenguin", () => this.removeTree())
    }

    playerCount() {
        return Object.keys(this.penguins).length
    }

    addTree() {
        let count = this.playerCount()

        // for some reason this in a switch statement didnt work lol. sorry 2 whoever has to read this
        if (count >= 2 && count <= 3 && this.lastCount < 2) {
            this.tree.play("grow0")
            this.lastCount = count
            return;
        }

        if (count >= 4 && count <= 6 && this.lastCount < 4) {
            this.tree.play("grow1")
            this.lastCount = count
            return;
        }

        if (count >= 7 && count <= 8 && this.lastCount < 7) {
            this.tree.play("grow2")
            this.lastCount = count

            return;
        }

        if (count > 8 && this.lastCount < 8) {
            this.tree.play("grow3")
            this.lastCount = count
        }
    }

    removeTree() {
        let count = this.playerCount()

        // for some reason this in a switch statement didnt work lol. sorry 2 whoever has to read this
        if (this.lastCount > 8 && count < 9) {
            this.tree.play("shrink3")
            this.lastCount = count;
            return;
        }

        if (this.lastCount > 6 && count < 7) {
            this.tree.play("shrink2")
            this.lastCount = count;
            return;
        }

        if (this.lastCount > 3 && count < 4) {
            this.tree.play("shrink1")
            this.lastCount = count;
            return;
        }

        if (this.lastCount > 1 && count < 2) {
            this.tree.play("shrink0")
            this.lastCount = count;
            return;
        }
    }

    get aquaFrame() {
        let frame = this.aqua.frame.name
        return parseInt(frame.substr(frame.length - 4))
    }

    onAquaAnimComplete(animation) {
        switch (animation.key) {
            case 'aqua_lights_on1':
                this.aqua.play('aqua_lights_float1')
                break
            case 'aqua_open1':
                this.aqua.play('aqua_float1')
                break
            default:
                break
        }
    }

    onAquaOver() {
        let frame = this.aquaFrame
        if (frame <= 81 || frame >= 400) {
            this.aqua.play('aqua_lights_on1')
        }
    }

    onAquaClick() {
        let frame = this.aquaFrame
        if (frame <= 180 || frame >= 348) {
            this.aqua.play('aqua_open1')
        }
    }


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */