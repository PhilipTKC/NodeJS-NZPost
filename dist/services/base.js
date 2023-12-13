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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Authentication } from './authentication.js';
import { handleResponse } from '../utility/handle-response.js';
import { Method } from '../interfaces/index.js';
import { inject, injectable } from 'tsyringe';
let Base = class Base {
    constructor(authentication) {
        this.authentication = authentication;
        this.baseURL = "";
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
            console.log(this.authentication.accessToken);
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
};
Base = __decorate([
    injectable(),
    __param(0, inject(Authentication)),
    __metadata("design:paramtypes", [Authentication])
], Base);
export { Base };
