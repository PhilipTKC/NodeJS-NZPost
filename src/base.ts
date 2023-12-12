import { Authentication } from './authentication.js';

interface RequestOptions {
    method: string;
    headers: {
        client_id: string;
        Authorization: string;
        "Content-Type"?: string;
        Accept?: string;
    };
    body?: any;
}

export class Base {
    constructor(private authentication: Authentication) { }

    private async ensureAccessToken(): Promise<void> {
        if (!this.authentication.accessToken || this.authentication.isTokenExpired()) {
            await this.authentication.getAccessToken();
        }
    }

    private async sendHttpRequest<TResponse, TBody = undefined>(url: string, method = "GET", body?: TBody): Promise<TResponse | undefined> {
        const init: RequestOptions = {
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

        try {
            const response = await fetch(url, init);

            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            const jsonResponse = await response.json();
    
            return jsonResponse as TResponse;
        } catch (error) {
            console.log(error);
            // TODO: Handle errors
        }
    }

    protected async performAuthorizedRequest<TResponse, TBody = undefined>(url: string, method = "GET", body?: TBody): Promise<TResponse | undefined> {
        await this.ensureAccessToken();
        return await this.sendHttpRequest<TResponse, TBody>(url, method, body);
    }
}