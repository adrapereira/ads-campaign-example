import {TargetAudiance} from 'app/shared/model/target.audiance.model';
import {Insights} from 'app/shared/model/insights.model';
import {Creatives} from 'app/shared/model/creatives.model';

export class Platform {
    constructor(
        public status?: string,
        public totalBudget?: number,
        public remainingBudget?: number,
        public startDate?: number,
        public endDate?: number,
        public targetAudiance?: TargetAudiance,
        public insights?: Insights,
        public creatives?: Creatives,
    ) {}
}
