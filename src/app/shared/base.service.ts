import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {NotificationService} from "./notification.service";
import {HttpClient} from "@angular/common/http";
import {Post} from "./post";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private afs: AngularFirestore,
              private notificationService: NotificationService,
              private http: HttpClient,
              private router: Router) { }


  // Function that returns Observable of all publications
  getPosts(){
    return this.afs.collection('posts').snapshotChanges();
  }

  // Function that returns Observable of publications by user uid
  getPostsByUid(uid: any){
    return this.afs.collection('posts', ref => ref.where('uid', '==', uid)).snapshotChanges();
  }

  // Function that returns Observable of publications by post id
  getPostsById(id: string){
    return this.afs.collection('posts').doc(id).valueChanges();
  }

  // A function that deletes a post by its id and opens a snack bar with a notification
  deletePost(uid: string, id: string) {
    this.afs.collection('posts', ref => ref.where('uid', '==', uid)).doc(id).delete();
    this.notificationService.openSnackBar('post successfully deleted!', "right", "bottom", "success-dialog-red");
  };

  // The function for adding a new post, accepting a data object from a component and opens a snack bar with a notification
  setNewPost(data: Post) {
    this.afs.collection('posts').doc(data.id).set(data);
    this.notificationService.openSnackBar('post successfully added!', "right", "bottom", "success-dialog-red");
    this.router.navigate(['bloglist'])
  }

  // Post editing function that accepts a data object from a component and opens a snack bar with a notification
  updateExistingPost(postId: string, value: Post){
    this.afs.collection('posts').doc(postId).set(value, {merge: true});
    this.notificationService.openSnackBar('post successfully edited!', "right", "bottom", "success-dialog-red");
  }

  // Function that returns Observable to get weather data
  getCurrentWeather(city: string){
    const apiKey = '6718ac3933ed4ed5b9e66dbbbd2c1c34';
    return this.http.get<Observable<any>>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  }

}
