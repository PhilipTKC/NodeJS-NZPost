import { Authentication } from './authentication.js';
import { Method } from '../interfaces/index.js';
export declare class Base {
    private authentication;
    protected baseURL: string;
    constructor(authentication: Authentication);
    private ensureAccessToken;
    private sendHttpRequest;
    protected performAuthorizedRequest<TResponse, TBody = undefined>(url: string, method?: Method, body?: TBody): Promise<TResponse>;
}
