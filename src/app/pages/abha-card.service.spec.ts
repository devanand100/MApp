import { TestBed } from '@angular/core/testing';

import { AbhaCardService } from './abha-card.service';

describe('AbhaCardService', () => {
  let service: AbhaCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbhaCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
