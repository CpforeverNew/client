import BaseContainer from "@scenes/base/BaseContainer";

import { NineSlice } from '@components/components'

import SingleButton from './buttons/SingleButton'

/* START OF COMPILED CODE */

export default class FurniturePrompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 720, y ?? 512);

        /** @type {Phaser.GameObjects.Text} */
        this.name;
        /** @type {SingleButton} */
        this.singleButton;


        this.visible = false;

        // bg
        const bg = scene.add.rectangle(76.58309116834062, 0, 750, 360);
        bg.isFilled = true;
        bg.fillColor = 164045;
        this.add(bg);

        // name
        const name = scene.add.text(75, -92, "", {});
        name.setOrigin(0.5, 0.5);
        name.text = "random name\n";
        name.setStyle({ "align": "center", "color": "#000000", "fixedWidth":420,"fontFamily": "Burbank Small", "fontSize": "32px" });
        this.add(name);

        // singleButton
        const singleButton = new SingleButton(scene, 75, 96);
        this.add(singleButton);

        // text
        const text = scene.add.text(-154, -49, "", {});
        text.text = "has been added to your igloo inventory.";
        text.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "25px" });
        this.add(text);

        // bg (components)
        const bgNineSlice = new NineSlice(bg);
        bgNineSlice.corner = 50;

        this.name = name;
        this.singleButton = singleButton;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(furnitureID) {
        this.visible = true;

        this.name.text = this.crumbs.furniture[furnitureID].name;
        this.singleButton.callback = () => { this.visible = false };
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
