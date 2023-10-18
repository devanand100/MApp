import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private _snackbar: MatSnackBar,
    private router: Router
  ) {}
  url = "http://desktop-7miu1qs:1400/v1/auth/"
  // url = 'http://devanand-HP-Pavilion-Notebook:1400/v1/auth/';
  localUser = localStorage.getItem('user');
  userSubject = new BehaviorSubject(
    this.localUser ? JSON.parse(this.localUser) : ''
  );

  register(data) {
    return this.http.post(this.url + 'signup', data);
  }

  logIn(data) {
    this.http.post(this.url + 'login', data).subscribe(
      (data: any) => {
        
        this.userSubject.next(data.user);
        this.saveAuthData(data.accessToken, this.userSubject.value);
        this.router.navigate(['/consult'])
      },
      (error) => {
        this.userSubject.next('');
        this._snackbar.open(error.error.message, 'Okay', { duration: 3000 });
      }
    );
  }

  updateProfile(data: any) {
    const formData = new FormData();
    for (const key of Object.keys(data)) {
      formData.append(key, data[key]);
    }
    return this.http.patch(this.url + 'update-profile', formData);
  }
  userListener() {
    return this.userSubject.asObservable();
  }

  verifyUser() {
    this.http.get(this.url + 'me').subscribe(
      (data) => {
      
        this.userSubject.next(data);
      },
      (error) => {
        if (error.error.message == 'Expired token') {
          this._snackbar.open('session Expired ,please Login again', 'Okay', {
            duration: 3000,
          });
          this.router.navigate(['/auth/login']);
          this.logOut();
        }
        // this.router.navigate(['']);

        // this._snackbar.open(error.error.message, 'Okay', {
        //   duration: 3000,
        // });
      }
    );
  }

  logOut() {
    
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/']);
    this.userSubject.next('');
  }

  saveAuthData(token: string, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  fetUserProfile() {
    return this.http.get(this.url + 'me');
  }

  clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  }
}
