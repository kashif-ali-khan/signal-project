import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-first-signal',
  templateUrl: './first-signal.component.html',
  styleUrls: ['./first-signal.component.scss'],
})
export class FirstSignalComponent {
  firstname = signal('kashif');
  lastname = signal('khan');

  fullname = computed(()=>this.firstname()+' '+this.lastname())
  changefname(name: string) {
    this.firstname.set(name);
  }

  changelname(name: string) {
    this.lastname.set(name);
  }
}
