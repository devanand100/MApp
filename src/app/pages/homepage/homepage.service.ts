import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  url = "http://desktop-7miu1qs:1400/v1/"
  constructor(private http:HttpClient ,) { }

  getSpecialities(){
    return this.http.get(this.url + "doctor/specialities")
  }
  getDoctors(speciality:string){
    return this.http.get(this.url + `doctor/doctors/${speciality}`)
  }

  saveConsultion(body:any){
   return this.http.post( this.url + "consult/save", body)
  }
}
