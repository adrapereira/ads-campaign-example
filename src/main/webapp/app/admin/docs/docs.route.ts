import { Route } from '@angular/router';

import { NanosDocsComponent } from './docs.component';

export const docsRoute: Route = {
    path: 'docs',
    component: NanosDocsComponent,
    data: {
        pageTitle: 'global.menu.admin.apidocs'
    }
};
