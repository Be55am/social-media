import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import {PostsModule} from '../posts/posts-module';
import {BrowserModule} from '@angular/platform-browser';
import {ChatModule} from '../chat/chat.module';


@NgModule({
  declarations: [
    HomeComponent,

  ],
  exports: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PostsModule,
    ChatModule
  ]
})
export class CoreModule {

}
