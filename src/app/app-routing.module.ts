import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './layouts/client/client.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { AdminGuard } from './services/guards/admin.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'product', canActivate: [AdminGuard],
    children: [
      { path: '', redirectTo: 'list',pathMatch: 'full' },
      { path: 'list', component: ProductsComponent },
      { path: 'add', component: ProductAddComponent },
      { path: ':id', component: ProductDetailComponent },
      { path: 'edit/:id', component: ProductAddComponent }
      
    ],
  },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
