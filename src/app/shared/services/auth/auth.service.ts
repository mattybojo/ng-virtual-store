import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userData: firebase.User | null = null;

  constructor(private db: AngularFirestore, private auth: AngularFireAuth, private router: Router) {
    this.auth.authState.subscribe((user: firebase.User | null) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else {
        this.userData = null;
        localStorage.removeItem('user');
      }
    })
  }

  setUserData(user: firebase.User | null): void {
    if (user) {
      const userRef: AngularFirestoreDocument<any> = this.db.doc(`users/${user.uid}`);
      const userInfo: User = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoUrl: user.photoURL,
        emailVerified: user.emailVerified
      }
      userRef.set(userInfo, {
        merge: true
      })
    }
  }

  isLoggedIn(): boolean {
    return !!this.userData || !!localStorage.getItem('user');
  }

  login(authResult: firebase.auth.UserCredential): void {
    this.setUserData(authResult.user);
    this.router.navigateByUrl('/');
  }

  logout(): void {
    this.auth.signOut();
  }
}
