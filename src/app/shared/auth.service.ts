import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/auth";
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: User;
  loginState: boolean = false;
  loginSubject = new BehaviorSubject(false);

  constructor(private firebaseAuth : AngularFireAuth,
              private router: Router) {
    // The function of listening to the user's authorization state, setting the authorization state, or vice versa
    this.firebaseAuth.authState.subscribe((user: User) => {
      if (user) {
        this.userData = user;
        this.loginState = true;
        this.loginSubject.next(true);
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else {
        localStorage.removeItem('user');
        this.loginSubject.next(false);
      }
    }, error => {
      console.log(error);
    });
  }

  // User logout function
  logout(){
    this.firebaseAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['home']);
      this.loginSubject.next(false);
      this.loginState = false;
    });
  }
}
