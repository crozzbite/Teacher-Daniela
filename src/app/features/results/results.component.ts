import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { OnboardingStateService } from '../../core/services/onboarding-state.service';
import { WhatsappAdapterService } from '../../core/services/whatsapp-adapter.service';
import { PlanCardComponent } from '../../shared/components/plan-card/plan-card.component';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, PlanCardComponent, RouterLink],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  private router = inject(Router);
  private state = inject(OnboardingStateService);
  private whatsapp = inject(WhatsappAdapterService);

  recommendedPlan = this.state.recommendedPlan;
  level = this.state.level;
  goal = this.state.goal;

  sendWhatsapp() {
    this.whatsapp.triggerRedirection();
  }

  restart() {
    this.state.reset();
    this.router.navigate(['/']);
  }
}
