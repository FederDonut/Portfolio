import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  imports: [
    CommonModule,
    TranslatePipe,
    RouterLink
],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

}
