import {NgModule} from '@angular/core';
import {PostComponent} from './post/post.component';
import {CommonModule} from '@angular/common';
import {NewPostComponent} from './new-post/new-post.component';
import {SharedModule} from '../shared/shared.module';
import {ModalPostComponent} from './post/modal-post/modal-post.component';
import {PostListComponent} from './post-list/post-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    PostComponent,
    NewPostComponent,
    ModalPostComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
  ],
  exports: [
    PostListComponent,
    NewPostComponent
  ]
})
export class PostsModule {

}
