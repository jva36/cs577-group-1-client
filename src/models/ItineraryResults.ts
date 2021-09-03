import ItinerarySearch from "./ItinerarySearch";
import Itinerary from "./Itinerary";

export class ItineraryResults {
    private readonly _search: ItinerarySearch;
    private _itineraries: Itinerary[]

    constructor(search: ItinerarySearch, itineraries: Itinerary[]) {
        this._search = search;
        this._itineraries = itineraries;
    }

    get search(): ItinerarySearch {
        return this._search;
    }

    get itineraries(): Itinerary[] {
        return this._itineraries;
    }

    set itineraries(itineraries: Itinerary[]) {
        this._itineraries = itineraries;
    }
}