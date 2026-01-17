import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Footer } from "./shared/footer/footer";
import { DataProtection } from './shared/data-protection/data-protection';
import { OverlayModule } from '@angular/cdk/overlay';
import { filter } from 'rxjs';




@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Footer,
    OverlayModule,
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio');
  private router = inject(Router);
  
  showFooter = signal(true);
  

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
        const isLegalPage = event.urlAfterRedirects === '/imprint' || 
                            event.urlAfterRedirects === '/data-protection';
        this.showFooter.set(!isLegalPage)
    });
  }
}
