import { Routes, RouterModule } from "@angular/router";
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { SectionsComponent } from './sections/sections.component';
import { PublicationsComponent } from './publications/publications.component';
import { OthersComponent } from './others/others.component';
import { NgModule } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { InformationComponent } from './information/information.component';

const routes : Routes = [
    { path: '', redirectTo: 'admin' , pathMatch:'full'},
    {
        path: 'admin', 
        component: AdminBlogComponent, 
        children : [
            {
                path : 'sections', component : SectionsComponent,
            },
            {
                path : 'publications', component : PublicationsComponent,
            },
            {
                path : 'others', component : OthersComponent,
            },
            {
                path : 'users', component : UsersComponent,
            },
            {
                path : 'information', component : InformationComponent,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class AdminRoutingModule {}
