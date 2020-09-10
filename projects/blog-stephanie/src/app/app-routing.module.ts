import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardService } from './services/authguard.service';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { LoginComponent } from './components/login/login.component';
import { AdminModule } from './components/admin/admin.module';
import { AdminBlogComponent } from './components/admin/admin-blog/admin-blog.component';

const routes: Routes = [
  { path: '**', redirectTo: 'home' , pathMatch:'full'},
  { path: 'home', component: HomeComponent,  },
  { path: 'login', component: LoginComponent },
  { path: 'blog', component: BlogComponent, canActivate: [AuthguardService]  },
  { path: 'admin', component: AdminModule, canActivate: [AuthguardService]  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
