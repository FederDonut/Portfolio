import { Component, EventEmitter, inject, Input, Output,OnInit } from '@angular/core';
import { OverlayService } from '../../overlay-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-overlay',
  imports: [CommonModule],
  templateUrl: './project-overlay.html',
  styleUrl: './project-overlay.scss',
})
export class ProjectOverlay implements OnInit {

  @Input()projectName: string |undefined;
  @Output()closeProjectOverlay = new EventEmitter<boolean>();

  counter:number = 0;
  currentProject: any;

  OverlayService = inject(OverlayService);

  ngOnInit(): void {
      console.log('overlay'+ this.projectName +'open ')
      if(this.projectName==="Join"){
        this.counter = 0;
        console.log(this.counter)
      }
      if(this.projectName ==="El-Pollo-Loco"){
        this.counter = 1;
        console.log(this.counter)
      }
      this.currentProject = this.OverlayService.projects[this.counter]
      console.log(this.currentProject.techstack);

  }

  closeOverlay(){
    this.closeProjectOverlay.emit(false);
    document.body.classList.remove('no-scroll');
  }
}
