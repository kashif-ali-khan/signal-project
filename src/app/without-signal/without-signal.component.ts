import { Component } from '@angular/core';

@Component({
  selector: 'app-without-signal',

  templateUrl: './without-signal.component.html',
  styleUrl: './without-signal.component.scss'
})
export class WithoutSignalComponent {
isclicked = false
a = 5;
b = 3;
c = this.a + this.b;



changeValue(){
  this.isclicked = true
  this.a = 12;
}

}
