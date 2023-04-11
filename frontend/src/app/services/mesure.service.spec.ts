import { TestBed } from '@angular/core/testing';

import { mesureService } from './mesure.service';

describe('mesureService', () => {
  let service: mesureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(mesureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
