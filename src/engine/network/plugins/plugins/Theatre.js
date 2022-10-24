import Plugin from '../Plugin'


export default class Theatre extends Plugin {

    constructor(network) {
        super(network);

        this.events = {
            'get_stream': this.getStream,
            'theatre_status': this.streamAvaliable
        }

        this.theatreId = 341;
    }

    getStream(args) {
        if(!this.#theatreRoom()) return;

        return this.world.room.stream(args.source);
    }

    streamAvaliable(args) {
        if(!this.#theatreRoom()) return;
        
        return this.world.room.onStreamAvaliable(args);
    }

    #theatreRoom() {
        return true;
    }

}
