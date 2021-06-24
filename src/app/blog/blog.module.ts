import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog/blog.component';
import {BlogRoutingModule} from "./blog-routing.module";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {LoggedInGuard} from "ngx-auth-firebaseui";



@NgModule({
  declarations: [
    BlogListComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BlogRoutingModule,
    RouterModule
  ],
  providers: [LoggedInGuard]
})
export class BlogModule { }
