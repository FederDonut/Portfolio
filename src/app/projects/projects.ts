import { Component, inject } from '@angular/core';
import { OverlayService } from '../overlay-service';
import { CommonModule } from '@angular/common';
import { ProjectOverlay } from "../overlays/project-overlay/project-overlay";
import { TranslatePipe} from '@ngx-translate/core';


@Component({
  selector: 'app-projects',
  imports: [
    CommonModule,
    ProjectOverlay,
    TranslatePipe,
    
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  project: string|null  = null;
  showProjectOverlay: boolean = false;
  projectName: string = "";

  OverlayService = inject(OverlayService);
  
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

  openOverlay(projectTitel: string){
    this.showProjectOverlay = true
    this.projectName = projectTitel;
    //document.body.classList.add('no-scroll');
    //document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  }

  changeProjektOverlay(){
    const currentIndex = this.OverlayService.projects.findIndex(p=>p.name === this.projectName)
    const nextIndex = (currentIndex + 1) % this.OverlayService.projects.length
    this.projectName = this.OverlayService.projects[nextIndex].name
  }
  
}
