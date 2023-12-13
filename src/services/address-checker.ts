import { Base } from "./base.js";

import { AddressResponse, DetailResponse, SuggestionResponse } from "../interfaces";
import { injectable } from "tsyringe";

@injectable()
export class AddressCheckerService extends Base {
    baseURL = "https://api.nzpost.co.nz/addresschecker/1.0";

    async findAddress(line1: string, line2?: string) {
        let apiUrl = line2 ? `${this.baseURL}/find?address_line_1=${line1}&address_line_2=${line2}` : `${this.baseURL}/find?address_line_1=${line1}`;

        const requestURL = encodeURI(apiUrl);

        return await this.performAuthorizedRequest<AddressResponse>(requestURL);
    }

    async getAddressDetail(dpid: number) {
        let requestURL = encodeURI(`${this.baseURL}/details?dpid=${dpid}`);

        return await this.performAuthorizedRequest<DetailResponse>(requestURL);
    }

    async suggestAddress(query: string) {
        let requestURL = encodeURI(`${this.baseURL}/suggest?q=${query}`);

        return await this.performAuthorizedRequest<SuggestionResponse>(requestURL);
    }
}