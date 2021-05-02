import { NgGoogleOneTapModule } from './../../projects/ng-google-one-tap/src/lib/ng-google-one-tap.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgGoogleOneTapModule.config(
      {
        client_id: '845404307552-d5l9gdh9pc1332afcb6la7usp65mg57e.apps.googleusercontent.com',
        disale_force_cooldowntime: true,
        debugging_by_oauth2_api: true,
        select_by: "tap2",
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
