import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocalStorageService } from 'ngx-localstorage';
import { UserSessionDto } from '../../commons/dto/user-session.dto';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationService } from '../../services/authservice.service';
import { Router } from '@angular/router';
import { first, map } from 'rxjs/operators';
import { Session, error } from 'protractor';
import { SessionOptions } from 'http2';
import { MenuComponent } from '../../layout/menu/menu.component';
import { ShareService } from '../../services/share.service';
import { from } from 'rxjs';

/**
 * Validar que solo se pueda acceder al componente si y solo si 
 * existe usuario en el authservice
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public sessionUp : UserSessionDto;

  public gapiSetup: boolean = false; // marks if the gapi library has been loaded
  public authInstance: gapi.auth2.GoogleAuth;
  public error: string;
  public user: string;
  public wordpass: string;


  constructor(
    private _storageService: LocalStorageService, 
    private _authservice: AuthenticationService, 
    private _router: Router,
    private _sharedService : ShareService) {
      this._authservice.currentUser.subscribe(
        (s) => {
          if (s) {
            console.log('this.sessionup', this.sessionUp); 
            this._router.navigate(['blog'])
          }
        },
        (error) => console.error(error)  
      );
  }

  async ngOnInit() {
    //if (await this._authservice.checkIfUserAuthenticated() && this._authservice.currentUserValue) {
      this.sessionUp = this._authservice.currentUserValue;
    //}
  }

  public async authenticate(isGoogle: boolean){
    await this._authservice.authenticate(isGoogle, this.user, this.wordpass);
  }

  /*async initGoogleAuth(): Promise<void> {
    //  Create a new Promise where the resolve function is the callback
    // passed to gapi.load
    /*const pload = new Promise((resolve) => {
      gapi.load('auth2', resolve);
    });

    // When the first promise resolves, it means we have gapi loaded
    // and that we can call gapi.init
    return pload.then(async () => {
      await gapi.auth2
        .init({ client_id: '662313462599-ml46rq28kf5c5kpnv8iqjijjq08ipjen.apps.googleusercontent.com' })
        .then(auth => {
          this.gapiSetup = true;
          this.authInstance = auth;
        });
    });

  }*/

  /*async authenticate(): Promise<gapi.auth2.GoogleUser> {
    // Initialize gapi if not done yet
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }

    // Resolve or reject signin Promise
    return new Promise(async () => {
      await this.authInstance.signIn().then(
        user => this.user = user,
        error => this.error = error);
    });
  }

  async checkIfUserAuthenticated(): Promise<boolean> {
    // Initialize gapi if not done yet
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }

    return this.authInstance.isSignedIn.get();
  }*/

  /*public async initGoogleAuth() {
    await this._authservice.getPromiseToObserveLogin().subscribe(()=>{
      this.sessionUp = this._authservice.currentUserValue;
      console.log('this.sessionUp', this.sessionUp);
      this._authservice.sessionOn();
      // redireccionar
    });
  }*/

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("login");
  }

}
