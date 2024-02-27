import { TestBed } from '@angular/core/testing';

import { AnimeCategoryService } from './anime-category.service';

describe('AnimeCategoriesService', () => {
  let service: AnimeCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
