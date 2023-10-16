import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path : "auth" , loadChildren:() => import("./auth/auth.module").then((m)=>m.AuthModule)},
    {path:"abha" , loadChildren:()=> import('./pages/abha-card/abha-card.module').then((m)=>m.AbhaCardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
