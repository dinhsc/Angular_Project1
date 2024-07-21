import { TestBed } from '@angular/core/testing';

import { PetiteFaimService } from './petite-faim.service';

describe('PetiteFaimService', () => {
  let service: PetiteFaimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetiteFaimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
