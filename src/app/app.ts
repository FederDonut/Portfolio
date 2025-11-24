import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Landingpage } from './landingpage/landingpage';
import { AboutMe } from './about-me/about-me';
import { Technologies } from './technologies/technologies';
import { Projects } from './projects/projects';
import { OthersAboutMe } from './others-about-me/others-about-me';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet, 
    
    AboutMe,
    Technologies,
    Projects,
    OthersAboutMe,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio');
}
