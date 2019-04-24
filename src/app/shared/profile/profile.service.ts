import {User} from '../../models/user';

export class ProfileService {
  user = new User('SahLee', 'Bessam', 'Sahli', 'Developer of web applications, JavaScript, PHP, Java, Python, Ruby, Java, Node.js, etc.',
    52163, 9531);

  getUser(): User {
    return this.user;
  }
}
