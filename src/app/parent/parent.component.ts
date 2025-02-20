import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  displayContent = true;

  demoText = 'this is the demo test';

  displayInfo?: any[];

  subscriptions: Subscription[] = []

  constructor(private http: HttpClient) {}

  @ViewChild('#childText') text?: string;

  ngOnChanges(): void {
    // console.log(document.querySelector("#container"))
    console.log('detected in parent Onchanges');
  }
  ngOnInit(): void {
    this.subscriptions.push(this.http
      .get('https://jsonplaceholder.typicode.com/albums').subscribe(
        (res:any)=> this.displayInfo = res
      ))
      

    // console.log(document.querySelector("#container"))
    console.log('detected in parent Oninit');
  }
  ngDoCheck(): void {
    // console.log(document.querySelector("#container"))
    console.log('detected in parent DoCheck');
  }
  ngAfterContentInit(): void {
    // console.log(document.querySelector("#container"))
    console.log('detected in parent ContentInit');
  }
  ngAfterContentChecked(): void {
    // console.log(document.querySelector("#container"))
    console.log('detected in parent ContentChecked');
  }
  ngAfterViewInit(): void {
    // console.log(document.querySelector("#container"))
    console.log('detected in parent ViewInit');
  }
  ngAfterViewChecked(): void {
    // console.log(document.querySelector("#container"))
    this.demoText = 'I changed my value here';
    console.log('detected in parent ViewChecked');
  }
  ngOnDestroy(): void {
    // console.log(document.querySelector("#container"))
    if(true){
      window.alert("you did not saved yet, do you want to quit without saving")

    }
    this.subscriptions.forEach( s => s.unsubscribe())
    console.log('detected in parent OnDestroy');
  }
}
