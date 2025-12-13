import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./shared/footer/footer";
import { OverlayModule } from '@angular/cdk/overlay';


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
}
