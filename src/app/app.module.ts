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
        {  //Look options table for some more avaialbe options and config here.
            client_id: 'XXXXX-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX',
            cancel_on_tap_outside: false,
            authvalidate_by_googleapis: true,
            auto_select: false,
            disable_exponential_cooldowntime: true,
            context: 'signin'
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
