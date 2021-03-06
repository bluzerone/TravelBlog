import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AuthService} from "../shared/auth.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  $loginSubject: Observable<Boolean>;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.$loginSubject = this.authService.loginSubject;
  }

  ngOnDestroy() {
  }


}
