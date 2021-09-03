import Payment from "../models/Payment";
import PaymentResponse from "../models/PaymentResponse";

export default class PaymentProvider {
    doPayment(paymentDetails: Payment, callback: (paymentResponse: PaymentResponse) => void) {

        fetch(`/api/payment`, {method: "POST", body: paymentDetails.toJson()})
            .then(res => res.json())
            .then(res => res as PaymentDto)
            .then(res => fromPaymentDto(res))
            .then(res => callback(res));
    }
}

function fromPaymentDto(dto: PaymentDto) {
    return new PaymentResponse(dto.message, dto.code);
}

interface PaymentDto {
    code: number,
    message: string
}