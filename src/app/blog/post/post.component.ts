import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription, throwError} from "rxjs";
import {BaseService} from "../../shared/base.service";
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {
  post: any;
  postSubscription: Subscription;
  weatherSubscription: Subscription;
  postId: string;
  weather: any;
  postPhoto: [] = [];
  showPhotoPreview: boolean = false;
  indexSlideChange: any;

  constructor(private route: ActivatedRoute,
              public baseService: BaseService,
              public authService: AuthService) {
    this.route.params.subscribe(params=> {
      this.postId = params['id']
    });
  }

  ngOnInit(): void {
    // A subscription that returns a post by id and assigns the resulting post to the "post" variable
    this.postSubscription = this.baseService.getPostsById(this.postId).subscribe(post => {
      this.post = post;
      // A subscription that returns a weather data object and assigns the result to the "weather" variable
      this.weatherSubscription =  this.baseService.getCurrentWeather(this.post.city).subscribe((w) => {
        this.weather = {
          ...w
        }
      }, error => {
        throwError(error)
      })
    }, error => {
      throwError(error)
    });
  }

  // A function that opens a photo view by index
  showPhoto(index){
    this.showPhotoPreview = true;
    this.indexSlideChange = index;
  }

  // Function to close the photo view
  hideFoto() {
    this.showPhotoPreview = false;
  }

  ngOnDestroy() {
    this.postSubscription ? this.postSubscription.unsubscribe() : false;
    this.weatherSubscription ? this.weatherSubscription.unsubscribe() : false;
  }


}
