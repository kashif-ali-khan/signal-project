import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-with-signal',

  templateUrl: './with-signal.component.html',
  styleUrl: './with-signal.component.scss'
})
export class WithSignalComponent {
  isclicked = false;
  a = signal(3);
  b = signal(5);

  c = computed(()=>this.a()+ this.b())

  changeValue(){
    this.a.set(12);
    this.isclicked = true;
  }


}
