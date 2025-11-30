import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, AfterViewInit,   } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-others-about-me',
  imports: [
    CommonModule,
    

  ],
  templateUrl: './others-about-me.html',
  styleUrl: './others-about-me.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA], //Ignoriert unbekannte tags im HTML notwendig für swiper
})
export class OthersAboutMe implements AfterViewInit {

  @ViewChild('swiperContainer') swiperContainer: any;
  
  defaultPrevIconPath:string = '/assets/img/arrow_back.svg'
  defaultNextIconPath:string = '/assets/img/arrow_forward.svg'
  hoverPrevIconPath:string = '/assets/img/iconizer-arrow_back.svg'
  hoverNextIconPath:string = '/assets/img/iconizer-arrow_forward.svg'

  prevIcon = this.defaultPrevIconPath;
  nextIcon = this.defaultNextIconPath;


 

  ngAfterViewInit() {
    this.setupSwiperNavigation();
  }
  
  setupSwiperNavigation(){
    //const swiperEl = this.swiperContainer.nativeElement;
    const swiperEl = document.querySelector('swiper-container') as any;
    const prevBtn = document.querySelector('.swiper-btn-prev') as HTMLButtonElement;
    const nextBtn = document.querySelector('.swiper-btn-next') as HTMLButtonElement;

    if (swiperEl && swiperEl.swiper) {

      prevBtn?.removeEventListener('click', this.slidePrev);
      nextBtn?.removeEventListener('click', this.slideNext);

      prevBtn?.addEventListener('click', () => swiperEl.swiper.slidePrev());
      nextBtn?.addEventListener('click', () => swiperEl.swiper.slideNext());
    }
  }
  
  slidePrev(){
    this.slidePrev();
  }

  slideNext(){
    this.slideNext();
  }


  
  
}
