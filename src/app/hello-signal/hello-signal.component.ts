import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    Sum of x + y is {{ z() }}
    <button (click)="updateValue()">Re-Calculate value</button>
  `,
})
export class AppComponent {
  x = signal<number>(10);
  y = signal<number>(20);
  z = computed(() => this.x() + this.y());

  constructor() {
    effect(() => {
      console.log(`The value of X is :  ${this.x()}`);
    });
  }

  updateValue() {
    this.x.set(20);
  }
}
