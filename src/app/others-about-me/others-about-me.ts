import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slider } from '../shared/slider/slider';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';




@Component({
  selector: 'app-others-about-me',
  imports: [
    CommonModule,
    Slider,
    TranslatePipe
  ],
  templateUrl: './others-about-me.html',
  styleUrl: './others-about-me.scss',
})
export class OthersAboutMe {}
