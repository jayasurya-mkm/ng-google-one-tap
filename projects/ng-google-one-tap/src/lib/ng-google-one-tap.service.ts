import { configuration, credentialRes } from './model/tap.model';
import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { CONFIGURATION } from './toke';
import { Subject } from 'rxjs';
import { PromptMomentNotification } from './model/promptmoment.model';

declare var window: any;
@Injectable()
export class NgGoogleOneTapService {

    private _promtMoment = new Subject<PromptMomentNotification>();
    private _credentialResponse = new Subject<credentialRes>();
    // private _authUserResponse = new Subject();
    private _oauth2TokenInfo = new Subject();

    get promtMoment() {
        return this._promtMoment.asObservable();
    }
    get credentialResponse() {
        return this._credentialResponse.asObservable();
    }
    // get authUserResponse() {
    //     return this._authUserResponse.asObservable();
    // }

    get oauth2TokenInfo() {
        return this._oauth2TokenInfo.asObservable();
    }

    constructor(
        @Inject(CONFIGURATION) private envConfig: configuration
    ) { }

    tapInitialize(config?: configuration) {
        window.onGoogleLibraryLoad = () => {
            const conf = {...this.envConfig, ...config };
            if (!!conf?.disale_force_cooldowntime && !!document?.cookie?.match(new RegExp('(^| )' + "g_state" + '=([^;]+)'))) {
                document.cookie = "g_state=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            }
            window.google.accounts.id.initialize({
                ...conf, callback: (auth) => {
                    if (!!conf.debugging_by_oauth2_api) {
                        const http = new XMLHttpRequest();
                        const url = `https://oauth2.googleapis.com/tokeninfo?id_token=${auth.credential}`;
                        http.open('GET', url);
                        http.send();
                        http.onreadystatechange = () => {
                            if (http.readyState == 4 && http.status == 200) {
                                this._oauth2TokenInfo.next(JSON.parse(http.responseText));
                            }
                        };
                    }
                    this._credentialResponse.next(auth);
                }
            });
            window.google.accounts.id.prompt((pmt) => {
                this._promtMoment.next(pmt);
            });
        }
    }

    signOut() {
        window.google.accounts.id.disableAutoSelect();
    }

    cancelTheTap() {
        window.google.accounts.id.cancel()
    }
}
