import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { HomepageService } from '../homepage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSelectChange } from '@angular/material/select';
import { AbhaCardService } from '../../abha-card.service';

@Component({
  selector: 'app-consulting-form',
  templateUrl: './consulting-form.component.html',
  styleUrls: ['./consulting-form.component.css'],
})
export class ConsultingFormComponent implements OnInit {
  doctors = [];
  specialities = [];
  constructor(
    private fb: FormBuilder,
    private _homepageService: HomepageService,
    private _snackbar: MatSnackBar,
    private _abhaService: AbhaCardService
  ) {}

  ngOnInit(): void {
    this._homepageService.getSpecialities().subscribe(
      (data: []) => {
        this.specialities = data;
      },
      (error) => {
        this._snackbar.open(error.error.message, 'Okay', { duration: 3000 });
      }
    );
  }

  consultForm = this.fb.group({
    speciality: ['', [Validators.required]],
    symptoms: ['', [Validators.required]],
    doctor: ['', [Validators.required]],
  });

  onSubmit() {
    if (!this.consultForm.valid) {
      return;
    }
    const counseltFormValues = this.consultForm.value;

    this._homepageService.saveConsultion(counseltFormValues).subscribe(
      (data) => {
        this._snackbar.open(' consultion request is created', 'Okay', {
          duration: 3000,
        });
        this.consultForm.reset();
        this.consultForm.get('speciality').setErrors(null);
        this.consultForm.get('symptoms').setErrors(null);
        this.consultForm.get('doctor').setErrors(null);
      },
      (error) => {
        console.log(error);
        this._snackbar.open(error.error.message, 'Okay', { duration: 3000 });
      }
    );
  }

  fetchDoctor(event: MatSelectChange) {
    if (!event.value) {
      return;
    }
    this._homepageService.getDoctors(event.value).subscribe(
      (doctorData: []) => {
        this.doctors = doctorData;
      },
      (err) => {
        this._snackbar.open(err.error.message);
      }
    );
  }
}
