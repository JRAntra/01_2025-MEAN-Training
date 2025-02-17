import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  username = 'Ben';
  obj = { name: 'Jack'};

  text = 'example.image';
  backgroundColor = 'yellow';

  firstname = 'Miranda';

  onClick(){
    console.log("the button is clicked!");
    this.username = '';
    this.obj.name = '';
    this.text = ''
  }

  onKeyUp(event: Event){
    const val = (event.target as HTMLInputElement)?.value;
    console.log("on Keyup event", val);
  }
  onChange(){
    console.log("on Change event");
  }
  onInput(event: Event){
    const val = (<HTMLInputElement>event.target)?.value;
    console.log("on Input event", val);
  }
}
