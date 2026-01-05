import { Component , EventEmitter, Input, Output, inject } from '@angular/core';
import { TranslateService, TranslatePipe,} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar-overlay',
  standalone: true,
  imports: [
    //TranslateService,
    TranslatePipe,
  ],
  
  templateUrl: './navbar-overlay.html',
  styleUrl: './navbar-overlay.scss',
})
export class NavbarOverlay {

  @Input()english:boolean = true;
  @Output()changeLanguage = new EventEmitter<boolean>();
  @Output()closeOverlay = new EventEmitter<void>();

  emitCloseOverlay(){
    this.closeOverlay.emit();
  }

  emitLanguageChange(){
    this.changeLanguage.emit(this.english)
  }

  switchLanguage(){
    if(!this.english){
      this.english = true
      this.emitLanguageChange();
    }else{
      this.english = false;
      this.emitLanguageChange();
    }
  }

  close(){
    this.emitCloseOverlay();
  }
}
