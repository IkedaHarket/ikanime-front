import { TestBed } from '@angular/core/testing';

import { AnimeTypeService } from './anime-type.service';

describe('AnimeTypeService', () => {
  let service: AnimeTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
