export declare class Authentication {
    accessToken: string;
    private tokenExpirationTime;
    private baseURL;
    clientId: string;
    clientSecret: string;
    setClientIdAndSecret(clientId: string, clientSecret: string): void;
    /**
     * Set access token from the NZ Post API.
     */
    setAccessToken(): Promise<void>;
    /**
     * Checks if the current access token is expired.
     */
    isTokenExpired(): boolean;
}
