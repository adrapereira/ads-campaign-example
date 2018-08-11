import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { HasAnyAuthorityDirective, NanosLoginModalComponent, NanosSharedCommonModule, NanosSharedLibsModule } from './';

@NgModule({
    imports: [NanosSharedLibsModule, NanosSharedCommonModule],
    declarations: [NanosLoginModalComponent, HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [NanosLoginModalComponent],
    exports: [NanosSharedCommonModule, NanosLoginModalComponent, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NanosSharedModule {}
