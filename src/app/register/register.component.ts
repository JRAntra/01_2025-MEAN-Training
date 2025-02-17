import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  username = new FormControl();

  registerForm = new FormGroup({
    'username': this.username,
    'email': new FormControl(),
    'password': new FormControl()
  });

  // itemList = [ { id }, ...]
  // formControls = this.itemList.map((val) => new FormContrl())
  // formArr = new FormArray(formControls)
  formArr = new FormArray([
    new FormControl(),
    new FormControl(),
    new FormControl(),
  ])
  ngOnInit(): void {
      console.log(this.username);
  }
}
