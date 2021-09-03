import React from "react";
import {Trip} from "../models/Trip";

export interface SearchHeaderProps {
    trip: Trip;
};

export default (props: SearchHeaderProps) => <div className="content">
    <h1 className="title is-1">{props.trip.source} <em className="has-text-weight-normal">to</em> {props.trip.target}
    <span className="pl-4 subtitle">{props.trip.isRoundTrip ? "Round-Trip" : "One-Way"}</span></h1>
    <p className="subtitle">Traveling as <strong>{props.trip.travelers.length}</strong> {props.trip.travelers.length > 1 ? "people" : "person"}</p>
</div>