import { TestBed } from '@angular/core/testing';

import { CvrInfoService } from './cvr-info.service';

describe('CvrInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CvrInfoService = TestBed.get(CvrInfoService);
    expect(service).toBeTruthy();
  });
});
