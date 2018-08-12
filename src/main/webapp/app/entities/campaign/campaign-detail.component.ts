import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Campaign} from 'app/shared/model/campaign.model';

@Component({
    selector: 'nanos-campaign-detail',
    templateUrl: './campaign-detail.component.html',
    styleUrls: ['./campaign-detail.component.scss']
})
export class CampaignDetailComponent implements OnInit {
    campaign: Campaign;
    columnSize;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ campaign }) => {
            this.campaign = campaign;
            let platformsSize = Object.keys(campaign.platforms).length;
            if (platformsSize === 0) {
                platformsSize = 1;
            }
            this.columnSize = 12 / platformsSize;
        });
    }
}
