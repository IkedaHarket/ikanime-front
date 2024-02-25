import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeAnimeCategoryComponent } from './badge-anime-category.component';

describe('BadgeAnimeCategoryComponent', () => {
  let component: BadgeAnimeCategoryComponent;
  let fixture: ComponentFixture<BadgeAnimeCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeAnimeCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BadgeAnimeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
