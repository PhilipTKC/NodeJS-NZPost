export declare enum Method {
    GET = "GET",
    POST = "POST"
}
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
interface StatusResponse {
    success: boolean;
    status: string;
}
export interface ParcelAddressResponse {
    full_address: string;
    address_id: string;
    dpid: string;
}
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
interface Coordinate {
}
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
interface Location {
    latitude: number;
    longitude: number;
}
interface SignedBy {
    name: string;
    signature: string;
}
interface TrackingEvent {
    date_time: string;
    status: string;
    description: string;
    source: string;
    seqref: string;
    edifact_code: string;
    depot_name: string;
    run_name: string;
    courier_first_name: string;
    courier_full_name: string;
    location: Location;
    signed_by: SignedBy;
}
interface ErrorDetails {
    code: number;
    message: string;
    details: string;
}
interface Result {
    tracking_reference: string;
    tracking_events?: TrackingEvent[];
    errors?: ErrorDetails[];
    related_tracking_references?: string[];
}
export interface TrackResponse {
    message_id: string;
    success: boolean;
    results: Result[];
}
export interface TrackBody {
    account_number?: string;
    tracking_reference?: string;
    notification_endpoint: string;
}
export interface WebhookResponse {
    success: boolean;
    subscription_guid: string;
    message_id: string;
}
export interface Label {
}
export interface LabelResponse {
    success: boolean;
    message_id: string;
    consignment_id: string;
}
export {};
