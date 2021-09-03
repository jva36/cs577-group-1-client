export class Address {
    private readonly street: string;
    private readonly city: string;
    private readonly state: string;
    private readonly zip: string;
    private readonly apt?: string;

    constructor(street: string, city: string, state: string, zip: string, apt?: string) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.apt = apt;
    }
}