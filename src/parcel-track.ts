import { TrackService } from "./services/track.js";
import { TrackResponse, WebhookResponse } from "./interfaces/index.js";
import { injectable } from "tsyringe";

/**
 * The ParcelTrack API is used to track parcels.
 */
interface IParcelTrack {
    /**
     * Takes a tracking reference, and returns the tracking details of the parcel.
     */
    getParcelTrackingDetails(trackingReference: string): Promise<TrackResponse>;

    /**
     * Subscribe to a webhook for a parcel using account number
     */
    subscribeWithAccountNumber(accountNumber: string, webhookUrl: string): Promise<WebhookResponse>;

    /**
     * Subscribe to a webhook for a parcel using tracking number
     */
    subscribeWithTrackingNumber(trackingReference: string, webhookUrl: string): Promise<WebhookResponse>;
}

@injectable()
export class ParcelTrack {

    constructor(private apiService: TrackService) {
        this.apiService = apiService;
    }

    async getParcelTrackingDetails(trackingReference: string) {
        return await this.apiService.getParcelTrackingDetails(trackingReference);
    }

    async subscribeWithAccountNumber(accountNumber: string, webhookUrl: string) {
        return await this.apiService.subscribeWithAccountNumber(accountNumber, webhookUrl);
    }

    async subscribeWithTrackingNumber(trackingReference: string, webhookUrl: string) {
        return await this.apiService.subscribeWithTrackingNumber(trackingReference, webhookUrl);
    }
}