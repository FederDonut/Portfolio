import { Component, EventEmitter, inject, Input, Output, } from '@angular/core';
import { OverlayService } from '../../overlay-service';

@Component({
  selector: 'app-project-overlay',
  imports: [],
  templateUrl: './project-overlay.html',
  styleUrl: './project-overlay.scss',
})
export class ProjectOverlay {

  @Input()showProjectOverlay = true;
 
  @Output()closeProjectOverlay = new EventEmitter<boolean>();

  
  //OverlayService = inject();
  closeOverlay(){
    if(this.showProjectOverlay){
      this.showProjectOverlay = false;
      console.log(this.showProjectOverlay);
      this.closeProjectOverlay.emit(this.showProjectOverlay);
      //this.showProjectOverlay = false;
    }
    
  }
}
