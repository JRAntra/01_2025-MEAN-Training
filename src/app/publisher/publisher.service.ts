import { Injectable } from '@angular/core';
import { fromEvent, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PublisherService {
  private currentScore = 0;
  private totalScore = 0;

  dataStream = new Observable<any>((observer) => {
    observer.next(10);
    observer.next(20);
    observer.next(30);
    observer.complete();
  });

 mockDataStream = of(10,20,30)

  constructor() {}

  get score(): number {
    return this.currentScore;
  }

  addScoreBy1() {
    this.currentScore++;
  }

  addScoreBy3() {
    this.currentScore += 3;
  }

  get finalScore(): number {
    return this.totalScore;
  }

  addToTotalScore() {
    this.totalScore += this.currentScore;
    this.currentScore = 0;
  }
}


