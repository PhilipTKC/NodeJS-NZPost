var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var NZPost_1;
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
let NZPost = NZPost_1 = class NZPost {
    constructor(addressChecker, parcelAddress, parcelLabel, parcelTrack) {
        this.addressChecker = addressChecker;
        this.parcelAddress = parcelAddress;
        this.parcelLabel = parcelLabel;
        this.parcelTrack = parcelTrack;
    }
    static create(clientId, clientSecret) {
        const authentication = container.resolve(Authentication);
        authentication.setClientIdAndSecret(clientId, clientSecret);
        return new NZPost_1(container.resolve(AddressChecker), container.resolve(ParcelAddress), container.resolve(ParcelLabel), container.resolve(ParcelTrack));
    }
};
NZPost = NZPost_1 = __decorate([
    injectable(),
    __param(0, inject(AddressChecker)),
    __param(1, inject(ParcelAddress)),
    __param(2, inject(ParcelLabel)),
    __param(3, inject(ParcelTrack)),
    __metadata("design:paramtypes", [AddressChecker,
        ParcelAddress,
        ParcelLabel,
        ParcelTrack])
], NZPost);
export { NZPost };
