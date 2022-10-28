
// You can write more code here
import BaseScene from '@scenes/base/BaseScene'
import {Button, Interactive, SimpleButton} from '@components/components'
/* START OF COMPILED CODE */

export default class prizebooth2 extends BaseScene {

    constructor() {
        super("PrizeBooth2");

        /** @type {Phaser.GameObjects.Text} */
        this.tickets;


        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("booth2-pack", "assets/media/interface/game/prizebooth2/booth2-pack.json");
    }

    /** @returns {void} */
    _create() {

        // rectangle_1
        const rectangle_1 = this.add.rectangle(799, 511, 128, 128);
        rectangle_1.scaleX = 13.633051271826252;
        rectangle_1.scaleY = 13.633051271826252;
        rectangle_1.isFilled = true;

        // bg_1
        this.add.image(760, 480, "booth2", "bg");

        // closebtn
        const closebtn = this.add.sprite(1440, 53, "booth2", "closebtn");

        // rectangle_7
        const rectangle_7 = this.add.rectangle(761, 928, 128, 128);
        rectangle_7.scaleX = 4.500446100594491;
        rectangle_7.isFilled = true;
        rectangle_7.fillColor = 13413469;

        // tickets
        const tickets = this.add.text(547, 881, "", {});
        tickets.text = "Tickets: ";
        tickets.setStyle({ "fontFamily": "Burbank Small", "fontSize": "50px" });

        // antennae
        const antennae = this.add.rectangle(288, 264, 128, 128);
        antennae.scaleX = 2.1482096053670148;
        antennae.scaleY = 3.643819274375406;

        // bg
        const bg = this.add.rectangle(292, 842, 128, 128);
        bg.scaleX = 2.1482096053670148;
        bg.scaleY = 1.7390165394813715;

        // batwings
        const batwings = this.add.rectangle(1231, 202, 128, 128);
        batwings.scaleX = 2.4664612934535706;
        batwings.scaleY = 2.3368025045616494;

        // bg_2
        const bg_2 = this.add.rectangle(787, 290, 128, 128);
        bg_2.scaleX = 2.1482096053670148;
        bg_2.scaleY = 1.7390165394813715;

        // bg_3
        const bg_3 = this.add.rectangle(773, 605, 128, 128);
        bg_3.scaleX = 4.228723365320141;
        bg_3.scaleY = 2.7188681685189926;

        // bg_4
        const bg_4 = this.add.rectangle(1126, 642, 128, 128);
        bg_4.scaleX = 1.4182637201153612;
        bg_4.scaleY = 1.4602141246012472;

        // bg_5
        const bg_5 = this.add.rectangle(1348, 767, 128, 128);
        bg_5.scaleX = 1.5360832068915964;
        bg_5.scaleY = 3.258238866443201;

        // bg_6
        const bg_6 = this.add.rectangle(263, 590, 128, 128);
        bg_6.scaleX = 2.9558149981210002;
        bg_6.scaleY = 1.1577559078420632;

        // rectangle_1 (components)
        new Interactive(rectangle_1);

        // closebtn (components)
        const closebtnButton = new Button(closebtn);
        closebtnButton.spriteName = "closebtn";
        closebtnButton.callback = () => this.scene.stop();

        // antennae (components)
        const antennaeSimpleButton = new SimpleButton(antennae);
        antennaeSimpleButton.callback = () => {this.antennae()};

        // bg (components)
        const bgSimpleButton = new SimpleButton(bg);
        bgSimpleButton.callback = () => {this.bg()};

        // batwings (components)
        const batwingsSimpleButton = new SimpleButton(batwings);
        batwingsSimpleButton.callback = () => {this.batwings()};

        // bg_2 (components)
        const bg_2SimpleButton = new SimpleButton(bg_2);
        bg_2SimpleButton.callback = () => {this.ringmasterhat()};

        // bg_3 (components)
        const bg_3SimpleButton = new SimpleButton(bg_3);
        bg_3SimpleButton.callback = () => {this.ringmasteroutfit()};

        // bg_4 (components)
        const bg_4SimpleButton = new SimpleButton(bg_4);
        bg_4SimpleButton.callback = () => {this.paddle()};

        // bg_5 (components)
        const bg_5SimpleButton = new SimpleButton(bg_5);
        bg_5SimpleButton.callback = () => {this.bighat()};

        // bg_6 (components)
        const bg_6SimpleButton = new SimpleButton(bg_6);
        bg_6SimpleButton.callback = () => {this.candyapple()};

        this.tickets = tickets;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        this._create();

        this.network.send("get_user_tickets")

        this.tickets.text = "Tickets: " + this.interface.main.tickets.text;        
    }

    updateTickets() {
        this.network.send("get_user_tickets")

        this.tickets.text = "Tickets: " + this.interface.main.tickets.text;    
    }

    batwings() {
        this.interface.prompt.showItem(1191, 500)
        this.scene.stop()
    }

    ringmasterhat() {
        this.interface.prompt.showItem(1083, 700)
        this.scene.stop()

    }

    ringmasteroutfit() {
        this.interface.prompt.showItem(4119, 1000)
        this.scene.stop()

    }

    paddle() {
        this.interface.prompt.showItem(326, 110)
        this.scene.stop()

    }

    bg() {
        this.interface.prompt.showItem(9041, 500)
        this.scene.stop()

    }

    candyapple() {
        this.interface.prompt.showItem(5005, 200)
        this.scene.stop()

    }

    antennae() {
        this.interface.prompt.showItem(1096, 500)
        this.scene.stop()

    }

    bighat() {
        this.interface.prompt.showItem(1080, 700)
        this.scene.stop()

    }
    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
