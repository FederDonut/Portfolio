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
    { titel: 'HTML', source: this.imgPath+'HTML.png'},
    { titel: 'CSS', source: this.imgPath+'CSS.png'},
    { titel: 'JS', source: this.imgPath+'JS.png'},
    { titel: 'Material Design', source: this.imgPath+'Material.png'},
    { titel: 'TS', source: this.imgPath+'TS.png'},
    { titel: 'Angular', source: this.imgPath+'Angular.png'},
    { titel: 'Firebase', source: this.imgPath+'Firebase.png'},
    { titel: 'GIT', source: this.imgPath+'GIT.png'},
    { titel: 'API', source: this.imgPath+'API.png'},
    { titel: 'Scrum', source: this.imgPath+'Scrum.png'},
    { titel: 'Growth Mindset', source: this.imgPath+'GrowthMindset.png'},
  ]

 

  checkIndex(index:number){
    console.log(index);
    if(index === 10){
      this.showTechOverlay = true;
      console.log(this.showTechOverlay)
    }
  }

  hideOverlay(){
    this.showTechOverlay = false;
    console.log(this.showTechOverlay)
  }


}


