import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Footer } from "./shared/footer/footer";
import { OverlayModule } from '@angular/cdk/overlay';
import { filter } from 'rxjs';



@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Footer,
    OverlayModule
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio');
  private router = inject(Router);
  
  // Signal, das steuert, ob der Footer sichtbar ist
  showFooter = signal(true);

  constructor() {
    // Wir hören auf Router-Events, um zu wissen, wo wir sind
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Wenn die URL '/imprint' ist, setzen wir das Signal auf false
      this.showFooter.set(event.urlAfterRedirects !== '/imprint');
    });
  }
}
