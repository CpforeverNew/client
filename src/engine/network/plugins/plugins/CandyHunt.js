import Plugin from "../Plugin";

export default class CandyHunt extends Plugin {
    constructor(network) {
        super(network);
        this.events = {
            user_candy_hunt: this.userCandyHunt,
            candy_hunt_completed: this.candyHuntCompleted,
        };
    }

    userCandyHunt(args) {
        console.log("userCandyHunt", args);

        this.interface.main.candyhunt.candy_stick.setTexture( "candyhunt", args.candy_stick_collected ? "candy/1-got" : "candy/1" );
        this.interface.main.candyhunt.candy_cube.setTexture( "candyhunt", args.candy_cube_collected ? "candy/2-got" : "candy/2" );
        this.interface.main.candyhunt.candy_corn.setTexture( "candyhunt", args.candy_corn_collected ? "candy/3-got" : "candy/3" );
        this.interface.main.candyhunt.candy_borbon.setTexture( "candyhunt", args.candy_borbon_collected ? "candy/4-got" : "candy/4" );
        this.interface.main.candyhunt.pumkin.setTexture( "candyhunt", args.pumkin_collected ? "candy/5-got" : "candy/5" );
        this.interface.main.candyhunt.candy_apple.setTexture( "candyhunt", args.candy_apple_collected ? "candy/6-got" : "candy/6" );
        this.interface.main.candyhunt.candy_bar.setTexture( "candyhunt", args.candy_bar_collected ? "candy/7-got" : "candy/7" );
        this.interface.main.candyhunt.lollipop.setTexture( "candyhunt", args.lollipop_collected ? "candy/8-got" : "candy/8" );
        this.interface.main.candyhunt.found_text.text = "You have found " + args.candies_collected + " items";
        this.interface.main.candyhunt.visible = true;
    }

    candyHuntCompleted(args) {
        this.interface.main.candyhunt.claim_prize_active.visible = true;
        this.interface.main.candyhunt.claim_prize_disabled.visible = false;
    }

}