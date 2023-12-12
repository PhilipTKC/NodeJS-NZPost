import { APIService } from "./api-service.js";

/**
 * The AddressChecker API enables search for domestic addresses for mail.
 */
export class AddressChecker {
    #apiService: APIService;

    constructor(apiService: APIService) {
        this.#apiService = apiService;
    }

    /**
    * Takes an address fragment, and returns a set of addresses that match the fragment.
    */
    async find(line1: string, line2?: string) {
        return await this.#apiService.findAddress(line1, line2);
    }

    /**
     * Takes a DPID, and returns the full details of the address.
     * DPID can be obtained from the find method.
     */
    async detail(dpid: number) {
        return await this.#apiService.getAddressDetail(dpid);
    }

    /**
     * Takes an address fragment, and returns a set of suggested addresses that match the fragment.
     */
    async suggest(query: string) {
        return await this.#apiService.suggestAddress(query);
    }
}