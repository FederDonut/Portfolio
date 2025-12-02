import { Component, signal } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { Landingpage } from './landingpage/landingpage';
import { AboutMe } from './about-me/about-me';
import { Technologies } from './technologies/technologies';
import { Projects } from './projects/projects';
import { OthersAboutMe } from './others-about-me/others-about-me';
import { Slider } from './shared/slider/slider';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AboutMe,
    Technologies,
    Projects,
    OthersAboutMe,
    Slider
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio');
}
