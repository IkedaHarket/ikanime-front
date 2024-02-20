import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeAnimeTypeComponent } from './badge-anime-type.component';

describe('BadgeAnimeTypeComponent', () => {
  let component: BadgeAnimeTypeComponent;
  let fixture: ComponentFixture<BadgeAnimeTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeAnimeTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BadgeAnimeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
