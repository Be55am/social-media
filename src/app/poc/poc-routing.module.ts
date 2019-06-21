import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormReactiveApproachComponent} from './form-reactive-approach/form-reactive-approach.component';
import {PipesComponent} from './pipes/pipes.component';
import {AclComponent} from './acl/acl.component';
import {AclDemoResolver} from '../acl-demo-resolver';

const routes: Routes = [
  {path: 'form-reactive-approach', component: FormReactiveApproachComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'acl', component: AclComponent , resolve: {route: AclDemoResolver, state: AclDemoResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PocRoutingModule {

}
