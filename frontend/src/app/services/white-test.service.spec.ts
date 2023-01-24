import { TestBed } from '@angular/core/testing';

import { WhiteTestService } from './white-test.service';

describe('WhiteTestService', () => {
  let service: WhiteTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhiteTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
