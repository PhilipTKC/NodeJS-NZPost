import { TrackService } from "./services/track.js";
import { TrackResponse, WebhookResponse } from "./interfaces/index.js";
export declare class ParcelTrack {
    private apiService;
    constructor(apiService: TrackService);
    getParcelTrackingDetails(trackingReference: string): Promise<TrackResponse>;
    subscribeWithAccountNumber(accountNumber: string, webhookUrl: string): Promise<WebhookResponse>;
    subscribeWithTrackingNumber(trackingReference: string, webhookUrl: string): Promise<WebhookResponse>;
}
