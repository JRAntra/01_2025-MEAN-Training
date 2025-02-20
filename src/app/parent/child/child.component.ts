import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  
  displayContent = true;

  @Input() varFromParent? : any

  ngOnChanges(): void {
    // console.log(document.querySelector("#container"))
    console.log("detected in child Onchanges")
  }
  ngOnInit(): void {
    // console.log(document.querySelector("#container"))
    console.log("detected in child Oninit")
  }
  ngDoCheck(): void {
    // console.log(document.querySelector("#container"))
    console.log("detected in child DoCheck")
  }
  ngAfterContentInit(): void {
    // console.log(document.querySelector("#container"))
    console.log("detected in child ContentInit")
  }
  ngAfterContentChecked(): void {
    // console.log(document.querySelector("#container"))
    console.log("detected in child ContentChecked")
  }
  ngAfterViewInit(): void {
    // console.log(document.querySelector("#container"))
    console.log("detected in child ViewInit")
  }
  ngAfterViewChecked(): void {
    // console.log(document.querySelector("#container"))
    console.log("detected in child ViewChecked")
  }
  ngOnDestroy(): void {
    // console.log(document.querySelector("#container"))
    console.log("detected in child OnDestroy")
  }

}
