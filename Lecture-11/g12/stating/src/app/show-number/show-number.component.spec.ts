import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNumberComponent } from './show-number.component';

describe('ShowNumberComponent', () => {
  let component: ShowNumberComponent;
  let fixture: ComponentFixture<ShowNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowNumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
