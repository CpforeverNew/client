import FloatingMenu from '../FloatingMenu'

import { Button } from '@components/components'


/* START OF COMPILED CODE */

export default class ActionsMenu extends FloatingMenu {

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

        // actions
        const actions = scene.add.image(0, -198, "main", "actions");
        this.add(actions);

        // sit_4
        const sit_4 = scene.add.image(42, -30, "main", "small-box");
        sit_4.scaleX = 0.6;
        sit_4.scaleY = 0.6;
        this.add(sit_4);

        // sit_3
        const sit_3 = scene.add.image(42, -112, "main", "small-box");
        sit_3.scaleX = 0.6;
        sit_3.scaleY = 0.6;
        this.add(sit_3);

        // sit_2
        const sit_2 = scene.add.image(-41, -112, "main", "small-box");
        sit_2.scaleX = 0.6;
        sit_2.scaleY = 0.6;
        this.add(sit_2);

        // sit_1
        const sit_1 = scene.add.image(-41, -30, "main", "small-box");
        sit_1.scaleX = 0.6;
        sit_1.scaleY = 0.6;
        this.add(sit_1);

        // sit_right_1
        const sit_right_1 = scene.add.image(0, -29, "main", "small-box");
        sit_right_1.scaleX = 0.6;
        sit_right_1.scaleY = 0.6;
        this.add(sit_right_1);

        // sit_right
        const sit_right = scene.add.image(42, -71, "main", "small-box");
        sit_right.scaleX = 0.6;
        sit_right.scaleY = 0.6;
        this.add(sit_right);

        // sit_right_2
        const sit_right_2 = scene.add.image(-41, -71, "main", "small-box");
        sit_right_2.scaleX = 0.6;
        sit_right_2.scaleY = 0.6;
        this.add(sit_right_2);

        // sit
        const sit = scene.add.image(0, -112, "main", "small-box");
        sit.scaleX = 0.6;
        sit.scaleY = 0.6;
        this.add(sit);

        // wave
        const wave = scene.add.image(0, -198, "main", "large-box");
        this.add(wave);

        // dance
        const dance = scene.add.image(0, -326, "main", "large-box");
        this.add(dance);

        // wave_icon
        const wave_icon = scene.add.image(0, -198, "main", "wave");
        this.add(wave_icon);

        // sit_icon
        const sit_icon = scene.add.image(1, -68, "main", "sit");
        this.add(sit_icon);

        // dance_icon
        const dance_icon = scene.add.image(0, -326, "main", "dance");
        this.add(dance_icon);

        // sit_4 (components)
        const sit_4Button = new Button(sit_4);
        sit_4Button.spriteName = "small-box";
        sit_4Button.callback = () => this.onActionClick(24);
        sit_4Button.activeFrame = false;

        // sit_3 (components)
        const sit_3Button = new Button(sit_3);
        sit_3Button.spriteName = "small-box";
        sit_3Button.callback = () => this.onActionClick(22);
        sit_3Button.activeFrame = false;

        // sit_2 (components)
        const sit_2Button = new Button(sit_2);
        sit_2Button.spriteName = "small-box";
        sit_2Button.callback = () => this.onActionClick(20);
        sit_2Button.activeFrame = false;

        // sit_1 (components)
        const sit_1Button = new Button(sit_1);
        sit_1Button.spriteName = "small-box";
        sit_1Button.callback = () => this.onActionClick(18);
        sit_1Button.activeFrame = false;

        // sit_right_1 (components)
        const sit_right_1Button = new Button(sit_right_1);
        sit_right_1Button.spriteName = "small-box";
        sit_right_1Button.callback = () => this.onActionClick(17);
        sit_right_1Button.activeFrame = false;

        // sit_right (components)
        const sit_rightButton = new Button(sit_right);
        sit_rightButton.spriteName = "small-box";
        sit_rightButton.callback = () => this.onActionClick(23);
        sit_rightButton.activeFrame = false;

        // sit_right_2 (components)
        const sit_right_2Button = new Button(sit_right_2);
        sit_right_2Button.spriteName = "small-box";
        sit_right_2Button.callback = () => this.onActionClick(19);
        sit_right_2Button.activeFrame = false;

        // sit (components)
        const sitButton = new Button(sit);
        sitButton.spriteName = "small-box";
        sitButton.callback = () => this.onActionClick(21);
        sitButton.activeFrame = false;

        // wave (components)
        const waveButton = new Button(wave);
        waveButton.spriteName = "large-box";
        waveButton.callback = () => this.onActionClick(25, false);
        waveButton.activeFrame = false;

        // dance (components)
        const danceButton = new Button(dance);
        danceButton.spriteName = "large-box";
        danceButton.callback = () => this.onActionClick(26);
        danceButton.activeFrame = false;

        this.safe = safe;
        this.close = close;

        /* START-USER-CTR-CODE */

        this.initMenu()

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    onActionClick(frame, set = true) {
        this.world.client.sendFrame(frame, set)
        this.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
