export class User {
  username: string;
  firstname: string;
  lastname: string;
  description: string;
  followers: number;
  following: number;


  constructor(username: string, firstname: string, lastname: string, description: string, followers: number, following: number) {
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.description = description;
    this.followers = followers;
    this.following = following;
  }
}
