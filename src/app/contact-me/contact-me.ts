import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslatePipe } from '@ngx-translate/core';
import { MailOverlay } from '../overlays/mail-overlay/mail-overlay';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [
    MailOverlay,
    CommonModule,
    FormsModule,
    TranslatePipe
  ],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
export class ContactMe {

  http = inject(HttpClient)

  contactData ={
    name: "",
    email: "",
    message: "",
    privacy: ""
  }

  mailTest = false;
  showMailOverlay: boolean = false;

  showOverlay(){
    if(!this.showMailOverlay){
      this.showMailOverlay = true;
      document.body.classList.add('no-scroll');
      console.log('overlay-mail')
    }

  }

  post = {
    endPoint: 'https://raphael-zwick.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm){
    if(ngForm.valid){
      this.sendMail(ngForm)
      this.showOverlay()
    }else{
      this.showOverlay()
      Object.values(ngForm.controls).forEach(control =>{
        control.markAsTouched();
      });
      console.log("Validierung fehlgeschlagen- fehler sollten jetzt sichbar sein ")
    }
    //if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
    //  this.http.post(this.post.endPoint, this.post.body(this.contactData))
    //  .subscribe({
    //    next: (response) => {
//
    //      ngForm.resetForm();
    //    },
    //    error: (error) => {
    //      console.error(error);
    //    },
    //    complete: () => console.info('send post complete'),
    //  });
    //} else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
//
    //  ngForm.resetForm();
    //}
    
  }

  sendMail( ngForm :NgForm){
  if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {

          ngForm.resetForm();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
      //this.showOverlay()
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
}

 

}

