import { TestBed } from '@angular/core/testing';

import { FindAnimeFiltersService } from './find-anime-filters.service';

describe('FindAnimeFiltersService', () => {
  let service: FindAnimeFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindAnimeFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
