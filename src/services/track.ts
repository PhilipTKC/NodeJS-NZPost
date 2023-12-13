import { Base } from "./base.js";
import { Method, TrackBody, TrackResponse, WebhookResponse } from "../interfaces/index.js";
import { injectable } from "tsyringe";

@injectable()
export class TrackService extends Base {
    baseURL = "https://api.nzpost.co.nz/parceltrack/3.0";

    private parcelEndpoint = "parcels";

    private webhookEndpoint = "subscription/webhook"

    async getParcelTrackingDetails(trackingReference: string) {
        return await this.performAuthorizedRequest<TrackResponse>(`${this.baseURL}/${this.parcelEndpoint}/${trackingReference}`);
    }

    async subscribeWithAccountNumber(accountNumber: string, webhookUrl: string) {
        const requestURI = encodeURI(`${this.baseURL}/${this.webhookEndpoint}`);

        return await this.performAuthorizedRequest<WebhookResponse, TrackBody>(requestURI, Method.POST, {
            account_number: accountNumber,
            notification_endpoint: webhookUrl
        });
    }

    async subscribeWithTrackingNumber(trackingReference: string, webhookUrl: string) {
        const requestURI = encodeURI(`${this.baseURL}/${this.webhookEndpoint}`);

        return await this.performAuthorizedRequest<WebhookResponse, TrackBody>(requestURI, Method.POST, {
            tracking_reference: trackingReference,
            notification_endpoint: webhookUrl
        });
    }
}