
// You can write more code here

import BaseScene from "@scenes/base/BaseScene";
import Button from "@scenes/components/Button";
import Interactive from "@scenes/components/Interactive";

/* START OF COMPILED CODE */

export default class MazeMap extends BaseScene {

    constructor() {
        super("MazeMap");

        /** @type {Phaser.GameObjects.Sprite} */
        this.maze_map;
        /** @type {Phaser.GameObjects.Image} */
        this.show_button;
        /** @type {Phaser.GameObjects.Image} */
        this.hide_button;


        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("mazemap-pack", "assets/media/interface/game/maze_map/mazemap-pack.json");
    }

    /** @returns {void} */
    create() {

        // block
        const block = this.add.rectangle(770, 526, 1520, 960);
        block.scaleX = 1.0519071908795616;
        block.scaleY = 1.2143341261502665;
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;

        // maze_map
        const maze_map = this.add.sprite(757, 862, "maze_map", "maze_map0001");

        // grey_button
        const grey_button = this.add.image(1421, 75, "main", "grey-button");

        // grey_x
        this.add.image(1423, 74, "main", "grey-x");

        // show_button
        const show_button = this.add.image(1359, 809, "maze_map", "show_button");

        // hide_button
        const hide_button = this.add.image(1359, 809, "maze_map", "hide_button");

        // block (components)
        new Interactive(block);

        // grey_button (components)
        const grey_buttonButton = new Button(grey_button);
        grey_buttonButton.spriteName = "grey-button";
        grey_buttonButton.callback = () => this.scene.stop();;

        // show_button (components)
        const show_buttonButton = new Button(show_button);
        show_buttonButton.spriteName = "show_button";
        show_buttonButton.callback = () => this.showMap();

        // hide_button (components)
        const hide_buttonButton = new Button(hide_button);
        hide_buttonButton.spriteName = "hide_button";
        hide_buttonButton.callback = () => this.onHideMap();

        this.maze_map = maze_map;
        this.show_button = show_button;
        this.hide_button = hide_button;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    init() {
        this.load.on('start', this.showLoading, this)
        this.events.on('showloading', this.showLoading, this)
    }

    showLoading() {
        this.interface.prompt.showLoading(this, this.load.progress)
    }

    onHideMap() {
        this.hide_button.visible = false;
        this.show_button.visible = true;
        this.maze_map.play("maze_map_close");
    }

    showMap() {
        this.hide_button.visible = true;
        this.show_button.visible = false;
        this.maze_map.play("maze_map_open");
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
