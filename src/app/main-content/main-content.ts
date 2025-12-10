import { Component } from '@angular/core';
import { Landingpage } from '../landingpage/landingpage';
import { AboutMe } from '../about-me/about-me';
import { Technologies } from '../technologies/technologies';
import { Projects } from '../projects/projects';
import { OthersAboutMe } from '../others-about-me/others-about-me';
import { ContactMe } from '../contact-me/contact-me';

@Component({
  selector: 'app-main-content',
  imports: [
    Landingpage,
    AboutMe,
    Technologies,
    Projects,
    OthersAboutMe,
    ContactMe

  ],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss',
})
export class MainContent {

}
