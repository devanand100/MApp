import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AuthRouting } from './auth.routing';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { OverlayComponent } from './overlay/overlay.component';
@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    OverlayComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    AuthRouting,
    HttpClientModule,
  ],
  exports: [OverlayComponent],
})
export class AuthModule {}
