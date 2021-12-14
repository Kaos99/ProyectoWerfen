import { TestBed } from '@angular/core/testing';

import { SearchAccesoGuard } from './search-acceso.guard';

describe('SearchAccesoGuard', () => {
  let guard: SearchAccesoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SearchAccesoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
