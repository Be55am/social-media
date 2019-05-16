import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './core/home/home.component';
import {SignupComponent} from './signup/signup.component';
import {ChatComponent} from './chat/chat/chat.component';
import {UserComponent} from './core/user/user.component';

const routes: Routes = [
  {path: '', redirectTo: 'login' , pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'user/:username', component: UserComponent},
  {path: 'register', component: SignupComponent},
  {path: 'chat', component: ChatComponent}// todo need to be removed


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
