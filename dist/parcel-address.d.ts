import { APIService } from "./api-service.js";
/**
* The ParcelAddress API enables search for international and domestic addresses.
*/
export declare class ParcelAddress {
    #private;
    constructor(apiService: APIService);
    /**
     * Returns a list of suggested domestic addresses for an address fragment.
     */
    retrieveAddresses(searchQuery: string, count?: number): Promise<import("./interfaces/index.js").ParcelAddressResponse>;
}
