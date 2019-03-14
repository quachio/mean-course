import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';

@Injectable({ // if we add this, we don't need to add PostsService in Module for provider array
  providedIn: 'root'
})

export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();
  constructor() { }

  getPosts() {
    // return this.posts; // This return the reference of the post, anything done outside will affect this
    return [...this.posts]; // This will return a copy of this.post, and change will not affect this.posts
  }

  getPostsUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]); // We use this to post data around component, this will also emit to any observale
  }
}
