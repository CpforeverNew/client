
// You can write more code here
import BaseScene from "@scenes/base/BaseScene";
import Button from "@scenes/components/Button";

/* START OF COMPILED CODE */

export default class Dialog extends BaseScene {

    constructor() {
        super("Dialog");

        /** @type {Phaser.GameObjects.Image} */
        this.slade;
        /** @type {Phaser.GameObjects.Image} */
        this.conductor2;
        /** @type {Phaser.GameObjects.Image} */
        this.conductor1;
        /** @type {Phaser.GameObjects.Text} */
        this.dialogText;
        /** @type {Phaser.GameObjects.Text} */
        this.nameText;
        /** @type {Phaser.GameObjects.Container} */
        this.next_button;
        /** @type {Phaser.GameObjects.Container} */
        this.close_button;


        /* START-USER-CTR-CODE */
        // Write your code here.
        this.dialog = 0;
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("dialog-pack", "assets/media/interface/game/dialog/dialog-pack.json");
    }

    /** @returns {void} */
    _create() {

        // rectangle_1
        const rectangle_1 = this.add.rectangle(-18, -8, 128, 128);
        rectangle_1.scaleX = 12.068722172242227;
        rectangle_1.scaleY = 7.663652459884201;
        rectangle_1.setOrigin(-0.01124316128397218, -0.0038338401059435645);
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 0;
        rectangle_1.fillAlpha = 0.4;

        // slade
        const slade = this.add.image(0, 341, "spooky-dialog", "slade1.png");
        slade.setOrigin(-0.001962426270183689, 0.0002678731349108793);
        slade.visible = false;

        // conductor2
        const conductor2 = this.add.image(0, 302, "spooky-dialog", "conductor2.png");
        conductor2.setOrigin(0.00016396864105799452, 0.00010125646810544265);
        conductor2.visible = false;

        // conductor1
        const conductor1 = this.add.image(0, 302, "spooky-dialog", "conductor1.png");
        conductor1.setOrigin(-0.00004407881145655296, -0.0000031595488311736115);

        // speechBubble_png
        const speechBubble_png = this.add.image(519, 653, "dialog", "SpeechBubble.png");
        speechBubble_png.setOrigin(-0.00022484312257626095, 0.00030716366264359435);

        // dialogText
        const dialogText = this.add.text(603, 727, "", {});
        dialogText.text = "All these years, I worked so hard on bringing joy to the island.\nEvery single year that Rockhopper takes all the credit.";
        dialogText.setStyle({ "color": "#45535fff", "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold", "stroke": "#000000ff" });
        dialogText.setPadding({"right":25});
        dialogText.setLineSpacing(15);
        dialogText.setWordWrapWidth(900);

        // nameText
        const nameText = this.add.text(602, 678, "", {});
        nameText.text = "NAME";
        nameText.setStyle({ "color": "#45535fff", "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold", "stroke": "#000000ff" });
        nameText.setPadding({"right":25});
        nameText.setLineSpacing(15);
        nameText.setWordWrapWidth(900);

        // next_button
        const next_button = this.add.container(0, 0);

        // nextbutton
        const nextbutton = this.add.image(1416, 841, "dialog", "nextbutton");
        nextbutton.scaleX = 0.40028184738929246;
        nextbutton.scaleY = 0.4449826224548623;
        next_button.add(nextbutton);

        // text
        const text = this.add.text(1357, 822, "", {});
        text.text = "Next";
        text.setStyle({ "align": "center", "color": "#2d2d2dff", "fixedWidth":120,"fontFamily": "Burbank Small Light", "fontSize": "30px", "fontStyle": "bold", "stroke": "#2d2d2dff", "strokeThickness":0.5,"shadow.stroke":true});
        text.setWordWrapWidth(750);
        next_button.add(text);

        // close_button
        const close_button = this.add.container(0, 0);
        close_button.visible = false;

        // nextbutton_1
        const nextbutton_1 = this.add.image(1416, 841, "dialog", "nextbutton");
        nextbutton_1.scaleX = 0.40028184738929246;
        nextbutton_1.scaleY = 0.4449826224548623;
        close_button.add(nextbutton_1);

        // text_1
        const text_1 = this.add.text(1357, 822, "", {});
        text_1.text = "Close";
        text_1.setStyle({ "align": "center", "color": "#2d2d2dff", "fixedWidth":120,"fontFamily": "Burbank Small Light", "fontSize": "30px", "fontStyle": "bold", "stroke": "#2d2d2dff", "strokeThickness":0.5,"shadow.stroke":true});
        text_1.setWordWrapWidth(750);
        close_button.add(text_1);

        // nextbutton (components)
        const nextbuttonButton = new Button(nextbutton);
        nextbuttonButton.spriteName = "nextbutton";
        nextbuttonButton.callback = () => { this.onNextClick() };

        // nextbutton_1 (components)
        const nextbutton_1Button = new Button(nextbutton_1);
        nextbutton_1Button.spriteName = "nextbutton";
        nextbutton_1Button.callback = () => { this.scene.stop() };

        this.slade = slade;
        this.conductor2 = conductor2;
        this.conductor1 = conductor1;
        this.dialogText = dialogText;
        this.nameText = nameText;
        this.next_button = next_button;
        this.close_button = close_button;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create(){
        this._create();

        this.conductor1.visible = true;
        this.conductor2.visible = false;
        this.slade.visible = false;
        this.dialogText.text = "All these years, I worked so hard on bringing joy to the island. Every single year that Rockhopper takes all the credit.";
        this.nameText.text = "The Dark Conductor";
        this.dialog = 1;
    }

    // Write your code here

    onNextClick() {
        switch (this.dialog) {
            case 1:
                this.conductor1.visible = false;
                this.conductor2.visible = true;
                this.slade.visible = false;
                this.dialogText.text = "No more. I will unleash chaos on the island.";
                this.nameText.text = "The Dark Conductor";
                this.dialog = 2;
                break;

            case 2:
                this.close_button.visible = true;
                this.next_button.visible = false;
                this.conductor1.visible = false;
                this.conductor2.visible = false;
                this.slade.visible = true;
                this.dialogText.text = "I'm coming for you.";
                this.nameText.text = "Slade";
                this.visible = false;
                break;
        }
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