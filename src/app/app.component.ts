import { Component } from '@angular/core';
import { NgOneTapService } from 'ng-google-one-tap';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    userDetails: any;
    constructor(private oneTap: NgOneTapService) { }

    ngOnInit() {
        this.oneTap.tapInitialize();
        this.oneTap.oneTapCredentialResponse.subscribe(res => {
        });
        this.oneTap.authUserResponse.subscribe(res => {
            this.userDetails = res;
        });
        this.oneTap.promtMoment.subscribe(res => {
           res.getDismissedReason();
           res.getMomentType();
           res.getNotDisplayedReason();
           res.getSkippedReason();
           res.isDismissedMoment();
           res.isDisplayed();
           res.isNotDisplayed();
           res.isSkippedMoment();
        })
    }

    init() {
        this.oneTap.tapInitialize();
    }

    tapCancel() {
        this.oneTap.cancelTheTap()
    }
}
