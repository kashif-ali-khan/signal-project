import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalMutuateArrayComponent } from './signal-mutuate-array.component';

describe('SignalMutuateArrayComponent', () => {
  let component: SignalMutuateArrayComponent;
  let fixture: ComponentFixture<SignalMutuateArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignalMutuateArrayComponent]
    });
    fixture = TestBed.createComponent(SignalMutuateArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
