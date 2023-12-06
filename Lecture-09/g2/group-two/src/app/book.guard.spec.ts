import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { bookGuard } from './book.guard';

describe('bookGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => bookGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
