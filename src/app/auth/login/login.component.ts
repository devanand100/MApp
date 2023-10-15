import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading = false
  constructor(private fb:FormBuilder , private _authService:AuthService) { }

  ngOnInit(): void {
    this._authService.userListener().subscribe(()=>{
      this.isLoading = false ;
    })
  }

  login = this.fb.group({
    email:["" , [Validators.required , Validators.email]] ,
    password:["" , [Validators.required , Validators.minLength(8)]]
  })

  onSubmit(){
    if(!this.login.valid){
      return
    }
    this.isLoading = true ;
    this._authService.logIn(this.login.value)

  }
}
