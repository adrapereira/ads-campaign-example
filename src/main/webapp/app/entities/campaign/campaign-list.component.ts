import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ICampaign} from 'app/shared/model/campaign.model';
import {CampaignService} from 'app/entities/campaign/campaign.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {JhiAlertService} from 'ng-jhipster';

@Component({
    selector: 'nanos-campaign-list',
    templateUrl: './campaign-list.component.html',
    styleUrls: ['campaign-list.component.scss']
})
export class CampaignListComponent implements OnInit {
    campaigns: ICampaign[];

    constructor(
        private activatedRoute: ActivatedRoute,
        private campaignService: CampaignService,
        private jhiAlertService: JhiAlertService
    ) {}

    loadAll() {
        this.campaignService.query().subscribe(
            (res: HttpResponse<ICampaign[]>) => {
                this.campaigns = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
    }

    previousState() {
        window.history.back();
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
