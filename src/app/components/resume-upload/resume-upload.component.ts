import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-resume-upload',
  templateUrl: './resume-upload.component.html',
  styleUrls: ['./resume-upload.component.css']
})
export class ResumeUploadComponent {
  jobs = [
    { title: 'Frontend Developer', role: 'Angular Developer', qualifications: 'B.Tech', description: 'UI with Angular', experience: 2 },
    { title: 'Backend Developer', role: 'Node.js Developer', qualifications: 'B.Tech/BE', description: 'APIs with Node.js', experience: 3 }
  ];

  showApplyForm = false;
  selectedJob: any = null;
  applicant = {
    name: '',
    qualification: '',
    resumeFile: null
  };

  @ViewChild('applyFormCard') applyFormCard!: ElementRef;

  openApplyForm(job: any) {
    this.selectedJob = job;
    this.showApplyForm = true;

    // Delay scroll to wait for *ngIf rendering
    setTimeout(() => {
      this.applyFormCard?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }

  cancelApplication() {
    this.showApplyForm = false;
    this.applicant = { name: '', qualification: '', resumeFile: null };
  }

  onResumeSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.applicant.resumeFile = file;
    }
  }

  submitApplication() {
    if (this.applicant.name && this.applicant.qualification && this.applicant.resumeFile) {
      console.log('Applied to:', this.selectedJob);
      console.log('Applicant:', this.applicant);

      alert(`Application submitted for ${this.selectedJob.title}!`);
      this.cancelApplication();
    } else {
      alert('Please complete all fields and upload resume.');
    }
  }
}
