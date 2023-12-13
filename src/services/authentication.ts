import { AccessToken } from "../interfaces/index.js";
import { handleResponse } from "../utility/handle-response.js";
import { injectable } from "tsyringe";

@injectable()
export class Authentication {
    accessToken: string = "";

    private tokenExpirationTime: number = 0;

    private baseURL = "https://oauth.nzpost.co.nz/as/token.oauth2";

    clientId: string = "";

    clientSecret: string = "";
    
    setClientIdAndSecret(clientId: string, clientSecret: string) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }

    /**
     * Set access token from the NZ Post API.
     */
    async setAccessToken(): Promise<void> {
        const requestBody = `grant_type=client_credentials&client_id=${this.clientId}&client_secret=${this.clientSecret}`;

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: requestBody,
        };

        const request = await fetch(this.baseURL, requestOptions);

        const { access_token, token_type, expires_in } = await handleResponse<AccessToken>(request);

        this.accessToken = access_token;

        this.tokenExpirationTime = Math.floor(Date.now() / 1000) + expires_in;
    }

    /**
     * Checks if the current access token is expired.
     */
    isTokenExpired(): boolean {
        // If we don't have a token or an expiration time, then the token is expired.
        if (!this.accessToken || !this.tokenExpirationTime) {
            return true;
        }

        const currentTime = Math.floor(Date.now() / 1000);

        return currentTime >= this.tokenExpirationTime;
    }
}