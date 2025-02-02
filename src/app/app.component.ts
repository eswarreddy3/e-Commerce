import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
