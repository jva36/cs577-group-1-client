import React, { Component } from "react";
import ProgressTracker from "./PurchaseTracker";
import PurchaseStage from "../models/PurchaseStage";
import {OrderResponse} from "../models/OrderResponse";
import {Trip} from "../models/Trip";

export interface ConfirmationPageProps {
    orderResponse: OrderResponse;
    orderEmail: string;
    trip: Trip;
}

interface ConfirmationPageState {

}

export default class ConfirmationPage extends Component<ConfirmationPageProps, ConfirmationPageState> {
    override render() {
        const { orderResponse, orderEmail, trip } = this.props;
        return (
            <>
                <ProgressTracker currentStage={PurchaseStage.Confirmation} />
                <div className="content">
                    <h2 className="title is-3 has-text-centered">Order Confirmed</h2>
                    <div className="card-content">
                        <h3 className="has-text-centered">Thank you for your order</h3>
                        <p className="has-text-weight-bold has-text-centered">Order ID #{orderResponse.orderID}</p>
                        <p className="has-text-centered">Confirmation and a copy of your receipt will be sent to {orderEmail}</p>
                    </div>
                </div>
            </>
        );
    }
};
