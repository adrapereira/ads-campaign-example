import { Route } from '@angular/router';

import { NanosHealthCheckComponent } from './health.component';

export const healthRoute: Route = {
    path: 'nanos-health',
    component: NanosHealthCheckComponent,
    data: {
        pageTitle: 'health.title'
    }
};
