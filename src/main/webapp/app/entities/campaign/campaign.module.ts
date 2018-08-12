import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NanosSharedModule } from 'app/shared';
import {
    CampaignComponent,
    CampaignDeleteDialogComponent,
    CampaignDeletePopupComponent,
    CampaignDetailComponent,
    CampaignListComponent,
    campaignPopupRoute,
    campaignRoute,
    CampaignUpdateComponent
} from './';
import { CampaignPlatformComponent } from 'app/entities/campaign/campaign-platform.component';

const ENTITY_STATES = [...campaignRoute, ...campaignPopupRoute];

@NgModule({
    imports: [NanosSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        CampaignComponent,
        CampaignDetailComponent,
        CampaignPlatformComponent,
        CampaignUpdateComponent,
        CampaignDeleteDialogComponent,
        CampaignDeletePopupComponent,
        CampaignListComponent
    ],
    entryComponents: [
        CampaignComponent,
        CampaignUpdateComponent,
        CampaignPlatformComponent,
        CampaignDeleteDialogComponent,
        CampaignDeletePopupComponent,
        CampaignListComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [CampaignListComponent]
})
export class NanosCampaignModule {}
