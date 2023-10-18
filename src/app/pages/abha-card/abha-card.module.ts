import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbhaCardRoutingModule } from './abha-card-routing.module';
import { AbhaCardComponent } from './abha-card/abha-card.component';
import { EmailEnterComponent } from './email-enter/email-enter.component';
import { OtpComponent } from './otp/otp.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SecondsToMinutePipe } from './otp/seconds-to-minute.pipe';
@NgModule({
  declarations: [AbhaCardComponent, EmailEnterComponent, OtpComponent, SecondsToMinutePipe  ],
  imports: [
    CommonModule,
    AbhaCardRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class AbhaCardModule { }
