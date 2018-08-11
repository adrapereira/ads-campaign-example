import { NgModule } from '@angular/core';

import { FindLanguageFromKeyPipe, NanosAlertComponent, NanosAlertErrorComponent, NanosSharedLibsModule } from './';

@NgModule({
    imports: [NanosSharedLibsModule],
    declarations: [FindLanguageFromKeyPipe, NanosAlertComponent, NanosAlertErrorComponent],
    exports: [NanosSharedLibsModule, FindLanguageFromKeyPipe, NanosAlertComponent, NanosAlertErrorComponent]
})
export class NanosSharedCommonModule {}
