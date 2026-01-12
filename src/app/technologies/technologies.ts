import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgStyle, NgIf } from '@angular/common';
import { TechOverlay } from '../overlays/tech-overlay/tech-overlay';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';


@Component({
  selector: 'app-technologies',
  imports: [
    TechOverlay,
    CommonModule,
    NgIf,
    TranslatePipe,
  ],
  templateUrl: './technologies.html',
  styleUrl: './technologies.scss',
})
export class Technologies {

  imgPath: string = "assets/img/techImgs/Tech_icons"
  showTechOverlay : boolean = false;
  

  techStackImg = [
    { titel: 'HTML', source: this.imgPath+'HTML.svg'},
    { titel: 'CSS', source: this.imgPath+'CSS.svg'},
    { titel: 'JS', source: this.imgPath+'JS.svg'},
    { titel: 'Material Design', source: this.imgPath+'Material.svg'},
    { titel: 'TS', source: this.imgPath+'TS.svg'},
    { titel: 'Angular', source: this.imgPath+'Angular.svg'},
    { titel: 'Firebase', source: this.imgPath+'Firebase.svg'},
    { titel: 'GIT', source: this.imgPath+'GIT.svg'},
    { titel: 'API', source: this.imgPath+'API.svg'},
    { titel: 'Scrum', source: this.imgPath+'Scrum.svg'},
    { titel: 'Growth Mindset', source: this.imgPath+'GrowthMindset.svg'},
  ]

 

  checkIndex(index:number){
    if(index === 10){
      this.showTechOverlay = true;
    }
  }

  hideOverlay(){
    this.showTechOverlay = false;
  }


}


