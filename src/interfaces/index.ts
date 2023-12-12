export interface AccessToken {
    access_token: string;
    token_type: string;
    expires_in: number;
}

export interface RequestOptions {
    method: string;
    headers: {
        client_id: string;
        Authorization: string;
        "Content-Type"?: string;
        Accept?: string;
    };
    body?: any;
}

/*
* parcel-address-checker.ts
*/

export interface Address {
    DPID: number;
    Deliverable: 'Y' | 'N';
    FullAddress: string;
    MatchScore: number;
    MatchedBoxBagType: 'Y' | 'N';
    MatchedCity: 'Y' | 'N';
    MatchedFloor: 'Y' | 'N';
    MatchedLobby: 'Y' | 'N';
    MatchedNumber: 'Y' | 'N';
    MatchedRoadName: 'Y' | 'N';
    MatchedRoadSuffixName: 'Y' | 'N';
    MatchedRoadTypeName: 'Y' | 'N';
    MatchedRuralDelivery: 'Y' | 'N';
    MatchedStreetAlpha: 'Y' | 'N';
    MatchedSuburb: 'Y' | 'N';
    MatchedUnit: 'Y' | 'N';
    Physical: 'Y' | 'N';
    SourceDesc: 'Postal\\Physical';
}

interface Coordinate { }

export interface Detail {
    DPID: number;
    AddressLine1: string;
    AddressLine2: string;
    AddressLine3: string;
    AddressLine4: string | null;
    AddressLine5: string | null;
    Postcode: string;
    NZTMCoord: Coordinate;
    NZGD2kCoord: Coordinate;
    NZMGCoord: Coordinate;
    Meshblock: string;
    StatsCensusYear: number;
    SourceDesc: string;
    Deliverable: 'Y' | 'N';
    Physical: 'Y' | 'N';
    UnitType: string | null;
    UnitValue: string | null;
    Floor: string | null;
    StreetNumber: number;
    StreetAlpha: string | null;
    RoadName: string;
    RoadTypeName: string | null;
    RoadSuffixName: string | null;
    Suburb: string;
    RuralDelivery: string | null;
    Lobby: string | null;
    CityTown: string;
    MailTown: string | null;
    BoxBagNumber: string | null;
    BoxBagType: string | null;
    ParcelId: number;
    DeliveredOnMonday: boolean;
    DeliveredOnTuesday: boolean;
    DeliveredOnWednesday: boolean;
    DeliveredOnThursday: boolean;
    DeliveredOnFriday: boolean;
    DeliveredOnSaturday: boolean;
    DeliveredOnSunday: boolean;
    CourierRound: string;
}

interface StatusResponse {
    success: boolean;
    status: string;

}

export interface AddressResponse extends StatusResponse {
    addresses: Address[];
}

export interface DetailResponse extends StatusResponse {
    details: Detail[];
}

interface Suggestions {
    DPID: number;
    SourceDesc: string;
    FullAddress: string;
}

export interface SuggestionResponse extends StatusResponse {
    addresses: Suggestions[];
}