import { Component, inject } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/ui/section-header/section-header.component';
import { WhatsappAdapterService } from '../../core/services/whatsapp-adapter.service';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {
  private whatsappService = inject(WhatsappAdapterService);

  contactViaWhatsapp(): void {
    this.whatsappService.triggerRedirection();
  }
}
