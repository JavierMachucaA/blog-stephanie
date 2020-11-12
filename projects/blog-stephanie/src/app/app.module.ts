import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu.component';
import { SharedModule } from './shared/shared.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { HomeComponent } from './components/home/home.component';
// import { BlogComponent } from './components/blog/blog.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {NgxLocalStorageModule} from 'ngx-localstorage';

import { AuthenticationService } from './services/authservice.service';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { AdminBlogComponent } from './components/admin/admin-blog/admin-blog.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { LoginComponent } from './components/login/login.component';
import { AdminModule } from './components/admin/admin.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function getToken(): string {
  let a = JSON.parse(localStorage.getItem('token')) ;
  return a ? a.token : null;
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    BlogComponent,
    LoginComponent,
  ],
  imports: [
    // administrative module
    AdminModule, 
    
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
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    NgbModule,
  ],
  providers: [
    AuthenticationService,
    JwtHelperService,
  ],
  bootstrap: [AppComponent],
  exports:[TranslateModule,]
})
export class AppModule { 
  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['en']);
    translate.setDefaultLang('en');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


