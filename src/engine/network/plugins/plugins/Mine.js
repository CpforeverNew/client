import Plugin from '../Plugin'


export default class MiniGame extends Plugin {

    constructor(users, rooms) {
        super(users, rooms)
        this.events = {
            'mining_error': this.miningError,
            'reset_mining': this.resetMiningError,
            'update_coins': this.updateCoins,
        }
    }

    get client() {
        return this.world.client
    }

    updateCoins(args) {
        this.client.coins = args.coins
    }

    miningError(args) {
        this.client.miningError = args.miningError
        if (args.miningError == 0) this.network.send("update_coins", {id:args.id})
    }

    resetMiningError(args) {
        this.client.miningError = 0;
    }
}