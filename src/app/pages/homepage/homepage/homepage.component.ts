import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  user:any;
  constructor(private _authService:AuthService , private router:Router , private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this._authService.userListener().subscribe((userData)=>this.user = userData)
  }

  handleClick(){
    if(this.user){
      this.router.navigate(['/consult'])
    }else{
      this.router.navigate(['/auth/login']);
      this._snackBar.open("first Login to continue consulting" , 'Okay' ,{duration:4000})
    }
  }

}
