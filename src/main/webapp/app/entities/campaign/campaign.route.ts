import {Injectable} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Routes} from '@angular/router';
import {UserRouteAccessService} from 'app/core';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';
import {Campaign, ICampaign} from 'app/shared/model/campaign.model';
import {CampaignService} from './campaign.service';
import {CampaignComponent} from './campaign.component';
import {CampaignDetailComponent} from './campaign-detail.component';
import {CampaignUpdateComponent} from './campaign-update.component';
import {CampaignDeletePopupComponent} from './campaign-delete-dialog.component';

@Injectable({ providedIn: 'root' })
export class CampaignResolve implements Resolve<ICampaign> {
    constructor(private service: CampaignService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((campaign: HttpResponse<Campaign>) => campaign.body));
        }
        return of(new Campaign());
    }
}

export const campaignRoute: Routes = [
    {
        path: 'campaign',
        component: CampaignComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'nanosApp.campaign.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'campaign/:id',
        component: CampaignDetailComponent,
        resolve: {
            campaign: CampaignResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'nanosApp.campaign.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'campaign/new',
        component: CampaignUpdateComponent,
        resolve: {
            campaign: CampaignResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'nanosApp.campaign.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'campaign/:id/edit',
        component: CampaignUpdateComponent,
        resolve: {
            campaign: CampaignResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'nanosApp.campaign.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const campaignPopupRoute: Routes = [
    {
        path: 'campaign/:id/delete',
        component: CampaignDeletePopupComponent,
        resolve: {
            campaign: CampaignResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'nanosApp.campaign.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
