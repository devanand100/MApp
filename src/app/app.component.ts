import { Component , OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { AbhaCardService } from './pages/abha-card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'hApp';
  user:any = "";
  consultionsCount = 0 ;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer , private _authService:AuthService  , private _abhaService:AbhaCardService){
    iconRegistry.addSvgIconLiteral('bar', sanitizer.bypassSecurityTrustHtml(BAR));
  }

  ngOnInit(): void {
    this.checkScreenSize();
    this._authService.verifyUser();
    this._authService.userListener().subscribe((userData)=>this.user = userData)
    this._abhaService.setConsultionCount()
    this._abhaService.ConsultionsSubjectListner().subscribe((countData)=>{this.consultionsCount = countData ; console.log(countData)})
  }

   isMobile = false; 
   checkScreenSize() {
    const mobileQuery = window.matchMedia('(max-width: 700px)');
    this.isMobile = mobileQuery.matches;
    mobileQuery.addEventListener('change', (e) => {
      this.isMobile = e.matches;
    });
  }
  
  logOut(){
    this._authService.logOut();
  }
  onOtpChange(event:any){
    console.log(event)
  }
}


const  BAR = `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"/></svg>`
