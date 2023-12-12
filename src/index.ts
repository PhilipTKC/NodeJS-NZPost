import { Authentication } from "./authentication.js";
import { ParcelAddress } from "./parcel-address.js";
import { ParcelLabel } from "./parcel-label.js";
import { AddressChecker } from "./parcel-address-checker.js";

export class NZPost {
    private authentication: Authentication;

    private parcelAddressChecker: AddressChecker;

    private parcelAddress: ParcelAddress;

    private parcelLabel: ParcelLabel;

    constructor(private readonly clientId: string, private readonly clientSecret: string) {
        this.authentication = new Authentication(this.clientId, this.clientSecret);
        this.parcelAddressChecker = new AddressChecker(this.authentication);
        this.parcelAddress = new ParcelAddress(this.authentication);
        this.parcelLabel = new ParcelLabel(this.authentication);
    }

    get addressChecker() {
        return this.parcelAddressChecker;
    }

    get address() {
        return this.parcelAddress;
    }

    get label() {
        return this.parcelLabel;
    }
}