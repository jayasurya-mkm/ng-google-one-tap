import { ChangeDetectorRef, Component } from '@angular/core';
import { NgOneTapService } from 'ng-google-one-tap';
// import { NgOneTapService } from '../../projects/ng-google-one-tap/src/lib/ng-google-one-tap.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    userdetails: any;
    constructor(private onetap: NgOneTapService, private chg: ChangeDetectorRef) { }

    ngOnInit() {
        this.onetap.tapInitialize();
        this.onetap.oneTapCredentialResponse.subscribe(res => {
            console.log(res);
        });
        this.onetap.authUserResponse.subscribe(res => {
            this.userdetails = res;
        });
        this.onetap.promtMoment.subscribe(res => {
            console.log(res);
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
        this.onetap.tapInitialize();
    }

    tapcancel() {
        this.onetap.cancelTheTap()
    }
}
