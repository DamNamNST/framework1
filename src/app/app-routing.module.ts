import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsComponent } from './components/products/products.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileFormComponent } from './components/user-profile-form/user-profile-form.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { ClientComponent } from './layouts/client/client.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DetailProjectComponent } from './pages/detail-project/detail-project.component';
import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './pages/work/work.component';
import { AdminGuard } from './services/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'blog', component: BlogComponent },
      {
        path: 'work',
        children: [
          { path: '', component: WorkComponent },
          { path: ':id', component: DetailProjectComponent },
        ],
      },
    ],
  },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    component: AdminComponent,
    children: [
      {
        path: 'products',
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: ProductsComponent },
          { path: 'add', component: ProductFormComponent },
          { path: ':id', component: ProductDetailComponent },
          { path: 'edit/:id', component: ProductFormComponent },
        ],
      },
      {
        path: 'posts',
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: PostListComponent },
          { path: 'add', component: PostFormComponent },
          { path: 'edit/:id', component: PostFormComponent },
        ],
      },
      {
        path: 'projects',
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: ProjectListComponent },
          { path: 'add', component: ProjectFormComponent },
          { path: 'edit/:id', component: ProjectFormComponent },
        ],
      },
      // {
      //   path: "categoryPosts", children: [
      //     { path: "", redirectTo: 'list', pathMatch: 'full' },
      //     { path: 'list', component: CategoryPostListComponent },
      //     { path: "add", component: CategoryPostFormComponent },
      //     { path: "edit/:id", component: CategoryPostFormComponent },
      //   ]
      // },
      // {
      //   path: "categoryProjects", children: [
      //     { path: "", redirectTo: 'list', pathMatch: 'full' },
      //     { path: 'list', component: CategoryProjectsListComponent },
      //     { path: "add", component: CategoryProjectsFormComponent },
      //     { path: "edit/:id", component: CategoryProjectsFormComponent },
      //   ]
      // },
      {
        path: 'userProfile',
        children: [
          { path: '', redirectTo: 'edit/:id', pathMatch: 'full' },
          { path: 'edit/:id', component: UserProfileFormComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
