import { Component } from '@angular/core';
import { JobsService } from '../jobs.service';
import { OnInit } from '@angular/core';
import { JobDetail } from '../jobs.interface';
import { JobsCardComponent } from './jobs-card/jobs-card.component';
@Component({
  selector: 'app-jobs-board',
  standalone: false,
  templateUrl: './jobs-board.component.html',
  styleUrl: './jobs-board.component.scss',
})
export class JobsBoardComponent implements OnInit {


  jobIdList: string[] = [];
  jobIdDisplayList: string[] = [];
  interestedJobs: JobDetail[] = [];
  pageSize = 6; 
  pageIndex = 1;

  constructor(private jobservice: JobsService) {}

  ngOnInit(): void {
    this.jobservice.fetchJobsIds().subscribe((res: string[]) => {
      this.jobIdList = res;
      this.updateDisplayList();     
    });
  }
  loadMoreJobs():void{
    this.pageIndex++;
    this.updateDisplayList();
  }
  
   updateDisplayList():void{
    const end = this.pageIndex * this.pageSize;
    this.jobIdDisplayList = this.jobIdList.slice(0, end);
   }

   handleInterestChange(event: { job: JobDetail, isAdded: boolean }): void {
    if (event.isAdded) {
      if (!this.interestedJobs.some(j => j.id === event.job.id)) {
        this.interestedJobs.push(event.job);
      }
    } else { 
      this.interestedJobs = this.interestedJobs.filter(j => j.id !== event.job.id);
    }
  }
}
   

