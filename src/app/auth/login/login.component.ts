import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'ngvs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) { }

  onSigninSuccess($event: FirebaseUISignInSuccessWithAuthResult): void {
    this.authService.login($event.authResult);
  }

  onSigninFailure($event: FirebaseUISignInFailure): void { }
}
