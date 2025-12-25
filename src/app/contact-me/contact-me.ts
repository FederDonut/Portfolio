import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [
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

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm){
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
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
    
  }


}
