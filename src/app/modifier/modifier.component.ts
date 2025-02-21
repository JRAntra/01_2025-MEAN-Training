import { Component, OnInit } from '@angular/core';
import { PublisherService } from '../publisher/publisher.service';

@Component({
  selector: 'app-modifier',
  standalone: false,
  templateUrl: './modifier.component.html',
  styleUrl: './modifier.component.scss'
})
export class ModifierComponent implements OnInit{

  currentScore?:number

  constructor(private scoreService:PublisherService){}

  ngOnInit(): void {
    this.currentScore = this.scoreService.score
  }

  add1(){
    this.scoreService.addScoreBy1();
  }
  add3(){
    this.scoreService.addScoreBy3();
  }
  addToTotal(){
    
    this.scoreService.addToTotalScore()
  }
}
