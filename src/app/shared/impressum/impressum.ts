import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';
@Component({
  selector: 'app-impressum',
  imports: [
    Navbar,
    TranslatePipe
  ],
  templateUrl: './impressum.html',
  styleUrl: './impressum.scss',
})
export class Impressum {

}
