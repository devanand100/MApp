import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbhaCardService {
  AbhaCard = new BehaviorSubject("");
  ConsultionsSubject = new BehaviorSubject(0);
  // UserSubject = new BehaviorSubject({email:"", });
  userEmail = ""
  url = 'http://desktop-7miu1qs:1400/v1/'
  constructor(private http:HttpClient , private router:Router) { }
  setConsultionCount(){
    if(this.ConsultionsSubject.value === 0){
      this.http.get(this.url + "consult/count").subscribe((data:any)=>{
        this.ConsultionsSubject.next(data.count)
      },(err)=> console.log(err))
    }
  
  }
  ConsultionsSubjectListner(){
    return this.ConsultionsSubject.asObservable()
  }

  getOtp(payload){
    return this.http.post(this.url + "abha/generate-otp",payload );
  }

  verifyOtp(pin){

    return this.http.post(this.url + "abha/verify-otp", {email:this.userEmail  , pin})
  }

  getAbhacard(){
    const abhaToken = localStorage.getItem('abhaToken');
    if(!abhaToken){
      this.router.navigate([''])
    }
    const httpOptions = new HttpHeaders({
      'Authorization': `${abhaToken}`
    })
    return  this.http.get(this.url + "abha/Card",{ 'headers': httpOptions})
  }


}
