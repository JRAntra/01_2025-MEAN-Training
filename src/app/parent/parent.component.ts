import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  dataSource :any[] =  [1,2,3,4,5]
  trainerList? : any[]
  logNumber : number

  constructor(private dataService: DataService){
    this.trainerList = dataService.trainerList;
    this.logNumber = dataService.primitive;

    console.log("the data inside of parent class is")
    console.log(this.trainerList)
  }
  onChildEventTriggered(eventValue: string){
    window.alert(eventValue);
  }
  logParentData(){
    console.log(this.trainerList)
  }
  logParentNumber(){
    this.logNumber = this.dataService.primitive;
    console.log(this.logNumber)
  }
}
