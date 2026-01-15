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
export class Slider implements AfterViewInit {
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLDivElement>;

  comments = [0, 1, 2];
  currentCommentId: number = this.comments[1];

  ngAfterViewInit(): void {
    const startIndex = 1;
    this.currentCommentId = this.comments[startIndex]
    this.scrollToStartIndex(startIndex)
    this.updateActivePagination();
  }

  updateActivePagination() {
    if (!this.sliderRef) return;

    const sliderEl = this.sliderRef.nativeElement;
    const commentElement = sliderEl.querySelector('.comment');
    const slideSize = (commentElement?.clientWidth || 0) + 32; 
    const currentIndex = Math.round(sliderEl.scrollLeft / slideSize);
    const safeIndex = Math.max(0, Math.min(currentIndex, this.comments.length - 1));
    this.currentCommentId = this.comments[safeIndex];
  }

  scrollToStartIndex(index : number){
    if(!this.sliderRef) return;
    const sliderEl = this.sliderRef.nativeElement;
    const commentElement = sliderEl.querySelector('.comment');
    const slideSize = (commentElement?.clientWidth || 0) + 32;
    sliderEl.scrollLeft = index * slideSize;
  }

  scroll(direction: 'next' | 'prev') {
    const sliderEl = this.sliderRef.nativeElement;
    const slideSize = (sliderEl.querySelector('.comment')?.clientWidth || 0) + 32;
    const currentIndex = Math.round(sliderEl.scrollLeft / slideSize);

    if (direction === 'next') {
      if (currentIndex >= this.comments.length - 1) {
        sliderEl.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        sliderEl.scrollBy({ left: slideSize, behavior: 'smooth' });
      }
    } else {
      if (currentIndex <= 0) {
        const lastPos = (this.comments.length - 1) * slideSize;
        sliderEl.scrollTo({ left: lastPos, behavior: 'smooth' });
      } else {
        sliderEl.scrollBy({ left: -slideSize, behavior: 'smooth' });
      }
    }
  }

  slidePrev() { this.scroll('prev'); }
  slideNext() { this.scroll('next'); }
}
