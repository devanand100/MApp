import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  isItProfileUpdate: boolean = false;
  imageUrl: string | undefined;
  isLoading = false;
  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.router.url === '/auth/profile') {
      this.isItProfileUpdate = true;
      this.isLoading = true;
      this._authService.fetUserProfile().subscribe(
        (data: any) => {
          this.isLoading = false;
          this.registration.patchValue(data);
          this.registration.get('password').setValue('');
          this.registration.get('password').setValidators(null);
          this.registration.get('password').updateValueAndValidity();

          if (data.image) {
            this.imageUrl = data.image;
          }
        },
        (error) => {
          this.isLoading = false;
          this._snackBar.open(error.error.message, 'Okay', { duration: 3000 });
        }
      );
    }
  }

  registration = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    gender: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    bloodGroup: [''],
    image: [''],
  });

  onSubmit() {
    if (!this.registration.valid) {
      return;
    }
    this.isLoading = true;
    if (this.isItProfileUpdate) {
      const updates: any = this.getUpdatedValues();

      if (typeof this.registration.value.image === 'object') {
        updates.image = this.registration.value.image;
      }

      if (updates?.password && updates.password.length < 8) {
        this.registration
          .get('password')
          .setValidators([Validators.minLength(8)]);
        this.registration.get('password').updateValueAndValidity();
        return;
      }

      if (updates?.password === '' || Object.keys(updates).length === 0) {
        return;
      }

      this._authService.updateProfile(updates).subscribe(
        () => {
          this.isLoading = false;
          this._snackBar.open('profile updated Successfully', 'Okay', {
            duration: 3000,
          });
        },
        (error) => {
          this.isLoading = false;
          this._snackBar.open(error.error.message, 'Okay', { duration: 3000 });
        }
      );
    } else {
      const registerationData = this.registration.value;
      delete registerationData.image;
      this._authService.register(registerationData).subscribe(
        () => {
          this.router.navigate(['/auth/login']);
        },
        (error) => {
          this.isLoading = false;
          this._snackBar.open(error.error.message, 'Okay', { duration: 3000 });
        }
      );
    }
  }

  imageChange(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];

    if (!file.type.startsWith('image')) {
      this.registration.get('image')?.setErrors({ inValiFormate: true });
      return;
    }
    this.registration.get('image')?.setErrors(null);

    this.registration.patchValue({ image: file });

    const reader = new FileReader();

    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
    this.registration.get('image')?.updateValueAndValidity();
  }

  getUpdatedValues() {
    const updatedData = {};
    Object.keys(this.registration.controls).forEach((key) => {
      const control = this.registration.get(key);
      if (key === 'image') {
        return;
      }

      if (control && !control.pristine) {
        updatedData[key] = control.value;
      }
    });

    return updatedData;
  }
}
