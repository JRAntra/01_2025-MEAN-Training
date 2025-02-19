import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private trainerDataList = [
    { name: 'JR', occ: 'Trainer' },
    { name: 'David', occ: 'Trainer' },
    { name: 'Miranda', occ: 'Trainer' },
    { name: 'Jack', occ: 'Trainer' },
  ];

  primitive : number = 1;

  get trainerList():any[]{
    return this.trainerDataList
  }

  addNewTrainer(trainer: any){
    this.trainerDataList.push(trainer);
  }

}
