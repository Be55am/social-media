import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './core/home/home.component';
import {SignupComponent} from './signup/signup.component';
import {ChatComponent} from './chat/chat/chat.component';
import {UserComponent} from './core/user/user.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {AuthGuardService} from './auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', canActivate: [AuthGuardService], component: HomeComponent},
  {path: 'user/:username', component: UserComponent},
  {path: 'register', component: SignupComponent},
  {path: 'chat', component: ChatComponent}, // todo need to be removed
  {path: 'poc', loadChildren: './poc/poc.module#PocModule'}, // this is how to route to an other module
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'not-found'},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
