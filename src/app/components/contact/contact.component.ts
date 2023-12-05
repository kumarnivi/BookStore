import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { TweenMax, Power2, TimelineLite } from 'gsap';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const boxElement = this.el.nativeElement.querySelector('.box');

    // GSAP animation
    TweenMax.from(boxElement, 1, { opacity: 0, x: -100, ease: Power2.easeOut });
 
  // GSAP animation
  TweenMax.to(boxElement, {
    borderRadius: 50,
    x: 100,
    scale: 1.8,
    duration: 1,
    ease: Power2.easeOut
  });

  const textElement = this.el.nativeElement.querySelector('.text');

  // SplitText
  const split = new SplitText(textElement);

  // GSAP animation
  gsap.to(split.chars, {
    x: "-40",
    ease: Power2.easeOut,
    duration:0.7,
    yoyo: true,
    stagger: 0.08,
    repeat: -1
  });


  gsap.to(Element, {duration: 1, scrambleText: "THIS IS NEW TEXT"});//or customize things:

gsap.to(Element, {
  duration: 1, 
  scrambleText: {
    text: "THIS IS NEW TEXT", 
    chars: "XO", 
    revealDelay: 0.5, 
    speed: 0.3, 
    newClass: "myClass"
  }
});
}

 
  }



