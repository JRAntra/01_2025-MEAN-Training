import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit{

 @Input() childDataSource : any[] = ["JR","Miranda"] 

 @Output() passValue = new EventEmitter();

 ngOnInit(): void {
   
 }
 triggerCustomEvent(){
  this.passValue.emit("This is triggering from Child")
 }
 
}

