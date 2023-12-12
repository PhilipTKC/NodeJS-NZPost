import { Authentication } from "./authentication.js";
import { APIService } from "./api-service.js";

import { AddressChecker } from "./parcel-address-checker.js";
import { ParcelAddress } from "./parcel-address.js";
import { ParcelLabel } from "./parcel-label.js";
import { ParcelTrack } from "./parcel-track.js";

export class NZPost {
    #parcelAddressChecker: AddressChecker;

    #parcelAddress: ParcelAddress;

    #parcelLabel: ParcelLabel;

    #parcelTrack: ParcelTrack;

    #clientId: string;

    #clientSecret: string;

    constructor(clientId: string, clientSecret: string) {
        this.#clientId = clientId;
        this.#clientSecret = clientSecret;

        const authentication = new Authentication(this.#clientId, this.#clientSecret);
        const apiService = new APIService(authentication);

        this.#parcelAddressChecker = new AddressChecker(apiService);
        this.#parcelAddress = new ParcelAddress(apiService);
        this.#parcelLabel = new ParcelLabel(apiService);
        this.#parcelTrack = new ParcelTrack(apiService);
    }

    get addressChecker() {
        return this.#parcelAddressChecker;
    }

    get address() {
        return this.#parcelAddress;
    }

    get label() {
        return this.#parcelLabel;
    }

    get track() {
        return this.#parcelTrack;
    }
}