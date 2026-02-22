import { Component, inject, computed } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/ui/header/header.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { FooterComponent } from './shared/ui/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private router = inject(Router);
  
  // Track URL changes to hide/show header
  private currentUrl = toSignal(
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => (event as NavigationEnd).urlAfterRedirects)
    ),
    { initialValue: '' }
  );

  readonly showHeader = computed(() => true);

  title = 'daniela-english-coaching';
}
