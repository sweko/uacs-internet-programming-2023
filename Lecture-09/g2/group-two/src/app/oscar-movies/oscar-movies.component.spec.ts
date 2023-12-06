import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OscarMoviesComponent } from './oscar-movies.component';

describe('OscarMoviesComponent', () => {
  let component: OscarMoviesComponent;
  let fixture: ComponentFixture<OscarMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OscarMoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OscarMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
