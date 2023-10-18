import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbhaCardComponent } from './abha-card/abha-card.component';

import { AbhaGuard } from './abha.guard';
import { EmailEnterComponent } from './email-enter/email-enter.component';
import { OtpComponent } from './otp/otp.component';

const routes: Routes = [
  {path:'card' , component:AbhaCardComponent ,  },
  {path:'email-enter' , component:EmailEnterComponent} ,
  {path:"otp" , component:OtpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbhaCardRoutingModule { }
