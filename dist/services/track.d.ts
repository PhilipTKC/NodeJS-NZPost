import { Base } from "./base.js";
import { TrackResponse, WebhookResponse } from "../interfaces/index.js";
export declare class TrackService extends Base {
    baseURL: string;
    private parcelEndpoint;
    private webhookEndpoint;
    getParcelTrackingDetails(trackingReference: string): Promise<TrackResponse>;
    subscribeWithAccountNumber(accountNumber: string, webhookUrl: string): Promise<WebhookResponse>;
    subscribeWithTrackingNumber(trackingReference: string, webhookUrl: string): Promise<WebhookResponse>;
}
