import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsComponent } from './sections/sections.component';
import { PublicationsComponent } from './publications/publications.component';
import { OthersComponent } from './others/others.component';
import { AdminRoutingModule } from './admin-routes';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';


@NgModule({
  declarations: [AdminBlogComponent,SectionsComponent, PublicationsComponent, OthersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
})
export class AdminModule { }
