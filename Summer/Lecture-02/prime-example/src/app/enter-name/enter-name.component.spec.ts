import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterNameComponent } from './enter-name.component';

describe('EnterNameComponent', () => {
  let component: EnterNameComponent;
  let fixture: ComponentFixture<EnterNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnterNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
