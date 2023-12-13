import { Base } from "./base.js";
import { AddressResponse, DetailResponse, SuggestionResponse } from "../interfaces";
export declare class AddressCheckerService extends Base {
    baseURL: string;
    findAddress(line1: string, line2?: string): Promise<AddressResponse>;
    getAddressDetail(dpid: number): Promise<DetailResponse>;
    suggestAddress(query: string): Promise<SuggestionResponse>;
}
