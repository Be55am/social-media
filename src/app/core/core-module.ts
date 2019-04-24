import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import {PostsModule} from '../posts/posts-module';
import {BrowserModule} from '@angular/platform-browser';


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
    PostsModule
  ]
})
export class CoreModule {

}
