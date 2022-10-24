import BaseScene from '@scenes/base/BaseScene'
import { Animation, Button } from '@components/components'

// You can write more code here

/* START OF COMPILED CODE */

export default class prizebooth extends BaseScene {

    constructor() {
        super("PrizeBooth");

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("prize-pack", "assets/media/interface/game/prizebooth/prize-pack.json");
    }

    /** @returns {void} */
    create() {

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

        // closebtn
        const closebtn = this.add.image(1441, 64, "telescope", "closebtn");

        // face_ghost0001 (components)
        const face_ghost0001Animation = new Animation(face_ghost0001);
        face_ghost0001Animation.key = "face ghost";
        face_ghost0001Animation.end = 348;

        // closebtn (components)
        new Button(closebtn);

        this.events.emit("scene-awake");
    }

    /* START-USER-CODE */
    setTickets() {
        this.tickets_1.text = this.world.client.penguin.tickets;    
    }
    // Write your code here
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
