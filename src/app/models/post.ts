export class Post {

  username: string;
  firstname: string;
  lastname: string;
  publicationTime: Date;
  content: string;


  constructor(username: string, firstname: string, lastname: string, publicationTime: Date, content: string) {
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.publicationTime = publicationTime;
    this.content = content;
  }
}
