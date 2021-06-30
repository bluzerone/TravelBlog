import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(public router: Router,
              public authService: AuthService) { }

  ngOnInit(): void {
  }

  onSignOut(){
    this.router.navigate(['/home']);
    this.authService.loginState = false;
  }

}
