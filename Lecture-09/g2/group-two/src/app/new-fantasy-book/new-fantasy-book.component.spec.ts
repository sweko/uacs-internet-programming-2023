import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFantasyBookComponent } from './new-fantasy-book.component';

describe('NewFantasyBookComponent', () => {
  let component: NewFantasyBookComponent;
  let fixture: ComponentFixture<NewFantasyBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewFantasyBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewFantasyBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
