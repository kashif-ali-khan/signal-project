import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSignalComponent } from './first-signal.component';

describe('FirstSignalComponent', () => {
  let component: FirstSignalComponent;
  let fixture: ComponentFixture<FirstSignalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstSignalComponent]
    });
    fixture = TestBed.createComponent(FirstSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
