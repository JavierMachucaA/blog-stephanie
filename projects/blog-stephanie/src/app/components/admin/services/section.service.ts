import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-localstorage';
import { environment } from 'projects/blog-stephanie/src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor( 
    private _http:HttpClient) { }

  public getSections(){
     // return get
  }
}
