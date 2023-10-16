import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ConsultingFormComponent } from './consulting-form/consulting-form.component';

const routes: Routes = [
  {path:'' , component:HomepageComponent } ,
  { path:"consult" , component:ConsultingFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
