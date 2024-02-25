import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnArrowIconComponent } from './return-arrow.component';

describe('ReturnArrowIconComponent', () => {
  let component: ReturnArrowIconComponent;
  let fixture: ComponentFixture<ReturnArrowIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReturnArrowIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReturnArrowIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
