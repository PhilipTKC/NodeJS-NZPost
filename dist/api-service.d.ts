import { Authentication } from './authentication.js';
import { AddressResponse, DetailResponse, Label, LabelResponse, ParcelAddressResponse, SuggestionResponse, TrackResponse, WebhookResponse } from './interfaces/index.js';
export declare class APIService {
    private authentication;
    constructor(authentication: Authentication);
    private ensureAccessToken;
    private sendHttpRequest;
    private performAuthorizedRequest;
    private parcelAddressBaseURL;
    retrieveAddresses(searchQuery: string, count?: number): Promise<ParcelAddressResponse>;
    private addressCheckerBaseURL;
    findAddress(line1: string, line2?: string): Promise<AddressResponse>;
    getAddressDetail(dpid: number): Promise<DetailResponse>;
    suggestAddress(query: string): Promise<SuggestionResponse>;
    private labelBaseURL;
    createDomesticLabel(label: Label): Promise<LabelResponse>;
    private parcelTrackBaseURL;
    private parcelEndpoint;
    private webhookEndpoint;
    getParcelTrackingDetails(trackingReference: string): Promise<TrackResponse>;
    subscribeWithAccountNumber(accountNumber: string, webhookUrl: string): Promise<WebhookResponse>;
    subscribeWithTrackingNumber(trackingReference: string, webhookUrl: string): Promise<WebhookResponse>;
}
