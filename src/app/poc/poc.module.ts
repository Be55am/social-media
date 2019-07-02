import {NgModule} from '@angular/core';
import {FormReactiveApproachComponent} from './form-reactive-approach/form-reactive-approach.component';
import {PocRoutingModule} from './poc-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import {ShortenPipe} from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { AclComponent } from './acl/acl.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { SimpleInputsComponent } from './dynamic-form/dynamic-form-use/app-question/simple-inputs.component';
import {DynamicFormTestComponent} from './dynamic-form-test.component';

@NgModule({
  imports: [
    PocRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    FormReactiveApproachComponent,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    AclComponent,
    DynamicFormComponent,
    SimpleInputsComponent,
    DynamicFormTestComponent,
  ],

})
export class PocModule {

}
