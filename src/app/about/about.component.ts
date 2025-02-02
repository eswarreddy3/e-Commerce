import { trigger, transition, style, animate } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('600ms ease-in', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
    ]),
    trigger('slideFromLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('600ms ease-in', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
    ]),
  ],
})

export class AboutComponent implements OnInit {

  navbarOpen = false;
  isMobile = false;

  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:resize', ['$event'])
    onResize(event: Event) {
      this.checkMobile();
    }
  
    checkMobile() {
      this.isMobile = window.innerWidth < 769;
      this.navbarOpen = !this.isMobile;  // Automatically adjust navbarOpen based on screen size
    }
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    }

}
