import ItinerarySearch from "./ItinerarySearch";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import {Traveler} from "./Traveler";
import Itinerary from "./Itinerary";

dayjs.extend(duration);

export class Trip {
    private readonly _source: string = '';
    private readonly _target: string = '';
    private _departDate: dateTime = {date: '', time: ''};
    private _returnDate: dateTime | null = null;
    private _travelers: Traveler[] = [];
    private _isRoundTrip: boolean;
    private _departureItinerary: Itinerary | null = null;
    private _returningItinerary: Itinerary | null = null;

    constructor(search: ItinerarySearch, isRoundTrip: boolean) {
        this._source = search.source.name;
        this._target = search.target.name;
        this._isRoundTrip = isRoundTrip;
        this._departDate = {
            date: this.toDateStr(search.departDate as Date),
            time: this.toTimeStr(search.departDate as Date)
        };
        for (let i = 0; i < search.travelers; i++) {
            this._travelers.push(new Traveler());
        }

    }

    private toDateStr(date: Date): string {
        return dayjs(date).format("ddd MMM D, YYYY")
    }

    private toTimeStr(date: Date): string {
        return dayjs(date).format("h:mm a");
    }

    get source(): string {
        return this._source;
    }

    get target(): string {
        return this._target;
    }

    get departDate(): dateTime {
        return this._departDate;
    }

    getReturnDate(): dateTime {
        return <dateTime>this._returnDate;
    }

    set returnDate(date: Date) {
            this._returnDate = {
                date: this.toDateStr(date),
                time: this.toTimeStr(date)
            };
    }

    get isRoundTrip(): boolean {
        return this._isRoundTrip;
    }

    get travelers(): Traveler[] {
        return this._travelers;
    }

    get departureItinerary(): Itinerary | null {
        return this._departureItinerary;
    }

    set departureItinerary(itinerary: Itinerary | null) {
        this._departureItinerary = itinerary;
    }

    get returningItinerary(): Itinerary | null {
        return this._returningItinerary;
    }

    set returningItinerary(value: Itinerary | null) {
        this._returningItinerary = value;
    }
}

type dateTime = {
    date: string,
    time: string
};