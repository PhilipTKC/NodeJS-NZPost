import { Base } from "./base.js";

interface Address {
    DPID: number;
    Deliverable: 'Y' | 'N';
    FullAddress: string;
    MatchScore: number;
    MatchedBoxBagType: 'Y' | 'N';
    MatchedCity: 'Y' | 'N';
    MatchedFloor: 'Y' | 'N';
    MatchedLobby: 'Y' | 'N';
    MatchedNumber: 'Y' | 'N';
    MatchedRoadName: 'Y' | 'N';
    MatchedRoadSuffixName: 'Y' | 'N';
    MatchedRoadTypeName: 'Y' | 'N';
    MatchedRuralDelivery: 'Y' | 'N';
    MatchedStreetAlpha: 'Y' | 'N';
    MatchedSuburb: 'Y' | 'N';
    MatchedUnit: 'Y' | 'N';
    Physical: 'Y' | 'N';
    SourceDesc: 'Postal\\Physical';
}

interface SuggestResponse {
    success: boolean;
    addresses: Address[];
    status: string;
}

interface DetailResponse {
    success: boolean;
    addresses: any;
    status: string;
}

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

        const requestUrl = encodeURI(apiUrl);

        return await this.performAuthorizedRequest<SuggestResponse>(requestUrl);
    }

    /**
     * Takes a DPID, and returns the full details of the address.
     * DPID can be obtained from the find method.
     */
    async detail(dpid: number) {
        let requestURL = encodeURI(`${this.baseURL}/details?dpid=${dpid}`)

        return await this.performAuthorizedRequest<DetailResponse>(requestURL);
    }
}