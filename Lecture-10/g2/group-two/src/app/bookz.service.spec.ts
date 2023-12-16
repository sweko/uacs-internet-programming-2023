import { TestBed } from '@angular/core/testing';

import { BookzService } from './bookz.service';

describe('BookzService', () => {
  let service: BookzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
