import { Authentication } from './authentication.js';

import { AddressResponse, DetailResponse, Label, LabelResponse, Method, ParcelAddressResponse, RequestOptions, SuggestionResponse, TrackBody, TrackResponse, WebhookResponse } from './interfaces/index.js';
import { handleResponse } from './utility/handle-response.js';

/*
* TODO: REFACTOR, Split into multiple services
*/
export class APIService {
    constructor(private authentication: Authentication) { }

    private async ensureAccessToken(): Promise<void> {
        if (!this.authentication.accessToken || this.authentication.isTokenExpired()) {
            await this.authentication.setAccessToken();
        }
    }

    private async sendHttpRequest<TResponse, TBody>(url: string, method: Method, body?: TBody): Promise<TResponse> {
        const init: RequestOptions = {
            method,
            headers: {
                client_id: this.authentication.clientId,
                Authorization: `Bearer ${this.authentication.accessToken}`,
                Accept: "application/json"
            }
        };

        if (method === "POST" && body) {
            init.headers["Content-Type"] = "application/json";
            init.body = JSON.stringify(body);
        }

        const request = await fetch(url, init);

        return await handleResponse<TResponse>(request);
    }

    private async performAuthorizedRequest<TResponse, TBody = undefined>(url: string, method = Method.GET, body?: TBody): Promise<TResponse> {
        await this.ensureAccessToken();
        return await this.sendHttpRequest<TResponse, TBody>(url, method, body);
    }

    /*
    * Parcel Address Methods
    */

    private parcelAddressBaseURL = "https://api.nzpost.co.nz/parceladdress/2.0";

    async retrieveAddresses(searchQuery: string, count = 5) {
        const requestUrl = encodeURI(`${this.parcelAddressBaseURL}q=${searchQuery}&count=${count}`);

        return await this.performAuthorizedRequest<ParcelAddressResponse>(requestUrl);
    }

    /*
    * Address Checker Methods
    */

    private addressCheckerBaseURL = "https://api.nzpost.co.nz/addresschecker/1.0";

    async findAddress(line1: string, line2?: string) {
        let apiUrl = line2 ? `${this.addressCheckerBaseURL}/find?address_line_1=${line1}&address_line_2=${line2}` : `${this.addressCheckerBaseURL}/find?address_line_1=${line1}`;

        const requestURL = encodeURI(apiUrl);

        return await this.performAuthorizedRequest<AddressResponse>(requestURL);
    }

    async getAddressDetail(dpid: number) {
        let requestURL = encodeURI(`${this.addressCheckerBaseURL}/details?dpid=${dpid}`);

        return await this.performAuthorizedRequest<DetailResponse>(requestURL);
    }

    async suggestAddress(query: string) {
        let requestURL = encodeURI(`${this.addressCheckerBaseURL}/suggest?q=${query}`);

        return await this.performAuthorizedRequest<SuggestionResponse>(requestURL);
    }

    /*
    * Parcel Label Methods
    */

    private labelBaseURL = "https://api.nzpost.co.nz/parcellabel/v3/labels";

    async createDomesticLabel(label: Label) {
        return await this.performAuthorizedRequest<LabelResponse, Label>(this.labelBaseURL, Method.POST, label);
    }

    /*
    * Parcel Track Methods
    */

    private parcelTrackBaseURL = "https://api.nzpost.co.nz/parceltrack/3.0";

    private parcelEndpoint = "parcels";

    private webhookEndpoint = "subscription/webhook"

    async getParcelTrackingDetails(trackingReference: string) {
        return await this.performAuthorizedRequest<TrackResponse>(`${this.parcelTrackBaseURL}/${this.parcelEndpoint}/${trackingReference}`);
    }

    async subscribeWithAccountNumber(accountNumber: string, webhookUrl: string) {
        const requestURI = encodeURI(`${this.parcelTrackBaseURL}/${this.webhookEndpoint}`);

        return await this.performAuthorizedRequest<WebhookResponse, TrackBody>(requestURI, Method.POST, {
            account_number: accountNumber,
            notification_endpoint: webhookUrl
        });
    }

    async subscribeWithTrackingNumber(trackingReference: string, webhookUrl: string) {
        const requestURI = encodeURI(`${this.parcelTrackBaseURL}/${this.webhookEndpoint}`);

        return await this.performAuthorizedRequest<WebhookResponse, TrackBody>(requestURI, Method.POST, {
            tracking_reference: trackingReference,
            notification_endpoint: webhookUrl
        });
    }
    
}

