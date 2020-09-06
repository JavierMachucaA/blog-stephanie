import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AuthenticationService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private subject = new Subject<any>();

  constructor(private _authservice: AuthenticationService) { }
  
  sessionOn() {
    console.log('sessionOn');
    
    this.subject.next(this._authservice.currentUserValue);
  }

  getSessionOn(): Observable<any> {
    console.log('getSessionOn');
    
    return this.subject.asObservable();
  }
}
