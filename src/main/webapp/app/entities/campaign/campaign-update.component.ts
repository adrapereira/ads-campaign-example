import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Campaign} from 'app/shared/model/campaign.model';
import {CampaignService} from './campaign.service';

@Component({
    selector: 'nanos-campaign-update',
    templateUrl: './campaign-update.component.html'
})
export class CampaignUpdateComponent implements OnInit {
    private _campaign: Campaign;
    isSaving: boolean;

    constructor(private campaignService: CampaignService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ campaign }) => {
            this.campaign = campaign;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.campaign.id !== undefined) {
            this.subscribeToSaveResponse(this.campaignService.update(this.campaign));
        } else {
            this.subscribeToSaveResponse(this.campaignService.create(this.campaign));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<Campaign>>) {
        result.subscribe((res: HttpResponse<Campaign>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get campaign() {
        return this._campaign;
    }

    set campaign(campaign: Campaign) {
        this._campaign = campaign;
    }
}
