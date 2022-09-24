import { TestBed } from '@angular/core/testing';

import { AppRoutingGuard } from './app-routing.guard';

describe('AppRoutingGuard', () => {
  let guard: AppRoutingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AppRoutingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
