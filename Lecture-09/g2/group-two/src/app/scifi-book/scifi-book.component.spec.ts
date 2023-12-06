import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScifiBookComponent } from './scifi-book.component';

describe('ScifiBookComponent', () => {
  let component: ScifiBookComponent;
  let fixture: ComponentFixture<ScifiBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScifiBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScifiBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
