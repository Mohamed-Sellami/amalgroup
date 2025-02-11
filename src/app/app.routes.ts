import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { ClientsComponent } from './pages/clients/clients.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // Layout component wraps all pages
    children: [
      { path: '', component: HomeComponent }, // Default route (Home page)
      { path: 'about', component: AboutComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'projects', component: ProjectsComponent }, // products page
      { path: 'contact', component: ContactComponent }, // Contact page
      { path: 'clients', component: ClientsComponent },
    ],
  },
  { path: '**', redirectTo: '' }, // Redirect to Home page if route doesn't match
];
