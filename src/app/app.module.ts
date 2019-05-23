import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {PostsModule} from './posts/posts-module';
import {CoreModule} from './core/core.module';
import {PostService} from './posts/post.service';
import {ProfileService} from './shared/profile/profile.service';
import {ChatModule} from './chat/chat.module';
import {AuthGuardService} from './auth-guard.service';
import {FormsModule} from '@angular/forms';
import { FormReactiveApproachComponent } from './poc/form-reactive-approach/form-reactive-approach.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ChatModule,
    PostsModule
  ],
  providers: [PostService, ProfileService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
