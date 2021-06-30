import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {Router} from "@angular/router";
import {User} from "../shared/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService,
              public router: Router) { }

  ngOnInit(): void {
  }

  // A function that, when a user logs in to the system, adds a user data object to localStorage and parsing a value to loginSubject indicating that the user is authorized
  onSignin(event: User){
    localStorage.setItem('user', JSON.stringify(event));
    this.router.navigate(['home']);
    this.authService.loginSubject.next(true);
  }

}
