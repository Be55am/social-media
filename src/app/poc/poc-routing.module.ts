import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormReactiveApproachComponent} from './form-reactive-approach/form-reactive-approach.component';

const routes: Routes = [
  {path: 'form-reactive-approach', component: FormReactiveApproachComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PocRoutingModule {

}
