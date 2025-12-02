import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, AfterViewInit, OnDestroy, ElementRef  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slider } from '../shared/slider/slider';
import Swiper from 'swiper';



@Component({
  selector: 'app-others-about-me',
  imports: [
    CommonModule,
    Slider
  ],
  templateUrl: './others-about-me.html',
  styleUrl: './others-about-me.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA], //Ignoriert unbekannte tags im HTML notwendig für swiper
})
export class OthersAboutMe implements AfterViewInit, OnDestroy {

  @ViewChild('swiperContainer',{static: false}) swiperContainer: any;
  @ViewChild('prevBtn', { static: false }) prevBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('nextBtn', { static: false }) nextBtn!: ElementRef<HTMLButtonElement>;
  
  defaultPrevIconPath:string = '/assets/img/arrow_back.svg'
  defaultNextIconPath:string = '/assets/img/arrow_forward.svg'
  hoverPrevIconPath:string = '/assets/img/iconizer-arrow_back.svg'
  hoverNextIconPath:string = '/assets/img/iconizer-arrow_forward.svg'

  prevIcon = this.defaultPrevIconPath;
  nextIcon = this.defaultNextIconPath;

  swiper:any = null;

  prevHandler = () => this.swiper?.slidePrev();
  nextHandler = () => this.swiper?.slideNext();
  slideChangeHandler: any = null;

  ngAfterViewInit() {
    //this.setupSwiperNavigation();
    this.initIntegration();
  }
  
  ngOnDestroy(){
    this.cleanupListeners()
  }

  //initIntegration(){
  //  const swiperEl = this.swiperContainer?.nativeElement;
  //  if(!swiperEl){
  //    console.error('Swiper-template fehlt (#swiperContainer)');
  //    return;
  //  }
  //  const checkIfReady = ()=>{
  //    if(swiperEl.swiper){
  //      this.swiper = swiperEl.swiper;
  //      this.setupButtons();
  //      return true;
  //    }
  //    return false;
  //  };
  //  if(!checkIfReady()){
  //    let tries = 0;
  //    const maxTries = 30;
  //    const interval = setInterval(() => {
  //      tries++;
  //      if (checkIfReady() || tries >= maxTries) {
  //        clearInterval(interval);
  //        if (!this.swiper) console.error('Swiper wurde nicht initialisiert.');
  //      }
  //    }, 100);
  //  }
  //  }
  //  
  //}
   private initIntegration() {
    const swiperEl = this.swiperContainer?.nativeElement;
    if (!swiperEl) {
      console.error('Swiper-template fehlt (#swiperContainer)');
      return;
    }

    const checkIfReady = () => {
      if (swiperEl.swiper) {
        this.swiper = swiperEl.swiper;
        this.setupButtons();
        return true;
      }
      return false;
    };

    if (!checkIfReady()) {
      let tries = 0;
      const maxTries = 30;
      const interval = setInterval(() => {
        tries++;
        if (checkIfReady() || tries >= maxTries) {
          clearInterval(interval);
          if (!this.swiper) console.error('Swiper wurde nicht initialisiert.');
        }
      }, 100);
    }
  }
  

  setupButtons() {
    // vorherige Listener entfernen, dann neue hinzufügen
    this.prevBtn?.nativeElement.removeEventListener('click', this.prevHandler);
    this.nextBtn?.nativeElement.removeEventListener('click', this.nextHandler);

    this.prevBtn?.nativeElement.addEventListener('click', this.prevHandler);
    this.nextBtn?.nativeElement.addEventListener('click', this.nextHandler);
  }

  cleanupListeners() {
    this.prevBtn?.nativeElement.removeEventListener('click', this.prevHandler);
    this.nextBtn?.nativeElement.removeEventListener('click', this.nextHandler);
    if (this.swiper && this.slideChangeHandler) {
      this.swiper.off?.('slideChange', this.slideChangeHandler);
    }
  }
  slidePrev() { this.swiper?.slidePrev(); }
  slideNext() { this.swiper?.slideNext(); }
  


  //setupSwiperNavigation(){
  //  //const swiperEl = this.swiperContainer.nativeElement;
  //  
  //  const swiperEl = document.querySelector('swiper-container') as any;
  //  const prevBtn = document.querySelector('.swiper-btn-prev') as HTMLButtonElement;
  //  const nextBtn = document.querySelector('.swiper-btn-next') as HTMLButtonElement;
//
  //  if (swiperEl && swiperEl.swiper) {
//
  //    prevBtn?.removeEventListener('click', this.slidePrev);
  //    nextBtn?.removeEventListener('click', this.slideNext);
//
  //    prevBtn?.addEventListener('click', () => swiperEl.swiper.slidePrev());
  //    nextBtn?.addEventListener('click', () => swiperEl.swiper.slideNext());
  //  }
  //}
  //slidePrev(){
  //  this.slidePrev();
  //}
//
  //slideNext(){
  //  this.slideNext();
  //}


  
  
}
