import { Component, OnInit } from '@angular/core';
import { PublisherService } from '../publisher/publisher.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reciever',
  standalone: false,
  templateUrl: './reciever.component.html',
  styleUrl: './reciever.component.scss'
})
export class RecieverComponent implements OnInit{

  constructor(private dataService: PublisherService,
    private http: HttpClient
  ){

  }

  dataArr?: []

  ngOnInit(): void {

    this.dataService.dataStream.subscribe(
      (res)=>{ 
        // console.log(res);
        this.dataArr = res;
        console.log(this.dataArr)
      },  // successfully returned data
      // (err)=>{ console.error(err)},  // error handling
      // ()=>{  console.log("all data have been recieved")} // once the observable is complete
      // Subject in Rxjs
      ) 
  }


  onGetData(){
    // console.log("http request sending")
    this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments')
  }



}
