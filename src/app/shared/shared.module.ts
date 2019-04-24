import {NgModule} from '@angular/core';
import {ProfileComponent} from './profile/profile.component';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  exports: [
    ProfileComponent
  ]
})
export class SharedModule {
}
