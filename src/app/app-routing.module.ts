import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './layouts/client/client.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'work', component: WorkComponent },
    ],
  },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  {
    path: "admin", canActivate: [AdminGuard], component: AdminComponent,
    children: [
      {
        path: "products", children: [
          { path: "", redirectTo: 'list', pathMatch: 'full' },
          { path: '?_name=:search', component: ProductEditComponent },
          { path: 'list', component: ProductComponent },
          { path: "add", component: ProductFormComponent },
          { path: ":id", component: ProductDetailComponent },
          { path: "edit/:id", component: ProductFormComponent },
        ]
      },
      {
        path: "posts", children: [
          { path: "", redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: PostListComponent },
          { path: "add", component: PostFormComponent },
          { path: "edit/:id", component: PostFormComponent },
        ]
      },
      {
        path: "projects", children: [
          { path: "", redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: ProjectListComponent },
          { path: "add", component: ProjectFormComponent },
          { path: "edit/:id", component: ProjectFormComponent },
        ]
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
