import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FirebaseUIModule } from 'firebaseui-angular';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { firebaseUiConfig } from 'src/app/config';
import { SharedModule } from './shared/shared.module';

const firebaseUiAuthConfig: firebaseui.auth.Config = firebaseUiConfig;

@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'virtual-store'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
