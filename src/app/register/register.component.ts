import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  username = new FormControl("",[Validators.required,Validators.minLength(5)]);

  registerForm = new FormGroup({
    'username': this.username,
    'email': new FormControl(),
    'password': new FormControl()
  }, [Validators.required]);

  // itemList = [ { id }, ...]
  // formControls = this.itemList.map((val) => new FormContrl())
  // formArr = new FormArray(formControls)
  formArr = new FormArray([
    new FormControl(""),
    new FormControl(),
    new FormControl(),
  ])
  ngOnInit(): void {
      console.log(this.username);
  }
}
