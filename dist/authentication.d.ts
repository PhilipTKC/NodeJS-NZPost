export declare class Authentication {
    clientId: string;
    private clientSecret;
    accessToken: string;
    private tokenExpirationTime;
    private baseURL;
    constructor(clientId: string, clientSecret: string);
    /**
     * Set access token from the NZ Post API.
     */
    setAccessToken(): Promise<void>;
    /**
     * Checks if the current access token is expired.
     */
    isTokenExpired(): boolean;
}
