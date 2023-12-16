import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorrorMoviesComponent } from './horror-movies.component';

describe('HorrorMoviesComponent', () => {
  let component: HorrorMoviesComponent;
  let fixture: ComponentFixture<HorrorMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HorrorMoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorrorMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
