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

  comments = [1,2,3,4,5];
  mirrorComments:any = []; 
  currentSlideIndex:number = 1

  ngAfterViewInit(): void {
      this.startPosition(2);
  }

  startPosition(index:number){
    if(!this.sliderRef || index === 0){
      return
    }else{
      const sliderEl = this.sliderRef.nativeElement;
      const commentElement = sliderEl.querySelector('.comment'); // bezieh die css werte
      const slideWidth = commentElement?.clientWidth || 0;
      const gap = 32;

      const startPosition = index * (slideWidth + gap);

      //positionierung 
      sliderEl.scrollTo({
        left: startPosition,
        behavior: 'auto'
      });
    }

  }

  slideNext(){
    if(!this.sliderRef){
      console.log('keine Slider refernz gefunden')
    }else{
      const sliderEl = this.sliderRef.nativeElement;
      const sliderWidth = sliderEl.querySelector('.comment')?.clientWidth || 0;
      const gap = 32;
      
      const scroll = sliderWidth + gap;
      sliderEl.scrollBy({left: -scroll, behavior: 'smooth' })
    }

  }

  slidePrev(){
     if(!this.sliderRef){
      console.log('keine Slider refernz gefunden')
    }else{
      const sliderEl = this.sliderRef.nativeElement;
      const sliderWidth = sliderEl.querySelector('.comment')?.clientWidth || 0;
      const gap = 32;
      
      const scroll = sliderWidth + gap;
      sliderEl.scrollBy({left: scroll, behavior: 'smooth' })
    }

  }
}
