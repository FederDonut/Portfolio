import { Component, EventEmitter, inject, Input, Output,OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { OverlayService } from '../../overlay-service';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';



@Component({
  selector: 'app-project-overlay',
  imports: [
    CommonModule,
    TranslatePipe,
  ],
  templateUrl: './project-overlay.html',
  styleUrl: './project-overlay.scss',
})
export class ProjectOverlay implements OnInit, OnChanges {

  @Input()projectName: string |undefined;
  @Output()closeProjectOverlay = new EventEmitter<boolean>();
  @Output()nextProjectOverlay = new EventEmitter<void>();

  counter:number = 0;
  currentProject: any;

  OverlayService = inject(OverlayService);

  ngOnInit(): void {
      if(this.projectName==="Join"){
        this.counter = 0;
      }
      if(this.projectName ==="El-Pollo-Loco"){
        this.counter = 1;
      }
      this.currentProject = this.OverlayService.projects[this.counter]

  }

  ngOnChanges(changes: SimpleChanges): void {
      if (changes['projectName'] && this.projectName){
        this.renderProject(this.projectName);
      }
  }

  renderProject(name: string){
   
    this.currentProject = this.OverlayService.projects.find(
        p => p.name === name
    );
   
  }

  closeOverlay(){
    this.closeProjectOverlay.emit(false);
    document.body.classList.remove('no-scroll');
  }

  nextProject(projectName:string){
    this.nextProjectOverlay.emit();
  }
}
