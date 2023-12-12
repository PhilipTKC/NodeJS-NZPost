import { AddressChecker } from "./parcel-address-checker.js";
import { ParcelAddress } from "./parcel-address.js";
import { ParcelLabel } from "./parcel-label.js";
import { ParcelTrack } from "./parcel-track.js";
export declare class NZPost {
    parcelAddressChecker: AddressChecker;
    parcelAddress: ParcelAddress;
    parcelLabel: ParcelLabel;
    parcelTrack: ParcelTrack;
    constructor(clientId: string, clientSecret: string);
}
