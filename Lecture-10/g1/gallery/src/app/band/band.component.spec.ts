import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandComponent } from './band.component';

describe('BandComponent', () => {
  let component: BandComponent;
  let fixture: ComponentFixture<BandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
