import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {NanosSharedModule} from 'app/shared';
import {HOME_ROUTE, HomeComponent} from './';
import {NanosCampaignModule} from 'app/entities/campaign/campaign.module';

@NgModule({
    imports: [NanosSharedModule, NanosCampaignModule, RouterModule.forChild([HOME_ROUTE])],
    declarations: [HomeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NanosHomeModule {}
