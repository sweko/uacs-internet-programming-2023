import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherBooksComponent } from './other-books.component';

describe('OtherBooksComponent', () => {
  let component: OtherBooksComponent;
  let fixture: ComponentFixture<OtherBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtherBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtherBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
