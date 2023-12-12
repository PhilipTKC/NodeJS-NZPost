import { APIService } from "./api-service.js";

import { Label } from "./interfaces/index.js";

/**
 * The ParcelLabel API is used to create parcel and destination specific shipping labels for domestic or international services.
 */
export class ParcelLabel {
    #apiService: APIService;

    constructor(apiService: APIService) {
        this.#apiService = apiService;
    }

    /**
     * Request for creating labels which are to be delivered within New Zealand. 
     */
    async createDomesticLabel(label: Label) {
        return await this.#apiService.createDomesticLabel(label);
    }
}