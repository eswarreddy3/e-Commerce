import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',  // Adjusts the scroll position on navigation
    anchorScrolling: 'enabled',  // Enables scrolling to anchor elements
    scrollOffset: [0, 64]  // [x, y] - Adjust this if there is a fixed header or offset
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
