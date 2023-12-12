import { Base } from "./base.js";

import { AddressResponse, DetailResponse, SuggestionResponse } from "./interfaces/index.js";

/**
 * The AddressChecker API enables search for domestic addresses for mail.
 */
export class AddressChecker extends Base {
    private baseURL = "https://api.nzpost.co.nz/addresschecker/1.0";

    /**
    * Takes an address fragment, and returns a set of addresses that match the fragment.
    */
    async find(line1: string, line2?: string) {
        let apiUrl = line2 ? `${this.baseURL}/find?address_line_1=${line1}&address_line_2=${line2}` : `${this.baseURL}/find?address_line_1=${line1}`;

        const requestURL = encodeURI(apiUrl);

        return await this.performAuthorizedRequest<AddressResponse>(requestURL);
    }

    /**
     * Takes a DPID, and returns the full details of the address.
     * DPID can be obtained from the find method.
     */
    async detail(dpid: number) {
        let requestURL = encodeURI(`${this.baseURL}/details?dpid=${dpid}`);

        return await this.performAuthorizedRequest<DetailResponse>(requestURL);
    }

    async suggest(query: string) {
        let requestURL = encodeURI(`${this.baseURL}/suggest?q=${query}`);

        return await this.performAuthorizedRequest<SuggestionResponse>(requestURL);
    }
}