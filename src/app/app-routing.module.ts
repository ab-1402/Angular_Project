import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JdUploadComponent } from './components/jd-upload/jd-upload.component';
import { ResumeUploadComponent } from './components/resume-upload/resume-upload.component';
import {CandidateMatchingComponent} from './components/candidate-matching/candidate-matching.component';
import { InterviewSchedulerComponent } from './components/interview-scheduler/interview-scheduler.component';

const routes: Routes = [
  { path: 'jd-upload', component: JdUploadComponent },
  { path: 'resume-upload', component: ResumeUploadComponent },
  { path: 'candidate-matching', component: CandidateMatchingComponent },
  { path: 'interview-scheduler', component: InterviewSchedulerComponent },
  { path: '', redirectTo: '/jd-upload', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
