var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Method } from './interfaces/index.js';
import { handleResponse } from './utility/handle-response.js';
/*
* TODO: REFACTOR, Split into multiple services
*/
export class APIService {
    constructor(authentication) {
        this.authentication = authentication;
        /*
        * Parcel Address Methods
        */
        this.parcelAddressBaseURL = "https://api.nzpost.co.nz/parceladdress/2.0";
        /*
        * Address Checker Methods
        */
        this.addressCheckerBaseURL = "https://api.nzpost.co.nz/addresschecker/1.0";
        /*
        * Parcel Label Methods
        */
        this.labelBaseURL = "https://api.nzpost.co.nz/parcellabel/v3/labels";
        /*
        * Parcel Track Methods
        */
        this.parcelTrackBaseURL = "https://api.nzpost.co.nz/parceltrack/3.0";
        this.parcelEndpoint = "parcels";
        this.webhookEndpoint = "subscription/webhook";
    }
    ensureAccessToken() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.authentication.accessToken || this.authentication.isTokenExpired()) {
                yield this.authentication.setAccessToken();
            }
        });
    }
    sendHttpRequest(url, method, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const init = {
                method,
                headers: {
                    client_id: this.authentication.clientId,
                    Authorization: `Bearer ${this.authentication.accessToken}`,
                    Accept: "application/json"
                }
            };
            if (method === "POST" && body) {
                init.headers["Content-Type"] = "application/json";
                init.body = JSON.stringify(body);
            }
            const request = yield fetch(url, init);
            return yield handleResponse(request);
        });
    }
    performAuthorizedRequest(url, method = Method.GET, body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ensureAccessToken();
            return yield this.sendHttpRequest(url, method, body);
        });
    }
    retrieveAddresses(searchQuery, count = 5) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestUrl = encodeURI(`${this.parcelAddressBaseURL}q=${searchQuery}&count=${count}`);
            return yield this.performAuthorizedRequest(requestUrl);
        });
    }
    findAddress(line1, line2) {
        return __awaiter(this, void 0, void 0, function* () {
            let apiUrl = line2 ? `${this.addressCheckerBaseURL}/find?address_line_1=${line1}&address_line_2=${line2}` : `${this.addressCheckerBaseURL}/find?address_line_1=${line1}`;
            const requestURL = encodeURI(apiUrl);
            return yield this.performAuthorizedRequest(requestURL);
        });
    }
    getAddressDetail(dpid) {
        return __awaiter(this, void 0, void 0, function* () {
            let requestURL = encodeURI(`${this.addressCheckerBaseURL}/details?dpid=${dpid}`);
            return yield this.performAuthorizedRequest(requestURL);
        });
    }
    suggestAddress(query) {
        return __awaiter(this, void 0, void 0, function* () {
            let requestURL = encodeURI(`${this.addressCheckerBaseURL}/suggest?q=${query}`);
            return yield this.performAuthorizedRequest(requestURL);
        });
    }
    createDomesticLabel(label) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.performAuthorizedRequest(this.labelBaseURL, Method.POST, label);
        });
    }
    getParcelTrackingDetails(trackingReference) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.performAuthorizedRequest(`${this.parcelTrackBaseURL}/${this.parcelEndpoint}/${trackingReference}`);
        });
    }
    subscribeWithAccountNumber(accountNumber, webhookUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestURI = encodeURI(`${this.parcelTrackBaseURL}/${this.webhookEndpoint}`);
            return yield this.performAuthorizedRequest(requestURI, Method.POST, {
                account_number: accountNumber,
                notification_endpoint: webhookUrl
            });
        });
    }
    subscribeWithTrackingNumber(trackingReference, webhookUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestURI = encodeURI(`${this.parcelTrackBaseURL}/${this.webhookEndpoint}`);
            return yield this.performAuthorizedRequest(requestURI, Method.POST, {
                tracking_reference: trackingReference,
                notification_endpoint: webhookUrl
            });
        });
    }
}
