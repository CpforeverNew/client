
// You can write more code here
import BaseScene from "@scenes/base/BaseScene";
import Button from "@scenes/components/Button";

/* START OF COMPILED CODE */

export default class Dialog extends BaseScene {

    constructor() {
        super("Dialog");

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
        const dialogText = this.add.text(603, 693, "", {});
        dialogText.text = "All these years, I worked so hard on bringing joy to the island.\nEvery single year that Rockhopper takes all the credit.";
        dialogText.setStyle({ "color": "#45535fff", "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold", "stroke": "#000000ff" });
        dialogText.setPadding({"right":25});
        dialogText.setLineSpacing(15);
        dialogText.setWordWrapWidth(900);

        // nextbutton
        const nextbutton = this.add.image(1420, 843, "dialog", "nextbutton");
        nextbutton.scaleX = 0.40028184738929246;
        nextbutton.scaleY = 0.4449826224548623;

        // text
        const text = this.add.text(1382, 820, "", {});
        text.text = "Next";
        text.setStyle({ "align": "center", "color": "#2d2d2dff", "fontFamily": "Burbank Small Light", "fontSize": "36px", "fontStyle": "bold", "stroke": "#2d2d2dff", "strokeThickness":0.5,"shadow.stroke":true});
        text.setWordWrapWidth(750);

        // dialogText_1
        const dialogText_1 = this.add.text(603, 820, "", {});
        dialogText_1.setStyle({ "color": "#45535fff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold", "stroke": "#45535fff" });
        dialogText_1.setWordWrapWidth(850);

        // nextbutton (components)
        const nextbuttonButton = new Button(nextbutton);
        nextbuttonButton.spriteName = "nextbutton";
        nextbuttonButton.callback = () => { this.onNextClick() };

        this.conductor1 = conductor1;
        this.conductor2 = conductor2;
        this.slade = slade;
        this.dialogText = dialogText;
        this.nextbuttonButton = nextbuttonButton;
        this.nextbutton = nextbutton;
        this.text = text;

        this.events.emit("scene-awake");
    }

    /* START-USER-CODE */

    // Write your code here

    onNextClick() {
        switch (this.dialog) {
            case 0:
                this.conductor1.visible = true;
                this.conductor2.visible = false;
                this.slade.visible = false;
                this.dialogText.text = "All these years, I worked so hard on bringing joy to the island. Every single year that Rockhopper takes all the credit.";
                this.dialog = 1;
                break;

            case 1:
                this.conductor1.visible = false;
                this.conductor2.visible = true;
                this.slade.visible = false;
                this.dialogText.text = "No more. I will unleash chaos on the island.";
                this.dialog = 2;
                break;

            case 2:
                this.text.text = "Close";
                this.conductor1.visible = false;
                this.conductor2.visible = false;
                this.slade.visible = true;
                this.dialogText.text = "I'm coming for you.";
                this.visible = false;
                break;

            default:
                this.conductor1.visible = true;
                this.conductor2.visible = false;
                this.slade.visible = false;
                this.dialogText.text = "All these years, I worked so hard on bringing joy to the island. Every single year that Rockhopper takes all the credit.";
                break;
        }
    }

    create() {

        this._create()
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