import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
import { NgForm, NgModel } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  // Property
  // enteredValue = '';
  enteredTitle = '';
  enteredContent = '';
  // @Output() postCreated = new EventEmitter<Post>(); // @Output turn an event so you can listen to the outside
  // newPost = 'No Content';

  title = new FormControl(' ', [Validators.required, Validators.minLength(3)]);


  constructor(private _postsService: PostsService) { }

  ngOnInit() {
  }

  // Methods
  onAddPost(form: NgForm) { // We need to emit the onAddPost event
    // console.log(form);
    if (form.invalid) {
      return;
    }
    // const post: Post = {
    //   // title: this.enteredTitle,
    //   title: form.value.title,
    //   content: form.value.content
    //   // content: this.enteredContent
    // };
    this._postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
    // this.postCreated.emit(post);
  // onAddPost(postInput: HTMLTextAreaElement) {
    // console.log(postInput);
    // console.dir(postInput);
    // this.newPost = 'The user\'s post';
    // this.newPost = this.enteredValue;

    // alert('Post added');
    // console.log('onAddPost');
  }
  getErrorMessage() {
    return this.title.hasError('required') ? 'Please enter a post title' :
      this.title.hasError('length') ? 'Must be at least 3 character' : '';
  }

}
