import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScifiBooksComponent } from './scifi-books.component';

describe('ScifiBooksComponent', () => {
  let component: ScifiBooksComponent;
  let fixture: ComponentFixture<ScifiBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScifiBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScifiBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
