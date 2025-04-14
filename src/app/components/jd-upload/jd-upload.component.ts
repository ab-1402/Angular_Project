import { Component } from '@angular/core';

@Component({
  selector: 'app-jd-upload',
  templateUrl: './jd-upload.component.html',
  styleUrls: ['./jd-upload.component.css']
})
export class JdUploadComponent{
  // Toggle to show/hide the registration form
  showForm = false;

  // Job list (can be fetched from backend later)
  jobs = [
    {
      title: 'Frontend Developer',
      role: 'Angular Developer',
      qualifications: 'B.Tech in CS/IT',
      description: 'Build responsive UI using Angular.',
      experience: 2
    },
    {
      title: 'Backend Developer',
      role: 'Node.js Developer',
      qualifications: 'B.E in Computer Science',
      description: 'Develop REST APIs using Node.js and Express.',
      experience: 3
    }
  ];

  // New job form model
  newJob = {
    title: '',
    role: '',
    qualifications: '',
    description: '',
    experience: 0
  };

  // Method to register and add a new job
  registerJob() {
    const { title, role, qualifications, description, experience } = this.newJob;

    if (title && role && qualifications && description && experience > 0) {
      this.jobs.push({ ...this.newJob });

      // Reset the form
      this.newJob = {
        title: '',
        role: '',
        qualifications: '',
        description: '',
        experience: 0
      };

      this.showForm = false;
    }
  }
}
