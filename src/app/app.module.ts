import { NgModule } from '@angular/core';
import {environment} from "../environments/environment";
import { AppRoutingModule } from './app-routing.module';


import {LoggedInGuard, NgxAuthFirebaseUIModule} from "ngx-auth-firebaseui";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {BlogModule} from "./blog/blog.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import {LoginComponent} from "./login/login.component";
import {AngularFireModule} from "@angular/fire";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent

  ],
  imports: [
    AppRoutingModule,
    BlogModule,
    BrowserAnimationsModule,
    BrowserModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgxAuthFirebaseUIModule.forRoot(environment.firebaseConfig, () => {
      return 'Travel Blog'
    }, {
      authGuardFallbackURL: '/home',
      authGuardLoggedInURL: '/bloglist',
    }),
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [NgxAuthFirebaseUIModule, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
