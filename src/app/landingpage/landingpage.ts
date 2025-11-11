import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../shared/navbar/navbar';

@Component({
  selector: 'app-landingpage',
  imports: [
    CommonModule,
    Navbar,
  ],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss',
})
export class Landingpage {

}
