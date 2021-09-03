export class Ticket {
    private readonly itineraryID: string;
    private readonly price: number;

    constructor(itineraryID: string, price: number) {
        this.itineraryID = itineraryID;
        this.price = price;
    }
}