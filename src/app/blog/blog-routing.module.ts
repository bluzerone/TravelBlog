import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogListComponent} from "./blog-list/blog-list.component";
import {PostComponent} from "./post/post.component";
import {CreatePostComponent} from "./create-post/create-post.component";
import {EditPostComponent} from "./edit-post/edit-post.component";
import {MyPostsComponent} from "./my-posts/my-posts.component";

let routes: Routes;

routes = [
  {path: '', component: BlogListComponent},
  {path: 'post/:id', component: PostComponent,
    data: {animationState: 'One'}},
  {path: 'edit/:id', component: EditPostComponent,
    data: {animationState: 'Two'}},
  {path: 'create', component: CreatePostComponent,
    data: {animationState: 'Three'}},
  {path: 'my-posts/:id', component: MyPostsComponent,
    data: {animationState: 'Four'}},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
