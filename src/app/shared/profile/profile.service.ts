import {User} from '../../models/user';

export class ProfileService {

  user: User;

  private users: User[] = [new User(1, 'sahLee', 'Bessam', 'Sahli',
    'Developer of web applications, JavaScript, PHP, Java, Python, Ruby, Java, Node.js, etc.',
    52163, 9531), new User(2, 'JohnDoe', 'Mother lover', 'fffff',
    'Developer of web applications, JavaScript, PHP, Java, Python, Ruby, Java, Node.js, etc.',
    52163, 9531)];

  getUser(username: string): User {
    return this.users.filter(user => user.username === username)[0];
  }

  login(username: string) {
    this.user = this.users.filter(user => user.username === username)[0];
  }

  getLoggedUser(): User {
    return this.user;
  }

  logout() {
    this.user = undefined;
  }

  isAuthenticated(): boolean {
    return !(typeof this.user === 'undefined');

  }
}
