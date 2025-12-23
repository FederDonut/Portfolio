import { Component, inject } from '@angular/core';
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

  constructor(){
    this.translate.addLangs(['de', 'en']);
    this.translate.setFallbackLang('en');
    this.translate.use('en');
  }

  changeLanguage(){
    this.english = !this.english;
    if(this.english){
      this.translate.use('en');
    }
    if(!this.english){
      this.translate.use('de');
    }
  }
}
