import { APIService } from "./api-service.js";
/**
 * The AddressChecker API enables search for domestic addresses for mail.
 */
export declare class AddressChecker {
    #private;
    constructor(apiService: APIService);
    /**
    * Takes an address fragment, and returns a set of addresses that match the fragment.
    */
    find(line1: string, line2?: string): Promise<import("./interfaces/index.js").AddressResponse>;
    /**
     * Takes a DPID, and returns the full details of the address.
     * DPID can be obtained from the find method.
     */
    detail(dpid: number): Promise<import("./interfaces/index.js").DetailResponse>;
    /**
     * Takes an address fragment, and returns a set of suggested addresses that match the fragment.
     */
    suggest(query: string): Promise<import("./interfaces/index.js").SuggestionResponse>;
}
