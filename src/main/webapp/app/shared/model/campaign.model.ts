export interface ICampaign {
    id?: string;
}

export class Campaign implements ICampaign {
    constructor(public id?: string) {}
}
