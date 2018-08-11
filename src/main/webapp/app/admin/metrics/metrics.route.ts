import { Route } from '@angular/router';

import { NanosMetricsMonitoringComponent } from './metrics.component';

export const metricsRoute: Route = {
    path: 'nanos-metrics',
    component: NanosMetricsMonitoringComponent,
    data: {
        pageTitle: 'metrics.title'
    }
};
