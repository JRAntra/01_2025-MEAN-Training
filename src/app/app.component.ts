import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  

  title = 'Training';

  newDate = new Date()

  str = "AbCdEfG"

  trainer =  {name:"JR", occ:"trainer"}

  phoneNum = "1234567890"

  ngOnInit(): void {
    console.log(this.newDate)
  }

}
