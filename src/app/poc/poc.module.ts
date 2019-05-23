import {NgModule} from '@angular/core';
import {FormReactiveApproachComponent} from './form-reactive-approach/form-reactive-approach.component';
import {PocRoutingModule} from './poc-routing.module';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  imports: [
    PocRoutingModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [FormReactiveApproachComponent, PipesComponent],

})
export class PocModule {

}
