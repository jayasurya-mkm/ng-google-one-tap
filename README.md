# GoogleOneTap

Google one tap for Angular application.

## Getting started

### Install via npm

```sh
npm i ng-google-one-tap
```

### Import the module

In your AppModule, import the NgGoogleOneTapModule

import { NgGoogleOneTapModule } from 'ng-google-one-tap';

@NgModule({
declarations: [
...
],
imports: [
...
NgGoogleOneTapModule.config(
{
client_id: 'App_client_id',
})
],
providers: [],
bootstrap: [...]
})
export class AppModule { }

### NgOneTap service

```javascript

import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private oneTapService: NgOneTapService) { }

   ngOnInit() {
        this.onetap.tapInitialize(); //Initialize OneTap
        this.onetap.promtMoment.subscribe(res => {  // Subscribe the Tap Moment.
            console.log(res);
        });
        this.onetap.oneTapCredentialResponse.subscribe(res => { // After continue with account one tap JWT credentials response.
            console.log(res);
        });
        this.onetap.authUserResponse.subscribe(res => {  // Use Auth validation by using google OAuth2 apis. Note this one for testing and debugging purpose.
            console.log(res);
        });

   }

}
```
