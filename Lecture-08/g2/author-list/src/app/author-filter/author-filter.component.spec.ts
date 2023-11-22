import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorFilterComponent } from './author-filter.component';

describe('AuthorFilterComponent', () => {
  let component: AuthorFilterComponent;
  let fixture: ComponentFixture<AuthorFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthorFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
