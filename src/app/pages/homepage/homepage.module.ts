import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { ConsultingFormComponent } from './consulting-form/consulting-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomepageComponent, ConsultingFormComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule ,
    AngularMaterialModule ,
    ReactiveFormsModule
  ]
})
export class HomepageModule { }
