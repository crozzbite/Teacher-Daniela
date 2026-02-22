import { TestBed } from '@angular/core/testing';
import { OnboardingStateService } from './onboarding-state.service';


describe('OnboardingStateService', () => {
  let service: OnboardingStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnboardingStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with null values', () => {
    expect(service.level()).toBeNull();
    expect(service.goal()).toBeNull();
    expect(service.urgency()).toBeNull();
    expect(service.isDiagnosisComplete()).toBeFalse();
  });

  it('should update state when actions are called', () => {
    service.setLevel('A2');
    service.setGoal('Trabajo');
    service.setUrgency('Media (3-6 meses)');

    expect(service.level()).toBe('A2');
    expect(service.goal()).toBe('Trabajo');
    expect(service.urgency()).toBe('Media (3-6 meses)');
    expect(service.isDiagnosisComplete()).toBeTrue();
  });

  it('should recommend Intensive Plan for high urgency', () => {
    service.setUrgency('Alta (1-2 meses)');
    expect(service.recommendedPlan()).toBe('Plan Intensivo (12 clases/mes)');
  });

  it('should recommend Standard Plan for Conversational goal if not high urgency', () => {
    service.setUrgency('Media (3-6 meses)');
    service.setGoal('Conversación');
    expect(service.recommendedPlan()).toBe('Plan Estándar (8 clases/mes)');
  });

  it('should recommend Basic Plan by default', () => {
    service.setUrgency('Media (3-6 meses)');
    service.setGoal('Universidad');
    expect(service.recommendedPlan()).toBe('Plan Básico (4 clases/mes)');
  });

  it('should reset state correctly', () => {
    service.setLevel('B1');
    service.reset();
    expect(service.level()).toBeNull();
  });
});
