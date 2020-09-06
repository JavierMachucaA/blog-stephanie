import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from, Subject } from 'rxjs';
import { UserSessionDto } from '../commons/dto/user-session.dto';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'ngx-localstorage';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<UserSessionDto> = new BehaviorSubject<UserSessionDto> (null);
  public currentUser: Observable<UserSessionDto>=  new Observable<UserSessionDto> (null);
  private userSesion : UserSessionDto;
  
  public gapiSetup: boolean = false; 
  public authInstance: gapi.auth2.GoogleAuth;
  public user: gapi.auth2.GoogleUser;
  public error: any;

  //temporal
  public readonly APIKEY = '662313462599-ml46rq28kf5c5kpnv8iqjijjq08ipjen.apps.googleusercontent.com';

  constructor(private http: HttpClient, private _storageService: LocalStorageService, private _jwtHelper: JwtHelperService) {
    this.currentUserSubject = new BehaviorSubject<UserSessionDto>(this.userSesion);
    this.currentUser = this.currentUserSubject.asObservable();
  }
  
  async ngOnInit() {
    if (await this.checkIfUserAuthenticated()) {
      this.user = this.authInstance.currentUser.get();
    }
  }

  async initGoogleAuth(): Promise<void> {
    //  Create a new Promise where the resolve function is the callback
    // passed to gapi.load
    const pload = new Promise((resolve) => {
      gapi.load('auth2', resolve);
    });

    // When the first promise resolves, it means we have gapi loaded
    // and that we can call gapi.init
    return pload.then(async () => {
      await gapi.auth2
        .init({ client_id: this.APIKEY })
        .then(auth => {
          this.gapiSetup = true;
          this.authInstance = auth;
        });
    });
  }

  async authenticate( isGoogle : boolean, user : string, wordpass : string): Promise<gapi.auth2.GoogleUser> {

    if (isGoogle) {
      // Initialize gapi if not done yet
      if (!this.gapiSetup) {
        await this.initGoogleAuth();
      }

      // Resolve or reject signin Promise
      return new Promise(async () => {
        await this.authInstance.signIn().then(
          user => this.captureUser(user),
          error => this.error = error);
      });
    } else {
      const token = 'tokentest'
      let userBean = new UserSessionDto(token, user, null, null, false, null);  
      //this.userSesion = userBean;
      this.currentUserSubject.next(userBean);
      localStorage.setItem('token',token);
    }
    
  }
  captureUser(user: gapi.auth2.GoogleUser): any {
    const userBasic = user.getBasicProfile();
    localStorage.setItem('token',user.getAuthResponse().access_token);
    let userBean = new UserSessionDto(user.getAuthResponse().access_token,userBasic.getEmail(),userBasic.getName(),userBasic.getFamilyName(),true,userBasic.getImageUrl());
    this.currentUserSubject.next(userBean);
    console.log(userBean);
    
  }

  public async checkIfUserAuthenticated(): Promise<boolean> {
    // mejorar despues el manejo de session
    if (localStorage.getItem('token')){
      return true;
    }
    // Initialize gapi if not done yet
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }

    return this.authInstance.isSignedIn.get();
  }

  public get currentUserValue(): UserSessionDto {
    return this.currentUserSubject.value;
}

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }
  
}
