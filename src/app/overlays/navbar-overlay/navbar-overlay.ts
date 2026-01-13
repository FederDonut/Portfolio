import { Component , EventEmitter, Input, Output, inject, OnInit } from '@angular/core';
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
export class NavbarOverlay implements OnInit{

  @Input()english:boolean = true;
  @Output()changeLanguage = new EventEmitter<boolean>();
  @Output()closeOverlay = new EventEmitter<void>();

  ngOnInit(): void {
      this.getFromLocalStorage()
  }
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
      this.saveToLocalStorage();
    }else{
      this.english = false;
      this.emitLanguageChange();
      this.saveToLocalStorage();
    }
  }

  close(){
    this.emitCloseOverlay();
  }

  saveToLocalStorage(){
    localStorage.setItem("isEnglish", JSON.stringify(this.english));
  }

  getFromLocalStorage(){
    const savedLanguage = localStorage.getItem('isEnglish');
    if(savedLanguage !==null){
      this.english = JSON.parse(savedLanguage);
      this.emitLanguageChange();
    }else{
      this.english = true;
    }
  }
}
