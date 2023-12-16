import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuroMoviesComponent } from './euro-movies.component';

describe('EuroMoviesComponent', () => {
  let component: EuroMoviesComponent;
  let fixture: ComponentFixture<EuroMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EuroMoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EuroMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
