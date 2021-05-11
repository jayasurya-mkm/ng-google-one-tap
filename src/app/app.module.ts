import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgGoogleOneTapModule } from 'ng-google-one-tap';

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
        client_id: 'id',
        disable_exponential_cooldowntime: true,
        authvalidate_by_googleapis: true,
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
