import {NgModule} from '@angular/core';
import {PostComponent} from './post/post.component';
import {CommonModule} from '@angular/common';
import {NewPostComponent} from './new-post/new-post.component';

@NgModule({
  declarations: [
    PostComponent,
    NewPostComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostComponent,
    NewPostComponent
  ]
})
export class PostsModule {

}
