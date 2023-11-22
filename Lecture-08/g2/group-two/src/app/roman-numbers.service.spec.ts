import { TestBed } from '@angular/core/testing';

import { RomanNumbersService } from './roman-numbers.service';

describe('RomanNumbersService', () => {
  let service: RomanNumbersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanNumbersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
