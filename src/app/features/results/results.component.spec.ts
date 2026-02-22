import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultsComponent } from './results.component';
import { OnboardingStateService } from '../../core/services/onboarding-state.service';
import { WhatsappAdapterService } from '../../core/services/whatsapp-adapter.service';
import { Router } from '@angular/router';
import { provideRouter } from '@angular/router';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;
  let stateService: OnboardingStateService;
  let whatsappService: WhatsappAdapterService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsComponent],
      providers: [
        OnboardingStateService,
        { provide: WhatsappAdapterService, useValue: { triggerRedirection: jasmine.createSpy('triggerRedirection') } },
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    stateService = TestBed.inject(OnboardingStateService);
    whatsappService = TestBed.inject(WhatsappAdapterService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call whatsapp redirection when sendWhatsapp is called', () => {
    component.sendWhatsapp();
    expect(whatsappService.triggerRedirection).toHaveBeenCalled();
  });

  it('should reset state and navigate to diagnosis on restart', () => {
    const resetSpy = spyOn(stateService, 'reset');
    const navigateSpy = spyOn(router, 'navigate');

    component.restart();
    expect(resetSpy).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith(['/diagnosis']);
  });
});
