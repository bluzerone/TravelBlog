import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../shared/auth.service";
import {BaseService} from "../../shared/base.service";
import {Subscription} from "rxjs";
import {Post} from "../../shared/post";

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss']
})
export class MyPostsComponent implements OnInit, OnDestroy {
  uid: String;
  postsSubscription: Subscription;
  postList: Post[];
  totalLength: number;
  page: number = 1;

  constructor(public authService: AuthService,
              public baseService: BaseService) { }

  ngOnInit(): void {
    // Get an array of user posts by their uid
    this.uid = this.authService.userData?.uid;
    this.postsSubscription = this.baseService.getPostsByUid(this.uid).subscribe(data => {
      this.postList =  data.map( e =>  {
        return {
          ...e.payload.doc.data() as {}
        } as Post;
      });
    });
  }
   ngOnDestroy() {
     this.postsSubscription ? this.postsSubscription.unsubscribe() : false
   }

}
