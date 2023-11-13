import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyNumberComponent } from './fancy-number.component';

describe('FancyNumberComponent', () => {
  let component: FancyNumberComponent;
  let fixture: ComponentFixture<FancyNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FancyNumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FancyNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
