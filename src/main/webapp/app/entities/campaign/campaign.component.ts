import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {JhiAlertService, JhiEventManager} from 'ng-jhipster';

import {Campaign} from 'app/shared/model/campaign.model';
import {Principal} from 'app/core';
import {CampaignService} from './campaign.service';

@Component({
    selector: 'nanos-campaign',
    templateUrl: './campaign.component.html'
})
export class CampaignComponent implements OnInit, OnDestroy {
    campaigns: Campaign[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private campaignService: CampaignService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {}

    loadAll() {
        this.campaignService.query().subscribe(
            (res: HttpResponse<Campaign[]>) => {
                this.campaigns = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInCampaigns();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Campaign) {
        return item.id;
    }

    registerChangeInCampaigns() {
        this.eventSubscriber = this.eventManager.subscribe('campaignListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
