import { Routes } from '@angular/router';
import { resultsGuard } from './core/guards/results.guard';

export const routes: Routes = [
  // Entry point: el funnel de diagnóstico es la puerta de entrada
  {
    path: '',
    loadComponent: () => import('./features/onboarding/onboarding.component').then(m => m.OnboardingComponent),
    title: 'Teacher Daniela | Diagnóstico Gratuito'
  },

  // Landing informativa
  {
    path: 'home',
    loadComponent: () => import('./features/home-page/home-page.component').then(m => m.HomePageComponent),
    title: 'Teacher Daniela | Coaching de Inglés Personalizado'
  },

  // Sobre Teacher Daniela
  {
    path: 'about',
    loadComponent: () => import('./features/about-page/about-page.component').then(m => m.AboutPageComponent),
    title: 'Teacher Daniela | Sobre Mí'
  },

  // Método de enseñanza CSAP
  {
    path: 'metodologia',
    loadComponent: () => import('./features/methodology-page/methodology-page.component').then(m => m.MethodologyPageComponent),
    title: 'Teacher Daniela | El Método'
  },

  // Resultados del diagnóstico (protegida por guard)
  {
    path: 'resultado',
    loadComponent: () => import('./features/results/results.component').then(m => m.ResultsComponent),
    canActivate: [resultsGuard],
    title: 'Teacher Daniela | Tu Plan'
  },

  // Página 404 explícita
  {
    path: 'not-found',
    loadComponent: () => import('./features/not-found-page/not-found-page.component').then(m => m.NotFoundPageComponent),
    title: 'Teacher Daniela | Página no encontrada'
  },

  // Wildcard → diagnóstico
  { path: '**', redirectTo: '' }
];
