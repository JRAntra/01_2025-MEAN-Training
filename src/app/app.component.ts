import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { debounce, debounceTime, delay, fromEvent, Observable, of, Subscription, switchMap, throttleTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy{
  title = 'Training';

  @ViewChild('demoLink') link? :ElementRef;
  @ViewChild('keyword') keyword! :ElementRef;


  subscritionList? : Subscription[]

  eventObservable? : Observable<any>
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    console.log(this.link)
    console.log(this.keyword)
  //  fromEvent(this.link?.nativeElement, "mouseover").subscribe(res=>{console.log(res)});
   fromEvent(this.keyword.nativeElement,'keyup').pipe(
     debounceTime(1000),
     switchMap(() => { return of(1,2,3)}),
   ).subscribe((res:any)=> console.log(res))
  }

// user type keyword  => use keyword for search





ngOnDestroy(){
this.subscritionList?.forEach(i => i.unsubscribe())
}


  
}


