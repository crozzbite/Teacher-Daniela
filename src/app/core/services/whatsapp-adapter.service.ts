import { Injectable, inject } from '@angular/core';
import { OnboardingStateService } from './onboarding-state.service';
import { EnglishLevel, Goal, Urgency } from '../models/onboarding.model';

@Injectable({
  providedIn: 'root'
})
export class WhatsappAdapterService {
  private state = inject(OnboardingStateService);
  
  // Teacher Daniela's WhatsApp Number (Replace with the real one)
  private readonly PHONE_NUMBER = '+521234567890';

  buildMessage(): string {
    const level = this.state.level() || 'Principiante';
    const goal = this.state.goal() || 'Mejorar mi fluidez';
    const plan = this.state.recommendedPlan();

    return `¡Hola Teacher Daniela! Acabo de hacer el diagnóstico interactivo.

📊 *Mi Nivel Actual:* ${level}
🎯 *Mi Objetivo Principal:* ${goal}
💡 *Plan Recomendado:* ${plan}

Me gustaría recibir mi clase diagnóstica gratuita y conocer más sobre este plan.`;
  }

  getDeepLink(): string {
    const message = this.buildMessage();
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${this.PHONE_NUMBER}?text=${encodedMessage}`;
  }

  triggerRedirection(): void {
    const link = this.getDeepLink();
    window.open(link, '_blank');
  }
}
