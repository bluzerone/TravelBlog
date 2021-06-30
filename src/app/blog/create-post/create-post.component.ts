import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import {BaseService} from "../../shared/base.service";
import {AuthService} from "../../shared/auth.service";
import {Router} from "@angular/router";
import {Post} from "../../shared/post";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  createPostForm: FormGroup;

  constructor(private baseService: BaseService,
              private authService: AuthService,
              private router: Router) {
    this.createPostForm = new FormGroup({
      country: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      coverPhoto: new FormControl(''),
      photo: new FormArray([
        new FormControl('', Validators.required)
      ])
    })
  }

  ngOnInit() {
  }

  // Get a list of controls for dynamic display in View
  getControls(){
    return (this.createPostForm.get('photo') as FormArray).controls;
  }

  // Dynamic add input function
  addPhotoControl(){
    const control: FormControl = new FormControl('', Validators.required);
    (this.createPostForm.get('photo') as FormArray).push(control)
  }

  // Dynamic remove input function
  deletePhotoControl(i: number){
    (this.createPostForm.get('photo') as FormArray).removeAt(i)
  }

  // The function, which, if the form is valid, creates a form data object, assigns a random string as an id, calls the setNewPost function, passing the form data object inside.
  // Then it clears the input fields and redirects the user to the bloglist page.
  submitForm(){
    if (this.createPostForm.valid){
      const randomId = Math.random().toString(36).substring(2);
      const formData: Post = {
        id: randomId,
        uName: this.authService.userData.displayName,
        uid: this.authService.userData.uid,
        ...this.createPostForm.value
      }
      this.baseService.setNewPost(formData);
      this.createPostForm.reset();
      this.router.navigate(['bloglist'])
    }
  }

}
