import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  navbarOpen = false;
  isMobile = false;
  

  images: string[] = [
    'assets/img1.jpeg',
    'assets/img2.jpg',
    'assets/img3.jpg',
    'assets/img4.jpg',
    'assets/img6.jpeg',
    'assets/img7.jpeg',
    'assets/img5.jpeg',
    'assets/img8.jpeg',
    'assets/img9.jpeg',
    'assets/img10.jpeg',
    'assets/img11.jpeg',
    'assets/img12.jpeg'
  ];

  currentImageIndex: number = 0;
  currentImage: string = this.images[this.currentImageIndex];
  intervalId: any;

  showAboutUs: boolean = true;
  @ViewChild('aboutUsSection', { static: false }) aboutUsSection!: ElementRef;

  showOurProducts: boolean = true; 
  @ViewChild('ourProductsSection', { static: false }) ourProductsSection!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }

  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 2000);
  }

  stopCarousel(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.currentImage = this.images[this.currentImageIndex];
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

  toggleAboutUs() {
    this.showAboutUs = !this.showAboutUs;  // Toggle visibility
    if (this.showAboutUs) {
      setTimeout(() => this.scrollToAboutUs(), 0);
    }
  }

  scrollToAboutUs() {
    this.aboutUsSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  toggleOurProducts() {
    this.showOurProducts = !this.showOurProducts;  // Toggle visibility
    if (this.showOurProducts) {
      setTimeout(() => this.scrollToOurProducts(), 0);
    }
  }

  scrollToOurProducts() {
    this.ourProductsSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}