import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { OnboardingStateService } from '../services/onboarding-state.service';

export const resultsGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const onboardingState = inject(OnboardingStateService);

  // El Funnel solo es válido si el usuario pasó por el diagnóstico (tiene un Goal)
  if (onboardingState.goal() === null || onboardingState.level() === null) {
    // Si intentan entrar directo a /resultado, regresarlos a Onboarding
    return router.createUrlTree(['/diagnosis']);
  }

  return true;
};
