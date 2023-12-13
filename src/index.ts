import "reflect-metadata";
import { container, inject, injectable } from "tsyringe";

import { Authentication } from "./services/authentication.js";

import { AddressChecker } from "./parcel-address-checker.js";
import { ParcelAddress } from "./parcel-address.js";
import { ParcelLabel } from "./parcel-label.js";
import { ParcelTrack } from "./parcel-track.js";

import { Base } from "./services/base.js";
import { AddressCheckerService } from "./services/address-checker.js";
import { AddressService } from "./services/adress.js";
import { LabelService } from "./services/label.js";
import { TrackService } from "./services/track.js";

container.registerSingleton(Authentication, Authentication);
container.registerSingleton(Base, Base);

container.registerSingleton(AddressChecker, AddressChecker);
container.registerSingleton(AddressCheckerService, AddressCheckerService);

container.registerSingleton(ParcelAddress, ParcelAddress);
container.registerSingleton(AddressService, AddressService);

container.registerSingleton(ParcelLabel, ParcelLabel);
container.registerSingleton(LabelService, LabelService);

container.registerSingleton(ParcelTrack, ParcelTrack);
container.registerSingleton(TrackService, TrackService);

@injectable()
export class NZPost {
    addressChecker: AddressChecker;

    parcelAddress: ParcelAddress;

    parcelLabel: ParcelLabel;

    parcelTrack: ParcelTrack;

    constructor(
        @inject(AddressChecker) addressChecker: AddressChecker,
        @inject(ParcelAddress) parcelAddress: ParcelAddress,
        @inject(ParcelLabel) parcelLabel: ParcelLabel,
        @inject(ParcelTrack) parcelTrack: ParcelTrack,
    ) {
        this.addressChecker = addressChecker;
        this.parcelAddress = parcelAddress;
        this.parcelLabel = parcelLabel;
        this.parcelTrack = parcelTrack;
    }

    static create(clientId: string, clientSecret: string): NZPost {
        const authentication = container.resolve(Authentication);

        authentication.setClientIdAndSecret(clientId, clientSecret);

        return new NZPost(
            container.resolve(AddressChecker),
            container.resolve(ParcelAddress),
            container.resolve(ParcelLabel),
            container.resolve(ParcelTrack)
        );
    }
}