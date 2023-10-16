import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbhaCardService {
  AbhaCard = new BehaviorSubject("");
  ConsultionsSubject = new BehaviorSubject(0);
  url = 'http://desktop-7miu1qs:1400/v1/'
  constructor(private http:HttpClient) { }
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

  // getAbhacard(){
  //   this.http.get(this.url + "abha/Card").subscribe((cardData)=>{

  //   },(err)=> )
  // }


}
