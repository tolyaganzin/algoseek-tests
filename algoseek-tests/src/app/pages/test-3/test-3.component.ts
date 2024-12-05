import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-test-3',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './test-3.component.html',
  styleUrl: './test-3.component.css'
})
export class Test3Component {

  // slider data
  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  // slider config
  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  sliderData: {top:string, h1: string}[] =[
    {
      top: "Math is neat, data is messy.",
      h1: "Enjoy math, ",
    },
    {
      top: "Trading is exciting, data is grinding.",
      h1: "Enjoy trading, "
    },
    {
      top: "Coding is logical, data is empirical.",
      h1: "Enjoy coding, "
    }
  ] 

  statistics: {header: string, count: string, subHeader: string}[] = [
    {header: "Subscribed by", count: "550+", subHeader: "INSTITUTIONS"},
    {header: "Including", count: "200+", subHeader: "DATASETS"},
    {header: "Data total", count: "3,000+", subHeader: "TERABYTES"},
    {header: "Total live-trading AUM", count: "$350+", subHeader: "BILLION"}
  ]
}
