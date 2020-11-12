import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.scss']
})
export class AdminBlogComponent implements OnInit {

  constructor(private _router:Router, public translate: TranslateService) {
  }

  ngOnInit(): void {
  }

  public navigate(route:string[]){
    route.unshift('admin');
    this._router.navigate(route);
  }

}
