import { TestBed } from '@angular/core/testing';

import { FritesSaucesService } from './frites-sauces.service';

describe('FritesSaucesService', () => {
  let service: FritesSaucesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FritesSaucesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
