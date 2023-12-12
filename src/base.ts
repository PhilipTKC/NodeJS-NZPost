import { Authentication } from './authentication.js';

import { RequestOptions } from './interfaces/index.js';
import { handleResponse } from './utility/handle-response.js';

export class Base {
    constructor(private authentication: Authentication) { }

    private async ensureAccessToken(): Promise<void> {
        if (!this.authentication.accessToken || this.authentication.isTokenExpired()) {
            await this.authentication.getAccessToken();
        }
    }

    private async sendHttpRequest<TResponse, TBody>(url: string, method = "GET", body?: TBody): Promise<TResponse> {
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

        const response = await fetch(url, init);

        return await handleResponse<TResponse>(response);
    }

    protected async performAuthorizedRequest<TResponse, TBody = undefined>(url: string, method = "GET", body?: TBody): Promise<TResponse> {
        await this.ensureAccessToken();
        return await this.sendHttpRequest<TResponse, TBody>(url, method, body);
    }
}