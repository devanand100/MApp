import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  registration = this.fb.group({
    firstName:["" , [Validators.required]],
    lastName:["" , [Validators.required]],
    email:["" , [Validators.required , Validators.email ]],
    gender:['' , [Validators.required]] ,

  })

  onSubmit(){
    console.log(this.registration.value)
  }
}
