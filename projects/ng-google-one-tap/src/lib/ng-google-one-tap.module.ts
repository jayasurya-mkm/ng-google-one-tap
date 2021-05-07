import { NgModule } from '@angular/core';
import { configuration } from './model/tap.model';
import { NgGoogleOneTapComponent } from './ng-google-one-tap.component';
import { NgOneTapService } from './ng-google-one-tap.service';
import { CONFIGURATION } from './toke';


@NgModule({
    declarations: [
        NgGoogleOneTapComponent
    ],
    imports: [
    ],
    exports: [
        NgGoogleOneTapComponent
    ]
})

export class NgGoogleOneTapModule {
    constructor() {
        let oneTapLib = document.createElement('script');
        oneTapLib.async = true;
        oneTapLib.src = 'https://accounts.google.com/gsi/client';
        document.head.appendChild(oneTapLib);
    }
    public static config(config: configuration): any {        
        return {
            ngModule: NgGoogleOneTapModule,
            providers: [
                {provide: CONFIGURATION, useValue: config},
                NgOneTapService
                // {provide: NgOneTapService, useClass: NgOneTapService}
            ]
        }
    }
}
