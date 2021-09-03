export class Traveler {
    private firstName: string = '';
    private lastName: string = '';
    private email: string = '';
    private phone: string = '';

    constructor() {}

    get _firstName(): string {
        return this.firstName;
    }

    set _firstName(value: string) {
        this.firstName = value;
    }

    get _lastName(): string {
        return this.lastName;
    }

    set _lastName(value: string) {
        this.lastName = value;
    }

    get _email(): string {
        return this.email;
    }

    set _email(value: string) {
        this.email = value;
    }

    get _phone(): string {
        return this.phone;
    }

    set _phone(value: string) {
        this.phone = value;
    }

    public toJson() {

        return JSON.stringify({
            firstName: this._firstName,
            lastName: this._lastName,
            email: this._email,
            phone: this._phone
        });
    }
}