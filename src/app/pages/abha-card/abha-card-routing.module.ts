import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbhaCardComponent } from './abha-card/abha-card.component';
import { EmailVerifyComponent } from './email-verify/email-verify.component';
import { AbhaGuard } from './abha.guard';

const routes: Routes = [
  {path:'card' , component:AbhaCardComponent ,canActivate:[AbhaGuard]},
  {path:'verify' , component:EmailVerifyComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbhaCardRoutingModule { }
