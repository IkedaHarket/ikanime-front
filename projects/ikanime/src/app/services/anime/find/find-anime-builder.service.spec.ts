import { TestBed } from '@angular/core/testing';

import { FindAnimeBuilderService } from './find-anime-builder.service';

describe('FindAnimeBuilderService', () => {
  let service: FindAnimeBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindAnimeBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
