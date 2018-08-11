import { Route } from '@angular/router';

import { NanosConfigurationComponent } from './configuration.component';

export const configurationRoute: Route = {
    path: 'nanos-configuration',
    component: NanosConfigurationComponent,
    data: {
        pageTitle: 'configuration.title'
    }
};
