import { Component, EventEmitter, inject, Output, OnInit } from '@angular/core';
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
export class Navbar implements OnInit{



  english:boolean = true;
  translate = inject(TranslateService);
  showNavbarOverlay:boolean = false; 

  
  @Output()isEnglish = new EventEmitter<boolean>();

  constructor(){
    this.translate.addLangs(['de', 'en']);
    this.translate.setFallbackLang('en');
    //this.translate.use('en');
  }

  ngOnInit(){
    this.getFromLocalStorage();
  }

  emitLanguage(){
    this.isEnglish.emit(this.english);
  }

  

  changeLanguage(){
    this.english = !this.english;
    if(this.english){
      this.translate.use('en');
      this.emitLanguage();
      this.saveToLocalStorage();
    }
    if(!this.english){
      this.translate.use('de');
      this.emitLanguage();
      this.saveToLocalStorage();
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
      this.emitLanguage();
      
    }else{
      this.translate.use('de');
      this.emitLanguage();
      
    }
    

  }
  saveToLocalStorage(){
    localStorage.setItem("isEnglish", JSON.stringify(this.english));
  }

  getFromLocalStorage(){
    const savedLanguage = localStorage.getItem('isEnglish');
    if(savedLanguage !==null){
      this.english = JSON.parse(savedLanguage);
    }else{
      this.english = true;
    }
    const checkLanguage = this.english ? 'en':'de';
    this.translate.use(checkLanguage);
    this.emitLanguage();
  }
}
