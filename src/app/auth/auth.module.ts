import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { FirebaseUIModule } from 'firebaseui-angular';
import { firebaseUiConfig } from '../config';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

const firebaseUiAuthConfig: firebaseui.auth.Config = firebaseUiConfig;

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FirebaseUIModule.forFeature(firebaseUiAuthConfig),
  ]
})
export class AuthModule { }
