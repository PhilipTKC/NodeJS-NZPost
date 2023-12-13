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
container.register(Base, { useClass: Base });

container.register(AddressChecker, { useClass: AddressChecker });
container.register(AddressCheckerService, { useClass: AddressCheckerService });

container.register(ParcelAddress, { useClass: ParcelAddress });
container.register(AddressService, { useClass: AddressService });

container.register(ParcelLabel, { useClass: ParcelLabel });
container.register(LabelService, { useClass: LabelService });

container.register(ParcelTrack, { useClass: ParcelTrack });
container.register(TrackService, { useClass: TrackService });

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