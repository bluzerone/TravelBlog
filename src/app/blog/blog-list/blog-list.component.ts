import {Component, OnDestroy, OnInit} from '@angular/core';
import { DocumentChangeAction } from '@angular/fire/firestore/interfaces';
import {Subscription, throwError} from "rxjs";
import {AuthService} from "../../shared/auth.service";
import {BaseService} from "../../shared/base.service";
import {Post} from "../../shared/post";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit, OnDestroy {

  postSubscription: Subscription;
  totalLength: number;
  page: number = 1;
  postList: Post[];

  constructor(public baseService: BaseService,
              public authService: AuthService) { }

  ngOnInit(): void {
    // Get the list of posts
    this.postSubscription =  this.baseService.getPosts().subscribe((res) => {
      this.postList =  res.map( (e: DocumentChangeAction<unknown>) =>  {
        return {
          ...e.payload.doc.data() as {}
        } as Post;
      });
      // Set the length of the bookmarksList array to the totalLength variable.
      this.totalLength = this.postList.length;
    },error => {
      throwError(error);
    });

  }

  ngOnDestroy() {
    this.postSubscription ? this.postSubscription.unsubscribe() : false;
  }


}
