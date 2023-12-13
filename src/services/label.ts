import { Base } from "./base.js";
import { Label, LabelResponse, Method } from "../interfaces/index.js";
import { injectable } from "tsyringe";

@injectable()
export class LabelService extends Base {
    baseURL = "https://api.nzpost.co.nz/parcellabel/v3/labels";

    async createDomesticLabel(label: Label) {
        return await this.performAuthorizedRequest<LabelResponse, Label>(this.baseURL, Method.POST, label);
    }
}