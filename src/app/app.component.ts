import { Component } from '@angular/core';
import { NgGoogleOneTapService } from 'projects/ng-google-one-tap/src/public-api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'google-one-tap';
    constructor(
        private onetap: NgGoogleOneTapService
    ) { }

    ngOnInit() {
        this.onetap.tapInitialize();
        this.onetap.credentialResponse.subscribe(res => {
            console.log(res);
        });
        this.onetap.oauth2TokenInfo.subscribe(res => {
            console.log(res);
        });
    }
}
