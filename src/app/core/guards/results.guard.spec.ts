import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { OnboardingStateService } from '../services/onboarding-state.service';
import { resultsGuard } from './results.guard';
import { UrlTree } from '@angular/router';

describe('resultsGuard', () => {
  let stateService: OnboardingStateService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OnboardingStateService,
        {
          provide: Router,
          useValue: { createUrlTree: jasmine.createSpy('createUrlTree').and.returnValue({} as UrlTree) }
        }
      ]
    });
    stateService = TestBed.inject(OnboardingStateService);
    router = TestBed.inject(Router);
  });

  it('should redirect if state is incomplete', () => {
    stateService.setGoal(null);
    
    const result = TestBed.runInInjectionContext(() => resultsGuard({} as any, {} as any));
    
    expect(router.createUrlTree).toHaveBeenCalledWith(['/diagnosis']);
  });

  it('should allow navigation if state is complete', () => {
    stateService.setGoal('Trabajo');
    stateService.setLevel('A2');
    stateService.setUrgency('Baja (Sin prisa)');
    
    const result = TestBed.runInInjectionContext(() => resultsGuard({} as any, {} as any));
    
    expect(result).toBeTrue();
  });
});
