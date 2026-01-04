import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-mail-overlay',
  imports: [
    CommonModule,
    TranslatePipe
  ],
  templateUrl: './mail-overlay.html',
  styleUrl: './mail-overlay.scss',
})
export class MailOverlay {

  @Output()closeMailOverlay = new EventEmitter<boolean>();

  closeOverlay(){
    this.closeMailOverlay.emit(false);
    document.body.classList.remove('no-scroll');
  }
}
