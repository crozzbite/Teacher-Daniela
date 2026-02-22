import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-button.component.html',
  styleUrl: './hero-button.component.css'
})
export class HeroButtonComponent {
  href = input.required<string>();
  blank = input<boolean>(false);
}
