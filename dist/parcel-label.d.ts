import { APIService } from "./api-service.js";
import { Label } from "./interfaces/index.js";
/**
 * The ParcelLabel API is used to create parcel and destination specific shipping labels for domestic or international services.
 */
export declare class ParcelLabel {
    #private;
    constructor(apiService: APIService);
    /**
     * Request for creating labels which are to be delivered within New Zealand.
     */
    createDomesticLabel(label: Label): Promise<import("./interfaces/index.js").LabelResponse>;
}
