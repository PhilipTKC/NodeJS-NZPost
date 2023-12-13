import { Base } from "./base.js";
import { ParcelAddressResponse } from "../interfaces/index.js";
export declare class AddressService extends Base {
    baseURL: string;
    retrieveAddresses(searchQuery: string, count?: number): Promise<ParcelAddressResponse>;
}
