var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { handleResponse } from "./utility/handle-response.js";
export class Authentication {
    constructor(clientId, clientSecret) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.accessToken = "";
        this.tokenExpirationTime = 0;
        this.baseURL = "https://oauth.nzpost.co.nz/as/token.oauth2";
    }
    /**
     * Set access token from the NZ Post API.
     */
    setAccessToken() {
        return __awaiter(this, void 0, void 0, function* () {
            const requestBody = `grant_type=client_credentials&client_id=${this.clientId}&client_secret=${this.clientSecret}`;
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: requestBody,
            };
            const request = yield fetch(this.baseURL, requestOptions);
            const { access_token, token_type, expires_in } = yield handleResponse(request);
            this.accessToken = access_token;
            this.tokenExpirationTime = Math.floor(Date.now() / 1000) + expires_in;
        });
    }
    /**
     * Checks if the current access token is expired.
     */
    isTokenExpired() {
        // If we don't have a token or an expiration time, then the token is expired.
        if (!this.accessToken || !this.tokenExpirationTime) {
            return true;
        }
        const currentTime = Math.floor(Date.now() / 1000);
        return currentTime >= this.tokenExpirationTime;
    }
}
