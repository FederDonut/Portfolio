import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';

@Component({
  selector: 'app-slider',
  imports: [
    CommonModule,
    TranslatePipe

  ],
  templateUrl: './slider.html',
  styleUrl: './slider.scss',
})
export class Slider implements AfterViewInit, OnInit {

  // Referenz auf das scrollbare DIV-Element mit der Klasse .slider
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLDivElement>;

  comments = [0,1,2];
  mirrorComments:any = []; 
  firstCurrentSlideIndex:number = 1
  currentSlideIndex: number = 0
  currentCommentId: any = this.comments[0];

  ngOnInit(){
    this.storeMirror();
    this.currentSlideIndex = 0;
  }

  updateActivePagination(){
    
    const sliderEl = this.sliderRef.nativeElement;
    const commentElement = sliderEl.querySelector('.comment');
    const slideWidth = commentElement?.clientWidth || 0;
    const gap = 32;
    const slideSize = slideWidth + gap;
    const scrollLeft = sliderEl.scrollLeft;
    const mirrorIndex = Math.round(scrollLeft / slideSize);
    let newOriginalIndex = mirrorIndex - 1;
    if (newOriginalIndex < 0) {
        // Linker Spiegel-Slide -> wird als letzter echter Slide betrachtet
        newOriginalIndex = this.comments.length - 1; 
    } else if (newOriginalIndex >= this.comments.length) {
        // Rechter Spiegel-Slide -> wird als erster echter Slide betrachtet
        newOriginalIndex = 0;
    }
    this.currentCommentId = this.comments[newOriginalIndex];
    
  }

  ngAfterViewInit(): void {
     this.startPosition(this.firstCurrentSlideIndex,'auto');
    setTimeout(() => {
        this.updateActivePagination();
    }, 0);
  }

  storeMirror(){
    const content = this.comments;
    const mirrorLeft = [content[content.length-1]];
    const mirrorRight = [content[0]]
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
            this.updateActivePagination()
        }, 300); 
    }
    if (direction === 'prev' && currentIndex === this.firstCurrentSlideIndex) {
        setTimeout(() => {
            this.startPosition(lastCurrentSlidendex, 'auto');
            this.updateActivePagination()
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

  slidePrev(){
    this.scroll('prev');
  }

  slideNext(){
    this.scroll('next');
  }
}
