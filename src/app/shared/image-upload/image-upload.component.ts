import {Component} from '@angular/core';
import {Image} from './image';
import {ImageService} from './image.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {


  selectedFile: Image[] = [];

  constructor() {
  }

  // private onSuccess() {
  //   this.selectedFile.pending = false;
  //   this.selectedFile.status = 'ok';
  // }
  //
  // private onError() {
  //   this.selectedFile.pending = false;
  //   this.selectedFile.status = 'fail';
  //   this.selectedFile.src = '';
  // }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', (event: any) => {
      this.selectedFile.push(new Image(event.target.result));
    });

  }

}
