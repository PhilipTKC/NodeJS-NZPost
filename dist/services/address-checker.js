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
import { injectable } from "tsyringe";
let AddressCheckerService = class AddressCheckerService extends Base {
    constructor() {
        super(...arguments);
        this.baseURL = "https://api.nzpost.co.nz/addresschecker/1.0";
    }
    findAddress(line1, line2) {
        return __awaiter(this, void 0, void 0, function* () {
            let apiUrl = line2 ? `${this.baseURL}/find?address_line_1=${line1}&address_line_2=${line2}` : `${this.baseURL}/find?address_line_1=${line1}`;
            const requestURL = encodeURI(apiUrl);
            return yield this.performAuthorizedRequest(requestURL);
        });
    }
    getAddressDetail(dpid) {
        return __awaiter(this, void 0, void 0, function* () {
            let requestURL = encodeURI(`${this.baseURL}/details?dpid=${dpid}`);
            return yield this.performAuthorizedRequest(requestURL);
        });
    }
    suggestAddress(query) {
        return __awaiter(this, void 0, void 0, function* () {
            let requestURL = encodeURI(`${this.baseURL}/suggest?q=${query}`);
            return yield this.performAuthorizedRequest(requestURL);
        });
    }
};
AddressCheckerService = __decorate([
    injectable()
], AddressCheckerService);
export { AddressCheckerService };
