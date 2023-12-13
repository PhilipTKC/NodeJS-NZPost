var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Base } from "./base.js";
import { Method } from "../interfaces/index.js";
import { injectable } from "tsyringe";
let TrackService = class TrackService extends Base {
    constructor() {
        super(...arguments);
        this.baseURL = "https://api.nzpost.co.nz/parceltrack/3.0";
        this.parcelEndpoint = "parcels";
        this.webhookEndpoint = "subscription/webhook";
    }
    getParcelTrackingDetails(trackingReference) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.performAuthorizedRequest(`${this.baseURL}/${this.parcelEndpoint}/${trackingReference}`);
        });
    }
    subscribeWithAccountNumber(accountNumber, webhookUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestURI = encodeURI(`${this.baseURL}/${this.webhookEndpoint}`);
            return yield this.performAuthorizedRequest(requestURI, Method.POST, {
                account_number: accountNumber,
                notification_endpoint: webhookUrl
            });
        });
    }
    subscribeWithTrackingNumber(trackingReference, webhookUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestURI = encodeURI(`${this.baseURL}/${this.webhookEndpoint}`);
            return yield this.performAuthorizedRequest(requestURI, Method.POST, {
                tracking_reference: trackingReference,
                notification_endpoint: webhookUrl
            });
        });
    }
};
TrackService = __decorate([
    injectable()
], TrackService);
export { TrackService };
