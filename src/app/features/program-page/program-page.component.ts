import { Component } from '@angular/core';
import { HeroButtonComponent } from '../../shared/ui/hero-button/hero-button.component';
import { SectionHeaderComponent } from '../../shared/ui/section-header/section-header.component';
import { PricingCardComponent } from '../../shared/ui/pricing-card/pricing-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-program-page',
  standalone: true,
  imports: [HeroButtonComponent, SectionHeaderComponent, PricingCardComponent, CommonModule],
  templateUrl: './program-page.component.html',
  styleUrl: './program-page.component.css'
})
export class ProgramPageComponent {
  levels = [
    {
      id: 'A1',
      title: 'A1: "Survivor"',
      duration: '20–24 clases',
      description: 'Poder presentarse, sobrevivir en un viaje básico e interactuar en situaciones muy rutinarias.',
      outcomes: 'El alumno no se quedará mudo al conocer a alguien nuevo y podrá viajar pidiendo direcciones y comida sin sufrir.'
    },
    {
      id: 'A2',
      title: 'A2: "Navigator"',
      duration: '24–30 clases',
      description: 'Participar en conversaciones simples y directas sobre temas familiares, poder describir eventos pasados y planes futuros.',
      outcomes: 'Puede contar anécdotas, planear viajes enteros y tener conversaciones ligeras con colegas.'
    },
    {
      id: 'B1',
      title: 'B1: "Communicator"',
      duration: '30–36 clases',
      description: 'Hablar con fluidez en la mayoría de las situaciones cotidianas y laborales; expresar opiniones de manera articulada.',
      outcomes: 'El estudiante puede defender una idea en una reunión, pasar una entrevista laboral estándar y ver series con subtítulos.'
    },
    {
      id: 'B2',
      title: 'B2: "Professional"',
      duration: '36–40+ clases',
      description: 'Interactuar con hablantes nativos con un grado suficiente de fluidez y naturalidad; entender textos abstractos.',
      outcomes: 'Nivel óptimo para buscar trabajo internacional o estudiar un posgrado. Cero barrera en el día a día.'
    }
  ];
}
