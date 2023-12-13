import { AddressCheckerService } from "./services/address-checker.js";
import { AddressResponse, DetailResponse, SuggestionResponse } from "./interfaces/index.js";
import { injectable } from "tsyringe";

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

@injectable()
export class AddressChecker implements IAddressChecker {

    constructor(private apiService: AddressCheckerService) { }

    async find(line1: string, line2?: string) {
        return await this.apiService.findAddress(line1, line2);
    }

    async detail(dpid: number) {
        return await this.apiService.getAddressDetail(dpid);
    }

    async suggest(query: string) {
        return await this.apiService.suggestAddress(query);
    }
}