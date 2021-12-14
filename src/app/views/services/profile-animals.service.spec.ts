import { TestBed } from '@angular/core/testing';

import { ProfileAnimalsService } from './profile-animals.service';

describe('ProfileAnimalsService', () => {
  let service: ProfileAnimalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileAnimalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
