import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherMoviesComponent } from './other-movies.component';

describe('OtherMoviesComponent', () => {
  let component: OtherMoviesComponent;
  let fixture: ComponentFixture<OtherMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtherMoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtherMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
