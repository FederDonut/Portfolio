import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-others-about-me',
  imports: [CommonModule],
  templateUrl: './others-about-me.html',
  styleUrl: './others-about-me.scss',
})
export class OthersAboutMe {

  comments =[1,2,3];
  currentIndex: number = 1;

  slideLeft(){
    //console.log('left');
    if(this.currentIndex > 0){
      this.currentIndex--;
      console.log(this.currentIndex)
      this.slideEffectLeft();
    }else{
      this.currentIndex = this.comments.length-1;
      console.log(this.currentIndex)
    }
  }

  slideRight(){
    //console.log('right')
    if(this.currentIndex < this.comments.length -1 ){
      this.currentIndex++;
      console.log(this.currentIndex)

    }else{
      this.currentIndex = 0
    }
  }

  slideEffectRight(){
    const moveRight = this.currentIndex * 100;
    return `transalteX(-${moveRight}%)`;
  }

  slideEffectLeft(){
    const moveLeft = this.currentIndex *100;
    return `translateX(+${moveLeft})`;
  }

  getTransformStyle(): string {
    // Annahme: Jeder Kommentar ist 100% der Breite des Containers
    const offset = this.currentIndex * 100;
    return `translateX(-${offset}%)`;
  }
}
