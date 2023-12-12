import { APIService } from "./api-service.js";

export class ParcelTrack {
    #apiService: APIService;

    constructor(apiService: APIService) {
        this.#apiService = apiService;
    }

    async getParcelTrackingDetails(trackingReference: string) {
        return await this.#apiService.getParcelTrackingDetails(trackingReference);
    }

    /**
     * Subscribe to a webhook for a parcel using account number
     */
    async subscribeWithAccountNumber(accountNumber: string, webhookUrl: string) {
        return await this.#apiService.subscribeWithAccountNumber(accountNumber, webhookUrl);
    }

    /**
     * Subscribe to a webhook for a parcel using tracking number
     */
    async subscribeWithTrackingNumber(trackingReference: string, webhookUrl: string) {
        return await this.#apiService.subscribeWithTrackingNumber(trackingReference, webhookUrl);
    }
}