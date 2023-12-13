import { LabelService } from "./services/label.js";
import { Label } from "./interfaces/index.js";
import { injectable } from "tsyringe";

/**
 * The ParcelLabel API is used to create parcel and destination specific shipping labels for domestic or international services.
 */
interface IParcelLabel {
    /**
     * Request for creating labels which are to be delivered within New Zealand. 
     */
    createDomesticLabel(label: Label): Promise<any>;
}

@injectable()
export class ParcelLabel implements IParcelLabel {

    constructor(private apiService: LabelService) {
        this.apiService = apiService;
    }

    async createDomesticLabel(label: Label) {
        return await this.apiService.createDomesticLabel(label);
    }
}