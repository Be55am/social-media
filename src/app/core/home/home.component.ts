import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {Post} from '../../models/post';
import {PostService} from '../../posts/post.service';

@Component({
  selector: 'app-menu',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}
