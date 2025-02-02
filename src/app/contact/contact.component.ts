import { Component, OnInit } from '@angular/core';
import emailjs, { init } from 'emailjs-com';
import { NgZone } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact = {
    name: '',
    email: '',
    message: ''
  };

  phoneNumber = '9849397300'; // Replace with your actual WhatsApp-enabled phone number
  message = 'Hello, I would like more information about your products.';
  encodedMessage = encodeURIComponent(this.message);

  whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${this.encodedMessage}`;


  constructor() { }

  onSubmit() {
    // Handle the form submission logic here
    console.log("Form Submitted!");
  }

  ngOnInit(): void {
  }
  
}
