import { Component } from '@angular/core';
import { JobsService } from '../jobs.service';
import { OnInit } from '@angular/core';
import { JobDetail } from '../jobs.interface';

@Component({
  selector: 'app-jobs-board',
  standalone: false,
  templateUrl: './jobs-board.component.html',
  styleUrl: './jobs-board.component.scss',
})
export class JobsBoardComponent implements OnInit {
  jobIdList: string[] = [];
  jobIdDisplayList: string[] = [];
  job?: JobDetail;
  pageSize = 6; 
  pageIndex = 0;

  constructor(private jobservice: JobsService) {}

  ngOnInit(): void {
    this.jobservice.fetchJobsIds().subscribe((res: string[]) => {
      this.jobIdList = res;
      this.jobIdDisplayList = this.jobIdDisplayList.concat(this.jobIdList.slice(0,6));      
    });
  }
  loadMoreJobs():void{
    this.jobIdDisplayList = this.jobIdDisplayList.concat(this.jobIdList?.slice(this.pageSize*this.pageIndex,this.pageSize*(this.pageIndex+1)));
    this.pageIndex += this.pageSize;
  }
}
