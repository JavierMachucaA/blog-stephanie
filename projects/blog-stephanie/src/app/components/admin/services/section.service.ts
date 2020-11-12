import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-localstorage';
import { environment } from 'projects/blog-stephanie/src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpClientService } from '../../../services/http.service';
import { Observable, Subscribable } from 'rxjs';
import { Section } from '../../../commons/dto/section.dto';
import { Constants } from '../util/constants.util';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private API = environment.urlBackend+Constants.SECTION_SERVICE;
  constructor( 
    private _http:HttpClientService) { }

  public getSections():Subscribable<Section[]>{
    return this._http.get(this.API);
  }
}
