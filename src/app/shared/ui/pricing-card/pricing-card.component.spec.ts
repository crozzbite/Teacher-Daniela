import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCardComponent } from './pricing-card.component';

describe('PricingCardComponent', () => {
  let component: PricingCardComponent;
  let fixture: ComponentFixture<PricingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('title', 'Test Plan');
    fixture.componentRef.setInput('description', 'Test Description');
    fixture.componentRef.setInput('price', '$100');
    fixture.componentRef.setInput('features', ['Feature 1', 'Feature 2']);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
