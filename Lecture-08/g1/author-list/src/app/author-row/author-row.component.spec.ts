import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorRowComponent } from './author-row.component';

describe('AuthorRowComponent', () => {
  let component: AuthorRowComponent;
  let fixture: ComponentFixture<AuthorRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthorRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
