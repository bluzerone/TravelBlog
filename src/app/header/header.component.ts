import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  $loginSubject: Observable<Boolean>;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.$loginSubject = this.authService.loginSubject;
  }

}
