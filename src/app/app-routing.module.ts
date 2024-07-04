import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoSignalComponent } from './demo-signal/demo-signal.component';
import { OtherSignalSampleComponent } from './other-signal-sample/other-signal-sample.component';
import { UseCaseComponent } from './use-case/use-case.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
  {
    path: 'home',
    component:DemoSignalComponent
  },
  {
    path: 'other',
    component:OtherSignalSampleComponent
  },
  {
    path: 'cases',
    component:UseCaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
