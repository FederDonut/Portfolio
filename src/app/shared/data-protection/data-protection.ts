import { Component ,OnInit} from '@angular/core';
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
export class DataProtection implements OnInit{

  ngOnInit(): void {
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);
  }
}
