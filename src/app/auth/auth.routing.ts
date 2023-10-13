import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';

const routes:Routes = [
    {path:"login" , component:LoginComponent},
    {path:"register" , component:RegistrationComponent},
    {path:"profile" , component:ProfileComponent , canActivate:[AuthGuard]}
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AuthRouting{

}