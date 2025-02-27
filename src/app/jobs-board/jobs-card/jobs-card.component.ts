import { Component, Input, OnInit } from '@angular/core';
import { JobsService } from '../../jobs.service';
import { JobDetail } from '../../jobs.interface';


@Component({
  selector: 'app-jobs-card',
  standalone: false,
  templateUrl: './jobs-card.component.html',
  styleUrl: './jobs-card.component.scss'
})
export class JobsCardComponent implements OnInit {
  @Input() jobId! :string;
  job?: JobDetail
  


  constructor(private jobservice: JobsService) {}
  ngOnInit(): void {
    this.jobservice.fetchJos(this.jobId).subscribe((res: JobDetail) => {
      // console.log(res);
      this.job = res;
    });
  }

}
