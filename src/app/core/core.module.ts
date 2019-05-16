import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import {PostsModule} from '../posts/posts-module';
import {BrowserModule} from '@angular/platform-browser';
import {ChatModule} from '../chat/chat.module';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,

  ],
  exports: [
    HomeComponent,
    UserComponent
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
