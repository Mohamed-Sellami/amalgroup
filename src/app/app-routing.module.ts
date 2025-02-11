import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LayoutComponent } from './layout/layout.component'; // Import LayoutComponent

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // Use LayoutComponent as the parent
    children: [
      { path: '', component: HomeComponent }, // HomeComponent is a child of LayoutComponent
      { path: 'about', component: AboutComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'contact', component: ContactComponent },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirect to home for unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
