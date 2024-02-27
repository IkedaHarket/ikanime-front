import { TestBed } from '@angular/core/testing';

import { AnimeStateService } from './anime-state.service';

describe('AnimeStateService', () => {
  let service: AnimeStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
