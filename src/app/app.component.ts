import { NgOneTapService } from './../../projects/ng-google-one-tap/src/lib/ng-google-one-tap.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'google-one-tap';
    constructor(
        private onetap: NgOneTapService
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
