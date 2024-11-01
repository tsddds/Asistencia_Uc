import { TestBed } from '@angular/core/testing';

import { ClasesACargoService } from './clases-a-cargo.service';

describe('ClasesACargoService', () => {
  let service: ClasesACargoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClasesACargoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
