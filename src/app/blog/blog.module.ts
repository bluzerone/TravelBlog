import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import {BlogRoutingModule} from "./blog-routing.module";
import {RouterModule} from "@angular/router";
import {LoggedInGuard} from "ngx-auth-firebaseui";
import { PostComponent } from './post/post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { EditPostComponent } from './edit-post/edit-post.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import {NgxPaginationModule} from "ngx-pagination";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import { SwiperModule } from 'swiper/angular';
import { TruncateModule } from 'ng2-truncate';


@NgModule({
  declarations: [
    BlogListComponent,
    PostComponent,
    PostComponent,
    CreatePostComponent,
    EditPostComponent,
    MyPostsComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    NgxPaginationModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    SwiperModule,
    TruncateModule
  ],
  providers: [LoggedInGuard]
})
export class BlogModule { }
