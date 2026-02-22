import { Component, ElementRef, ViewChild, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { OnboardingStateService } from '../../core/services/onboarding-state.service';
import { EnglishLevel, Goal, Urgency, LEVEL_LABELS, ONBOARDING_GOALS, ONBOARDING_URGENCIES } from '../../core/models/onboarding.model';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css'
})
export class OnboardingComponent implements OnInit {
  @ViewChild('slides') slides!: ElementRef;
  
  private router = inject(Router);
  public state = inject(OnboardingStateService);
  
  isLastSlide = false;
  showErrors = false;

  levels: Exclude<EnglishLevel, null>[] = ['A1', 'A2', 'B1', 'B2'];
  levelLabels = LEVEL_LABELS;
  goals = ONBOARDING_GOALS;
  urgencies = ONBOARDING_URGENCIES;

  ngOnInit() {
    if (this.slides?.nativeElement) {
      this.slides.nativeElement.scrollTop = 0;
    }
  }

  selectLevel(l: EnglishLevel) {
    this.state.setLevel(l);
    this.nextSlide();
  }

  selectGoal(g: Goal) {
    this.state.setGoal(g);
    this.nextSlide();
  }

  selectUrgency(u: Urgency) {
    this.state.setUrgency(u);
  }

  finishDiagnosis() {
    if (this.state.isDiagnosisComplete()) {
      this.router.navigate(['/resultado']);
    } else {
      this.showErrors = true;
      this.scrollToFirstError();
    }
  }

  scrollToFirstError(): void {
    if (!this.slides?.nativeElement) return;
    const container = this.slides.nativeElement;
    const height = container.clientHeight;
    
    // Slide indexes: 0 (Welcome), 1 (Level), 2 (Goal), 3 (Urgency)
    let slideIndex = 0;
    if (!this.state.level()) slideIndex = 1;
    else if (!this.state.goal()) slideIndex = 2;
    else if (!this.state.urgency()) slideIndex = 3;

    if (slideIndex > 0) {
      container.scrollTo({ 
        top: height * slideIndex, 
        behavior: 'smooth' 
      });
    }
  }

  nextSlide(): void {
    if (!this.slides?.nativeElement || this.isLastSlide) return;
    const container = this.slides.nativeElement;
    container.scrollBy({ 
      top: container.clientHeight, 
      behavior: 'smooth' 
    });
  }

  onScroll(event: Event): void {
    const container = event.target as HTMLElement;
    // Buffer of 50px to handle zoom or fractional pixels
    const isBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 50; 
    this.isLastSlide = isBottom;
  }
}
