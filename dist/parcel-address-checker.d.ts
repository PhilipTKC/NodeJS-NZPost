import { AddressCheckerService } from "./services/address-checker.js";
import { AddressResponse, DetailResponse, SuggestionResponse } from "./interfaces/index.js";
/**
 * The AddressChecker API enables search for domestic addresses for mail.
 */
interface IAddressChecker {
    /**
    * Takes an address fragment, and returns a set of addresses that match the fragment.
    */
    find(line1: string, line2?: string): Promise<AddressResponse>;
    /**
     * Takes a DPID, and returns the full details of the address.
     * DPID can be obtained from the find method.
     */
    detail(dpid: number): Promise<DetailResponse>;
    /**
     * Takes an address fragment, and returns a set of suggested addresses that match the fragment.
     */
    suggest(query: string): Promise<SuggestionResponse>;
}
export declare class AddressChecker implements IAddressChecker {
    private apiService;
    constructor(apiService: AddressCheckerService);
    find(line1: string, line2?: string): Promise<AddressResponse>;
    detail(dpid: number): Promise<DetailResponse>;
    suggest(query: string): Promise<SuggestionResponse>;
}
export {};
