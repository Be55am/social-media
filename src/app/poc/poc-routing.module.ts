import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormReactiveApproachComponent} from './form-reactive-approach/form-reactive-approach.component';
import {PipesComponent} from './pipes/pipes.component';

const routes: Routes = [
  {path: 'form-reactive-approach', component: FormReactiveApproachComponent},
  {path: 'pipes', component: PipesComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PocRoutingModule {

}
