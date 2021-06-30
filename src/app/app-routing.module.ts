import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoggedInGuard} from "ngx-auth-firebaseui";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {UserComponent} from "./user/user.component";

let routes: Routes;
routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent,
    data: {animationState: 'One'}
  },
  {
    path: 'login', component: LoginComponent,
    data: {animationState: 'Two'}
  },
  {
    path: 'register', component: RegisterComponent,
    data: {animationState: 'Three'}
  },
  {
    path: 'user', component: UserComponent,
    data: {animationState: 'Four'},
    canActivate: [LoggedInGuard]
  },
  {path: 'bloglist' ,
    loadChildren: () => import('./blog/blog.module').then((m => m.BlogModule)),
    canActivate: [LoggedInGuard],
    data: {animationState: 'Five'}
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
