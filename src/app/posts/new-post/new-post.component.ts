import {Component, OnInit} from '@angular/core';
import {Post} from '../../models/post';
import {PostService} from '../post.service';

@Component({
  selector: 'app-new-topic',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {


  constructor(private postService: PostService) {
  }

  ngOnInit() {
  }

  newPost(content: string) {
    console.log(content);

    this.postService.addPost(new Post('', '', '', new Date(), content));
  }

}
