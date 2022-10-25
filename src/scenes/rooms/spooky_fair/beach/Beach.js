import RoomScene from '@scenes/rooms/RoomScene'

import { Button, MoveTo, SimpleButton, Animation } from '@components/components'


/* START OF COMPILED CODE */

export default class Beach extends RoomScene {

    constructor() {
        super("Beach");

        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'village': () => this.triggerRoom(200, 450, 750),
            'dock': () => this.triggerRoom(800, 240, 420),
            'lighthouse': () => this.triggerRoom(410, 530, 530)
        }
        this.music = '251'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("sky-pack", "assets/media/rooms/spooky_fair/sky/sky-pack.json");
        this.load.pack("beach-pack", "assets/media/rooms/spooky_fair/beach/beach-pack.json");
        this.load.audio('thunder', `assets/media/music/sf_thunder.mp3`);
    }

    /** @returns {void} */
    _create() {
        const thunder = this.sound.add('thunder');
        this.loopAudio(thunder, 5000);
        // sky0001
        const sky0001 = this.add.sprite(913, -23, "sky_spooky", "sky0001");

        // glow_3
        const glow_3 = this.add.sprite(288, 181, "beach_halloween", "glow0001");

        // lighthouseback
        this.add.image(290, 111, "beach_halloween", "lighthouseback");

        // glow_4
        const glow_4 = this.add.sprite(290, 21, "beach_halloween", "glow0001");

        // leftlamp_1
        this.add.image(291, 183, "beach_halloween", "leftlamp");

        // leftlamp_2
        this.add.image(288, 22, "beach_halloween", "leftlamp");

        // bg_1
        this.add.image(783, 481, "beach_halloween", "bg");

        // bonfire
        const bonfire = this.add.image(785.4596053972214, 754.4388600364173, "beach_halloween", "bonfire");
        bonfire.setOrigin(0.5462273518973845, 0.6328198915022678);

        // righttree
        const righttree = this.add.image(1282.0050279039772, 171.84410708950077, "beach_halloween", "righttree");
        righttree.setOrigin(0.4981504461833568, 0.2512059272179837);

        // candy_candy20002
        const candy_candy20002 = this.add.image(129, 513, "candyhunt", "candy/2-got");
        candy_candy20002.scaleX = 0.5;
        candy_candy20002.scaleY = 0.5;
        candy_candy20002.tintTopLeft = 13619151;
        candy_candy20002.tintTopRight = 13619151;
        candy_candy20002.tintBottomLeft = 13619151;
        candy_candy20002.tintBottomRight = 13619151;

        // rightpumpkin
        const rightpumpkin = this.add.image(1312.0600438447532, 585.2794738629618, "beach_halloween", "rightpumpkin");
        rightpumpkin.setOrigin(0.48746725126337576, 0.6484141297758135);

        // bulb0001
        const bulb0001 = this.add.sprite(1163, 135, "beach_halloween", "bulb0001");

        // ligthhousesticks
        const ligthhousesticks = this.add.image(726.7119801897902, 321.82116865708184, "beach_halloween", "ligthhousesticks");
        ligthhousesticks.setOrigin(0.6418022143586259, 0.47837523456341124);

        // ligthhousesticks_1
        this.add.image(309, 414, "beach_halloween", "ligthhousesticks");

        // sled
        const sled = this.add.image(305.2191871027827, 443.51154497873915, "beach_halloween", "sled");
        sled.setOrigin(1.0749683596632253, 0.6260137736262165);

        // lefttree
        const lefttree = this.add.image(314.0888787090833, 453.3817970954502, "beach_halloween", "lefttree");
        lefttree.setOrigin(0.6500798227559971, 0.7555257991122276);

        // rocks
        this.add.image(456, 575, "beach_halloween", "rocks");

        // glow0001
        const glow0001 = this.add.sprite(170, 542, "beach_halloween", "glow0001");

        // leftlamp
        const leftlamp = this.add.sprite(170, 541, "beach_halloween", "leftlamp");

        // leftpumpkin
        const leftpumpkin = this.add.image(358.9399561552468, 497.2794738629618, "beach_halloween", "leftpumpkin");
        leftpumpkin.setOrigin(0.5134279450749546, 0.6683503561636093);

        // door
        const door = this.add.image(447, 312, "beach_halloween", "door");

        // rightchair
        const rightchair = this.add.image(1051.37561018018, 494.5906872072073, "beach_halloween", "rightchair");
        rightchair.setOrigin(0.5642165080834249, 0.46872190098355304);

        // armrightchair
        const armrightchair = this.add.image(1025, 527.2953436036037, "beach_halloween", "armrightchair");
        armrightchair.setOrigin(0.5, 0.47696410275140094);

        // leftchair
        const leftchair = this.add.image(955.6597195795794, 524.2391725825823, "beach_halloween", "leftchair");
        leftchair.setOrigin(0.5731796937846921, 0.5576165914865898);

        // armleftchair
        const armleftchair = this.add.image(929.9775315915915, 559.955063183183, "beach_halloween", "armleftchair");
        armleftchair.setOrigin(0.5530337545545535, 0.5750477658790851);

        // sign0001
        this.add.image(488, 181, "beach_halloween", "sign0001");

        // glow_2
        const glow_2 = this.add.sprite(840, 70, "beach_halloween", "glow0001");

        // treelampmidleft
        this.add.image(840, 55, "beach_halloween", "treelampmidleft");

        // othersiderockslol
        const othersiderockslol = this.add.image(633.5559841871043, 367.36910906245964, "beach_halloween", "othersiderockslol");
        othersiderockslol.setOrigin(0.6555576727060474, 0.604551687505833);

        // eyes0001
        const eyes0001 = this.add.sprite(1400.4677210507841, 189.5706515630424, "beach_halloween", "eyes0001");
        eyes0001.setOrigin(-0.08663734869912462, -0.2683607685664219);

        // lists
        const sort = [bonfire, righttree, rightpumpkin, ligthhousesticks, lefttree, leftpumpkin, armrightchair, rightchair, leftchair, armleftchair, leftlamp, sled, othersiderockslol, eyes0001];

        // sky0001 (components)
        const sky0001Animation = new Animation(sky0001);
        sky0001Animation.key = "sky";
        sky0001Animation.end = 282;

        // glow_3 (components)
        const glow_3Animation = new Animation(glow_3);
        glow_3Animation.key = "glow";
        glow_3Animation.end = 45;

        // glow_4 (components)
        const glow_4Animation = new Animation(glow_4);
        glow_4Animation.key = "glow";
        glow_4Animation.end = 45;

        // candy_candy20002 (components)
        const candy_candy20002SimpleButton = new SimpleButton(candy_candy20002);
        candy_candy20002SimpleButton.callback = () => this.network.send('collected_candy', { candy: "candy_cube" });

        // bulb0001 (components)
        const bulb0001Animation = new Animation(bulb0001);
        bulb0001Animation.key = "bulb";
        bulb0001Animation.end = 30;

        // glow0001 (components)
        const glow0001Animation = new Animation(glow0001);
        glow0001Animation.key = "glow";
        glow0001Animation.end = 45;

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 454;
        doorMoveTo.y = 362;

        // glow_2 (components)
        const glow_2Animation = new Animation(glow_2);
        glow_2Animation.key = "glow";
        glow_2Animation.end = 45;

        // eyes0001 (components)
        const eyes0001Animation = new Animation(eyes0001);
        eyes0001Animation.key = "eyes";
        eyes0001Animation.end = 127;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onBucketOver() {
        let frame = this.bucket.frame.name
        frame = frame.substr(frame.length - 4)

        switch (frame) {
            case '0001':
            case '0346':
                this.bucket.play('bucket1')
                break
            case '0070':
                this.bucket.play('bucket2')
                break
            case '0137':
                this.bucket.play('bucket3')
                break
            case '0210':
                this.bucket.play('bucket4')
                break
            case '0269':
                this.bucket.play('bucket5')
                break
            default:
                break
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
