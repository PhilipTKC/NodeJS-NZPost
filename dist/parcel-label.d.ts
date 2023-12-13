import { LabelService } from "./services/label.js";
import { Label } from "./interfaces/index.js";
/**
 * The ParcelLabel API is used to create parcel and destination specific shipping labels for domestic or international services.
 */
interface IParcelLabel {
    /**
     * Request for creating labels which are to be delivered within New Zealand.
     */
    createDomesticLabel(label: Label): Promise<any>;
}
export declare class ParcelLabel implements IParcelLabel {
    private apiService;
    constructor(apiService: LabelService);
    createDomesticLabel(label: Label): Promise<import("./interfaces/index.js").LabelResponse>;
}
export {};
