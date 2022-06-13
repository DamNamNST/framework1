import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './pages/products/products.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/login/login.component';
import { ClientComponent } from './layouts/client/client.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { AdminContentComponent } from './layouts/admin-content/admin-content.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzMessageModule } from 'ng-zorro-antd/message';
import { CKEditorModule } from 'ckeditor4-angular';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductDetailComponent,
    UserComponent,
    LoginComponent,
    ClientComponent,
    AdminComponent,
    AdminContentComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CKEditorModule,

    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzInputModule,
    NzButtonModule,
    NzTableModule,
    NzGridModule,
    NzIconModule,
    NzDropDownModule,
    NzAlertModule,
    NzBreadCrumbModule,
    NzUploadModule,
    NzAvatarModule,
    NzSelectModule,
    NzMessageModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
