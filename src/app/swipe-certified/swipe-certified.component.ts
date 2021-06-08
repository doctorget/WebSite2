import { Component, AfterViewInit, Input, ElementRef, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Swiper, SwiperOptions } from 'swiper';


@Component({
  selector: 'swipe-certified',
  templateUrl: './swipe-certified.component.html',
  styleUrls: ['./swipe-certified.component.scss']
})

export class SwipeCertifiedComponent implements OnInit {

  constructor(
    private elementRef: ElementRef
  ) { }
  @Input('data') data: any;
  configCustom: SwiperConfigInterface = {
    direction: 'horizontal',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    centeredSlides: true,
    spaceBetween: 30,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    slideToClickedSlide: true,
  }

  public swiper2 = new Swiper('.swiper-container .product-photos-side', this.configCustom);
  config: SwiperConfigInterface =
    {
      direction: 'horizontal',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      centeredSlides: true,
      spaceBetween: 30,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      slideToClickedSlide: true,
      parallax: true,
      controller:{
        control: this.swiper2
      }
    }
    public swiper = new Swiper('.product-photo-main .swiper-container', this.config)
  

  ngOnInit(): void {



    

  }
  ngAfterViewInit(): void {
    // this.swiperView.params.control = this.swiper;
    // this.swiper.params.control = this.swiperView;
  }

}
