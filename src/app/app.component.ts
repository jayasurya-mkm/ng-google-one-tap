import { Component } from '@angular/core';
import { NgOneTapService } from 'ng-google-one-tap';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'google-one-tap';
    constructor(private onetap: NgOneTapService) { }

    ngOnInit() {
        this.onetap.tapInitialize();
        this.onetap.oneTapCredentialResponse.subscribe(res => {
            console.log(res);
        });
        this.onetap.authUserResponse.subscribe(res => {
            console.log(res);
        });
        this.onetap.promtMoment.subscribe(res => {
            console.log(res);
        })
    }
}
