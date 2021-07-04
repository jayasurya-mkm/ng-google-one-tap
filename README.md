# GoogleOneTap

Google one tap for Angular application.

## Getting started

### Install via npm

```sh
npm i ng-google-one-tap
```

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
NgGoogleOneTapModule.config(
    {
        client_id: 'App_client_id',
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

  userdetails;
  constructor(private onetap: NgOneTapService) { }

   ngOnInit() {
        this.onetap.tapInitialize(); //Initialize OneTap. At intial time you can pass config  like this.onetap.tapInitialize(conif) here config is optional.
        this.onetap.promtMoment.subscribe(res => {  // Subscribe the Tap Moment. following response options all have self explanatory. If you want more info pls refer official document below attached link.
           res.getDismissedReason(); 
           res.getMomentType();
           res.getNotDisplayedReason();
           res.getSkippedReason();
           res.isDismissedMoment();
           res.isDisplayed();
           res.isNotDisplayed();
           res.isSkippedMoment();
        });
        this.onetap.oneTapCredentialResponse.subscribe(res => { // Subscribe after continue with one tap JWT credentials response.
            console.log(res);
        });
        this.onetap.authUserResponse.subscribe(res => {  // Use Auth validation by using google OAuth2 apis. Note this one for testing and debugging purpose.
            this.userdetails = res;
        });

   }

    tapcancel() {
        this.onetap.cancelTheTap();
    }

}
```

## Options

| Name                  | Type    | Required |                                     Description                                      |
| --------------------- | ------- | :------: | :----------------------------------------------------------------------------------: |
| client_id             | String  |   true   |                             Your application's client ID                             |
| disable_exponential_cooldowntime | Boolean  |   false   |             when Close X one tap promt it's take reset/reshowing take some times this called Exponential cooldown. you can disable that using this option **Note: Recommended for development mode. If you want to use this feature in prod before pls check with official doc. link below.**                  |
| authvalidate_by_googleapis   | Boolean  |  false   |          Validate the user whitout backend-server validation by using google provide APIs. **Note: Recommended for development mode. If pro mode need to validate JWT one tap retured crdentials from backend-server by using google-auth-library**   |
| auto_select           | Boolean |  false   |                             Enables automatic selection.                             | null |
| cancel_on_tap_outside | Boolean |  false   |              Cancels the prompt if the user clicks outside the prompt.               
| context               | String  |  false   |             The title and words in the One Tap prompt     |
| prompt_parent_id               | String  |  false   |        The DOM ID of the One Tap prompt container element    |
| nonce               | String  |  false   |             A random string for ID tokens     |


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
