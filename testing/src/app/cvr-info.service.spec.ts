import { TestBed, async } from '@angular/core/testing';

import { CvrService } from './cvr-info.service';
import { HttpClientModule } from '@angular/common/http';

describe('CvrService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [
      ],
    }).compileComponents();

  }));

  it('should be created', () => {
    const service: CvrService = TestBed.get(CvrService);
    expect(service).toBeTruthy();
  });
});
