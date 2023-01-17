import { TestBed } from '@angular/core/testing';

import { PasseCertifService } from './passe-certif.service';

describe('PasseCertifService', () => {
  let service: PasseCertifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasseCertifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
