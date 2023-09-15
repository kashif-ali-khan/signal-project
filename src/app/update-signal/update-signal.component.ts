import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-update-signal',
  templateUrl: './update-signal.component.html',
  styleUrls: ['./update-signal.component.scss']
})
export class UpdateSignalComponent {

  val = signal(1);
  increaseV(){
    this.val.update(val=>val+1)

  }

  descreaseV(){
    this.val.update(val=>val-1)

  }

}
