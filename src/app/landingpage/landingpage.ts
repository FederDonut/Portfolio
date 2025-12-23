import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';

import { Navbar } from '../shared/navbar/navbar';

@Component({
  selector: 'app-landingpage',
  imports: [
    Navbar,
    TranslatePipe,
    TranslateDirective
],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss',
})
export class Landingpage {
  

}
