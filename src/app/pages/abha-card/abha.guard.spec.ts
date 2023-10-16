import { TestBed } from '@angular/core/testing';

import { AbhaGuard } from './abha.guard';

describe('AbhaGuard', () => {
  let guard: AbhaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AbhaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
