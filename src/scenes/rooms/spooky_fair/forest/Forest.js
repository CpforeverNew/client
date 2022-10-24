import SimpleButton from '@scenes/components/SimpleButton';
import Button from '@scenes/components/Button';
import Animation from '@scenes/components/Animation';
import ShowHint from '@scenes/components/ShowHint';
import MoveTo from '@scenes/components/MoveTo';


import RoomScene from '@scenes/rooms/RoomScene'


/* START OF COMPILED CODE */

export default class Forest extends RoomScene {

    constructor() {
        super("Forest");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 1240, 660),
            'shack': () => this.triggerRoom(807, 500, 800),
            'cove': () => this.triggerRoom(810, 520, 416),
            'circusext': () => this.triggerRoom(899, 746, 731),
            'memory': () => this.triggerGame("Card", 998),
            'prizebooth': () => this.interface.loadExternal('PrizeBooth'),
            'pufflepaddle': () => this.triggerGame("Paddle", 1000)
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("forest-pack", "assets/media/rooms/spooky_fair/forest/forest-pack.json");
        this.load.pack("sky-pack", "assets/media/rooms/spooky_fair/sky/sky-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky0001
        this.add.sprite(1023, 21, "sky_spooky", "sky0001");

        // bg
        this.add.image(775, 476, "forest_halloween", "bg");

        // candy
        const candy = this.add.image(1455.3420853913692, 419.7263316869047, "forest_halloween", "candy");
        candy.setOrigin(0.4463449188409401, 0.5788401192541296);

        // cavepumpkin0001
        const cavepumpkin0001 = this.add.image(310.30793707092346, 705.4456953333794, "forest_halloween", "cavepumpkin0001");
        cavepumpkin0001.setOrigin(0.7543396362671813, 0.9267509872732018);

        // coveent
        const coveent = this.add.image(1333.4568144649659, 567.4952389680248, "forest_halloween", "coveent");
        coveent.setOrigin(0.5034037721144062, 0.5874691914782865);

        // covehandle
        const covehandle = this.add.image(1590.656487381969, 1048.8312011843468, "forest_halloween", "covehandle");
        covehandle.setOrigin(1.2284072324829725, 1.8818925781962674);

        // covepumpkin
        const covepumpkin = this.add.image(1327, 691, "forest_halloween", "covepumpkin");

        // covesign
        this.add.image(1411, 680, "forest_halloween", "covesign");

        // bak
        const bak = this.add.image(1056, 270, "forest_halloween", "bak");
        bak.scaleX = 0.8;
        bak.scaleY = 0.8;

        // paddleveryfront
        const paddleveryfront = this.add.image(1061, 340, "forest_halloween", "paddleveryfront");
        paddleveryfront.scaleX = 0.8;
        paddleveryfront.scaleY = 0.8;

        // padl
        const padl = this.add.sprite(1064, 220, "forest_halloween", "padl");
        padl.scaleX = 0.8;
        padl.scaleY = 0.8;

        // pufflepaddlefront
        const pufflepaddlefront = this.add.image(1059, 237, "forest_halloween", "pufflepaddlefront");
        pufflepaddlefront.scaleX = 0.8;
        pufflepaddlefront.scaleY = 0.8;

        // paddlepaddle
        const paddlepaddle = this.add.image(1058.9305585159439, 262.2691331661426, "forest_halloween", "paddlepaddle");
        paddlepaddle.scaleX = 0.8;
        paddlepaddle.scaleY = 0.8;
        paddlepaddle.setOrigin(0.39556532789411375, 0.5994196174852042);

        // topleftstick
        const topleftstick = this.add.image(654, 413, "forest_halloween", "topleftstick");
        topleftstick.scaleX = 0.70262925319559;
        topleftstick.scaleY = 0.70262925319559;

        // treemiddle
        const treemiddle = this.add.image(858.0790700795337, 429.6353517396638, "forest_halloween", "treemiddle");
        treemiddle.scaleX = 0.9292661815853588;
        treemiddle.scaleY = 0.9292661815853588;
        treemiddle.setOrigin(0.5386850496002865, 0.7803069868245998);

        // rightstick
        const rightstick = this.add.image(932.4823130970358, 400.4627034450641, "forest_halloween", "rightstick");
        rightstick.scaleX = 0.6593002762649696;
        rightstick.scaleY = 0.6593002762649696;
        rightstick.setOrigin(0.4214147470302661, -0.21634839334192102);

        // prizes
        const prizes = this.add.image(697.7747099999294, 511.96343474292456, "forest_halloween", "prizes");
        prizes.scaleX = 0.6520876327827486;
        prizes.scaleY = 0.6520876327827486;
        prizes.setOrigin(0.5317368140469552, 0.6134731932820582);

        // redeemtickets
        const redeemtickets = this.add.image(720.0018505353696, 584.0575096930842, "forest_halloween", "redeemtickets");
        redeemtickets.scaleX = 0.6609437051107323;
        redeemtickets.scaleY = 0.6609437051107323;
        redeemtickets.setOrigin(0.6561551927231568, -0.337326314146762);

        // frontstick
        const frontstick = this.add.image(823.3678959563016, 628.6076241104865, "forest_halloween", "frontstick");
        frontstick.scaleX = 0.7808847128809611;
        frontstick.scaleY = 0.7808847128809611;
        frontstick.setOrigin(0.7826733595118796, 0.9169533078785845);

        // prizetext
        const prizetext = this.add.image(693.2246981881908, 652.9651785211584, "forest_halloween", "prizetext");
        prizetext.scaleX = 0.4358708425987934;
        prizetext.scaleY = 0.4358708425987934;
        prizetext.setOrigin(0.5397235479194178, 11.481448045042196);

        // cardin
        const cardin = this.add.image(470.10827784675973, 280.48725031041914, "forest_halloween", "cardin");
        cardin.scaleX = 0.7285088665119721;
        cardin.scaleY = 0.7285088665119721;
        cardin.setOrigin(0.5295233467868501, 0.5972444257566872);

        // cardout
        const cardout = this.add.image(435, 242, "forest_halloween", "cardout");
        cardout.scaleX = 0.7126802148322475;
        cardout.scaleY = 0.7126802148322475;
        cardout.angle = 10;

        // bottomleft
        const bottomleft = this.add.image(503.053315676501, 867.881695055906, "forest_halloween", "bottomleft");
        bottomleft.setOrigin(0.49610780638708185, 0.8834834970201477);

        // rectangle_1
        const rectangle_1 = this.add.rectangle(1343, 354, 128, 128);
        rectangle_1.scaleX = 0.5942228316658187;
        rectangle_1.scaleY = 0.19386755349433704;
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 11119034;

        // rectangle_2
        const rectangle_2 = this.add.rectangle(749, 131, 128, 128);
        rectangle_2.scaleX = 1.7538869951106308;
        rectangle_2.scaleY = 1.2926018475107421;

        // rectangle
        const rectangle = this.add.rectangle(1384, 891, 128, 128);
        rectangle.scaleX = 2.9193350532602125;
        rectangle.scaleY = 1.2926018475107421;

        // lists
        const sort = [bottomleft, cardout, frontstick, rightstick, prizes, treemiddle, topleftstick, paddlepaddle, covepumpkin, coveent, cavepumpkin0001, candy, prizetext, redeemtickets, covehandle];

        // padl (components)
        const padlButton = new Button(padl);
        padlButton.spriteName = "padl";
        padlButton.activeFrame = false;
        const padlMoveTo = new MoveTo(padl);
        padlMoveTo.x = 1074;
        padlMoveTo.y = 380;
        const padlShowHint = new ShowHint(padl);
        padlShowHint.text = "Puffle Paddle";

        // prizes (components)
        const prizesButton = new Button(prizes);
        prizesButton.spriteName = "prizes";
        prizesButton.activeFrame = false;
        prizesButton.pixelPerfect = true;
        const prizesMoveTo = new MoveTo(prizes);
        prizesMoveTo.x = 689;
        prizesMoveTo.y = 574;
        const prizesShowHint = new ShowHint(prizes);
        prizesShowHint.text = "Prizes";

        // cardin (components)
        const cardinButton = new Button(cardin);
        cardinButton.spriteName = "cardin";
        cardinButton.activeFrame = false;
        const cardinMoveTo = new MoveTo(cardin);
        cardinMoveTo.x = 481;
        cardinMoveTo.y = 349;
        const cardinShowHint = new ShowHint(cardin);
        cardinShowHint.text = "Memory Game";

        // cardout (components)
        const cardoutMoveTo = new MoveTo(cardout);
        cardoutMoveTo.x = 464;
        cardoutMoveTo.y = 335;

        // rectangle_2 (components)
        const rectangle_2MoveTo = new MoveTo(rectangle_2);
        rectangle_2MoveTo.x = 749;
        rectangle_2MoveTo.y = 170;
        new SimpleButton(rectangle_2);

        // rectangle (components)
        const rectangleMoveTo = new MoveTo(rectangle);
        rectangleMoveTo.x = 1384;
        rectangleMoveTo.y = 891;
        new SimpleButton(rectangle);

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
