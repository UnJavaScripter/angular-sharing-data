import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './input/input.component';
import { ServiceComponent } from './service/service.component';
import { NgOnChangesComponent } from './ng-on-changes/ng-on-changes.component';
import { OutputComponent } from './output/output.component';
import { VariableLocalComponent } from './variable-local/variable-local.component';
import { ViewChildComponent } from './view-child/view-child.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'input',
    component: InputComponent
  },
  {
    path: 'ngOnChanges',
    component: NgOnChangesComponent
  },
  {
    path: 'output',
    component: OutputComponent
  },
  {
    path: 'variableLocal',
    component: VariableLocalComponent
  },
  {
    path: 'viewChild',
    component: ViewChildComponent
  },
  {
    path: 'service',
    component: ServiceComponent
  },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}