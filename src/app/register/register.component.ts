// register.component.ts
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormBuilder,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  AsyncValidator,
  AsyncValidatorFn,
} from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  // registerArray!: FormArray;
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  // Template Driven & ReactiveForms
  // [(ngModel)] = "var"
  // [formControl] formGroup formArray
  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        username: new FormControl(
          '',
          [Validators.required, Validators.minLength(5)],
          []
        ),
        email: new FormControl(
          '',
          [this.customRequired, this.customMinLength(5)],
          [this.isEmailExist()]
        ),
        password: new FormControl(''),
        confirmPassword: new FormControl(''),
      },
      [Validators.required],
      []
    );
    // this.fb.group({
    //   username: [''],
    //   email: [''] ,
    //   password: this.fb.group({  }),
    //   confirmPassword: ['']
    // })
    const tempControl = new FormControl('', [], []);
    const tempGroup = new FormGroup({}, [], []);
    const tempArray = new FormArray([], [], []);

    // this.registerArray = new FormArray([ this.registerForm])
  }

  customRequired(control: AbstractControl): ValidationErrors | null {
    if (control.value.length === 0) {
      return {
        customRequired:
          'the field is required, powered by custom implementation',
      };
    } else {
      return null;
    }
  }

  customMinLength(len: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value.length < len) {
        return {
          customMinLength: `the input must contain at least ${len} letters`,
        };
      } else {
        return null;
      }
    };
  }

  isEmailExist(): AsyncValidatorFn {
    return (
      control: AbstractControl
    ):
      | Observable<ValidationErrors | null>
      | Promise<ValidationErrors | null> => {
      // this.http.post("url",control.value)

      const resultObs = of(true).pipe(delay(1000));// come back from mock server api
      return resultObs.pipe(
        map((res) => {
          if (res) {
            return { emailExist: 'the email is already existed' };
          } else {
            return of(null);
          }
        })
      );

      // if(true) {
      //   return of({error:"error"})
      // }else{
      //   return of(null);
      // }
    };
  }

  checkError() {
    console.log(this.email.errors);
  }

  // formArray =  [ formGroup { formControls} , formGroup { formControls}, formGroup { formControls}]

  // formArray =  [formControl,formControl ]

  // formArray = FormGroup{[formArray[ ],formArray[ ],formArray[ ]]}

  // onSubmit(): void {

  get username(): FormControl {
    return this.registerForm.get('username') as FormControl;
  }
  get email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }
}
