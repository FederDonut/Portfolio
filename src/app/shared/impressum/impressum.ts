import { Component, OnInit } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";
import { Footer } from '../footer/footer';
@Component({
  selector: 'app-impressum',
  imports: [
    Navbar,
    TranslatePipe,
    RouterLink,
    Footer
],
  templateUrl: './impressum.html',
  styleUrl: './impressum.scss',
})
export class Impressum implements OnInit{

  ngOnInit(): void {
  setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);
  }
}
