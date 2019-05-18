import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import {PostsModule} from '../posts/posts-module';
import {BrowserModule} from '@angular/platform-browser';
import {ChatModule} from '../chat/chat.module';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    PageNotFoundComponent,

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
