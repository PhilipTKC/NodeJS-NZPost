import { Authentication } from './authentication.js';
import { handleResponse } from '../utility/handle-response.js';
import { Method, RequestOptions } from '../interfaces/index.js';
import { inject, injectable } from 'tsyringe';

@injectable()
export class Base {

    protected baseURL = "";

    constructor(@inject(Authentication) private authentication: Authentication) { }

    private async ensureAccessToken(): Promise<void> {
        if (!this.authentication.accessToken || this.authentication.isTokenExpired()) {
            await this.authentication.setAccessToken();
        }
    }

    private async sendHttpRequest<TResponse, TBody>(url: string, method: Method, body?: TBody): Promise<TResponse> {
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

        const request = await fetch(url, init);

        return await handleResponse<TResponse>(request);
    }

    protected async performAuthorizedRequest<TResponse, TBody = undefined>(url: string, method = Method.GET, body?: TBody): Promise<TResponse> {
        await this.ensureAccessToken();
        return await this.sendHttpRequest<TResponse, TBody>(url, method, body);
    }
}

