import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewScifiBookComponent } from './new-scifi-book.component';

describe('NewScifiBookComponent', () => {
  let component: NewScifiBookComponent;
  let fixture: ComponentFixture<NewScifiBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewScifiBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewScifiBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
