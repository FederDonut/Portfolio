import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslatePipe,} from '@ngx-translate/core';
import { NavbarOverlay } from '../../overlays/navbar-overlay/navbar-overlay';


@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    TranslatePipe,
    NavbarOverlay
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {


  english:boolean = true;
  translate = inject(TranslateService);
  showNavbarOverlay:boolean = false; 

  
  @Output()isEnglish = new EventEmitter<boolean>();

  constructor(){
    this.translate.addLangs(['de', 'en']);
    this.translate.setFallbackLang('en');
    this.translate.use('en');
  }

  emitLanguage(){
    this.isEnglish.emit(this.english);
  }

  

  changeLanguage(){
    this.english = !this.english;
    if(this.english){
      this.translate.use('en');
      this.emitLanguage();
    }
    if(!this.english){
      this.translate.use('de');
      this.emitLanguage();
    }
  }

  openNavbarOverlay(){
    if(!this.showNavbarOverlay){
      this.showNavbarOverlay = true;
      document.body.classList.add('no-scroll');
    }
    
  }

  closeNavbarOverlay(){
    if(this.showNavbarOverlay ){
      this.showNavbarOverlay = false;
      document.body.classList.remove('no-scroll');
    }
  }

  overlayLanguageChange(isEnglishOverlay: boolean){

    this.english = isEnglishOverlay;
    if(this.english){
      this.translate.use('en');
    }else{
      this.translate.use('de');
    }
    

  }
}
