import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-impressum',
  imports: [
    Navbar,
    TranslatePipe,
    RouterLink
],
  templateUrl: './impressum.html',
  styleUrl: './impressum.scss',
})
export class Impressum {

}
