import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloSignalComponent } from './hello-signal.component';

describe('HelloSignalComponent', () => {
  let component: HelloSignalComponent;
  let fixture: ComponentFixture<HelloSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloSignalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelloSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
