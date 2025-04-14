import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userRole: 'hr' | 'applicant' | null = null;

  selectRole(role: 'hr' | 'applicant') {
    this.userRole = role;
    // Optional: Navigate to dashboard or home
  }

  logout() {
    this.userRole = null;
  }
}
