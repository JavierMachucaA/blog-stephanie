import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu.component';
import { SharedModule } from './shared/shared.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { HomeComponent } from './components/home/home.component';
// import { BlogComponent } from './components/blog/blog.component';
import { LoginComponent } from './compontents/login/login.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {NgxLocalStorageModule} from 'ngx-localstorage';
import { HomeComponent } from './compontents/home/home.component';
import { BlogComponent } from './compontents/blog/blog.component';
import { AuthenticationService } from './services/authservice.service';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

export function getToken(): string {
  let a = JSON.parse(localStorage.getItem('session')) ;
  return a ? a.token : null;
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    BlogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    NgxLocalStorageModule.forRoot(),
    JwtModule.forRoot({
      config: {
          tokenGetter: getToken
      }
    })
  ],
  providers: [
    AuthenticationService,
    JwtHelperService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


