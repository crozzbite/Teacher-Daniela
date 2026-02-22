import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OnboardingComponent } from './onboarding.component';
import { OnboardingStateService } from '../../core/services/onboarding-state.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { provideRouter } from '@angular/router';

describe('OnboardingComponent', () => {
  let component: OnboardingComponent;
  let fixture: ComponentFixture<OnboardingComponent>;
  let stateService: OnboardingStateService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardingComponent, CommonModule],
      providers: [
        OnboardingStateService,
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(OnboardingComponent);
    component = fixture.componentInstance;
    stateService = TestBed.inject(OnboardingStateService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show errors and scroll if diagnosis is incomplete when clicking finish', () => {
    spyOn(component, 'scrollToFirstError');
    component.finishDiagnosis();
    expect(component.showErrors).toBeTrue();
    expect(component.scrollToFirstError).toHaveBeenCalled();
  });

  it('should navigate to result if diagnosis is complete', () => {
    const navigateSpy = spyOn(router, 'navigate');
    stateService.setLevel('A1');
    stateService.setGoal('Trabajo');
    stateService.setUrgency('Alta (1-2 meses)');
    
    component.finishDiagnosis();
    expect(navigateSpy).toHaveBeenCalledWith(['/resultado']);
  });

  it('should call nextSlide when level is selected', () => {
    const nextSpy = spyOn(component, 'nextSlide');
    component.selectLevel('A2');
    expect(stateService.level()).toBe('A2');
    expect(nextSpy).toHaveBeenCalled();
  });

  it('should scroll to specific slide when nextSlide is called', () => {
    // Mocking nativeElement
    const mockContainer = {
      clientHeight: 800,
      scrollBy: jasmine.createSpy('scrollBy')
    };
    component.slides = { nativeElement: mockContainer } as any;

    component.nextSlide();
    expect(mockContainer.scrollBy).toHaveBeenCalledWith({ top: 800, behavior: 'smooth' });
  });
});
