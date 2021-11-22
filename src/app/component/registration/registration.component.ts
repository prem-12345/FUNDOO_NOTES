import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  registrationForm !: FormGroup;
  submitted = false;
  hide: boolean = true;
  
  constructor(private formBuilder: FormBuilder, private userService: UserService, private _snackBar:MatSnackBar) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      service: ['advance', [Validators.required]],
      firstName: ['', [Validators.required , Validators.pattern("^[A-Z]{1}[a-z A-Z]{2,}$")] ],
      lastName: ['', [Validators.required, Validators.pattern("^[A-Z]{1}[a-z A-Z]{2,}$")] ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    },
    {
      validators: this.MustMatch('password', 'confirmPassword')
    });
  }
  get f() { return this.registrationForm.controls; }

  MustMatch(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
  
      if (matchingControl.errors && !matchingControl.errors.MustMatch) {
        return;
      }
  
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ MustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }

  }

  onSubmit() {

    this.submitted = true;

    console.log(this.registrationForm.value);
    if (this.registrationForm.valid) {
      let reqData = {
        service: this.registrationForm.value.service,
        firstName: this.registrationForm.value.firstName,
        lastName: this.registrationForm.value.lastName,
        email: this.registrationForm.value.email,
        password: this.registrationForm.value.password

      }
      console.log("Data is in registration",reqData);
      console.log("It is a valid data");
      
      this.userService.registration(reqData).subscribe((response: any) =>{
        console.log(response);
        this._snackBar.open('Registration Successful', '',{
          duration:2000,
        })
      }, error =>{
        console.log(error);
        this._snackBar.open('please insert valid data', '',{
          duration:2000,
        })
        
      }
      )
      console.log("It is a valid data");

    } else {
      console.log("please insert valid data")
    }

    
    if (this.registrationForm.invalid) {
      return;
    }
  }

  showPassword(){
    this.hide= !this.hide;
  }
  
}


