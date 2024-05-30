import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalloutComponent } from './callout/callout.component';



@NgModule({
  declarations: [CalloutComponent],
  imports: [CommonModule],
  exports: [CalloutComponent] // Export it so it can be used in other modules

})
export class SharedModule { }
