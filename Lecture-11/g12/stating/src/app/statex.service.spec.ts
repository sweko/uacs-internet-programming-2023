import { TestBed } from '@angular/core/testing';

import { StatexService } from './statex.service';

describe('StatexService', () => {
  let service: StatexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
