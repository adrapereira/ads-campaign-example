import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'nanos-campaign-platform',
    templateUrl: './campaign-platform.component.html',
    styleUrls: ['./campaign-detail.component.scss']
})
export class CampaignPlatformComponent implements OnInit {
    @Input() platform: {};
    @Input() name: {};

    constructor() {}

    ngOnInit() {}
}
