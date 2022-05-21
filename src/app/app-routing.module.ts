import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ClientComponent } from './layouts/client/client.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', component: ClientComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
