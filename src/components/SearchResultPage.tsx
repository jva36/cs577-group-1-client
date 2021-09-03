import React, {Component, CSSProperties, ReactElement} from "react";
import PurchaseStage from "../models/PurchaseStage";
import ProgressTracker from "./PurchaseTracker";
import SearchHeader from "./SearchHeader";
import SearchResultItem from "./SearchResultItem";
import TravelerInfoPage from "./TravelerInfoPage";
import {AuthContext} from "../contexts/AuthContext";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import {ItineraryResults} from "../models/ItineraryResults";
import {Trip} from "../models/Trip";

dayjs.extend(duration);

interface SearchResultPageProps {
    setPage: (page: ReactElement) => void;
    trip: Trip;
    departures: ItineraryResults;
    returns?: ItineraryResults;

}

interface SearchResultPageState {
    activeTab: string;
    isValid: boolean;
}

export default class SearchResultPage extends Component<SearchResultPageProps, SearchResultPageState> {
    constructor(props: SearchResultPageProps) {
        super(props);
        SearchResultPage.contextType = AuthContext;
        this.state = {activeTab: "depart", isValid: false };
        this.isFormValid = this.isFormValid.bind(this);
        this.scrollReset = this.scrollReset.bind(this);
        this.scrollReset();
    }

    isFormValid() {
        const {trip} = this.props;
        this.setState({isValid: trip.departureItinerary !== null && (trip.isRoundTrip ? trip.returningItinerary !== null : true)});
    }

    scrollReset() {
        window.scrollTo(0,0);
    }

    override render() {
        const {departures, returns, setPage, trip} = this.props;
        const {activeTab} = this.state;

        const message = departures.itineraries.length !== 0 ?
            "Please select one of the following itineraries." :
            "No results found.";
        const info = trip.isRoundTrip
            ? "Selections must be made for both Departure and Return before continuing"
            : "Select continue once you have selected your itinerary.";

        const selectedStyle: CSSProperties = {border: "6px solid hsl(171, 100%, 29%)"};
        const defaultStyle: CSSProperties = {};

        return <div>
            <SearchHeader trip={trip}/>
            <ProgressTracker currentStage={PurchaseStage.SelectItinerary}/>
            <hr/>

            <div className="content">
                <h2 className="title is-3">Itineraries</h2>
                <p>{message}</p>

                <div className="notification is-warning">
                    <strong>{info}</strong>
                </div>

                <div className="buttons has-addons is-justify-content-center">
                    <button className={`${activeTab === "depart" ? "is-link" : "is-light"} button is-large`} onClick={_ => this.setState({activeTab: "depart"})}>
                        <span className="has-text-weight-bold is-size-4 px-4 pr-2">Departure</span>
                        <span className="has-text-weight-bold is-size-6 pt-1">{trip.departDate.date}</span>
                    </button>
                    {trip.isRoundTrip && (
                    <button className={`${activeTab === "return" ? "is-link" : "is-light"} button is-large`} onClick={_ => this.setState({activeTab: "return"})}>
                        <span className="has-text-weight-bold is-size-4 px-4 pr-2">Return</span>
                        <span className="has-text-weight-bold is-size-6 pt-1">{trip.getReturnDate().date}</span>
                    </button>
                    )}
                    <button className="button is-large is-primary" onClick={_ => setPage(<TravelerInfoPage trip={trip} setPage={setPage}/>)} disabled={!this.state.isValid}>
                        <span className="has-text-weight-bold is-size-4 px-4 pr-2">Continue</span>
                        <span className="icon is-medium"><i className="fas fa-lg fa-long-arrow-alt-right"></i></span>
                    </button>
                </div>
                {activeTab === "depart" && departures.itineraries.map(i =>
                    <SearchResultItem
                        key={i.id}
                        itinerary={i}
                        select={() => {
                            trip.departureItinerary = i;
                            this.isFormValid();
                        }}
                        search={departures.search}
                        style={trip.departureItinerary?.id === i.id ? selectedStyle : defaultStyle}
                    />
                )}
                {activeTab === "return" && returns?.itineraries.map(j =>
                    <SearchResultItem
                        key={j.id}
                        itinerary={j}
                        select={() => {
                            trip.returningItinerary = j;
                            this.isFormValid();
                        }}
                        search={returns?.search}
                        style={trip.returningItinerary?.id === j.id ? selectedStyle : defaultStyle}
                    />
                )}
            </div>
        </div>
    }
}