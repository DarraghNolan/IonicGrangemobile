import { TestBed } from '@angular/core/testing';

import { LecturerCreateService } from './lecturercreate.service';

describe('LecturercreateService', () => {
  let service: LecturerCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LecturerCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
