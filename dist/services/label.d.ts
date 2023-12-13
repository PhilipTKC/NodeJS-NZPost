import { Base } from "./base.js";
import { Label, LabelResponse } from "../interfaces/index.js";
export declare class LabelService extends Base {
    baseURL: string;
    createDomesticLabel(label: Label): Promise<LabelResponse>;
}
