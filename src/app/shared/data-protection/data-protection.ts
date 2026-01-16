import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';

@Component({
  selector: 'app-data-protection',
  imports: [
    Navbar,
    Footer,
    TranslatePipe

  ],
  templateUrl: './data-protection.html',
  styleUrl: './data-protection.scss',
})
export class DataProtection {

}
