import { Component } from '@angular/core';

@Component({
  selector: 'app-interview-scheduler',
  templateUrl: './interview-scheduler.component.html',
  styleUrls: ['./interview-scheduler.component.css']
})
export class InterviewSchedulerComponent {
  selectedCandidate: any;
  selectedDate: Date | null = null;

  candidates = [
    { name: 'John Doe' },
    { name: 'Jane Smith' },
    { name: 'Alice Johnson' }
  ];

  scheduleInterview() {
    if (this.selectedCandidate && this.selectedDate) {
      console.log(`Scheduled interview for ${this.selectedCandidate.name} on ${this.selectedDate}`);
      // Call backend API here
    }
  }
}
