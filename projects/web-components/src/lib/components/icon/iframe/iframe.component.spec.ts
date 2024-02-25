import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeIconComponent } from './iframe.component';

describe('IframeComponent', () => {
  let component: IframeIconComponent;
  let fixture: ComponentFixture<IframeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IframeIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IframeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
