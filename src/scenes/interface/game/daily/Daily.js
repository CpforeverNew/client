import BaseContainer from '@scenes/base/BaseContainer'
import { Button } from '@components/components'
// You can write more code here

/* START OF COMPILED CODE */

export default class Daily extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(747, 489, 128, 128);
        rectangle_1.scaleX = 12.32593886918683;
        rectangle_1.scaleY = 7.834142659641338;
        rectangle_1.alpha = 0.2;
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 0;
        this.add(rectangle_1);

        // bg_png
        const bg_png = scene.add.image(768, 480, "daily", "bg");
        this.add(bg_png);

        // claim_button
        const claim_button = scene.add.sprite(756, 656, "daily", "claim_button");
        this.add(claim_button);

        // gift_png
        const gift_png = scene.add.image(759, 475, "daily", "gift");
        this.add(gift_png);

        // claim_button (components)
        const claim_buttonButton = new Button(claim_button);
        claim_buttonButton.spriteName = "claim_button";
        claim_buttonButton.callback = () => this.claimDaily();

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    claimDaily() {

        this.visible = false
        this.world.network.send('claimDailyReward')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
