import {Platform} from 'app/shared/model/platform.model';

export class Campaign {
    constructor(
        public id?: string,
        public name?: string,
        public goal?: string,
        public totalBudget?: number,
        public status?: string,
        public platforms?: Map<string, Platform>
    ) {}
}
