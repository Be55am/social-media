import {NgModule} from '@angular/core';
import {ProfileComponent} from './profile/profile.component';
import {BasicHighlightDirective} from './directives/basic-highlight.directive';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    ProfileComponent,
    BasicHighlightDirective,
    ModalComponent
  ],
  exports: [
    ProfileComponent,
    BasicHighlightDirective
  ]
})
export class SharedModule {
}
