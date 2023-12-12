var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ParcelTrack_apiService;
export class ParcelTrack {
    constructor(apiService) {
        _ParcelTrack_apiService.set(this, void 0);
        __classPrivateFieldSet(this, _ParcelTrack_apiService, apiService, "f");
    }
    getParcelTrackingDetails(trackingReference) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _ParcelTrack_apiService, "f").getParcelTrackingDetails(trackingReference);
        });
    }
    /**
     * Subscribe to a webhook for a parcel using account number
     */
    subscribeWithAccountNumber(accountNumber, webhookUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _ParcelTrack_apiService, "f").subscribeWithAccountNumber(accountNumber, webhookUrl);
        });
    }
    /**
     * Subscribe to a webhook for a parcel using tracking number
     */
    subscribeWithTrackingNumber(trackingReference, webhookUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _ParcelTrack_apiService, "f").subscribeWithTrackingNumber(trackingReference, webhookUrl);
        });
    }
}
_ParcelTrack_apiService = new WeakMap();
