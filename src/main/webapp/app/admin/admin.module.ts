import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';
import { NanosSharedModule } from 'app/shared';
import {
    adminState,
    AuditsComponent,
    LogsComponent,
    NanosConfigurationComponent,
    NanosDocsComponent,
    NanosHealthCheckComponent,
    NanosHealthModalComponent,
    NanosMetricsMonitoringComponent,
    NanosMetricsMonitoringModalComponent,
    UserMgmtComponent,
    UserMgmtDeleteDialogComponent,
    UserMgmtDetailComponent,
    UserMgmtUpdateComponent
} from './';

/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */

@NgModule({
    imports: [
        NanosSharedModule,
        RouterModule.forChild(adminState)
        /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
    ],
    declarations: [
        AuditsComponent,
        UserMgmtComponent,
        UserMgmtDetailComponent,
        UserMgmtUpdateComponent,
        UserMgmtDeleteDialogComponent,
        LogsComponent,
        NanosConfigurationComponent,
        NanosHealthCheckComponent,
        NanosHealthModalComponent,
        NanosDocsComponent,
        NanosMetricsMonitoringComponent,
        NanosMetricsMonitoringModalComponent
    ],
    entryComponents: [UserMgmtDeleteDialogComponent, NanosHealthModalComponent, NanosMetricsMonitoringModalComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NanosAdminModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
