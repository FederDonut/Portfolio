import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slider } from '../shared/slider/slider';




@Component({
  selector: 'app-others-about-me',
  imports: [
    CommonModule,
    Slider
  ],
  templateUrl: './others-about-me.html',
  styleUrl: './others-about-me.scss',
})
export class OthersAboutMe {}
