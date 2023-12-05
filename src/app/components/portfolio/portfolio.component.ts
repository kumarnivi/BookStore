import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import Swiper from 'swiper';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
  
  
  isScrolled:any

constructor(private el:ElementRef,private router: Router,private renderer: Renderer2,){}

  ngOnInit() {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      // Anchor placement:
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });



    new Swiper('.clients-slider', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 60
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 80
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 120
        }
      }
    });
  }


  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    const navbar = this.el.nativeElement.querySelector('.top-nav'); 
    if (window.pageYOffset >= 50) {
      this.renderer.setStyle(navbar, 'background', '#212529');
      this.renderer.setStyle(navbar, 'color', 'black'); 
      this.renderer.setStyle(navbar, 'box-shadow', ' 0 0 50px 10px #adadad2d');
  
  
    } else {
      this.renderer.removeStyle(navbar, 'background');
      this.renderer.removeStyle(navbar, 'color'); 
      this.renderer.removeStyle(navbar, 'box-shadow');

     
    }
  }
  

  
  }
  

