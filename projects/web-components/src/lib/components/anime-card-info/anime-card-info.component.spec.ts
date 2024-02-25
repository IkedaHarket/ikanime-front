import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeCardInfoComponent } from './anime-card-info.component';

describe('AnimeCardInfoComponent', () => {
  let component: AnimeCardInfoComponent;
  let fixture: ComponentFixture<AnimeCardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeCardInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimeCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
