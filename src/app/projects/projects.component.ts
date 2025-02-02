import { trigger, transition, style, animate } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('slideFadeInRight', [
      transition(':enter', [
        style({ transform: 'translateX(50%)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
    ]),
  ],
})

export class ProjectsComponent implements OnInit {

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
