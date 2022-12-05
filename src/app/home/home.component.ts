import { Component, OnInit } from '@angular/core';
import { SlideInterface } from '../image-slider/types/slide.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides: SlideInterface[] = [
    {url: 'src/assets/images/IMG_0349.jpg', title: "House"},
    {url: 'src/assets/images/IMG_0229.jpg', title: "Patio"},
    {url: 'src/assets/images/imagejpeg_0.jpg', title: "Backyard"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
