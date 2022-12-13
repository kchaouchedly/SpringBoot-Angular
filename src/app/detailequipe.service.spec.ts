import { TestBed } from '@angular/core/testing';

import { DetailequipeService } from './detailequipe.service';

describe('DetailequipeService', () => {
  let service: DetailequipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailequipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
