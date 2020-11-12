import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsComponent } from './sections/sections.component';
import { PublicationsComponent } from './publications/publications.component';
import { OthersComponent } from './others/others.component';
import { AdminRoutingModule } from './admin-routes';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { InformationComponent } from './information/information.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    AdminBlogComponent, 
    SectionsComponent, 
    PublicationsComponent, 
    OthersComponent, 
    UsersComponent, 
    InformationComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    NgbModule,
    TranslateModule
  ],
  providers: [ HttpClientModule,],
})
export class AdminModule {
 }
