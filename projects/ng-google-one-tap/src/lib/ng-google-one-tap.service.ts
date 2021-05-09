import { configuration, credentialRes, UserInfo } from './model/tap.model';
import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { CONFIGURATION } from './toke';
import { Subject } from 'rxjs';
import { PromptMomentNotification } from './model/promptmoment.model';

declare var window: any;
@Injectable()
export class NgOneTapService {

    private _promtMoment = new Subject<PromptMomentNotification>();
    private _oneTapCredentialResponse = new Subject<credentialRes>();
    private _authUserResponse = new Subject<UserInfo>();

    get promtMoment() {
        return this._promtMoment.asObservable();
    }

    get oneTapCredentialResponse() {
        return this._oneTapCredentialResponse.asObservable();
    }

    get authUserResponse() {
        return this._authUserResponse.asObservable();
    }

    constructor(@Inject(CONFIGURATION) private envConfig: configuration) { }

    tapInitialize(config?: configuration) {
        window.onGoogleLibraryLoad = () => {
            const conf = {...this.envConfig, ...config };
            if (!!conf?.disable_exponential_cooldowntime && !!document?.cookie?.match(new RegExp('(^| )' + "g_state" + '=([^;]+)'))) {
                document.cookie = "g_state=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            }
            window.google.accounts.id.initialize({
                ...conf, callback: (auth) => {
                    if (!!conf.authvalidate_by_googleapis) {
                        const http = new XMLHttpRequest();
                        const url = `https://oauth2.googleapis.com/tokeninfo?id_token=${auth.credential}`;
                        http.open('GET', url);
                        http.send();
                        http.onreadystatechange = () => {
                            if (http.readyState == 4 && http.status == 200) {
                                this._authUserResponse.next(JSON.parse(http.responseText));
                            }
                        };
                    }
                    this._oneTapCredentialResponse.next(auth);
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
        window.google.accounts.id.cancel();
    }
}
