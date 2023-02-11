# GoogleOneTap

Google one tap for Angular application.

## Getting started

### Install via npm

```sh
npm i ng-google-one-tap
```

### Version compatibility

Supported from Angular 11+
### Import the module

In your AppModule, import the NgGoogleOneTapModule

```javascript
import { NgGoogleOneTapModule } from 'ng-google-one-tap';

@NgModule({
declarations: [
...
],
imports: [
...
/** Please refer to the options table for explanation **/
NgGoogleOneTapModule.config(
    {  
        client_id: 'App_client_id',
        cancel_on_tap_outside: false,
        authvalidate_by_googleapis: false,
        auto_select: false,
        disable_exponential_cooldowntime: false,
        context: 'signup',
    })
],
providers: [],
bootstrap: [...]
})
export class AppModule { }
```

### NgOneTap service

```javascript

import { NgOneTapService } from 'ng-google-one-tap';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  userDetails;
  constructor(private oneTap: NgOneTapService) { }

   ngOnInit() {
        /** Initialize OneTap, While initialing you can pass config  like this.oneTap.tapInitialize(config) here config is optional. **/
        this.oneTap.tapInitialize();

        /** Subscribe the Tap Moment. following response options all have self explanatory.
         *  If you want more info please refer at bottom of the document attached link. **/
        this.oneTap.promtMoment.subscribe(res => { 
           res.getDismissedReason(); 
           res.getMomentType();
           res.getNotDisplayedReason();
           res.getSkippedReason();
           res.isDismissedMoment();
           res.isDisplayed();
           res.isNotDisplayed();
           res.isSkippedMoment();
        });

        /** The JWT credentials will be returned as a response after completing the one tap process.  **/
        this.oneTap.oneTapCredentialResponse.subscribe(res => {
            /**  Response
             * clientId: your client ID,
             * client_id: your client ID,
             * credential: The credential/secret key is utilized for user validation and information retrieval. Validation can be performed on the backend server/platform using the appropriate Google library. Please refer to the backend implementation details at the bottom of the document
             **/
        });

        /** Authentication validation can be performed using the Google OAuth2 APIs, eliminating the need for client_id validation on the backend and the retrieval of user details **/
        this.oneTap.authUserResponse.subscribe(res => { 
            this.userDetails = res;
        });

   }

    tapCancel() {
        this.oneTap.cancelTheTap();
    }

}
```

## Options

| Name                  | Type    | Required |                                     Description                                      |
| --------------------- | ------- | :------: | :----------------------------------------------------------------------------------: |
| client_id             | String  |   true   |                             Your application's client ID                             |
| disable_exponential_cooldowntime | Boolean  |   false   |    When you close the one tap prompt by clicking the X icon, it may take some time for it to reset or reappear. This is known as an exponential cool down. You can disable this using the specified option. |
| authvalidate_by_googleapis   | Boolean  |  false   |          Validate the user without backend-server validation by using google provide APIs. Please review the [document](https://developers.google.com/identity/sign-in/web/backend-auth#calling-the-tokeninfo-endpoint)  before using it.  |
| auto_select           | Boolean |  false   |                             Enables automatic selection.                             |
| cancel_on_tap_outside | Boolean |  false   |              Cancels the prompt if the user clicks outside the prompt.               |
| context               | String  |  false   |             The title and words in the One Tap prompt     |

## Resource

1. [Exponential cooldown](https://developers.google.com/identity/gsi/web/guides/features#:~:text=Exponential%20cooldown,-If%20the%20user&text=A%20user%20closes%20One%20Tap,for%20a%20period%20of%20time.&text=The%20cooldown%20status%20resets%20after%20a%20successful%20One%20Tap%20sign%2Din)<br>
2. [Google One Tap Implementation doc by google](https://developers.google.com/identity/gsi/web/reference/js-reference#nonce)<br>
3. [Google library and API](https://developers.google.com/identity/sign-in/web/backend-auth#using-a-google-api-client-library.)


## Server

Using one of the Google API Client Libraries (e.g. Java, Node.js, PHP, Python) is the recommended way to validate Google ID tokens in a production environment.

```
npm install google-auth-library --save
```

### **Node.js**

```js
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);
async function verify() {
	const ticket = await client.verifyIdToken({
		idToken: token,
		audience: CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
		// Or, if multiple clients access the backend:
		//[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
	});
	const payload = ticket.getPayload();
	const userid = payload['sub'];
	// If request specified a G Suite domain:
	// const domain = payload['hd'];
}
verify().catch(console.error);
```

More Reference - https://developers.google.com/identity/sign-in/web/backend-auth#using-a-google-api-client-library
