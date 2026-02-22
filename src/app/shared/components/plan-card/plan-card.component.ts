import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plan-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plan-card.component.html',
  styleUrl: './plan-card.component.css'
})
export class PlanCardComponent {
  @Input({ required: true }) title!: string;
  @Input() level: string | null = null;
  @Input() goal: string | null = null;
}
