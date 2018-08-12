import {Component, Input, OnInit} from '@angular/core';
import {Platform} from 'app/shared/model/platform.model';

@Component({
    selector: 'nanos-campaign-platform',
    templateUrl: './campaign-platform.component.html',
    styleUrls: ['./campaign-detail.component.scss']
})
export class CampaignPlatformComponent implements OnInit {
    @Input() platform: Platform;
    @Input() name: {};

    constructor() {}

    ngOnInit() {
        console.log(this.platform);
    }
}
