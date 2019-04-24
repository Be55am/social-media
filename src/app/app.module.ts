import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {PostsModule} from './posts/posts-module';
import {CoreModule} from './core/core-module';
import {PostService} from './posts/post.service';
import {ProfileService} from './shared/profile/profile.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    PostsModule
  ],
  providers: [PostService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
