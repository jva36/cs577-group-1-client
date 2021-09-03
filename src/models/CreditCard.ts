export default class CreditCardInfo {
    private readonly cardNumber: string;
    private readonly cvv: string;

    constructor(cardNumber: string, cvv: string) {
        this.cardNumber = cardNumber;
        this.cvv = cvv;
    }
}