import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {BaseService} from "../../shared/base.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../shared/post";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit, OnDestroy {
  postSubscription: Subscription;
  postId: string;
  post: any;
  editPostForm: FormGroup = new FormGroup({
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    coverPhoto: new FormControl(''),
    photo: new FormArray([
    ])
  })

  constructor(private route: ActivatedRoute,
              private baseService: BaseService,
              private router: Router) {
    this.route.params.subscribe((params: Params)=> {
      this.postId = params['id']
    });
  }

  ngOnInit(): void {
    // We get the post object, by id. We assign the object to the "post" variable and change the contents of the input fields to the data of the object that needs to be changed.
    this.postSubscription = this.baseService.getPostsById(this.postId).subscribe((post: Post) => {
      this.post = post;
      this.editPostForm.patchValue(post)
      this.pushPhotoControls();
    })
  }

  // Get controls of 'photo' formArray
  getPhotoControls(){
    return (this.editPostForm.get('photo') as FormArray).controls;
  }

  // Dynamic add input function
  addPhotoControl(){
    const control = new FormControl('', Validators.required);
    (this.editPostForm.get('photo') as FormArray).push(control)
  }

  // Dynamic remove input function
  deletePhotoControl(i: number){
    (this.editPostForm.get('photo') as FormArray).removeAt(i)
  }

  // Function that dynamically displays controls with the received user data
  pushPhotoControls(){
    this.post.photo.forEach(url => {
      const control = new FormControl(url, Validators.required);
      (this.editPostForm.get('photo') as FormArray).push(control);
    })
  }

  // A function that sends a modified object to make changes to the database
  submitForm(){
    if (this.editPostForm.valid){
      this.baseService.updateExistingPost(this.postId, this.editPostForm.value);
      this.editPostForm.reset();
      this.router.navigate(['/bloglist/post/' + this.postId]);
    }
  }

  ngOnDestroy() {
    this.postSubscription ? this.postSubscription.unsubscribe() : false;
  }

}
