
// You can write more code here

import BaseContainer from "@scenes/base/BaseContainer";
import Button from "@scenes/components/Button";
import Interactive from "@scenes/components/Interactive";
import SimpleButton from "@scenes/components/SimpleButton";

/* START OF COMPILED CODE */

export default class CandyHunt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 673, y ?? 365);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(103, 120, 128, 128);
        rectangle_1.scaleX = 37.00813530775163;
        rectangle_1.scaleY = 20.462035390980397;
        rectangle_1.alpha = 0.2;
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 0;
        this.add(rectangle_1);

        // bg
        const bg = scene.add.image(95, 131, "candyhunt", "bg");
        this.add(bg);

        // continueBtn
        const continueBtn = scene.add.image(95, 323, "candyhunt", "ctnbtn");
        this.add(continueBtn);

        // claim_prize_disabled
        const claim_prize_disabled = scene.add.image(95, 227, "candyhunt", "clmbtn");
        this.add(claim_prize_disabled);

        // claim_prize_active
        const claim_prize_active = scene.add.image(95, 227, "candyhunt", "clmbtn-active");
        claim_prize_active.visible = false;
        this.add(claim_prize_active);

        // candy_stick
        const candy_stick = scene.add.sprite(-248, 103, "candyhunt", "candy/1");
        this.add(candy_stick);

        // candy_cube
        const candy_cube = scene.add.sprite(-144, 103, "candyhunt", "candy/2");
        this.add(candy_cube);

        // candy_corn
        const candy_corn = scene.add.sprite(-37, 100, "candyhunt", "candy/3");
        this.add(candy_corn);

        // candy_borbon
        const candy_borbon = scene.add.sprite(62, 100, "candyhunt", "candy/4");
        this.add(candy_borbon);

        // pumkin
        const pumkin = scene.add.sprite(173, 100, "candyhunt", "candy/5");
        this.add(pumkin);

        // candy_apple
        const candy_apple = scene.add.sprite(260, 96, "candyhunt", "candy/6");
        this.add(candy_apple);

        // candy_bar
        const candy_bar = scene.add.sprite(355, 101, "candyhunt", "candy/7");
        this.add(candy_bar);

        // lollipop
        const lollipop = scene.add.sprite(453, 101, "candyhunt", "candy/8");
        this.add(lollipop);

        // close_button
        const close_button = scene.add.image(472, -86, "candyhunt", "closebtn");
        this.add(close_button);

        // found_text
        const found_text = scene.add.text(-113, -8, "", {});
        found_text.text = "You have found $$ items";
        found_text.setStyle({ "fontSize": "30px" });
        this.add(found_text);

        // rectangle_1 (components)
        new Interactive(rectangle_1);

        // continueBtn (components)
        const continueBtnButton = new Button(continueBtn);
        continueBtnButton.spriteName = "ctnbtn";
        continueBtnButton.callback = () => this.visible = false;

        // claim_prize_active (components)
        const claim_prize_activeSimpleButton = new SimpleButton(claim_prize_active);
        claim_prize_activeSimpleButton.callback = () => this.interface.prompt.showItem(246);

        // close_button (components)
        const close_buttonButton = new Button(close_button);
        close_buttonButton.spriteName = "closebtn";
        close_buttonButton.callback = () => this.visible = false;

        this.claim_prize_disabled = claim_prize_disabled;
        this.claim_prize_active = claim_prize_active;
        this.candy_stick = candy_stick;
        this.candy_cube = candy_cube;
        this.candy_corn = candy_corn;
        this.candy_borbon = candy_borbon;
        this.pumkin = pumkin;
        this.candy_apple = candy_apple;
        this.candy_bar = candy_bar;
        this.lollipop = lollipop;
        this.found_text = found_text;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    claim_prize_disabled;
    /** @type {Phaser.GameObjects.Image} */
    claim_prize_active;
    /** @type {Phaser.GameObjects.Sprite} */
    candy_stick;
    /** @type {Phaser.GameObjects.Sprite} */
    candy_cube;
    /** @type {Phaser.GameObjects.Sprite} */
    candy_corn;
    /** @type {Phaser.GameObjects.Sprite} */
    candy_borbon;
    /** @type {Phaser.GameObjects.Sprite} */
    pumkin;
    /** @type {Phaser.GameObjects.Sprite} */
    candy_apple;
    /** @type {Phaser.GameObjects.Sprite} */
    candy_bar;
    /** @type {Phaser.GameObjects.Sprite} */
    lollipop;
    /** @type {Phaser.GameObjects.Text} */
    found_text;

    /* START-USER-CODE */

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
