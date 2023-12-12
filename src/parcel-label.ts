import { Base } from "./base.js";

interface Label { }

interface LabelResponse {
    success: boolean;
    message_id: string;
    consignment_id: string;
}

/**
 * The ParcelLabel API is used to create parcel and destination specific shipping labels for domestic or international services.
 */
export class ParcelLabel extends Base {
    private baseURL = "https://api.nzpost.co.nz/parcellabel/v3/labels";

    /**
     * Request for creating labels which are to be delivered within New Zealand. 
     */
    async createDomesticLabel(label: Label) {
        return await this.performAuthorizedRequest<LabelResponse, any>(this.baseURL, "POST", label);
    }
}