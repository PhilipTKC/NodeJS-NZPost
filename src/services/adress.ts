import { Base } from "./base.js";
import { ParcelAddressResponse } from "../interfaces/index.js";
import { injectable } from "tsyringe";

@injectable()
export class AddressService extends Base {
    baseURL = "https://api.nzpost.co.nz/parceladdress/2.0";

    async retrieveAddresses(searchQuery: string, count = 5) {
        const requestUrl = encodeURI(`${this.baseURL}q=${searchQuery}&count=${count}`);

        return await this.performAuthorizedRequest<ParcelAddressResponse>(requestUrl);
    }
}