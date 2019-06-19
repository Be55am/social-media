import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post';
import {PostService} from '../post.service';
import {Image} from '../../models/image';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  private liked: boolean;
  private postImages: Image[];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.liked = this.postService.isLiked(this.post.id);
    console.log('post id' + this.post.id + ' ' + this.liked);
    this.postImages = this.postService.getImages(this.post.id);
  }

  onLike(postId: number) {
    this.postService.likePost(postId);
    this.liked = !this.liked;
  }

  getImages(): Image[] {
    if (!this.postImages){
      return null;
    }
    let returnedImages = [];
    const size = this.postImages.length > 4 ? 4 : this.postImages.length;
    for (let i = 0; i < size; i++) {
      returnedImages.push(this.postImages[i]);
    }
    return returnedImages;
  }

}
