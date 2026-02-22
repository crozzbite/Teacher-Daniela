import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.css'
})
export class PricingCardComponent {
  title = input.required<string>();
  description = input.required<string>();
  price = input.required<string>();
  features = input.required<string[]>();
  buttonText = input<string>('Elegir Plan');
  highlight = input<boolean>(false);

  onSelect(plan: string) {
    if (this.price() === 'GRATIS') {
      window.open('https://calendly.com', '_blank');
    } else {
      window.open(`https://wa.me/?text=Hola Daniela, me interesa el plan ${plan} de inglés.`, '_blank');
    }
  }
}
