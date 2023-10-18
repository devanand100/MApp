import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AbhaCardService } from '../../abha-card.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-enter',
  templateUrl: './email-enter.component.html',
  styleUrls: ['./email-enter.component.css']
})
export class EmailEnterComponent implements OnInit {
  isLoading = false;
  constructor(private fb:FormBuilder , private _abhaService : AbhaCardService , private _snackBar:MatSnackBar , private router:Router) { }

  ngOnInit(): void {
    const abhaToken = localStorage.getItem('abhaToken')
    if(abhaToken){
      this.router.navigate(['/abha/card'])
    }
  }
  
  emailForm = this.fb.group({
    email:["" , [Validators.required , Validators.email]] 
  })

  onSubmit(){
    if(!this.emailForm.valid){
      return
    }
    this.isLoading = true ;
    this._abhaService.getOtp(this.emailForm.value).subscribe(()=>{
      this._abhaService.userEmail = this.emailForm.value.email;
      this.router.navigate(['/abha/otp'])
    },(error)=>{
      this.isLoading = false ;
      this._snackBar.open(error.error.message,"Okay",{duration:3000})
    })
  }
}
