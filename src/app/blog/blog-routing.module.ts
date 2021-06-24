import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogListComponent} from "./blog-list/blog-list.component";
import {BlogComponent} from "./blog/blog.component";


let routes: Routes;
routes = [
  {path: '', component: BlogListComponent},
  {path: 'blog/:id', component: BlogComponent}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
