import {Post} from './post';
import {User} from '../models/user';
import {ProfileService} from '../shared/profile/profile.service';
import {Injectable} from '@angular/core';

@Injectable()
export class PostService {
  posts = [
    new Post(1, 'JohnDoe', 'John', 'Doe', new Date('5/2/2019'), 'Lorem ipsum dolor sit amet' +
      ' consectetur adipisicing elit. Magnam omnis nihil, aliquam est, voluptates officiis iure soluta alias vel odit,' +
      ' placeat reiciendis ut libero! Quas aliquid natus cumque quae repellendus. Lorem ipsum dolor sit amet consectetur ' +
      'adipisicing elit. Ipsa, excepturi. Doloremque, reprehenderit! Quos in maiores, soluta doloremque molestiae reiciendis ' +
      'libero expedita assumenda fuga quae. Consectetur id molestias itaque facere? Hic!', 23),
    new Post(2, 'JohnDoe', 'John', 'Doe', new Date('5/3/2019'), 'i love bacon', 66, 'SahLee')
  ];
  user: User;

  liked: boolean[] = [false, true];

  constructor(private profileService: ProfileService) {
    this.user = profileService.getUser();
  }

  getPosts(): Post[] {
    return this.posts;
  }

  addPost(post: Post) {
    this.liked.push(false);
    post.username = this.user.username;
    post.firstname = this.user.firstname;
    post.lastname = this.user.lastname;
    this.posts.unshift(post);
  }

  likePost(postId: number) {
    if (!this.liked[postId - 1]) {
      this.posts[postId - 1].likes++;
      this.liked[postId - 1] = true;
    } else {
      this.posts[postId - 1].likes--;
      this.liked[postId - 1] = false;
    }
  }

  isLiked(postId): boolean {
    return this.liked[postId - 1];
  }

}


