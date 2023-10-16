import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbhaCardRoutingModule } from './abha-card-routing.module';
import { AbhaCardComponent } from './abha-card/abha-card.component';
import { EmailVerifyComponent } from './email-verify/email-verify.component';


@NgModule({
  declarations: [AbhaCardComponent, EmailVerifyComponent],
  imports: [
    CommonModule,
    AbhaCardRoutingModule
  ]
})
export class AbhaCardModule { }
