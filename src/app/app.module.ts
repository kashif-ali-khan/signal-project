import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstSignalComponent } from './first-signal/first-signal.component';
import { UpdateSignalComponent } from './update-signal/update-signal.component';
import { SignalMutuateArrayComponent } from './signal-mutuate-array/signal-mutuate-array.component';
import { CalloutComponent } from './shared/callout/callout.component';
import { WithoutSignalComponent } from './without-signal/without-signal.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstSignalComponent,
    UpdateSignalComponent,
    SignalMutuateArrayComponent,
    CalloutComponent,
    WithoutSignalComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
