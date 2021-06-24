import { NgModule } from '@angular/core';
import {environment} from "../environments/environment";
import { AppRoutingModule } from './app-routing.module';


import {LoggedInGuard, NgxAuthFirebaseUIModule} from "ngx-auth-firebaseui";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {SharedModule} from "./shared/shared.module";
import {BlogModule} from "./blog/blog.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import {LoginComponent} from "./login/login.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    UserComponent,
    LoginComponent

  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    BlogModule,
    BrowserAnimationsModule,
    BrowserModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebaseConfig, () => {return 'Travel Blog'}, {
      authGuardFallbackURL: '/home',
      authGuardLoggedInURL: '/bloglist',
    })
  ],
  providers: [NgxAuthFirebaseUIModule, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
