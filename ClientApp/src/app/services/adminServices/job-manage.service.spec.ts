import { TestBed } from '@angular/core/testing';

import { JobManageService } from './job-manage.service';

describe('JobManageService', () => {
  let service: JobManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
