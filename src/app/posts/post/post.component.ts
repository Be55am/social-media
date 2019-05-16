import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post';
import {PostService} from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  private liked: boolean ;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.liked = this.postService.isLiked(this.post.id);
    console.log('post id' + this.post.id + ' ' + this.liked);
  }

  onLike(postId: number) {
    this.postService.likePost(postId);
    this.liked = !this.liked;
  }

}
