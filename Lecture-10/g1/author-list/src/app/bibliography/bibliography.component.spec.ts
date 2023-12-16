import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliographyComponent } from './bibliography.component';

describe('BibliographyComponent', () => {
  let component: BibliographyComponent;
  let fixture: ComponentFixture<BibliographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BibliographyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BibliographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
