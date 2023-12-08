import { Component, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { TweenMax, Power2, TimelineLite } from 'gsap';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit, OnInit {

  myForm: FormGroup | any ;

;
emailjs:any;


  constructor(private el: ElementRef,private http: HttpClient, private fb: FormBuilder, private toaster:ToastrService)
   {
    this.initializeForm()
   }


  ngOnInit(): void {
    this.initializeForm()
    // this.onSubmit()
    // this.sendEmail()
  }

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



//  this.formGroup

initializeForm(): void {
  this.myForm = this.fb.group({
    toName:  new FormControl( ['',
    //  Validators.required
    ]), // Example field with required validation
    // fromName: ['', Validators.required],
    fromEmail: new FormControl( ['',
    //  Validators.required
    ]),
    
   
    message: new FormControl( ['',
    //  Validators.required
    ]),
    phoneno:new FormControl( ['',
    //  Validators.required
    ])
})
}


get f(): { [key: string]: AbstractControl } {
  console.log(this.myForm)
  return this.myForm.controls;
}


onSubmit(): void {
  const templateParams = {
    to_name: this.myForm.value.toName,
    from_email: this.myForm.value.fromEmail,
    phoneno: this.myForm.value.phoneno,
    message: this.myForm.value.message
};
  if (this.myForm.valid) {
    const templateParams = this.myForm.value;
    console.log(this.myForm.value)
    // Call your email sending service passing formData
    // For example: this.emailService.sendEmail(formData.toName, formData.fromName, ...)
  
  
  }
  emailjs.send('service_0q7yc3a','template_qm22pv4', templateParams, 'UXMQMKDA99YgnOre5')
  .then((response) => {
    this.toaster.success('SUCCESS!');
     console.log('SUCCESS!', response.status, response.text);
     this.myForm.reset();
  }, (err) => {
     console.log('FAILED...', err);
  });

}









// async sendEmail() {
//   this.emailjs?.init('UXMQMKDA99YgnOre5')
//  const response = await this.emailjs?.send( 'service_0q7yc3a','template_qm22pv4', {
//     to_name: this.myForm.value.toName,
//     from_email: this.myForm.value.fromEmail,
//     phoneno: this.myForm.value.phoneno,
//     message: this.myForm.value.message
//    }) ;
//    alert('messeage send')
//     // service_id: 'service_0q7yc3a',
//     // template_id: 'template_qm22pv4',
//     // // user_id: 'YOUR_EMAILJS_USER_ID', // Replace this with your EmailJS user ID
//     // template_params: {
//     //   to_name: toName,
//     //   from_name: fromName,
//     //   from_email: fromEmail,
//     //   phoneno: phoneno,
//     //   message: message
//     // }
     
//   };

  // return this.http.post(this.emailJSEndpoint, emailData);
}


  



function f(): any {
  throw new Error('Function not implemented.');
}

