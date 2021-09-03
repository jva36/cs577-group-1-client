export class OrderResponse {
    private readonly _orderID: number;
    private readonly _userID: number;
    private readonly _tickets: Array<{ id: number; orderID: number; travelerID: number; itineraryID: string; price: number }>

    constructor(orderID: number, userID: number, tickets: Array<{ id: number, orderID: number, travelerID: number, itineraryID: string, price: number }>) {
        this._orderID = orderID;
        this._userID = userID;
        this._tickets = tickets;
    }

    get orderID() {
        return this._orderID;
    }

    get tickets() {
        return this._tickets;
    }
}