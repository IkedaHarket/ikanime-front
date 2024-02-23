import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeWorldComponent } from './anime-world.component';

describe('AnimeWorldComponent', () => {
  let component: AnimeWorldComponent;
  let fixture: ComponentFixture<AnimeWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeWorldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimeWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
