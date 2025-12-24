import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';

import { Navbar } from '../shared/navbar/navbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landingpage',
  imports: [
    Navbar,
    TranslatePipe,
    CommonModule
    
  ],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss',
})
export class Landingpage {
  
  english:boolean = true;

  gotLanguage(isEnglish:any){
    if(isEnglish){
      this.english = isEnglish;
      console.log('englisch')
    }else{
      this.english = isEnglish;
      console.log('deutsch')
    }
  
    //console.log(english);
  }
}
