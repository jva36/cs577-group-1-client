import Order from "../models/Order";
import {OrderResponse} from "../models/OrderResponse";

export default class CheckoutProvider {
    doCheckout(orderDetails: Order, callback: (orderResponse: OrderResponse) => void) {

        fetch(`/api/order/checkout`, {method: "POST", body: orderDetails.toJson()})
            .then(res => res.json())
            .then(res => res as CheckoutDto)
            .then(res => fromCheckoutDto(res))
            .then(res => callback(res));
    }
}

function fromCheckoutDto(dto: CheckoutDto) {
    return new OrderResponse(dto.orderID, dto.userID, dto.tickets);
}

interface CheckoutDto {
    orderID: number,
    userID: number,
    tickets: Array<{id: number, orderID: number, travelerID: number, itineraryID: string, price: number}>
}