import { Routes, RouterModule } from "@angular/router";
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { SectionsComponent } from './sections/sections.component';
import { PublicationsComponent } from './publications/publications.component';
import { OthersComponent } from './others/others.component';
import { NgModule } from '@angular/core';

const routes : Routes = [
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
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class AdminRoutingModule {}
