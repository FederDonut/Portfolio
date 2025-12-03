import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  imports: [CommonModule],
  templateUrl: './slider.html',
  styleUrl: './slider.scss',
})
export class Slider implements AfterViewInit {

  // Referenz auf das scrollbare DIV-Element mit der Klasse .slider
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLDivElement>;

  comments = [0,1,2];
  mirrorComments:any = []; 
  firstCurrentSlideIndex:number = 1

  ngOnInit(){
    this.storeMirror();
  }

  ngAfterViewInit(): void {
      this.startPosition(this.firstCurrentSlideIndex,'auto');
  }

  storeMirror(){
    const content = this.comments;
    const mirrorLeft = [content[content.length-1]];
    const mirrorRight = [content[0]]
    console.log(mirrorLeft);
    console.log(content);
    console.log(mirrorRight)

    this.mirrorComments = [...mirrorLeft,...content,...mirrorRight];

  }

  checkPosition(direction: 'next'|'prev'){
    const sliderEl = this.sliderRef.nativeElement;
    const slideWidth = sliderEl.querySelector('.comment')?.clientWidth || 0;
    const gap = 32;
    const slideSize = slideWidth + gap;
    const scrollLeft = sliderEl.scrollLeft;
    const currentIndex = Math.round(scrollLeft / slideSize)
    const lastCurrentSlidendex = this.comments.length;
    
    if (direction === 'next' && currentIndex === lastCurrentSlidendex) {
        setTimeout(() => {
            this.startPosition(this.firstCurrentSlideIndex, 'auto');
        }, 300); 
    }
    if (direction === 'prev' && currentIndex === this.firstCurrentSlideIndex) {
        setTimeout(() => {
            this.startPosition(lastCurrentSlidendex, 'auto');
        }, 300); 
    }
    
  }

  startPosition(index:number, behavior: 'auto'|'smooth'){
    if(!this.sliderRef || index < 0){
      return
    }else{
      const sliderEl = this.sliderRef.nativeElement;
      const commentElement = sliderEl.querySelector('.comment'); // bezieh die css werte
      const slideWidth = commentElement?.clientWidth || 0;
      const gap = 32;
      const startPosition = index * (slideWidth + gap);
      sliderEl.scrollTo({
        left: startPosition,
        behavior: 'auto'
      });
    }

  }

  scroll(direction: 'next' | 'prev') {
    if (!this.sliderRef) return;
    
    const sliderEl = this.sliderRef.nativeElement;
    const commentElement = sliderEl.querySelector('.comment'); 
    const slideWidth = commentElement?.clientWidth || 0;
    const gap = 32;
    const scrollAmount = slideWidth + gap;
    
    // Beim Scrollen wird der Loop-Check durchgeführt
    this.checkPosition(direction);

    // Scrollt um einen Slide
    const scrollByAmount = direction === 'next' ? scrollAmount : -scrollAmount;
    sliderEl.scrollBy({ left: scrollByAmount, behavior: 'smooth' });
  }

  slideNext(){
    this.scroll('next');
  }

  slidePrev(){
    this.scroll('prev');
  }
}
