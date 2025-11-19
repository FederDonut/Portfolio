import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technologies',
  imports: [],
  templateUrl: './technologies.html',
  styleUrl: './technologies.scss',
})
export class Technologies {

  imgPath: string = "./../../public/assets/img/techImgs/Tech_icons"
  
  techStackImg = [
    { titel: 'HTML', source: this.imgPath+'HTMl.png'},
    { titel: 'CSS', source: this.imgPath+'CSS.png'},
    { titel: 'JS', source: this.imgPath+'JS.png'},
    { titel: 'Material Design', source: this.imgPath+'Material.png'},
    { titel: 'TS', source: this.imgPath+'TS.png'},
    { titel: 'Angular', source: this.imgPath+'Angular.png'},
    { titel: 'Firebase', source: this.imgPath+'Firebase.png'},
    { titel: 'GIT', source: this.imgPath+'GIT.png'},
    { titel: 'API', source: this.imgPath+'API.png'},
    { titel: 'Scrum', source: this.imgPath+'Scrum.png'},
    { titel: 'Mindset', source: this.imgPath+'GrowthMindset.png'},
  ]
}

