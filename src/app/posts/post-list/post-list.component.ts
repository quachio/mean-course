// import { Component, OnInit, Input } from '@angular/core';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title: 'First Post',  content: 'This is the first post\'s content'},
  //   {title: 'Second Post', content: 'This is the second post\'s content'},
  //   {title: 'Third Post',  content: 'This is the third post\'s content'},
  // ];
  // @Input() posts: Post[] = [];
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(private _postsService: PostsService) {
    // console.log(_postsService);
   }

  ngOnInit() {
    this.posts = this._postsService.getPosts();
    // We need to unsubscrite to prevent memory leak, since this will stive live
    this.postsSub = this._postsService.getPostsUpdateListener().subscribe((posts: Post[]) =>  {
      this.posts = posts;
    }); // This will listener for the update post
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
