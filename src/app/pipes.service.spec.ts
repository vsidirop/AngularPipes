import { TestBed } from '@angular/core/testing';

import { PipesService } from './pipes/pipes.service';

describe('PipesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PipesService = TestBed.get(PipesService);
    expect(service).toBeTruthy();
  });
});
