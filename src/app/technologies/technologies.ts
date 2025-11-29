import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-technologies',
  imports: [],
  templateUrl: './technologies.html',
  styleUrl: './technologies.scss',
})
export class Technologies {

  imgPath: string = "assets/img/techImgs/Tech_icons"
  //fontColor = '#3DCFB6'

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

  skillIntrouduktion =[
    { language: 'EN', 
      content:   `I have a solid foundation in front-end development with HTML, CSS, JavaScript, TypeScript, Angular,
                  Firebase, and Material Design, complemented by knowledge of REST APIs, Git, 
                  and Scrum. I enjoy creating user-friendly, responsive interfaces and am
                  eager to keep learning of new tools to stay efficient in the fast-evolving
                  web environment."
                  `},
    { language: 'DE',
      content:  `Ich verfüge über solide Grundlagen in der Front-End-Entwicklung mit HTML, CSS, JavaScript, TypeScript,
                Angular, Firebase und Material Design, ergänzt durch Kenntnisse in REST-APIs, Git und Scrum. Ich entwickle 
                gerne benutzerfreundliche, responsive Oberflächen und lerne ständig neue Tools,
                um in der Webumgebung effizient zu bleiben.`
                  }
  ]
}

