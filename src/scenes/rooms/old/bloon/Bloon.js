import RoomScene from '@scenes/rooms/RoomScene'

/* START OF COMPILED CODE */

export default class Bloon extends RoomScene {

    constructor() {
        super("Bloon");

        /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("bloon-pack", "assets/media/rooms/bloon/bloon-pack.json");
    }

    /** @returns {void} */
    _create() {

        this.events.emit("scene-awake");
    }

    /* START-USER-CODE */

  // Write your code here

  create() {
    super.create();
    var video = this.add.video(-135, 10, "bloon-bg");
    video.setOrigin(0, 0);
    video.setScale(1.4);
    video.setLoop(true);
    video.play();
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
