import { APIService } from "./api-service.js";

/**
* The ParcelAddress API enables search for international and domestic addresses.
*/
export class ParcelAddress {
    #apiService: APIService;

    constructor(apiService: APIService) {
        this.#apiService = apiService;
    }

    /**
     * Returns a list of suggested domestic addresses for an address fragment.
     */
    async retrieveAddresses(searchQuery: string, count = 5) {
        return await this.#apiService.retrieveAddresses(searchQuery, count);
    }
}