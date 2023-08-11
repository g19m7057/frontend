import { TestBed } from '@angular/core/testing';

import { RetrieveServiceService } from './retrieve-service.service';

describe('RetrieveServiceService', () => {
  let service: RetrieveServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetrieveServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
