import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
import { JobsService } from '../../jobs.service';
import { JobDetail } from '../../jobs.interface';


@Component({
  selector: 'app-jobs-card',
  standalone: false,
  templateUrl: './jobs-card.component.html',
  styleUrl: './jobs-card.component.scss'
})
export class JobsCardComponent implements OnInit {
  @Input() jobId!: string;
  @Output() interestChange = new EventEmitter<{ job: JobDetail, isAdded: boolean }>();
  job?: JobDetail;
  isAdded: boolean = false;

  constructor(private jobsService: JobsService) {}

  ngOnInit(): void {
    
    this.jobsService.fetchJos(this.jobId).subscribe((res: JobDetail) => {
      this.job = res;
    });
  }
  toggleInterested(): void {
    if (!this.job) return;
    this.isAdded = !this.isAdded;
    
    this.interestChange.emit({ job: this.job, isAdded: this.isAdded });
  }
}