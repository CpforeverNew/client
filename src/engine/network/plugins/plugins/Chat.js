import Plugin from '../Plugin'


export default class Chat extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'send_message': this.sendMessage,
            'send_safe': this.sendSafe,
            'send_emote': this.sendEmote,
            'filtered_message': this.filteredMessage,
        }
    }

    sendMessage(args) {
        const id = this.world.client.penguin.id

        if (this.world.room.isReady && args.id !== id) {
            this.interface.showTextBalloon(args.id, args.message)
        }
    }

    filteredMessage(args) {
        if (this.world.room.isReady && (this.world.client.penguin.rank > 3 || args.id == this.world.client.id)) {
            this.interface.showTextBalloon(args.id, args.message, true)
        }
    }

    sendSafe(args) {
        if (this.world.room.isReady) {
            let message = this.interface.main.safe.safeMessagesMap[args.safe]

            this.interface.showTextBalloon(args.id, message)
        }
    }

    sendEmote(args) {
        if (this.world.room.isReady) {
            this.interface.showEmoteBalloon(args.id, args.emote)
        }
    }

}
