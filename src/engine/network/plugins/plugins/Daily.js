import Plugin from '../Plugin'

export default class Daily extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            "claimDailyReward": this.claimDailyReward,
        }
    }

    claimDailyReward(args) {
        switch(args.type) {
            case "coins":
                let prompt = this.world.game.scene.getScene('InterfaceController').prompt
                if (args.coinsEarned == null){
                    args.coinsEarned = 0
                }
                prompt.showCoins("Daily Reward", args.value)
                break;
        }
        
    }

}