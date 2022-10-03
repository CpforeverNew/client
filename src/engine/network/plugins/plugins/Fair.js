import Plugin from "../Plugin";

export default class Fair extends Plugin {
  constructor(network) {
    super(network);
    this.events = {
      user_tickets: this.userTickets,
    };
  }

  userTickets(args) {
    const tickets = args.tickets;
    this.interface.main.tickets.text = tickets;
  }
}
