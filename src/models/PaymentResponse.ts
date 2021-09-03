export default class PaymentResponse {
    private readonly _message: string;
    private readonly _code: number;

    constructor(message: string, code: number) {
        this._message = message;
        this._code = code;
    }

    public get message(): string {
        return this._message;
    }

    public get code(): number {
        return this._code;
    }
}