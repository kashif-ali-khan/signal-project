import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstSignalComponent } from './first-signal/first-signal.component';
import { UpdateSignalComponent } from './update-signal/update-signal.component';
import { SignalMutuateArrayComponent } from './signal-mutuate-array/signal-mutuate-array.component';
import { WithoutSignalComponent } from './without-signal/without-signal.component';
import { WithSignalComponent } from './with-signal/with-signal.component';
import { DemoSignalComponent } from './demo-signal/demo-signal.component';
import { OtherSignalSampleComponent } from './other-signal-sample/other-signal-sample.component';
import { UseCaseComponent } from './use-case/use-case.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstSignalComponent,
    UpdateSignalComponent,
    SignalMutuateArrayComponent,
    WithoutSignalComponent,
    WithSignalComponent,
    DemoSignalComponent,
    OtherSignalSampleComponent,
    UseCaseComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShopingCartComponent,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
