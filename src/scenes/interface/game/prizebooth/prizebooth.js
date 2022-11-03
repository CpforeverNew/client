import BaseScene from '@scenes/base/BaseScene'
import {Animation, Button, SimpleButton, Interactive} from '@components/components'

// You can write more code here

/* START OF COMPILED CODE */

export default class prizebooth extends BaseScene {

    constructor() {
        super("PrizeBooth");

        /** @type {Phaser.GameObjects.Text} */
        this.tickets;


        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("prize-pack", "assets/media/interface/game/prizebooth/prize-pack.json");
        this.load.pack("telescope-pack", "assets/media/interface/game/telescope/telescope-pack.json");
    }

    /** @returns {void} */
    _create() {

        // container_1
        const container_1 = this.add.container(413, 302);

        // bg
        const bg = this.add.image(344, 0, "prizebooth", "bg");
        container_1.add(bg);

        // penguin_inner
        const penguin_inner = this.add.image(74, 415, "prizebooth", "penguin inner");
        penguin_inner.scaleX = 1.0014241660778906;
        penguin_inner.scaleY = 1.0014241660778906;
        penguin_inner.angle = -2;
        container_1.add(penguin_inner);

        // penguin_right_arm
        const penguin_right_arm = this.add.image(186, 507, "prizebooth", "penguin right arm");
        penguin_right_arm.scaleX = 0.530875295134773;
        penguin_right_arm.scaleY = 0.530875295134773;
        container_1.add(penguin_right_arm);

        // penguin_outer
        const penguin_outer = this.add.image(47, 397, "prizebooth", "penguin outer");
        container_1.add(penguin_outer);

        // rectangle_1
        const rectangle_1 = this.add.rectangle(143, 552, 128, 128);
        rectangle_1.scaleX = 1.7371316328625357;
        rectangle_1.scaleY = 0.02915448353957772;
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 0;
        container_1.add(rectangle_1);

        // rectangle
        const rectangle = this.add.rectangle(219, 552, 128, 128);
        rectangle.scaleX = 1.7371316328625357;
        rectangle.scaleY = -0.030515417476072615;
        rectangle.isFilled = true;
        rectangle.fillColor = 0;
        container_1.add(rectangle);

        // face_ghost0001
        const face_ghost0001 = this.add.sprite(891, 1004, "prizebooth", "face ghost0001");
        face_ghost0001.scaleX = 1.2529759730265984;
        face_ghost0001.scaleY = 1.2529759730265984;

        // rectangle_2
        const rectangle_2 = this.add.rectangle(199, 790, 128, 128);
        rectangle_2.scaleX = 2.0683990799814773;
        rectangle_2.scaleY = 2.725701582118213;
        rectangle_2.alpha = 0.0001;
        rectangle_2.isFilled = true;

        // closebtn
        const closebtn = this.add.sprite(1440, 53, "telescope", "closebtn");

        // rectangle_3
        const rectangle_3 = this.add.rectangle(253, 327, 128, 128);
        rectangle_3.scaleX = 2.0683990799814773;
        rectangle_3.scaleY = 2.725701582118213;
        rectangle_3.alpha = 0.0001;
        rectangle_3.isFilled = true;

        // rectangle_4
        const rectangle_4 = this.add.rectangle(756, 466, 128, 128);
        rectangle_4.scaleX = 4.510593677751949;
        rectangle_4.scaleY = 5.170462858011434;
        rectangle_4.alpha = 0.0001;
        rectangle_4.isFilled = true;

        // rectangle_5
        const rectangle_5 = this.add.rectangle(1237, 397, 128, 128);
        rectangle_5.scaleX = 2.0882078853263466;
        rectangle_5.scaleY = 2.152659354351799;
        rectangle_5.alpha = 0.0001;
        rectangle_5.isFilled = true;

        // rectangle_6
        const rectangle_6 = this.add.rectangle(1227, 786, 128, 128);
        rectangle_6.scaleX = 2.0882078853263466;
        rectangle_6.scaleY = 2.152659354351799;
        rectangle_6.alpha = 0.0001;
        rectangle_6.isFilled = true;

        // tickets
        const tickets = this.add.text(547, 881, "", {});
        tickets.text = "Tickets: ";
        tickets.setStyle({ "fontFamily": "Burbank Small", "fontSize": "50px" });

        // face_ghost0001 (components)
        const face_ghost0001Animation = new Animation(face_ghost0001);
        face_ghost0001Animation.key = "face ghost";
        face_ghost0001Animation.end = 348;

        // rectangle_2 (components)
        const rectangle_2SimpleButton = new SimpleButton(rectangle_2);
        rectangle_2SimpleButton.callback = () => this.crab();

        // closebtn (components)
        const closebtnButton = new Button(closebtn);
        closebtnButton.spriteName = "closebtn";
        closebtnButton.callback = () => this.scene.stop();

        // rectangle_3 (components)
        const rectangle_3SimpleButton = new SimpleButton(rectangle_3);
        rectangle_3SimpleButton.callback = () => this.ghost();

        // rectangle_4 (components)
        const rectangle_4SimpleButton = new SimpleButton(rectangle_4);
        rectangle_4SimpleButton.callback = () => this.puffle();

        // rectangle_5 (components)
        const rectangle_5SimpleButton = new SimpleButton(rectangle_5);
        rectangle_5SimpleButton.callback = () => this.mask();

        // rectangle_6 (components)
        const rectangle_6SimpleButton = new SimpleButton(rectangle_6);
        rectangle_6SimpleButton.callback = () => this.body();

        this.tickets = tickets;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create(){
        this._create();

        this.network.send("get_user_tickets")

        this.tickets.text = "Tickets: " + this.interface.main.tickets.text;
    }

    crab(){
        this.interface.prompt.showItem(35016, 25000)
        this.scene.stop()
    }

    ghost(){
        this.interface.prompt.showItem(36104, 5000)
        this.scene.stop()
    }

    puffle(){
        this.interface.prompt.showItem(36102, 12000)
        this.scene.stop()
    }

    mask(){
        this.interface.prompt.showItem(36101, 5000)
        this.scene.stop()
    }

    body() {
        this.interface.prompt.showItem(36100, 7500)
        this.scene.stop()
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
