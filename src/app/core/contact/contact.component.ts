import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

declare function greet(): void;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form: FormGroup;
  submitted = false;
  

  constructor(private fb: FormBuilder) { 
   
  }
  get f() { return this.form.controls; }
  async send(formvalue: any){
    this.submitted = true;
    if (this.form.invalid) {
         return;
  }
  else{
    console.log("form value", formvalue)
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
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      from_name:['',Validators.required],
      from_email:['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      to_name:'Admin',
      subject:['',Validators.required],
      message:['',Validators.required],
      reply_to:''
  
    })
  }

}
