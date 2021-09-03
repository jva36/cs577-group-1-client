import React, {Component, ReactElement} from "react";
import PurchaseStage from "../models/PurchaseStage";
import CheckoutPage from "./CheckoutPage";
import NavButtonBar from "./NavButtonBar";
import ProgressTracker from "./PurchaseTracker";
import SearchHeader from "./SearchHeader";
import TravelerForm from "./TravelerForm";
import {Trip} from "../models/Trip";

export interface TravelerInfoPageProps {
    setPage: (page: ReactElement) => void;
    trip: Trip;
}

interface TravelerInfoPageState {}

export default class TravelerInfoPage extends Component<TravelerInfoPageProps, TravelerInfoPageState> {
    constructor(props: TravelerInfoPageProps) {
        super(props);
    }

    override render() {
        const { trip, setPage } = this.props;
        const travelerBlocks = new Array<ReactElement>();

        for (let i = 1; i <= trip.travelers.length; i++) {
            travelerBlocks.push(<div key={i} className="block pt-5">
                <h3 className="title is-5">Traveler {i}</h3>
                <TravelerForm trip={trip} travelerIndex={i - 1} />
            </div>);
        }

        return <div>
            <SearchHeader trip={trip} />
            <ProgressTracker currentStage={PurchaseStage.EnterTravelerInfo} />

            <hr />

            <div className="content">
                <h2 className="title is-3">Traveler Details</h2>
                <p>Please give us some information on who will be traveling.</p>
                <div>{travelerBlocks}</div>
            </div>
            <NavButtonBar
                onBack={() => console.log("Back")}
                onNext={() => setPage(<CheckoutPage trip={trip} setPage={setPage} />)}
            />
        </div>
    }
}