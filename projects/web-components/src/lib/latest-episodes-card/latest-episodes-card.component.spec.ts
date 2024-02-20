import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestEpisodesCardComponent } from './latest-episodes-card.component';

describe('LatestEpisodesCardComponent', () => {
  let component: LatestEpisodesCardComponent;
  let fixture: ComponentFixture<LatestEpisodesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestEpisodesCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatestEpisodesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
