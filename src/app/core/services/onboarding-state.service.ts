import { Injectable, signal, computed } from '@angular/core';
import { EnglishLevel, Goal, Urgency } from '../models/onboarding.model';

@Injectable({
  providedIn: 'root'
})
export class OnboardingStateService {
  // State Signals
  readonly level = signal<EnglishLevel>(null);
  readonly goal = signal<Goal>(null);
  readonly urgency = signal<Urgency>(null);

  // Computed state to check if funnel is complete
  readonly isDiagnosisComplete = computed(() => {
    return this.level() !== null && this.goal() !== null && this.urgency() !== null;
  });

  // Computed Plan Recommendation
  readonly recommendedPlan = computed(() => {
    const isUrgent = this.urgency() === 'Alta (1-2 meses)';
    const isConversational = this.goal() === 'Conversación';

    if (isUrgent) return 'Plan Intensivo (12 clases/mes)';
    if (isConversational) return 'Plan Estándar (8 clases/mes)';
    
    return 'Plan Básico (4 clases/mes)';
  });

  // Actions
  setLevel(level: EnglishLevel) {
    this.level.set(level);
  }

  setGoal(goal: Goal) {
    this.goal.set(goal);
  }

  setUrgency(urgency: Urgency) {
    this.urgency.set(urgency);
  }

  reset() {
    this.level.set(null);
    this.goal.set(null);
    this.urgency.set(null);
  }
}
