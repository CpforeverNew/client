import Plugin from '../Plugin'


export default class Actions extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'send_drag_position': this.send_drag_position,
            'send_position': this.sendPosition,
            'send_frame': this.sendFrame,
            'snowball': this.snowball
        }
    }

    get room() {
        return this.world.room
    }

    
    send_drag_position(args) {

        if (this.room.penguins[args.id]){
            this.room.penguins[args.id].setPos(args.x, args.y)

            // update the name tag position
            this.room.penguins[args.id].nameTag.x = args.x
            this.room.penguins[args.id].nameTag.y = args.y + 40
        } 
    }

    sendPosition(args) {
        if (!this.room.isReady) {
            return this.room.updateWaiting(args.id, { x: args.x, y: args.y, frame: 1 })
        }

        if (this.room.penguins[args.id]) this.room.penguins[args.id].move(args.x, args.y)
    }

    sendFrame(args) {
        if (!this.room.isReady) {
            return this.room.updateWaiting(args.id, { frame: (args.set) ? args.frame : 1 })
        }

        let penguin = this.room.penguins[args.id]
        let callback = () => penguin.playFrame(args.frame, args.set)

        if (penguin.isTweening) {
            return penguin.afterMove = callback
        }

        callback()
    }

    snowball(args) {
        if (!this.room.isReady) {
            return
        }

        let penguin = this.room.penguins[args.id]
        let callback = () => this.interface.main.snowballFactory.throwBall(args.id, args.x, args.y)

        if (penguin.isTweening) {
            return penguin.afterMove = callback
        }

        callback()
    }

}
