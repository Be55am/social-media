import {NgModule} from '@angular/core';
import {ProfileComponent} from './profile/profile.component';
import {BasicHighlightDirective} from './directives/basic-highlight.directive';
import { ModalComponent } from './modal/modal.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    ProfileComponent,
    BasicHighlightDirective,
    ModalComponent,
    ImageUploadComponent
  ],
  exports: [
    ProfileComponent,
    BasicHighlightDirective,
    ImageUploadComponent
  ]
})
export class SharedModule {
}
