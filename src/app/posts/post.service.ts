import {Post} from '../models/post';
import {User} from '../models/user';
import {ProfileService} from '../shared/profile/profile.service';
import {Injectable} from '@angular/core';

@Injectable()
export class PostService {
  posts = [
    new Post('JohnDoe', 'John', 'Doe', new Date('5/2/2019'), 'Lorem ipsum dolor sit amet' +
      ' consectetur adipisicing elit. Magnam omnis nihil, aliquam est, voluptates officiis iure soluta alias vel odit,' +
      ' placeat reiciendis ut libero! Quas aliquid natus cumque quae repellendus. Lorem ipsum dolor sit amet consectetur ' +
      'adipisicing elit. Ipsa, excepturi. Doloremque, reprehenderit! Quos in maiores, soluta doloremque molestiae reiciendis ' +
      'libero expedita assumenda fuga quae. Consectetur id molestias itaque facere? Hic!'),
    new Post('JohnDoe', 'John', 'Doe', new Date('5/3/2019'), 'i love bacon')
  ];
  user: User;

  constructor(private profileService: ProfileService){
    this.user = profileService.getUser();
  }

  getPosts(): Post[] {
    return this.posts;
  }

  addPost(post: Post) {
    console.log(post);
    post.username = this.user.username;
    post.firstname = this.user.firstname;
    post.lastname = this.user.lastname;
    this.posts.push(post);
  }

}


