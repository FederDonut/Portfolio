import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslatePipe, TranslateDirective } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    TranslatePipe,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {


  english:boolean = true;
  translate = inject(TranslateService);

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
}
