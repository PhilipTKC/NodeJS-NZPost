import { AddressService } from "./services/adress.js";
import { ParcelAddressResponse } from "./interfaces/index.js";
/**
* The ParcelAddress API enables search for international and domestic addresses.
*/
interface IParcelAddress {
    /**
     * Returns a list of suggested domestic addresses for an address fragment.
     */
    retrieveAddresses(searchQuery: string, count: number): Promise<ParcelAddressResponse>;
}
export declare class ParcelAddress implements IParcelAddress {
    private apiService;
    constructor(apiService: AddressService);
    retrieveAddresses(searchQuery: string, count?: number): Promise<ParcelAddressResponse>;
}
export {};
