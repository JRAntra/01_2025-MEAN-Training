import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';
import { JobDetail } from '../jobs.interface';
import { JobsCardComponent } from '../jobs-board/jobs-card/jobs-card.component';

@Component({
  selector: 'app-interested-jobs-board',
  standalone: false,
  templateUrl: './interested-jobs-board.component.html',
  styleUrl: './interested-jobs-board.component.scss'
})
export class InterestedJobsBoardComponent implements OnInit{
  jobIdList: string[] = [];
  jobIdDisplayList: string[] = [];
  interestedJobs: JobDetail[] = [];


  constructor(private jobservice: JobsService) {}

  ngOnInit(): void {
    this.jobservice.fetchJobsIds().subscribe((res: string[]) => {
      this.jobIdList = res;    
    });
  }

   removeJob(jobId: number): void {
    
    this.interestedJobs = this.interestedJobs.filter(j => j.id !== jobId);
  }
  }



