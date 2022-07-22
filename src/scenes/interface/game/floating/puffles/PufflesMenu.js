import FloatingMenu from '../FloatingMenu'

import { Button } from '@components/components'


/* START OF COMPILED CODE */

export default class PufflesMenu extends FloatingMenu {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.safe;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.close;


        // safe
        const safe = scene.add.rectangle(0, -198, 200, 460);
        safe.isFilled = true;
        safe.fillColor = 65535;
        safe.fillAlpha = 0.5;
        this.add(safe);

        // close
        const close = scene.add.rectangle(0, 61, 80, 80);
        close.isFilled = true;
        close.fillColor = 65535;
        close.fillAlpha = 0.5;
        this.add(close);

        // back
        const back = scene.add.image(1, -173, "pufflePopup", "back");
        this.add(back);

        // coinbag
        const coinbag = scene.add.image(2, -68, "pufflePopup", "coinbag");
        this.add(coinbag);

        // jumpspin
        const jumpspin = scene.add.image(35, -169, "pufflePopup", "jumpspin");
        this.add(jumpspin);

        // spin
        const spin = scene.add.image(-32, -171, "pufflePopup", "spin");
        this.add(spin);

        // roll
        const roll = scene.add.image(35, -242, "pufflePopup", "roll");
        this.add(roll);

        // turn
        const turn = scene.add.image(-32, -242, "pufflePopup", "turn");
        this.add(turn);

        // nuzzle
        const nuzzle = scene.add.image(-32, -310, "pufflePopup", "nuzzle");
        this.add(nuzzle);

        // speak
        const speak = scene.add.image(35, -310, "pufflePopup", "speak");
        this.add(speak);

        // coinbag (components)
        const coinbagButton = new Button(coinbag);
        coinbagButton.spriteName = "coinbag";

        // jumpspin (components)
        const jumpspinButton = new Button(jumpspin);
        jumpspinButton.spriteName = "jumpspin";
        jumpspinButton.callback = () => {this.playPuffleAnim("jumpspin")};

        // spin (components)
        const spinButton = new Button(spin);
        spinButton.spriteName = "spin";
        spinButton.callback = () => {this.playPuffleAnim("roll")};

        // roll (components)
        const rollButton = new Button(roll);
        rollButton.spriteName = "roll";
        rollButton.callback = () => {this.playPuffleAnim("jumpspin")};

        // turn (components)
        const turnButton = new Button(turn);
        turnButton.spriteName = "turn";
        turnButton.callback = () => {this.playPuffleAnim("jumpforward")};

        // nuzzle (components)
        const nuzzleButton = new Button(nuzzle);
        nuzzleButton.spriteName = "nuzzle";
        nuzzleButton.callback = () => {this.playPuffleAnim("nuzzle")};

        // speak (components)
        const speakButton = new Button(speak);
        speakButton.spriteName = "speak";
        speakButton.callback = () => {this.playPuffleAnim("speak")};

        this.safe = safe;
        this.close = close;

        /* START-USER-CTR-CODE */

        this.initMenu()

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    playPuffleAnim(anim) {
        let penguin = this.world.client.penguin;
        penguin.playPuffleAnim(anim);
    }

    puffleDig(anim) {
        let coins = this.getRandomInt(50, 300);
        this.playPuffleAnim(anim)
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); 
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
