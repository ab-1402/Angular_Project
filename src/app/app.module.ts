import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


// Import Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';


import { JdUploadComponent } from './components/jd-upload/jd-upload.component';
import { ResumeUploadComponent } from './components/resume-upload/resume-upload.component';
import { CandidateMatchingComponent } from './components/candidate-matching/candidate-matching.component';
import { InterviewSchedulerComponent } from './components/interview-scheduler/interview-scheduler.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    JdUploadComponent,
    ResumeUploadComponent,
    CandidateMatchingComponent,
    InterviewSchedulerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,           // Required for [(ngModel)]
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,     // Fixes 'mat-form-field' issue
    MatSelectModule,        // Fixes 'mat-select' issue
    MatInputModule,         // Fixes 'matInput' issue
    MatDatepickerModule,    // Fixes 'mat-datepicker' issue
    MatNativeDateModule ,
    MatTableModule      // Enables date selection functionality
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
