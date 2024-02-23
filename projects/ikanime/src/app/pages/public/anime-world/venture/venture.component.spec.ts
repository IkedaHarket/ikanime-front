import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentureComponent } from './venture.component';

describe('VentureComponent', () => {
  let component: VentureComponent;
  let fixture: ComponentFixture<VentureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VentureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
