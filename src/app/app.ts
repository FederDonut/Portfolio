import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Landingpage } from './landingpage/landingpage';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet, 
    Landingpage,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio');
}
