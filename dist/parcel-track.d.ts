import { APIService } from "./api-service.js";
export declare class ParcelTrack {
    #private;
    constructor(apiService: APIService);
    getParcelTrackingDetails(trackingReference: string): Promise<import("./interfaces/index.js").TrackResponse>;
    /**
     * Subscribe to a webhook for a parcel using account number
     */
    subscribeWithAccountNumber(accountNumber: string, webhookUrl: string): Promise<import("./interfaces/index.js").WebhookResponse>;
    /**
     * Subscribe to a webhook for a parcel using tracking number
     */
    subscribeWithTrackingNumber(trackingReference: string, webhookUrl: string): Promise<import("./interfaces/index.js").WebhookResponse>;
}
