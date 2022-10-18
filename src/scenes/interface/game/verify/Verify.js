
import BaseScene from "@scenes/base/BaseScene";
import {Button} from "@components/components";

/* START OF COMPILED CODE */

export default class Verify extends BaseScene {

    constructor() {
        super("Verify");

        /** @type {Phaser.GameObjects.Sprite} */
        this.verifyPopUp000;


        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("verify-pack", "assets/media/interface/game/verify/verify-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(1198, 515, "verify", "bg");
        bg.scaleX = 0.834;
        bg.scaleY = 0.83;

        // verifyPopUp000
        const verifyPopUp000 = this.add.sprite(1196, 513, "verify", "VerifyPopUp000");

        // verify_btn
        const verify_btn = this.add.image(1374, 654, "verify", "verify-btn");

        // verify_btn (components)
        const verify_btnButton = new Button(verify_btn);
        verify_btnButton.spriteName = "verify-btn";
        verify_btnButton.callback = () => window.open('https://cpforever.org/manage', '_blank').focus();

        this.verifyPopUp000 = verifyPopUp000;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        this._create()

        this.verifyPopUp000.play("VerifyPopUp")
    }

    init() {
        this.load.on('start', this.showLoading, this)
        this.events.on('showloading', this.showLoading, this)
    }

    showLoading() {
        this.interface.prompt.showLoading(this, this.load.progress)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
