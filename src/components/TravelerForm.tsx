import React from "react";
import InputField from "./InputField";
import {Trip} from "../models/Trip";

export interface TravelerFormProps {
    trip: Trip;
    travelerIndex: number;
}

export default (props: TravelerFormProps) => {
    const {trip, travelerIndex} = props;

    return (
        <div>
            <div className="columns">
                <div className="column">
                    <InputField
                        label="First Name"
                        htmlName="first-name"
                        htmlType="text"
                        icon="fas fa-user"
                        required={true}
                        value={trip.travelers[travelerIndex]._firstName}
                        key="firstName"
                        setValue={v => trip.travelers[travelerIndex]._firstName = v}
                    />
                </div>
                <div className="column">
                    <InputField
                        label="Last Name"
                        htmlName="last-name"
                        htmlType="text"
                        icon="fas fa-user"
                        required={true}
                        value={trip.travelers[travelerIndex]._lastName}
                        setValue={v => trip.travelers[travelerIndex]._lastName = v}
                    />
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <InputField
                        label="Email"
                        htmlName="email"
                        htmlType="email"
                        icon="fas fa-at"
                        required={true}
                        value={trip.travelers[travelerIndex]._email}
                        setValue={v => trip.travelers[travelerIndex]._email = v}
                    />
                </div>
                <div className="column">
                    <InputField
                        label="Phone"
                        htmlName="last-name"
                        htmlType="tel"
                        icon="fas fa-phone"
                        required={true}
                        value={trip.travelers[travelerIndex]._phone}
                        setValue={v => trip.travelers[travelerIndex]._phone = v}
                    />
                </div>
            </div>
        </div>
    )
};