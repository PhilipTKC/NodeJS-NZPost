interface AccessToken {
    access_token: string;
    token_type: string;
    expires_in: number;

}

export class Authentication {
    accessToken: string = "";

    private tokenExpirationTime: number = 0;

    private baseURL = "https://oauth.nzpost.co.nz/as/token.oauth2";

    constructor(public clientId: string, private clientSecret: string) { }

    /**
     * Get an access token from the NZ Post API.
     */
    async getAccessToken(): Promise<string | undefined> {
        const requestBody = `grant_type=client_credentials&client_id=${this.clientId}&client_secret=${this.clientSecret}`;

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: requestBody,
        };

        try {
            const response = await fetch(this.baseURL, requestOptions);

            if (!response.ok) {
                throw new Error(`Error authenticating with NZ Post API: ${response.status} - ${response.statusText}`);
            }

            const { access_token, token_type, expires_in } = await response.json() as AccessToken;

            this.accessToken = access_token;

            this.tokenExpirationTime = Math.floor(Date.now() / 1000) + expires_in;

            return access_token
        } catch (error) {
            // TODO: Handle errors
        }
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