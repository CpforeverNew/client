import SpriteLoader from "./SpriteLoader";
import PuffleLoader from "./PuffleLoader";

export default class PenguinLoader extends SpriteLoader {
  constructor(world) {
    super(world);

    this.nameStyle = {
      fontFamily: "Burbank Small",
      fontSize: 24,
      color: "#000000",
      align: "center",
      fixedWidth: 250,
    };
  }

  loadPenguin(penguin) {
    this.ploader = new PuffleLoader(penguin);

    this.addPenguin(penguin);
    this.addShadow(penguin);
    this.addInput(penguin);
  }

  addPenguin(penguin) {
    this.loadSprite(penguin, "penguin_body", 1);
    this.loadSprite(penguin, "penguin", 2);
  }

  addShadow(penguin) {
    let shadow = penguin.room.add.image(0, 0, "penguin_base", "shadow");

    penguin.addAt(shadow, 0);
  }

  addRing(penguin) {
    let ring = penguin.room.add.image(0, 0, "penguin_base", "ring");

    penguin.addAt(ring, 0);
  }

  addName(penguin) {
    let x = penguin.x;
    let y = penguin.y + 40;
    if (penguin.username_approved == 1) {
      var nameTag = penguin.room.add.text(
        x,
        y,
        penguin.username,
        this.nameStyle
      );
    }
    if (penguin.username_approved != 1) {
      var nameTag = penguin.room.add.text(
        x,
        y,
        "P" + penguin.id,
        this.nameStyle
      );
    }

    nameTag.setOrigin(0.5);
    nameTag.depth = penguin.depth + 2000; // Keep nametag above everything else

    return nameTag;
  }

  addInput(penguin) {
    let hitArea = new Phaser.Geom.Ellipse(0, -20, 70, 90);

    penguin.setInteractive({
      cursor: "pointer",
      hitArea: hitArea,
      hitAreaCallback: Phaser.Geom.Ellipse.Contains,
    });

    penguin.on("pointerup", () => this.onPenguinClick(penguin.id));

    penguin.on("pointerdown", () =>
      this.onPenguinDrag(penguin.id, this.world.input.activePointer)
    );
    penguin.on("pointerup", () => this.onPenguinDragEnd(penguin.id));
  }

  onPenguinClick(id) {
    // check if shift is pressed
    var keyObj = this.world.room.input.keyboard.addKey("SHIFT"); // Get key object
    var isDown = this.world.room.input.keyboard.checkDown(keyObj);

    if (!isDown) {
      this.world.interface.showCard(id);
    }
  }

  onPenguinDrag(id, pointer) {
    if (this.world.client.penguin.rank < 5) {
      return;
    }
    // check if shift is pressed
    var keyObj = this.world.room.input.keyboard.addKey("SHIFT"); // Get key object
    var isDown = this.world.room.input.keyboard.checkDown(keyObj);

    if (isDown) {
      this.world.input.on("pointermove", (pointer) =>
        this.onPenguinDragMove(id, pointer)
      );
    }
  }

  onPenguinDragMove(id, pointer) {
    this.world.room.penguins[id].x = pointer.x;
    this.world.room.penguins[id].y = pointer.y;

    // update the name tag position
    this.world.room.penguins[id].nameTag.x = pointer.x;
    this.world.room.penguins[id].nameTag.y = pointer.y + 40;
  }

  onPenguinDragEnd(id) {
    this.world.input.off("pointermove");
    this.world.input.off("pointerup");
    this.world.network.send("send_drag_position", {
      playerID: id,
      x: this.world.room.penguins[id].x,
      y: this.world.room.penguins[id].y,
    });
  }

  addPuffle(penguin, puffle) {
    let color = this.world.crumbs.puffles[puffle].name;
    this.ploader.loadPuffle(penguin, color);
  }

  loadPuffle(penguin, color) {
    if (!penguin.puffle || !penguin.active || penguin.hasPuffle) return;

    penguin.pufflesprite = penguin.room.add.sprite(
      60,
      0,
      `puffle_${color}`,
      "1_1"
    );
    penguin.pufflesprite.depth = 3;

    penguin.add(penguin.pufflesprite);
    penguin.pufflesprite.color = color;
    penguin.hasPuffle = true;

    if (this.world.client.penguin.id == this.world.room.id) {
      this.addPuffleInput(penguin);
    }
  }

  addPuffleInput(penguin) {
    // creates the hitbox to open the puffle care menu
    penguin.pufflesprite.hitArea = new Phaser.Geom.Ellipse(25, 25, 50, 50);
    penguin.pufflesprite.setInteractive({
      cursor: "pointer",
      hitArea: penguin.pufflesprite.hitArea,
      hitAreaCallback: Phaser.Geom.Ellipse.Contains,
    });
    penguin.pufflesprite.on("pointerup", () =>
      this.onPuffleClick(penguin.puffle)
    );
    penguin.pufflesprite.isButton = true;
  }

  onPuffleClick(puffle) {
    // sends a packet to the server which requests the wellbeing information for the care menu to use
    this.world.network.send("get_wellbeing", {
      puffle: puffle,
    });
  }
}
