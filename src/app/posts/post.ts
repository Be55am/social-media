export class Post {

  id: number;
  username: string;
  firstname: string;
  lastname: string;
  publicationTime: Date;
  content: string;
  likes: number;
  repostedBy: string;


  constructor(id: number , username: string, firstname: string, lastname: string, publicationTime: Date,
              content: string, likes: number = 0, repostedBy: string = '') {
    this.id = id;
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.publicationTime = publicationTime;
    this.content = content;
    this.likes = likes;
    this.repostedBy = repostedBy;
  }
}
