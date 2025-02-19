import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-sibilings',
  standalone: false,
  templateUrl: './sibilings.component.html',
  styleUrl: './sibilings.component.scss'
})
export class SibilingsComponent {

  constructor(private dataService: DataService){

  }

  getData(){
    console.log(this.dataService.trainerList)
    
  }
  updateData(){
    this.dataService.addNewTrainer({name:"Luke",occ:"assist"})
  }

  getNumber(){
    console.log(this.dataService.primitive)
    
  }
  updateNumber(){
    this.dataService.primitive++
  }

}
