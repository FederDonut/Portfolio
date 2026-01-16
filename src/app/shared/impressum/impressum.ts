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
      window.scrollTo(0, 0)
  }
}
