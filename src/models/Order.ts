import {Address} from "./Address";
import {Ticket} from "./Ticket";
import {Traveler} from "./Traveler";

export default class Order {
    private readonly _paymentConfirmation: string;
    private readonly _userId: number;
    private readonly _tickets: Array<Ticket>;
    private readonly _travelers: Array<Traveler>;
    private readonly _address: Address;

    constructor(paymentConfirmation: string, userId: number, tickets: Array<Ticket>, travelers: Array<Traveler>, address: Address) {
        this._paymentConfirmation = paymentConfirmation;
        this._userId = userId;
        this._tickets = tickets;
        this._travelers = travelers;
        this._address = address;

        this.toJson = this.toJson.bind(this);
    }

    public toJson() {

        return JSON.stringify({
            paymentConfirmation: this._paymentConfirmation,
            userId: this._userId,
            tickets: this._tickets,
            travelers: this._travelers,
            address: this._address
        });
    }
}