import { AddressService } from "./services/adress.js";
import { ParcelAddressResponse } from "./interfaces/index.js";
import { injectable } from "tsyringe";

/**
* The ParcelAddress API enables search for international and domestic addresses.
*/
interface IParcelAddress {
    /**
     * Returns a list of suggested domestic addresses for an address fragment.
     */
    retrieveAddresses(searchQuery: string, count: number): Promise<ParcelAddressResponse>;
}

@injectable()
export class ParcelAddress implements IParcelAddress {

    constructor(private apiService: AddressService) { }

    async retrieveAddresses(searchQuery: string, count = 5) {
        return await this.apiService.retrieveAddresses(searchQuery, count);
    }
}