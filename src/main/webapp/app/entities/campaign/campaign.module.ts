import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NanosSharedModule } from 'app/shared';
import {
    CampaignComponent,
    CampaignDeleteDialogComponent,
    CampaignDeletePopupComponent,
    CampaignDetailComponent,
    campaignPopupRoute,
    campaignRoute,
    CampaignUpdateComponent
} from './';

const ENTITY_STATES = [...campaignRoute, ...campaignPopupRoute];

@NgModule({
    imports: [NanosSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        CampaignComponent,
        CampaignDetailComponent,
        CampaignUpdateComponent,
        CampaignDeleteDialogComponent,
        CampaignDeletePopupComponent
    ],
    entryComponents: [CampaignComponent, CampaignUpdateComponent, CampaignDeleteDialogComponent, CampaignDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NanosCampaignModule {}
