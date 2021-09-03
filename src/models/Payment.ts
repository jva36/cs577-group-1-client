import CreditCard from "./CreditCard";

export default class Payment {
    private readonly _creditCardInfo: CreditCard;
    private readonly _paymentAmount: number;

    constructor(creditCardInfo: CreditCard, paymentAmount: number) {
        this._creditCardInfo = creditCardInfo;
        this._paymentAmount = paymentAmount;

        this.toJson = this.toJson.bind(this);
    }

    public get creditCardInfo() {
        return this._creditCardInfo;
    }

    public get paymentAmount() {
        return this._paymentAmount;
    }


    public toJson() {
        const { creditCardInfo, paymentAmount} = this;

        return JSON.stringify({
            paymentAmount: paymentAmount,
            creditCardInfo: creditCardInfo
        });
    }
}