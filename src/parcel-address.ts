import { Base } from "./base.js";

interface AddressResponse {
    full_address: string;
    address_id: string;
    dpid: string;
}

/**
* The ParcelAddress API enables search for international and domestic addresses.
*/
export class ParcelAddress extends Base {
    private baseURL = "https://api.nzpost.co.nz/parceladdress/2.0/domestic/addresses?";

    /**
     * Returns a list of suggested domestic addresses for an address fragment.
     */
    async retrieveAddresses(searchQuery: string, count = 5) {
        const requestUrl = encodeURI(`${this.baseURL}q=${searchQuery}&count=${count}`);

        return await this.performAuthorizedRequest<AddressResponse>(requestUrl);
    }
}