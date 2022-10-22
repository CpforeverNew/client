import RoomScene from '@scenes/rooms/RoomScene'

import { Button, MoveTo, ShowHint, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Book extends RoomScene {

    constructor() {
        super("Book");

        /** @type {Phaser.GameObjects.Sprite} */
        this.books0001;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'coffee': () => this.triggerRoom(110, 1120, 800),
            'vault': () => {
                if (this.vaultTriggerEnabled) {
                         this.triggerRoom(8008415, 1000, 600)
                }
            }
        }
        this.music = 'coffee'
        this.roomAnims = true;
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("book-pack", "assets/media/rooms/spooky_fair/book/book-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_1
        this.add.image(767, 481, "book_halloween", "bg");

        // chair_table
        const chair_table = this.add.image(132, 722, "book", "chair_table");
        chair_table.setOrigin(0.5069124423963134, 0.5103734439834025);

        // table
        const table = this.add.image(951, 446, "book", "table");
        table.setOrigin(0.5043478260869565, 0.46);

        // table_1
        const table_1 = this.add.image(650, 444, "book", "table");
        table_1.setOrigin(0.5043478260869565, 0.46);

        // table_2
        const table_2 = this.add.image(430, 644, "book", "table");
        table_2.setOrigin(0.5043478260869565, 0.46);

        // table_4
        const table_4 = this.add.image(1210, 743, "book", "table");
        table_4.setOrigin(0.5043478260869565, 0.46);

        // books0001
        const books0001 = this.add.sprite(300, 362, "book_halloween", "door0001");

        // rightcouch
        this.add.image(602, 346, "book_halloween", "rightcouch");

        // leaf
        this.add.image(89, 532, "book_halloween", "leaf");

        // chairback
        const chairback = this.add.image(171, 597, "book_halloween", "chairback");

        // chair
        const chair = this.add.image(221.0029729070796, 633.0421856925741, "book_halloween", "chair");
        chair.setOrigin(0.6718192639078396, 0.39906062912246487);

        // table_3
        const table_3 = this.add.image(171.0029729070796, 758.8508636224509, "book_halloween", "table");
        table_3.setOrigin(0.6797372023367724, 0.6653562805910825);

        // table_5
        const table_5 = this.add.image(797.456718149923, 684.6519382200925, "book", "table");
        table_5.setOrigin(0.45614537521672127, 0.5265193822009246);

        // hat
        const hat = this.add.image(322.8789978027344, 840.4341331519257, "book_halloween", "hat");
        hat.setOrigin(4.837579728381614, 4.203547922706081);
        hat.flipX = true;

        // triangle_1
        const triangle_1 = this.add.triangle(109, 628, 0, 128, 64, 0, 128, 128);
        triangle_1.angle = -15;
        triangle_1.isFilled = true;

        // lists
        const sort = [table_4, table_2, table_1, table, chair_table, table_3, chair, chairback, table_5, hat];

        // table (components)
        const tableButton = new Button(table);
        tableButton.spriteName = "table";
        tableButton.activeFrame = false;
        tableButton.pixelPerfect = true;
        new MoveTo(table);
        const tableShowHint = new ShowHint(table);
        tableShowHint.text = "Play Mancala";

        // table_1 (components)
        const table_1Button = new Button(table_1);
        table_1Button.spriteName = "table";
        table_1Button.activeFrame = false;
        table_1Button.pixelPerfect = true;
        new MoveTo(table_1);
        const table_1ShowHint = new ShowHint(table_1);
        table_1ShowHint.text = "Play Mancala";

        // table_2 (components)
        const table_2Button = new Button(table_2);
        table_2Button.spriteName = "table";
        table_2Button.activeFrame = false;
        table_2Button.pixelPerfect = true;
        new MoveTo(table_2);
        const table_2ShowHint = new ShowHint(table_2);
        table_2ShowHint.text = "Play Mancala";

        // table_4 (components)
        const table_4Button = new Button(table_4);
        table_4Button.spriteName = "table";
        table_4Button.activeFrame = false;
        table_4Button.pixelPerfect = true;
        new MoveTo(table_4);
        const table_4ShowHint = new ShowHint(table_4);
        table_4ShowHint.text = "Play Mancala";

        // books0001 (components)
        const books0001MoveTo = new MoveTo(books0001);
        books0001MoveTo.x = 365;
        books0001MoveTo.y = 479;

        // table_5 (components)
        const table_5Button = new Button(table_5);
        table_5Button.spriteName = "table";
        table_5Button.activeFrame = false;
        table_5Button.pixelPerfect = true;
        new MoveTo(table_5);
        const table_5ShowHint = new ShowHint(table_5);
        table_5ShowHint.text = "Play Mancala";

        // triangle_1 (components)
        const triangle_1SimpleButton = new SimpleButton(triangle_1);
        triangle_1SimpleButton.callback = () => this.onBookshelfHover();

        this.books0001 = books0001;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create();
        this.bookshelfHovered = false;
        this.vaultTriggerEnabled = false;

        this.books0001.on("animationcomplete", () => {
                this.vaultTriggerEnabled = true;
        })
    }

    onBookshelfHover() {
        if (this.bookshelfHovered) {
            return;
        }

        this.books0001.play("door")
        this.bookshelfHovered = true;
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
