import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasyBooksComponent } from './fantasy-books.component';

describe('FantasyBooksComponent', () => {
  let component: FantasyBooksComponent;
  let fixture: ComponentFixture<FantasyBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FantasyBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FantasyBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
