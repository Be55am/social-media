import {Component, OnInit} from '@angular/core';
import {Post} from '../post';
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

  newPost(content) {
    console.log(content);

   this.postService.addPost(new Post(Math.random() * 100, '', '', '', new Date(), content));
  }

}
