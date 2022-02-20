import { TestBed } from '@angular/core/testing';

import { EmployeeUtilService } from './employee-util.service';

describe('EmployeeUtilService', () => {
  let service: EmployeeUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
