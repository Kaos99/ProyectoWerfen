import { TestBed } from '@angular/core/testing';

import { ItemsLinkService } from './items-link.service';

describe('ItemsLinkService', () => {
  let service: ItemsLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
