import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  imports: [
    TranslatePipe,
  ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const options = {
      root: null, 
      threshold: 0.2 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);
    const photo = this.el.nativeElement.querySelector('.photo-wrapper');
    const description = this.el.nativeElement.querySelector('.description-wrapper');
    if (photo) observer.observe(photo);
    if (description) observer.observe(description);
  }
}
