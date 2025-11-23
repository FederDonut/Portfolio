import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  project: string|null  = null;

  getBackgroundImage(){
    if(this.project === 'Join'){
      return 'url(/assets/img/Photos/Join-Photo.png)'
    }
    else if(this.project === 'El-Pollo-Loco'){
      return 'url(/assets/img/Photos/Pollo-loco-Photo.png)'
    }
    else{
      return null
    }
  }

  identifyProject(projectTitel: string){
    this.project = projectTitel;
    console.log(this.project);
  }

  clearProjectName(){
    this.project = null;
  }
}
