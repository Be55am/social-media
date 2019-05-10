import {Component, OnInit} from '@angular/core';
import {Post} from '../post';
import {PostService} from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit{

  posts: Post[];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }
}
