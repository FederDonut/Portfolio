import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-others-about-me',
  imports: [CommonModule],
  templateUrl: './others-about-me.html',
  styleUrl: './others-about-me.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA], //Ignoriert unbekannte tags im HTML notwendig für swiper
})
export class OthersAboutMe {

comments = [1,2,3]

  

  

  
}
