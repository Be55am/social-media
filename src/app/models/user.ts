export class User {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  description: string;
  followers: number;
  following: number;


  constructor(id: number, username: string, firstname: string,
              lastname: string, description: string, followers: number, following: number) {
    this.id = id;
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.description = description;
    this.followers = followers;
    this.following = following;
  }
}
