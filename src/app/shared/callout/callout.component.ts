import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-callout',
  templateUrl: './callout.component.html',
  styleUrls: ['./callout.component.scss']
})
export class CalloutComponent {
  @Input() title:string = '';
  @Input() callouttype:string = 'callout-default';
  @Input() description:string = ''


}
