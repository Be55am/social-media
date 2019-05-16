export class Image {

  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string) {
  }
}
