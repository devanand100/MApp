import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AuthRouting } from './auth.routing';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [LoginComponent, RegistrationComponent, ProfileComponent],
  imports: [
    CommonModule ,
    ReactiveFormsModule ,
    AngularMaterialModule,
    AuthRouting ,
    HttpClientModule
  ]
})
export class AuthModule { }
