import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobDetail } from './jobs.interface';


@Injectable({
  providedIn: 'root'
})
export class JobsService {
  // get url  https://hacker-news.firebaseio.com/v0/jobstories.json
  private joburl = 'https://hacker-news.firebaseio.com/v0/jobstories.json'

  constructor(
    private http: HttpClient
  ) { }
  // get job id
  fetchJobsIds(): Observable<string[]> {
    return this.http.get<string[]>(this.joburl)
  }


  fetchJos(jobsId:string): Observable<JobDetail> {
    return this.http.get<JobDetail>(`https://hacker-news.firebaseio.com/v0/item/${jobsId}.json`)
  }
  

  
}
