import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';

declare function greet(): void;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form: FormGroup = this.fb.group({
    from_name:'',
    from_email:'',
    to_name:'Admin',
    subject:'',   
    message:'',
    reply_to:''

  })

  constructor(private fb: FormBuilder) { 
   
  }
  async send(){
    emailjs.init('D5Mgqxw8EFkkGA4PA');
    let response= await emailjs.send("service_7z2fyw1","template_xkfeuyk",{
      from_name: this.form.value.from_name,
      from_email:this.form.value.from_email,
      to_name:this.form.value.to_name,
      subject:this.form.value.subject,
      message: this.form.value.message,
      reply_to: "jairameshiyya@gmail.com",
      });
     alert("Message sent successfully");
     this.form.reset();
  }
  ngOnInit(): void {
  }

}
