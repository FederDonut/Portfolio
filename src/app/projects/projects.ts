import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectOverlay } from "../overlays/project-overlay/project-overlay";


@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectOverlay],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  project: string|null  = null;
  showProjectOverlay: boolean = false;
  projectName: string = "";

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
  }

  clearProjectName(){
    this.project = null;
  }

  stopScrolling(){

  }
  openOverlay(projectTitel: string){
    this.showProjectOverlay = true
    this.projectName = projectTitel;
    document.body.classList.add('no-scroll');
  }

  
}
