import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtractButtonComponent } from './subtract-button.component';

describe('SubtractButtonComponent', () => {
  let component: SubtractButtonComponent;
  let fixture: ComponentFixture<SubtractButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubtractButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubtractButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
