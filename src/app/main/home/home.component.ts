import { Component } from '@angular/core';
import { CarouselResponsiveOptions } from 'primeng/carousel';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products: object[] = [];
  responsiveOptions: CarouselResponsiveOptions[] = [];

  constructor(){
    this.responsiveOptions = [
      {
          breakpoint: '1440px',
          numVisible: 4,
          numScroll: 1
      },
      {
          breakpoint: '1080px',
          numVisible: 3,
          numScroll: 1
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '640px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  this.products = [ {
    name:'MCX Spear 17inch',
    img:'/images/spear.jpg',
    price:3000
  },{
    name:'M1 Garand',
    img:'/images/garand.png',
    price:5000
  },{
    name:'Pancore JackHammer',
    img:'/images/jack.jpg',
    price:10000
  },{
    name:'S&S P226',
    img:'/images/p226.jpg',
    price:1000
  },{
    name:'Multiple Carbine',
    img:'/images/Firearms.jpg',
    price:5550
  },{
    name:'Walter Comp Gun',
    img:'/images/walther.webp',
    price:2000
  },
]
  }
}
