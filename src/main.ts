import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { register as registerSwiperElements } from 'swiper/element/bundle'; 

//import { register } from 'swiper/element/bundle';
//// register Swiper custom elements
//register()

registerSwiperElements();
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
