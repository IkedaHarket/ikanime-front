import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAnimesComponent } from './find-animes.component';

describe('FindAnimesComponent', () => {
  let component: FindAnimesComponent;
  let fixture: ComponentFixture<FindAnimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindAnimesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
