import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSignalSampleComponent } from './other-signal-sample.component';

describe('OtherSignalSampleComponent', () => {
  let component: OtherSignalSampleComponent;
  let fixture: ComponentFixture<OtherSignalSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherSignalSampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtherSignalSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
