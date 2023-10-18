import { Component, OnInit , OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AbhaCardService } from '../../abha-card.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common'

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit ,OnDestroy {

   userEmail= ""
   isLoading = false
   timeLeft =  5 * 60;
   timer:any;
  constructor(private fb:FormBuilder , private _abhaService:AbhaCardService , private router : Router , private _snackBar:MatSnackBar , private location:Location) { }
  

  ngOnInit(): void {
     this.userEmail= this._abhaService.userEmail
     
     if(!this.userEmail){
        this.router.navigate(['/abha/email-enter'])
     }


      this.timer= setInterval(() => this.timerFunc(),1000)
  }


  otpForm = this.fb.group({
    pin:["" , [Validators.required ]] 
  })
  onSubmit(){
      if(!this.otpForm.valid){
        return
      }
      this.isLoading = true;
      this._abhaService.verifyOtp(this.otpForm.value.pin).subscribe((data:any)=>{
        this.router.navigate(['/abha/card']);
        localStorage.setItem('abhaToken' , data.accessToken)
      },(error)=>{
        this.isLoading = false;
        this._snackBar.open(error.error.message,"Okay",{duration:3000})
      })
  } 
  back(){
    this.location.back();
  }
  timerFunc (){
   
    if(this.timeLeft > 0){
      this.timeLeft = this.timeLeft - 1 ;
    }
  }
  resendCode(){
    if(this.timeLeft !== 0){
      return 
    }

    this._abhaService.verifyOtp(this.otpForm.value.pin).subscribe((data:any)=>{
      this.router.navigate(['/abha/card']);
      localStorage.setItem('abhaToken' , data.accessToken)
    },(error)=>{
      this.isLoading = false;
      this._snackBar.open(error.error.message,"Okay",{duration:3000})
    })
  }


  ngOnDestroy(): void {
    clearInterval(this.timer)
  }
}
