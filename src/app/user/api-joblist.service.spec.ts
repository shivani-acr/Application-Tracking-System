import { TestBed } from '@angular/core/testing';

import { ApiJoblistService } from './api-joblist.service';

describe('ApiJoblistService', () => {
  let service: ApiJoblistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiJoblistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
