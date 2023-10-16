import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators'
import { AbhaCardService } from '../abha-card.service';

@Injectable({
  providedIn: 'root'
})
export class AbhaGuard implements CanActivate {
  constructor(private _abhaService:AbhaCardService , private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._abhaService.ConsultionsSubjectListner().pipe(map((count)=>{
      if(count > 0){
        console.log("true",count)
        return true
      }else{
        this.router.navigate(['/abha/verify'])
        return false
      }
    }))  ;
  }
  
}
