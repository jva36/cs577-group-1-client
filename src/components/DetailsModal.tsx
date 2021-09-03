import React, {Component} from "react";
import Itinerary from "../models/Itinerary";
import ItinerarySearch from "../models/ItinerarySearch";
import dayjs from "dayjs";

export interface DetailsModalProps {
    itinerary: Itinerary;
    search: ItinerarySearch;
};

interface DetailsModalState {
    isOpen: boolean;
};

export default class DetailsModal extends React.Component<DetailsModalProps, DetailsModalState> {
    constructor(props: DetailsModalProps) {
        super(props);
        this.state = {isOpen: false};
    }

    open() {
        this.setState({isOpen: true});
    }

    close() {
        this.setState({isOpen: false});
    }

    override render() {
        if (!this.state.isOpen) {
            return <>
                <div className="navbar-item has-text-weight-bold">
                    {this.state.isOpen}
                </div>
                <button className="button is-primary modal-button" onClick={_ => this.open()}>Details
                </button>
            </>;
        }

        return <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title mb-1">Ticket Details</p>
                    <button className="delete" aria-label="close" onClick={_ => this.close()}></button>
                </header>
                <section className="modal-card-body">
                    <div className="has-text-left">
                        <p className="heading is-size-5 mb-0">Ticket Price</p>
                        <p className="has-text-weight-bold is-size-4">$31.00</p>
                        <p className="heading is-size-5 mb-0">Number of Transfers</p>
                        <p className="has-text-weight-bold is-size-4">{this.props.itinerary.numTransfers}</p>
                    </div>
                    <div className="">
                        <div className="column">
                            <nav className="level">
                                <div className="level-item has-text-centered">
                                    <div>
                                        <p className="heading is-size-4 mb-2">Departure Information</p>
                                        <p className="has-text-weight-bold is-size-4 mb-1">Station: {this.props.search.source.name}</p>
                                        <p className="has-text-weight-bold is-size-6 mb-0">Date: {toDateStr(this.props.itinerary.startDate)}</p>
                                        <p className="has-text-weight-bold is-size-6 mb-0">Time: {toTimeStr(this.props.itinerary.startDate)}</p>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="column">
                            <nav className="level">
                                <div className="level-item has-text-centered">
                                    <div>
                                        <p className="heading is-size-4 mb-2">Arrival Information</p>
                                        <p className="has-text-weight-bold is-size-4 mb-1">Station: {this.props.search.target.name}</p>
                                        <p className="has-text-weight-bold is-size-6 mb-0">Date: {toDateStr(this.props.itinerary.endDate)}</p>
                                        <p className="has-text-weight-bold is-size-6 mb-0">Time: {toTimeStr(this.props.itinerary.endDate)}</p>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </section>
                <footer className="modal-card-foot">
                    <button className="button" onClick={_ => this.close()}>Close</button>
                </footer>
            </div>
        </div>
    }
};

function toDateStr(date: Date): string {
    return dayjs(date).format("ddd MMM D, YYYY")
}

function toTimeStr(date: Date): string {
    return dayjs(date).format("h:mm a");
}