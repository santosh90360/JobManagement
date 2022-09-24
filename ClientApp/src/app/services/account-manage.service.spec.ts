import { TestBed } from '@angular/core/testing';

import { AccountManageService } from './account-manage.service';

describe('AccountManageService', () => {
  let service: AccountManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
