import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  // Property
  enteredValue = '';
  newPost = 'No Content';

  constructor() { }

  ngOnInit() {
  }

  // Methods
  onAddPost() {
  // onAddPost(postInput: HTMLTextAreaElement) {
    // console.log(postInput);
    // console.dir(postInput);
    // this.newPost = 'The user\'s post';
    this.newPost = this.enteredValue;

    // alert('Post added');
    // console.log('onAddPost');
  }

}
