import './vendor.ts';

import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocalStorageService, Ng2Webstorage, SessionStorageService } from 'ngx-webstorage';
import { JhiEventManager } from 'ng-jhipster';

import { AuthInterceptor } from './blocks/interceptor/auth.interceptor';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { NanosSharedModule } from 'app/shared';
import { NanosCoreModule } from 'app/core';
import { NanosAppRoutingModule } from './app-routing.module';
import { NanosHomeModule } from './home/home.module';
import { NanosAccountModule } from './account/account.module';
import { NanosEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { ActiveMenuDirective, ErrorComponent, FooterComponent, NanosMainComponent, NavbarComponent, PageRibbonComponent } from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        NanosAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'nanos', separator: '-' }),
        NanosSharedModule,
        NanosCoreModule,
        NanosHomeModule,
        NanosAccountModule,
        NanosEntityModule
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [NanosMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
            deps: [LocalStorageService, SessionStorageService]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true,
            deps: [Injector]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true,
            deps: [JhiEventManager]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true,
            deps: [Injector]
        }
    ],
    bootstrap: [NanosMainComponent]
})
export class NanosAppModule {}
